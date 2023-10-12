import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjunmmempiberlpsjvaj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdW5tbWVtcGliZXJscHNqdmFqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTY0NzI2MiwiZXhwIjoyMDExMjIzMjYyfQ.CeBNkzV4JHOJmKEze7yji6jZTIJZqZKMVVWUMX_C2a8'
const supabase =  createClient(supabaseUrl, supabaseKey);

export default supabase;