export type Project = {
  title: string;
  description: string;
  tags: string[];
  // Optional link to live demo
  demoUrl?: string;
  // Optional link to source repository
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and why it exists. Replace this with real details about something you've built.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Another placeholder project. Describe the problem it solves, the stack, and anything you're proud of here.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Currently building this one. Use this card for work in progress and update it as it takes shape.",
    tags: ["Python", "FastAPI"],
    demoUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "One more placeholder so the carousel has something to cycle through. Add or remove entries freely.",
    tags: ["Rust", "WebAssembly"],
  },
];
