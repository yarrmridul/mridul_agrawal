export default function MoodaleAgencyPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* BACK BUTTON */}
        <div className="mb-8">
          <a
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            ← Back to Projects
          </a>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          🧩 Moodale – Digital Marketing & Strategy Agency
        </h1>

        {/* PROBLEM STATEMENT */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Problem Statement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I wanted to be financially independent while doing the work I
            genuinely enjoyed.
          </p>
        </div>

        {/* PROCESS */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Process</h2>
          <p className="text-gray-600 leading-relaxed">
            I never planned to build an agency — it started with small freelance
            projects and side gigs for local clients. Over time, those puzzle
            pieces fit together and evolved into Moodale, a full-service digital
            marketing and strategy agency. Through Moodale, I got the chance to
            work with hundreds of clients and lead a talented team, turning
            everyday challenges into learning opportunities. It became my
            real-world MBA, teaching me leadership, problem-solving, and how to
            scale ideas into systems.
          </p>
        </div>

        {/* REFLECTION */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Reflection (What I Learned)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Moodale taught me end-to-end ownership — how to combine creativity,
            strategy, and structure to build something meaningful from scratch.
          </p>
        </div>
      </div>
    </section>
  );
}
