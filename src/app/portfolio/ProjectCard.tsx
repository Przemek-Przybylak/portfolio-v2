import { Project } from "@/types/projects";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col border p-4 rounded-xl shadow bg-[var(--color-light)]">
      {project.imageUrl && (
        <div className=" h-full mb-4 w-full aspect-video relative rounded-lg overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h2 className="text-xl font-bold mb-2">{project.name}</h2>

      <p className="text-gray-700">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-2 items-space-between">
        {project.technologies?.map((tech) => (
          <span
            key={tech}
            className="bg-[var(--color-muted)] px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 ">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gradient-green-end)] hover:text-[var(--color-accent)] underline cursor-pointer"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gradient-green-end)] hover:text-[var(--color-accent)] underline cursor-pointer"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
