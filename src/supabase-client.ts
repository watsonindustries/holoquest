import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xywgwitzwfoqknoctrmj.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5d2d3aXR6d2ZvcWtub2N0cm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMTE1ODksImV4cCI6MjAzMTc4NzU4OX0.-bQT8up9g6s8gSbaC6p-zdDEm9Gy5vBB9MRMJCo9efk';

export const supabase = createClient(supabaseUrl, supabaseKey);
