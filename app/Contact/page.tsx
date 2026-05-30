export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-zinc-300 leading-7 mb-6">
          We’d love to hear your feedback, suggestions, or report any issues related to Viral Hook Engine.
          Your input helps us improve the tool for creators and marketers worldwide.
        </p>

        {/* EMAIL CONTACT */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Email Support
          </h2>

          <p className="text-zinc-300 mb-2">
            For general inquiries, support, or business questions:
          </p>

          <p className="text-blue-400 font-medium">
            support.viralhookengine@gmail.com
          </p>

          <p className="text-zinc-500 text-sm mt-3">
            We typically respond within 24–48 hours.
          </p>
        </div>

        {/* PURPOSE SECTION */}
        <h2 className="text-2xl font-semibold mb-3">
          What you can contact us for
        </h2>

        <ul className="list-disc pl-5 text-zinc-300 space-y-2 mb-8">
          <li>Bug reports or technical issues</li>
          <li>Feature requests</li>
          <li>Business or partnership inquiries</li>
          <li>Feedback to improve the tool</li>
        </ul>

        {/* DISCLAIMER (IMPORTANT FOR ADSENSE) */}
        <div className="border-t border-zinc-800 pt-6 text-zinc-500 text-sm">
          <p>
            Viral Hook Engine is a free AI-based content generation tool built for creators.
            We do not guarantee specific results from generated content.
          </p>

          <p className="mt-2">
            Last updated: {new Date().toDateString()}
          </p>
        </div>

      </div>
    </main>
  );
}