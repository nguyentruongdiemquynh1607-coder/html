import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mxupunfwioszdyffsjaz.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dXB1bmZ3aW9zemR5ZmZzamF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjUyNTUsImV4cCI6MjA3NzMwMTI1NX0.NNjza8BhZPlJOrbcd2f464aFk9l3vUcx7CoxC0uFL_I";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
