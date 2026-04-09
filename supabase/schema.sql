-- AthleteForge v1 schema
create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  created_at timestamptz default now(),
  sport text check (sport in ('basketball', 'football')),
  position text,
  subscription_tier text default 'free' check (subscription_tier in ('free', 'pro', 'annual', 'coach'))
);

create table if not exists public.athlete_profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  vertical_jump_cm numeric,
  sprint_40m_seconds numeric,
  agility_rating int check (agility_rating between 1 and 10),
  flexibility_rating int check (flexibility_rating between 1 and 10),
  sport_goal text[]
);

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  pillar text not null check (pillar in ('explosive_power', 'speed', 'agility', 'endurance', 'strength', 'mobility')),
  sport_tags text[] not null default '{}',
  equipment_needed text[] not null default '{}',
  video_url text not null,
  thumbnail_url text not null,
  sets int not null check (sets > 0),
  reps text not null,
  rest_seconds int not null check (rest_seconds >= 0),
  coaching_cues text[] not null default '{}',
  common_mistakes text[] not null default '{}',
  difficulty_level text not null check (difficulty_level in ('beginner', 'intermediate', 'advanced'))
);

create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  sport text not null,
  pillar_focus text not null,
  duration_weeks int not null,
  difficulty text not null,
  description text not null
);

create table if not exists public.program_workouts (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  week_number int not null,
  day_number int not null,
  workout_name text not null,
  exercises_json jsonb not null default '[]'::jsonb
);

create table if not exists public.workout_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  program_workout_id uuid references public.program_workouts(id) on delete set null,
  completed_at timestamptz default now(),
  exercises_completed_json jsonb not null default '[]'::jsonb,
  rpe_rating int check (rpe_rating between 1 and 10),
  notes text
);

create table if not exists public.performance_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  pillar text not null check (pillar in ('explosive_power', 'speed', 'agility', 'endurance', 'strength', 'mobility')),
  metric_name text not null,
  value numeric not null,
  unit text not null,
  recorded_at timestamptz default now()
);

-- Keep public.users synchronized with new auth users.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.users (id, email, created_at, subscription_tier)
  values (new.id, new.email, now(), 'free')
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.users enable row level security;
alter table public.athlete_profiles enable row level security;
alter table public.exercises enable row level security;
alter table public.programs enable row level security;
alter table public.program_workouts enable row level security;
alter table public.workout_logs enable row level security;
alter table public.performance_records enable row level security;

create policy "users_select_own" on public.users
for select using (auth.uid() = id);
create policy "users_update_own" on public.users
for update using (auth.uid() = id);
create policy "users_insert_own" on public.users
for insert with check (auth.uid() = id);

create policy "athlete_profiles_crud_own" on public.athlete_profiles
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "workout_logs_crud_own" on public.workout_logs
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "performance_records_crud_own" on public.performance_records
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "exercises_read_all" on public.exercises
for select using (true);
create policy "programs_read_all" on public.programs
for select using (true);
create policy "program_workouts_read_all" on public.program_workouts
for select using (true);
