export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          About Viral Hook Engine
        </h1>

        <p className="text-zinc-300 leading-7 mb-6">
          Viral Hook Engine is an AI-powered tool designed to help content creators,
          marketers, and social media users generate high-performing hooks and short-form video scripts.
        </p>

        <p className="text-zinc-300 leading-7 mb-6">
          The idea behind this tool came from a simple problem: most creators struggle with
          grabbing attention in the first few seconds of their content. Hooks decide whether
          a viewer stays or scrolls away — and this tool is built to solve that problem.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why I built this tool
        </h2>

        <p className="text-zinc-300 leading-7 mb-6">
          As short-form content platforms like YouTube Shorts, Instagram Reels, and TikTok grew,
          I noticed that creators spend more time thinking of ideas than actually creating content.
          Viral Hook Engine was built to reduce that friction and speed up the creative process.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          What it does
        </h2>

        <ul className="list-disc pl-5 text-zinc-300 space-y-2">
          <li>Generates viral hooks for videos</li>
          <li>Creates short-form content scripts</li>
          <li>Supports multiple platforms like YouTube, TikTok, and Instagram</li>
          <li>Helps improve engagement and content performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Who it is for
        </h2>

        <p className="text-zinc-300 leading-7 mb-6">
          This tool is built for YouTubers, Instagram creators, TikTok influencers,
          digital marketers, freelancers, and anyone trying to grow their online presence
          through content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Our goal
        </h2>

        <p className="text-zinc-300 leading-7 mb-6">
          The goal is simple — make content creation faster, easier, and more effective
          using AI. We believe great ideas should not be blocked by lack of inspiration.
        </p>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-zinc-500 text-sm">
          <p>
            Last updated: {new Date().toDateString()}
          </p>
        </div>

      </div>
    </main>
  );
}