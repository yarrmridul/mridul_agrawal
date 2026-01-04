export default function QRCodeGeneratorPage() {
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
          🔗 QR Code Generator Web Tool
        </h1>

        {/* PROBLEM STATEMENT */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Clients needed reliable, custom QR codes that never expired.

          </p>
        </div>

        {/* PROCESS */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Process / Tools Used
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed a lightweight web application that allows users to
            generate branded, trackable QR codes instantly.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
            <li>Frontend built using HTML and JavaScript</li>
            <li>QR generation powered by QRCode.js</li>
            <li>Firebase used for data storage and tracking</li>
          </ul>
        </div>

        {/* OUTCOME */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Outcome Metrics
          </h2>
          <p className="text-gray-700 leading-relaxed">
           multiple qr codes created | used across multiple client campaigns.
          </p>
        </div>

        {/* SCREENSHOTS */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Screenshots / Mockups
          </h2>

          <div className="h-48 rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            QR Code Preview / Tool Interface
          </div>
        </div>

        {/* REFLECTION */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Reflection
          </h2>
          <p className="text-gray-700 leading-relaxed">
           Tiny tools can create massive convenience when built right.
          </p>
        </div>

      </div>
    </section>
  );
}
