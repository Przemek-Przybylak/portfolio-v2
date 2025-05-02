import { Project } from "@/types/projects";

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    "https://api.github.com/users/Przemek-Przybylak/repos"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  return data;
}
