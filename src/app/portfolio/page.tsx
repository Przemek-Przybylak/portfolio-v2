import { getProjects } from "./getProject";
import LoadingAnimation from "./LoadingAnimation";
import ProjectCard from "./ProjectCard";

export default async function PortfolioPage() {
  const projects = await getProjects();
  return (
    <LoadingAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </LoadingAnimation>
  );
}
