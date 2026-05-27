import { SITE, EXPERIENCES, SOCIALS } from "./constants";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

const icons = {
  github: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const Home = () => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    {/* Header */}
    <header className="flex items-center px-6 sm:px-10 py-6 animate-fade-in">
      <span className="text-3xl" aria-hidden>
        {SITE.logo}
      </span>
    </header>

    {/* Hero */}
    <main className="flex-1 px-6 sm:px-10">
      <p
        className="text-neutral-300 text-lg mt-8 sm:mt-16 animate-fade-up"
        style={{ animationDelay: "0.15s" }}
      >
        {SITE.name}
      </p>
      <h1
        className="text-[12vw] sm:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter mt-4 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        Frontend
        <br />
        Engineer
      </h1>

      {/* Experience */}
      <section
        className="mt-40 sm:mt-56 mb-24 animate-fade-up"
        style={{ animationDelay: "0.55s" }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 mb-10">
          Experience
        </h2>
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
            >
              <span className="text-sm text-neutral-600 whitespace-nowrap tabular-nums min-w-[180px]">
                {exp.period}
              </span>
              <div>
                <p className="text-lg text-neutral-200">{exp.role}</p>
                <p className="text-neutral-500">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer
      className="px-6 sm:px-10 py-8 border-t border-neutral-900 flex items-end justify-between gap-4 animate-fade-up"
      style={{ animationDelay: "0.7s" }}
    >
      <SpotifyNowPlaying />
      <nav className="flex items-center gap-5 shrink-0">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-neutral-600 hover:text-neutral-300 transition-colors"
          >
            {icons[s.icon]}
          </a>
        ))}
      </nav>
    </footer>
  </div>
);

export default Home;
