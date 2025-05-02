export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
  imageUrl?: string; // jeśli kiedyś dodasz
  featured?: boolean; // np. do sortowania
};
