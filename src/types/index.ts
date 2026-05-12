export interface SiteSettings {
  id: string;
  site_title: string;
  owner_name: string;
  hero_role: string;
  hero_status: string;
  hero_desc_id: string | null;
  hero_desc_en: string | null;
  footer_desc_id: string | null;
  footer_desc_en: string | null;
  social_github: string | null;
  social_gitlab: string | null;
  social_instagram: string | null;
  social_linkedin: string | null;
  social_email: string | null;
  updated_at: string;
}