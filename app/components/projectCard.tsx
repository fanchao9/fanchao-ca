import type { Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-left">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {(project.demoUrl || project.repoUrl) && (
        <div className="mt-8 flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
            >
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
