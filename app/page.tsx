export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-200 text-slate-800 font-sans">
      <header className="py-16 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-500">DevOps</h1>
        <p className="mt-4 text-lg text-slate-600">
          Bridging Development and Operations through Automation & Collaboration
        </p>
        <span className="mt-3 inline-block rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
          Live CI/CD Demo
        </span>
      </header>

      <section className="mx-auto w-11/12 max-w-5xl py-5 space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            What is DevOps?
          </h2>
          <p>
            DevOps is a modern software development approach that combines
            development and operations teams to improve collaboration, automate
            workflows, and deliver high-quality software faster.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            Core Principles
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Continuous Integration (CI)</li>
            <li>Continuous Delivery (CD)</li>
            <li>Automation-first mindset</li>
            <li>Collaboration & shared responsibility</li>
            <li>Monitoring and feedback</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            DevOps Lifecycle
          </h2>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              ["Plan", "Requirements"],
              ["Code", "Development"],
              ["Build", "Compile"],
              ["Test", "QA"],
              ["Release", "Ready"],
              ["Deploy", "Production"],
              ["Monitor", "Feedback"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center"
              >
                {title}
                <span className="block text-sm text-slate-500">{subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            Tools Used
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Git & GitHub</li>
            <li>GitHub Actions (CI/CD)</li>
            <li>Docker (Containerization)</li>
            <li>Kubernetes (Orchestration)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            Live Demo Explanation
          </h2>
          <p>
            This website is automatically deployed using GitHub Pages. Every
            time code is pushed to the repository, a CI/CD pipeline runs to
            build and deploy the application without manual intervention.
          </p>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        © 2026 DevOps Demo | Built for Assignment Presentation
      </footer>
    </main>
  );
}
