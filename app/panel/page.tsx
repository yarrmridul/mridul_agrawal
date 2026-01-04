export default function MoodaleOperationsPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-3xl mx-auto">

        {/* BACK BUTTON */}
        <div className="mb-8">
          <a
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to Projects
          </a>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          🧠 Moodale Operations Panel – Admin & Employee Backend System
        </h1>

        {/* PROBLEM STATEMENT */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To make Moodale’s internal operations more formal, transparent, and
            scalable, we decided to move from Google Sheets-based systems to a
            dedicated backend panel for structured process management.
          </p>
        </div>

        {/* PROCESS */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Process / Tools Used
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developing a backend operations panel featuring role-based access,
            task logs, workflow management, and leave tracking to streamline
            day-to-day operations and performance monitoring.
          </p>
        </div>

        {/* STATUS */}
        <div className="mt-10">
          <span className="inline-block rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1">
            🚧 Status: Currently in progress
          </span>
        </div>

      </div>
    </section>
  );
}
