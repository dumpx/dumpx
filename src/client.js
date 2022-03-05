import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    "https://teeatpuvnkmpvhnjyito.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZWF0cHV2bmttcHZobmp5aXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY0ODk1ODAsImV4cCI6MTk2MjA2NTU4MH0.nNeP8YP3zdMQKjmasX5sv79VgOVwmbY7hDuew0rGJUk"
)