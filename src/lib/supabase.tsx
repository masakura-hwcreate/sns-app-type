import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseApiKey = process.env.REACT_APP_SUPABASE_API;

if (!supabaseUrl || !supabaseApiKey) {
    throw new Error("Supabaseの環境変数が設定されていません。");
}

export const supabase = createClient(
    supabaseUrl, 
    supabaseApiKey
);
