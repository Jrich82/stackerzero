"use client";

import { useState, useEffect } from "react";

const QDAY = new Date("2029-01-01T00:00:00Z").getTime();
const GENESIS = new Date("2009-01-03T18:15:05Z").getTime();

const milestones = [
  { year: 2009, label: "Bitcoin Genesis", date: "Jan 3 2009", color: "#F7931A" },
  { year: 2025, label: "NIST PQC Finalized", date: "Aug 2024", color: "#60a5fa" },
  { year: 2026, label: "BIP360 Testnet", date: "Mar 20 2026", color: "#22c55e" },
  { year: 2029, label: "Q-Day Estimate", date: "Jan 1 2029", color: "#ef4444" },
];

const qdayFacts = [
  "A cryptographically relevant quantum computer (CRQC) could run Shor's algorithm against Bitcoin's elliptic curve cryptography.",
  "Any Bitcoin address that has ever spent (and thus exposed its public key) becomes instantly drainable.",
  "Estimates vary from 2029–2035. Google's 2024 Willow chip is a significant milestone.",
  "~20% of all Bitcoin supply sits in addresses with exposed public keys — including Satoshi's coins.",
  "Migration to quantum-safe addresses (BIP360 / bc1z) before Q-Day is the only protection.",
];

function getTimeLeft() {
  const now = Date.now();
  const diff = QDAY - now;
  if (diff <= 0) return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const afterYears = diff - years * 1000 * 60 * 60 * 24 * 365.25;
  const days = Math.floor(afterYears / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { years, days, hours, minutes, seconds };
}

function getProgress() {
  const now = Date.now();
  const total = QDAY - GENESIS;
  const elapsed = now - GENESIS;
  return Math.min(100, Math.max(0, (elapsed / total) * 100));
}

export default function QuantumCountdown() {
  const [time, setTime] = useState(getTimeLeft());
  const [progress, setProgress] = useState(getProgress());
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
      setProgress(getProgress());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "YEARS", value: time.years },
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <section id="countdown" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-red-500 border border-red-500/30 px-3 py-1 rounded-full animate-pulse">
          ⚠ QUANTUM THREAT · ACTIVE COUNTDOWN
        </span>
        <h2 className="text-4xl font-black mt-4 mb-4">
          Time Until <span className="text-red-500">Q-Day</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Google estimates a cryptographically relevant quantum computer arrives by 2029.
          Your Bitcoin needs to migrate before then.
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-[#111] border border-red-900/50 rounded-2xl p-8 mb-8 text-center" style={{ boxShadow: "0 0 40px rgba(239,68,68,0.1)" }}>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <div
                className="w-20 h-20 md:w-24 md:h-24 bg-[#0a0a0a] border border-red-900/60 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-black text-red-400 font-mono tabular-nums"
                style={{ boxShadow: "inset 0 0 20px rgba(239,68,68,0.05)" }}
              >
                {String(u.value).padStart(2, "0")}
              </div>
              <span className="text-xs text-gray-600 font-mono mt-2">{u.label}</span>
            </div>
          ))}
        </div>
        <p className="text-red-500/70 text-sm font-mono animate-pulse">
          Until estimated Q-Day — January 1, 2029
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 mb-8">
        <div className="flex justify-between text-xs text-gray-500 font-mono mb-3">
          <span>Bitcoin Genesis · Jan 3 2009</span>
          <span className="text-red-500">Q-Day · Jan 1 2029</span>
        </div>
        <div className="relative h-4 bg-gray-900 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #F7931A, #ef4444)",
            }}
          />
          {/* Now marker */}
          <div
            className="absolute top-0 h-full w-0.5 bg-white"
            style={{ left: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span className="text-[#F7931A]">16 years elapsed</span>
          <span className="text-gray-500">{progress.toFixed(1)}% of safe window used</span>
          <span className="text-red-500">{(100 - progress).toFixed(1)}% remaining</span>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 mb-8">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Milestones</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800" />
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-4 pl-10 relative">
                <div
                  className="absolute left-2.5 w-3 h-3 rounded-full border-2 border-[#0a0a0a] mt-1"
                  style={{ background: m.color, boxShadow: `0 0 8px ${m.color}80` }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm" style={{ color: m.color }}>{m.year}</span>
                    <span className="text-xs text-gray-600 font-mono">{m.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Q-Day section */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-900/50 transition-colors text-left"
        >
          <span className="font-bold text-red-400">⚠ What happens at Q-Day?</span>
          <span className="text-gray-500 text-sm">{expanded ? "▲ collapse" : "▼ expand"}</span>
        </button>
        {expanded && (
          <div className="px-6 pb-6 border-t border-gray-800 pt-4 space-y-3">
            {qdayFacts.map((fact, i) => (
              <div key={i} className="flex gap-3 text-sm text-gray-400">
                <span className="text-red-500 mt-0.5 shrink-0">→</span>
                <span>{fact}</span>
              </div>
            ))}
            <div className="mt-4 p-4 bg-red-950/20 border border-red-900/40 rounded-xl">
              <p className="text-sm text-red-400 font-semibold">The solution: Migrate to BIP360 bc1z addresses before Q-Day arrives.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
