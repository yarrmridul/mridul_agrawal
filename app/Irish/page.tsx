export default function IrishGreenCaseStudy() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* TOP BACK BUTTON */}
        <div className="mb-8">
          <a
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to Projects
          </a>
        </div>

        {/* HERO */}
        <header className="mb-7">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            ☕ Irish Green – Youth Footfall Growth Campaign
          </h1>
        </header>

        {/* PROBLEM */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Irish Green Café wanted to increase youth footfall and create
            authentic, high-engagement social media content — without spending
            heavily on professional shoots or influencer marketing.
          </p>
        </section>

        {/* PROCESS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Process & Tools Used
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Conceptualized and launched <strong>“Click, Eat & Win”</strong>, a
              14-day gamified photography contest
            </li>
            <li>
              Designed strategic prize tiers — <strong>₹5,000</strong>,
              <strong> ₹3,000</strong>, and <strong>₹1,000</strong>, each
              bundled with a Netflix subscription
            </li>
            <li>
              Ensured prizes attracted nearby youth while discouraging non-local
              participation
            </li>
            <li>
              Designed all promotional creatives and managed contest entries
            </li>
            <li>
              Tracked participation and engagement using Google Forms and social
              media analytics
            </li>
          </ul>
        </section>

        {/* BENEFITS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Collected participant data for future remarketing via Google Forms
            </li>
            <li>
              Generated authentic photo and video content, saving
              <strong> ₹15–20K</strong> in shoot costs
            </li>
            <li>
              Strengthened local community engagement and café brand recall
            </li>
          </ul>
        </section>

        {/* OUTCOME */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Outcome Metrics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">2×</p>
              <p className="text-sm text-gray-600 mt-1">
                Increase in youth visitors
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">High</p>
              <p className="text-sm text-gray-600 mt-1">
                Growth in organic online engagement
              </p>
            </div>
          </div>
        </section>

        
        {/* REFLECTION */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Reflection (What I Learned)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Effective marketing = smart psychology, not big budgets.
          </p>
        </section>
      </div>
    </section>
  );
}
