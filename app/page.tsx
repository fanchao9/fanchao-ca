import Header from "./components/header";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Header />

      <main className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        {/* Hero */}
        <section className="flex min-h-screen flex-col justify-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Fanchao Lin
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Placeholder bio goes here. A sentence or two about who you are, what
            you build, and what you&apos;re interested in. Swap this out with
            your own words whenever you&apos;re ready.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Things I&apos;m building and have built.
          </p>
          <div className="mt-10">
            <Carousel />
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Stats
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Placeholder for stats &mdash; GitHub activity, languages, or whatever
            you want to highlight here.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Get in touch. Drop your links in below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            <li>
              <a
                href="#"
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} Fanchao Lin
      </footer>
    </div>
  );
}
