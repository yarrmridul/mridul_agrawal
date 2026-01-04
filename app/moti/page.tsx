export default function MotiMotorsCaseStudy() {
  return (
    
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <header className="mb-7">
          {/* TOP BACK BUTTON */}
        <div className="mb-8">
          <a
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to Projects
          </a>
        </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            🚗 Moti Motors – Profit-Sharing & Service Transparency System
          </h1>
         
        </header>

        {/* PROBLEM */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Moti Motors relied on third-party garages for after-sales services,
            but these partners frequently reported inconsistent or unclear
            profit figures. The absence of transparent, real-time tracking led
            to disputes, delays in reconciliation, and loss of trust between
            the company and its vendors.
          </p>
        </section>

        {/* PROCESS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Process & Tools Used
          </h2>
<p className="text-sm text-gray-600 mt-1">
               Developed a web application to digitize service entries in real time, assigning each vehicle a
unique ID linked to its job details and financial data. This enabled instant visibility into every
transaction.

              </p>
              <p className="text-sm text-gray-600 mt-4">
                Conducted a two-day on-ground training session for garage staff to ensure smooth adoption.
Allowed Moti Motors staff to directly visit any partner garage and verify records instantly through
the system
              </p>
         
        </section>

        {/* OUTCOME */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Outcome Metrics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">0%</p>
              <p className="text-sm text-gray-600 mt-1">
                Data mismatch after launch
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">Hours</p>
              <p className="text-sm text-gray-600 mt-1">
                Saved weekly on manual reconciliation
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
           Designing for non-technical users sharpened my empathy in UX.

          </p>
        </section>

       

      </div>
    </section>
  );
}
