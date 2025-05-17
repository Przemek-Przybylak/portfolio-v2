import { Project } from "@/types/projects";

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
  {
    name: "To-Do-List-React",
    imageUrl: "/images/To-Do-List-React.png",
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
    (a: Project, b: Project) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  const top6 = sorted.slice(0, 6);

  const readyProjects: Project[] = top6.map(
    ({
      id,
      name,
      description,
      technologies,
      html_url,
      updated_at,
    }: Project) => {
      const imageMatch = imageMap.find((img) => img.name === name);
      return {
        id: id,
        name: name,
        description: description || "No description available",
        technologies: technologies || [],
        repoUrl: html_url,
        demoUrl: `https://przemek-przybylak.github.io/${name}/`,
        updated_at: updated_at,
        imageUrl: imageMatch ? imageMatch.imageUrl : undefined,
        featured: true,
      };
    }
  );
  return readyProjects;
}
