import { createClient } from '@supabase/supabase-js';
const URL = 'https://bwbtpreqdhzhnjvieutq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3YnRwcmVxZGh6aG5qdmlldXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNTY5NDksImV4cCI6MjA4MTYzMjk0OX0.j2tyWjqYNZ7xLlX1m4_rvBPfkLwBUMd2ayXTcVIw6JQ';
const supabase = createClient(URL, API_KEY);

export {supabase}
