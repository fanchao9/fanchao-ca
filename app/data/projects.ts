export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "NBA Higher or Lower",
    description:
      "A guessing game where you decide whether one NBA player's stat is higher or lower than another's. Currently in development.",
    tags: ["Next.js", "React", "Tailwind"],
    demoUrl: "https://nba-higher-or-lower.vercel.app",
    repoUrl: "https://github.com/fanchao9/nba-higher-or-lower",
    image: "/projects/nba-higher-or-lower.png",
    comingSoon: true,
  },

];
