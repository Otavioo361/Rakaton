import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sknlnaemtxsgtbdipfel.supabase.co/";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbmxuYWVtdHhzZ3RiZGlwZmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxOTkxMjAsImV4cCI6MjAzOTc3NTEyMH0.0PHEE8gZROm4tjWRqCtp4-n2Z4KRfWdIzvHxf_-ZGjs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
})
