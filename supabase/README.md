# Supabase Setup

1. Create a Supabase project.
2. Enable Email auth and Google OAuth in Authentication > Providers.
3. Set app redirect URI to `athleteforge://auth/callback`.
4. Run `schema.sql` in the SQL editor.
5. Add project credentials to `.env`.

## Notes
- RLS policies are enabled for all tables in `schema.sql`.
- Public tables (`exercises`, `programs`, `program_workouts`) are read-only for authenticated users.
- User-owned tables are scoped to `auth.uid()`.
