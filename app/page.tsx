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
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            Hi, I'm a 3rd year university student interested in various aspects of programming.
            I've worked on a bunch of front-end web development and am currently focusing on AI, 
            game development, and backend infrastructure.
           </p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <div className="mt-10">
            <Carousel />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Get in touch.
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
