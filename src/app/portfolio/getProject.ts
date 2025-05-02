import { Project } from "@/types/projects";
import { u } from "framer-motion/client";
import { features } from "process";

const imageMap: { name: string; imageUrl: string }[] = [
  {
    name: "portfolio-v2",
    imageUrl: "/images/portfolio-v2.png",
  },
  {
    name: "movies-browser",
    imageUrl: "/images/movies-browser.png",
  },
  {
    name: "personal--homepage",
    imageUrl: "/images/personal--homepage.png",
  },
  {
    name: "store--typescript",
    imageUrl: "/images/store--typescript.png",
  },
  {
    name: "fireebase-authentication",
    imageUrl: "/images/fireebase-authentication.png",
  },
  {
    name: "quiz",
    imageUrl: "/images/quiz.png",
  },
];

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    "https://api.github.com/users/Przemek-Przybylak/repos"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();

  const sorted = data.sort(
    (a: any, b: any) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  const top6 = sorted.slice(0, 6);

  const readyProjects: Project[] = top6.map((repo: any) => {
    const imageMatch = imageMap.find((img) => img.name === repo.name);
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description available",
      technologies: repo.topics || [],
      repoUrl: repo.html_url,
      demoUrl: `https://przemek-przybylak.github.io/${repo.name}/`,
      updated_at: repo.updated_at,
      imageUrl: imageMatch ? imageMatch.imageUrl : undefined,
      featured: true, // Możesz ustawić na true lub false w zależności od potrzeb
    };
  });
  return readyProjects;
}
