export default function MoodaleCRMCasestudy() {
  return (
    
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      
      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <header className="mb-7">
           {/* TOP BACK BUTTON */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back 
          </a>
        </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Moodale Smart CRM on Google Sheets
          </h1>
         
        </header>

        {/* PROBLEM */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tracking projects, payments, client communication, and content calendars manually became
inefficient and error-prone. Assigning tasks and monitoring deadlines across campaigns often
led to confusion and missed timelines.

          </p>
        </section>

        {/* PROCESS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Process & Tools Used
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
           Built a Smart CRM using Google Sheets + Apps Script to streamline operations. By typing
simple commands like “Send” or “Assign”, tasks were auto-assigned to the right person, and
triggers handled reminders, approvals, and payment follow-ups seamlessly.
          </p>

         
        </section>

        {/* OUTCOME */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Outcome Metrics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">60%</p>
              <p className="text-sm text-gray-600 mt-1">
                Reduction in manual effort
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">100%</p>
              <p className="text-sm text-gray-600 mt-1">
                On-time task completion
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">0</p>
              <p className="text-sm text-gray-600 mt-1">
                Additional hires required
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
              CRM Sheet Snapshot
            </div>
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Apps Script Trigger Workflow
            </div>
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Email Automation Preview
            </div>
            <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Task Assignment View
            </div>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Reflection (What I Learned)
          </h2>
          <p className="text-gray-700 leading-relaxed">
           Innovation isn’t about complexity — it’s about solving recurring pain points with clarity
          </p>
        </section>

        

      </div>
    </section>
  );
}
