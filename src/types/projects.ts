export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  html_url: string;
  demoUrl: string;
  updated_at: string;
  created_at: string; // jeśli kiedyś dodasz
  imageUrl?: string; // jeśli kiedyś dodasz
  featured?: boolean; // np. do sortowania
};
