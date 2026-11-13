import Image from "next/image";
import type { Project } from "../data/projects";

function ProjectCard({ project }: { project: Project }) {
  const showDemo = project.demoUrl && !project.comingSoon;

  return (
    <article className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-left">
      {project.image && (
        <>
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 896px) 896px, 100vw"
            className="scale-110 object-cover opacity-50 blur-sm"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30"
          />
        </>
      )}

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          {project.comingSoon && (
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              Coming soon
            </span>
          )}
        </div>
        <p className="mt-4 text-sm leading-6 text-zinc-300">
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

      {(showDemo || project.repoUrl) && (
        <div className="relative mt-8 flex gap-3">
          {showDemo && (
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
