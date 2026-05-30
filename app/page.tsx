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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          platform,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setResult(data.error);
        return;
      }

      setResult(data.result);

      const updatedHistory = [
        data.result,
        ...history,
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );

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

      {/* TOP AD PLACEHOLDER */}
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

        <p className="text-zinc-400 text-center mb-10">
          Generate viral hooks, captions, and short-form scripts instantly using AI.
        </p>

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
    onVerify={(token) => {
      console.log("Success", token);
      setCaptchaToken(token);
    }}
    onError={() => {
      console.log("Turnstile Error");
    }}
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
  <div className="mt-8 bg-zinc-900/80 backdrop-blur-lg p-6 rounded-3xl border border-zinc-800 whitespace-pre-wrap shadow-2xl">

    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">
        Generated Content
      </h2>

      <div className="flex gap-2">
        <button
          onClick={copyToClipboard}
          className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl text-sm"
        >
          Copy
        </button>

        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "Viral Hook & Script Engine",
                text: result,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(result);
              alert("Content copied!");
            }
          }}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl text-sm"
        >
          Share
        </button>

        <button
          onClick={() => {
            const blob = new Blob([result], {
              type: "text/plain",
            });

            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "viral-script.txt";
            a.click();

            URL.revokeObjectURL(url);
          }}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm"
        >
          Download
        </button>
      </div>
    </div>

    <div className="text-zinc-300 leading-8">
      {result}
    </div>
  

  </div>
)}

        {/* HISTORY */}
        {history.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              Recent Generations
            </h2>

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

        {/* BOTTOM AD PLACEHOLDER */}
        <div className="mt-10 flex justify-center">
          <div className="w-[300px] h-[250px] bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500">
            Square Ad
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-zinc-500 text-sm space-x-4">
          <a href="/about" className="hover:text-white">
            About
          </a>

          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>

          <a href="/terms" className="hover:text-white">
            Terms
          </a>
        </footer>

      </div>
    </main>
  );
}