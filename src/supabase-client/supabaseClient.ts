import { createClient } from "@refinedev/supabase";

const supababeurl = import.meta.env.VITE_SUPABASE_URL;
const supabasekey = import.meta.env.VITE_SUPABASE_KEY;

export const supabaseClient = createClient(supababeurl, supabasekey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});