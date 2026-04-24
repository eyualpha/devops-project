export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 text-slate-800 font-sans">
      <header className="py-16 px-5 text-center">
        <h1 className="text-4xl font-bold text-sky-500 md:text-5xl">
          DevOps Project
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Bridging Development and Operations through Automation & Collaboration
        </p>
        <div className="mt-3 inline-block rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
          Live CI/CD Demo
        </div>
      </header>

      <div className="mx-auto w-11/12 max-w-5xl py-5">
        <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            What is DevOps?
          </h2>
          <p>
            DevOps is a modern software development approach that combines
            development and operations teams to improve collaboration, automate
            workflows, and deliver high-quality software faster.
          </p>
        </div>

        <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            Core Principles
          </h2>
          <ul className="list-disc pl-5">
            <li>Continuous Integration (CI)</li>
            <li>Continuous Delivery (CD)</li>
            <li>Automation-first mindset</li>
            <li>Collaboration & shared responsibility</li>
            <li>Monitoring and feedback</li>
          </ul>
        </div>

        <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            DevOps Lifecycle
          </h2>
          <div className="mt-5 flex flex-wrap justify-between gap-3">
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Plan
              <span className="block text-sm text-slate-500">Requirements</span>
            </div>
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Code
              <span className="block text-sm text-slate-500">Development</span>
            </div>
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Build
              <span className="block text-sm text-slate-500">Compile</span>
            </div>
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Test
              <span className="block text-sm text-slate-500">QA</span>
            </div>
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Release
              <span className="block text-sm text-slate-500">Ready</span>
            </div>
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Deploy
              <span className="block text-sm text-slate-500">Production</span>
            </div>
            <div className="min-w-[120px] flex-1 rounded-xl border border-indigo-200 bg-slate-100 p-4 text-center">
              Monitor
              <span className="block text-sm text-slate-500">Feedback</span>
            </div>
          </div>
        </div>

        <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            Tools Used
          </h2>
          <ul className="list-disc pl-5">
            <li>Git & GitHub</li>
            <li>GitHub Actions (CI/CD)</li>
            <li>Docker (Containerization)</li>
            <li>Kubernetes (Orchestration)</li>
          </ul>
        </div>

        <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <h2 className="mb-2 text-xl font-semibold text-sky-500">
            Live Demo Explanation
          </h2>
          <p>
            This website is automatically deployed using GitHub Pages. Every
            time code is pushed to the repository, a CI/CD pipeline runs to
            build and deploy the application without manual intervention.
          </p>
        </div>
      </div>

      <footer className="py-8 text-center text-sm text-slate-500">
        © 2026 DevOps Demo | Built for Assignment Presentation
      </footer>
    </div>
  );
}
