export default function SalesOutreachCaseStudy() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* TOP BACK BUTTON */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to Projects
          </a>
        </div>

        {/* HERO */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            💼 Sales & Outreach Training Program
          </h1>
        </header>

        {/* PROBLEM */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
           As the sole person handling sales at Moodale, I faced high lead volumes, rising drop-off rates,
and limited time to personally follow up on every potential client.

          </p>
        </section>

        {/* PROCESS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Process & Tools Used
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Introduced a lead classification system to prioritize outreach:

          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>High potential:</strong> Direct leads from referrals and
              website forms
            </li>
            <li>
              <strong>Medium potential:</strong> Warm leads from past
              interactions
            </li>
            <li>
              <strong>Low potential:</strong> Cold leads from raw data sources
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            I focused personally on high-potential leads, while my team handled
            medium and low-potential leads through WhatsApp outreach and
            structured follow-up campaigns.
          </p>

          <p className="text-gray-700 leading-relaxed">
            To scale further, I launched the{" "}
            <strong>
              “Free Digital Marketing Training + Earn While You Learn”
            </strong>{" "}
            program — strategically executed in tier-3 colleges to onboard
            students, train them in outreach fundamentals, and incentivize them
            for every successful conversion.
          </p>
        </section>

        {/* OUTCOME */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Outcome Metrics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">10×</p>
              <p className="text-sm text-gray-600 mt-1">
                Outreach scalability
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">15+</p>
              <p className="text-sm text-gray-600 mt-1">
                Trained contributors
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">↑</p>
              <p className="text-sm text-gray-600 mt-1">
                Consistent rise in conversions
              </p>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Screenshots / Mockups
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Training Program Poster
            </div>
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Lead Tracking Sheet
            </div>
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              WhatsApp Outreach Flow
            </div>
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Conversion Tracking View
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Reflection (What I Learned)
          </h2>
          <p className="text-gray-700 leading-relaxed">
           Scaling people is harder — and more rewarding — than scaling systems.

          </p>
        </section>

      </div>
    </section>
  );
}
