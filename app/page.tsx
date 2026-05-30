"use client";

import { useEffect, useState } from "react";
import Turnstile from "react-turnstile";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("YouTube Shorts");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    const savedHistory = localStorage.getItem("history");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const generateScript = async () => {
    try {
      if (!topic.trim()) {
        alert("Please enter a topic");
        return;
      }

      setLoading(true);
      setResult("");

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, platform }),
      });

      const data = await response.json();

      if (data.error) {
        setResult(data.error);
        return;
      }

      setResult(data.result);

      const updatedHistory = [data.result, ...history].slice(0, 5);

      setHistory(updatedHistory);
      localStorage.setItem("history", JSON.stringify(updatedHistory));

    } catch (error) {
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result);
    alert("Copied!");
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">

      {/* TOP AD */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="h-[90px] bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500">
          Ad Banner
        </div>
      </div>

      <div className="max-w-3xl mx-auto">

        {/* HERO */}
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Viral Hook & Script Engine
        </h1>

        <p className="text-zinc-400 text-center mb-6">
          Generate viral hooks, captions, and short-form video scripts instantly using AI.
        </p>

        {/* SEO CONTENT START */}
        <section className="text-zinc-300 space-y-6 mb-10">

          <h2 className="text-2xl font-bold">What is Viral Hook Engine?</h2>
          <p>
            Viral Hook Engine is an AI-powered tool designed for content creators, marketers,
            and social media users who want to create engaging short-form content.
            It helps generate viral hooks and scripts for platforms like YouTube Shorts,
            TikTok, and Instagram Reels.
          </p>

          <h2 className="text-2xl font-bold">How It Works</h2>
          <ol className="list-decimal pl-5">
            <li>Enter your video topic or niche</li>
            <li>Select your platform</li>
            <li>Click generate</li>
            <li>Get AI-powered viral hooks instantly</li>
          </ol>

          <h2 className="text-2xl font-bold">Why Use This Tool?</h2>
          <p>
            Strong hooks are essential for increasing engagement, watch time, and visibility.
            This tool helps you create attention-grabbing content that performs better
            on social media algorithms.
          </p>

          <h2 className="text-2xl font-bold">Who Should Use It?</h2>
          <ul className="list-disc pl-5">
            <li>YouTube creators</li>
            <li>Instagram influencers</li>
            <li>TikTok creators</li>
            <li>Digital marketers</li>
            <li>Freelancers</li>
          </ul>

          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

          <p><b>Is this tool free?</b> Yes, it is completely free to use.</p>
          <p><b>Do I need an account?</b> No login is required.</p>
          <p><b>Can I use it for monetized content?</b> Yes, you can use the generated content freely.</p>
          <p><b>Is the AI content unique?</b> Yes, each output is generated dynamically.</p>

        </section>
        {/* SEO CONTENT END */}

        {/* GENERATOR CARD */}
        <div className="bg-zinc-900/80 backdrop-blur-lg p-6 rounded-3xl border border-zinc-800 shadow-2xl">

          <input
            type="text"
            placeholder="Enter your video topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 mb-4 outline-none"
          />

          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 mb-4 outline-none"
          >
            <option>YouTube Shorts</option>
            <option>TikTok</option>
            <option>Instagram Reels</option>
          </select>

          <div className="mb-4 flex justify-center">
            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
              onVerify={(token) => setCaptchaToken(token)}
              onError={() => console.log("Turnstile Error")}
            />
          </div>

          <button
            onClick={generateScript}
            disabled={loading || !captchaToken}
            className="w-full bg-purple-600 hover:bg-purple-700 transition p-4 rounded-xl font-semibold"
          >
            {loading ? "Generating..." : "Generate Script"}
          </button>

        </div>

        {/* OUTPUT */}
        {result && (
          <div className="mt-8 bg-zinc-900/80 p-6 rounded-3xl border border-zinc-800 whitespace-pre-wrap shadow-2xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Generated Content</h2>
            </div>
            <div className="text-zinc-300 leading-8">{result}</div>
          </div>
        )}

        {/* HISTORY */}
        {history.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Recent Generations</h2>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-zinc-300 whitespace-pre-wrap"
                >
                  {item.substring(0, 300)}...
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-16 text-center text-zinc-500 text-sm space-x-4">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/Contact" className="hover:text-white">Contact Us</a>
        </footer>
        <section className="mt-12">
  <h2 className="text-2xl font-bold mb-4">
    Creator Resources
  </h2>

  <ul className="space-y-3">
    <li>
      <a
        href="/blog/viral-hooks-guide"
        className="text-blue-400 underline"
      >
        Complete Guide to Viral Hooks
      </a>
    </li>

    <li>
      <a
        href="/blog/social-media-growth-tips"
        className="text-blue-400 underline"
      >
        Social Media Growth Tips
      </a>
    </li>

    <li>
      <a
        href="/blog/content-strategy-2026"
        className="text-blue-400 underline"
      >
        Content Strategy for Creators
      </a>
    </li>
  </ul>
</section>

      </div>
    </main>
  );
}