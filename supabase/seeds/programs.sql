with upsert_programs as (
  insert into public.programs (name, sport, pillar_focus, duration_weeks, difficulty, description)
  values
    ('Basketball Explosiveness 8-Week','basketball','explosive_power,speed',8,'intermediate','Foundation to peak explosiveness with progressive overload'),
    ('Football Conditioning 8-Week','football','endurance,speed',8,'intermediate','Sport-specific intervals and tempo development'),
    ('Athlete Agility 6-Week','both','agility',6,'beginner-intermediate','Cone patterns to reactive COD progression'),
    ('Functional Strength Foundation 8-Week','both','strength,mobility',8,'beginner','Bodyweight-first athletic strength progression'),
    ('Vertical Jump Mastery 10-Week','basketball','explosive_power',10,'advanced','Sub-max to maximal plyometric progression'),
    ('All-Around Athlete 12-Week','both','all',12,'intermediate','Rotating blocks across all six pillars')
  on conflict (name) do update set
    sport = excluded.sport,
    pillar_focus = excluded.pillar_focus,
    duration_weeks = excluded.duration_weeks,
    difficulty = excluded.difficulty,
    description = excluded.description
  returning id, name, duration_weeks
),
program_days as (
  select id, name, generate_series(1, duration_weeks) as week_number
  from upsert_programs
),
program_day_rows as (
  select
    id as program_id,
    name as program_name,
    week_number,
    case
      when name = 'Football Conditioning 8-Week' then generate_series(1,4)
      when name = 'Vertical Jump Mastery 10-Week' then generate_series(1,4)
      when name = 'All-Around Athlete 12-Week' then generate_series(1,5)
      else generate_series(1,3)
    end as day_number
  from program_days
)
insert into public.program_workouts (program_id, week_number, day_number, workout_name, exercises_json)
select
  pdr.program_id,
  pdr.week_number,
  pdr.day_number,
  concat(pdr.program_name, ' W', pdr.week_number, 'D', pdr.day_number),
  case
    when pdr.program_name = 'Basketball Explosiveness 8-Week' then
      jsonb_build_array(
        jsonb_build_object('exercise_name','Box Jumps','sets',4,'reps','6','rest_seconds',75,'notes','Jump intent high'),
        jsonb_build_object('exercise_name','A-Skips','sets',4,'reps','20m','rest_seconds',45,'notes','Sprint mechanics'),
        jsonb_build_object('exercise_name','Falling Starts','sets',6,'reps','1','rest_seconds',60,'notes','Acceleration quality')
      )
    when pdr.program_name = 'Football Conditioning 8-Week' then
      jsonb_build_array(
        jsonb_build_object('exercise_name','Football Yo-Yo Intervals','sets',1,'reps','12 rounds','rest_seconds',0,'notes','Match conditioning'),
        jsonb_build_object('exercise_name','Tempo Runs','sets',1,'reps','20 minutes','rest_seconds',0,'notes','Aerobic support'),
        jsonb_build_object('exercise_name','Resisted Sled Sprints','sets',6,'reps','15m','rest_seconds',90,'notes','Acceleration under load')
      )
    when pdr.program_name = 'Athlete Agility 6-Week' then
      jsonb_build_array(
        jsonb_build_object('exercise_name','5-10-5 Shuttle Run','sets',5,'reps','1','rest_seconds',90,'notes','Clean cuts'),
        jsonb_build_object('exercise_name','Cone Weave','sets',4,'reps','25m','rest_seconds',75,'notes','Footwork pattern'),
        jsonb_build_object('exercise_name','Reactive Mirror Drill','sets',4,'reps','30 seconds','rest_seconds',75,'notes','Reaction focus')
      )
    when pdr.program_name = 'Functional Strength Foundation 8-Week' then
      jsonb_build_array(
        jsonb_build_object('exercise_name','Bulgarian Split Squat','sets',3,'reps','8 each','rest_seconds',90,'notes','Bodyweight-first'),
        jsonb_build_object('exercise_name','Hip Thrust','sets',3,'reps','10','rest_seconds',90,'notes','Glute strength'),
        jsonb_build_object('exercise_name','90-90 Hip Mobility','sets',3,'reps','8 each','rest_seconds',20,'notes','Recovery mobility')
      )
    when pdr.program_name = 'Vertical Jump Mastery 10-Week' then
      jsonb_build_array(
        jsonb_build_object('exercise_name',case when pdr.week_number >= 5 then 'Depth Jumps' else 'Broad Jumps' end,'sets',4,'reps','5','rest_seconds',90,'notes','Plyo progression'),
        jsonb_build_object('exercise_name','Banded Squat Jumps','sets',4,'reps','8','rest_seconds',60,'notes','Elastic output'),
        jsonb_build_object('exercise_name','Box Jumps','sets',4,'reps','6','rest_seconds',75,'notes','Jump transfer')
      )
    else
      jsonb_build_array(
        jsonb_build_object('exercise_name','Back Squat','sets',4,'reps','5','rest_seconds',120,'notes','Strength base'),
        jsonb_build_object('exercise_name','10m Sprint Drills','sets',6,'reps','1','rest_seconds',75,'notes','Speed block'),
        jsonb_build_object('exercise_name','Dynamic Warm-up Series','sets',1,'reps','5 minutes','rest_seconds',0,'notes','Warm-up or cooldown')
      )
  end
from program_day_rows pdr
on conflict do nothing;
