import { createClient } from '@/utils/supabase/server';
import { SiteSettings } from '@/types';

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const supabase = await createClient(); 
  
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .single();

  if (error) {
    console.error("Supabase Fetch Error (site_settings):", error.message);
    return null;
  }

  return data as SiteSettings;
}