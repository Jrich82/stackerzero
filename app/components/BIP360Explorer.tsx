"use client";

import { useState } from "react";

const addressFormats = [
  { name: "P2PK", desc: "Pay-to-Public-Key", example: "04a1b2c3...d4e5f6", status: "VULNERABLE", color: "#ef4444", bg: "#ef444410", year: "2009", detail: "Public key exposed directly on-chain. Shor's algorithm can derive the private key." },
  { name: "P2PKH", desc: "Pay-to-Public-Key-Hash", example: "1A1zP1eP...5yDfpbc", status: "AT RISK", color: "#f97316", bg: "#f9731610", year: "2010", detail: "Public key hidden until spend. Reused addresses expose the key — permanently at risk." },
  { name: "P2WPKH", desc: "Native SegWit (bc1q)", example: "bc1qar0s...erz9jfk", status: "AT RISK", color: "#eab308", bg: "#eab30810", year: "2017", detail: "Lower fees, same quantum vulnerability as P2PKH when spending. Avoid address reuse." },
  { name: "P2TR", desc: "Taproot (bc1p)", example: "bc1p5cyxn...dx9gtd8", status: "CAUTION", color: "#84cc16", bg: "#84cc1610", year: "2021", detail: "Best current option. Hides spending conditions. Still uses ECDSA — not quantum-proof." },
  { name: "P2MR / BIP360", desc: "Pay-to-Merkle-Root (bc1z)", example: "bc1z7v9qj...km3r8wd", status: "QUANTUM SAFE", color: "#22c55e", bg: "#22c55e15", year: "2026+", detail: "Commits to a Merkle tree of quantum-resistant spending conditions. NIST PQC algorithms." },
];

const stats = [
  { label: "Testnet Miners", value: "50+", icon: "⛏" },
  { label: "Blocks Mined", value: "100,000+", icon: "🧱" },
  { label: "Contributors", value: "100+", icon: "🛠" },
  { label: "Testnet Launch", value: "Mar 20 2026", icon: "🚀" },
];

export default function BIP360Explorer() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="bip360" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-[#F7931A] border border-[#F7931A]/30 px-3 py-1 rounded-full">
          BIP 360 · Pay-to-Merkle-Root
        </span>
        <h2 className="text-4xl font-black mt-4 mb-4">
          The Quantum-Resistant{" "}
          <span className="text-[#F7931A]">Bitcoin Upgrade</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          BIP 360 introduces a new address type (bc1z) that commits to a Merkle tree of
          post-quantum spending conditions — making Bitcoin safe against Shor&apos;s algorithm.
        </p>
        <a href="https://bip360.org" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-[#F7931A] hover:text-amber-300 transition-colors text-sm font-mono">
          bip360.org ↗
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#111] border border-gray-800 hover:border-[#F7931A]/40 rounded-xl p-5 text-center transition-all">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-2xl font-black text-[#F7931A]">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6 text-center">Address Format Evolution</h3>
        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          {addressFormats.map((fmt, i) => (
            <div key={fmt.name} className="flex md:flex-col items-center gap-3 flex-1">
              <button
                onClick={() => setSelected(selected === i ? null : i)}
                className="w-full bg-[#111] border rounded-xl p-4 text-left transition-all cursor-pointer hover:scale-105"
                style={{ borderColor: selected === i ? fmt.color : "#1f2937", boxShadow: selected === i ? `0 0 16px ${fmt.color}40` : "none" }}
              >
                <div className="text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block"
                  style={{ color: fmt.color, background: fmt.bg, border: `1px solid ${fmt.color}40` }}>
                  {fmt.status}
                </div>
                <div className="font-black text-sm">{fmt.name}</div>
                <div className="text-xs text-gray-500">{fmt.desc}</div>
                <div className="text-xs font-mono text-gray-600 mt-2 truncate">{fmt.example}</div>
                <div className="text-xs text-gray-600 mt-1">{fmt.year}</div>
              </button>
              {i < addressFormats.length - 1 && (
                <div className="text-[#F7931A] font-bold text-lg md:hidden">↓</div>
              )}
            </div>
          ))}
        </div>
        {selected !== null && (
          <div className="mt-4 rounded-xl p-4 border text-sm text-gray-300 transition-all"
            style={{ background: addressFormats[selected].bg, borderColor: `${addressFormats[selected].color}40` }}>
            <span className="font-bold" style={{ color: addressFormats[selected].color }}>
              {addressFormats[selected].name}:{" "}
            </span>
            {addressFormats[selected].detail}
          </div>
        )}
      </div>

      <div className="mb-16">
        <h3 className="text-xl font-bold mb-2 text-center">How P2MR Works</h3>
        <p className="text-gray-400 text-sm text-center mb-8 max-w-xl mx-auto">
          A P2MR output commits to a Merkle root. Each leaf is a different quantum-resistant
          spending script. Only the chosen leaf is revealed at spend time.
        </p>
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 overflow-x-auto">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto block" style={{ minWidth: 300 }}>
            <line x1="200" y1="30" x2="100" y2="90" stroke="#F7931A" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="200" y1="30" x2="300" y2="90" stroke="#F7931A" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="100" y1="90" x2="48" y2="155" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="100" y1="90" x2="148" y2="155" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="300" y1="90" x2="248" y2="155" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="300" y1="90" x2="348" y2="155" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="200" cy="28" r="22" fill="#0a0a0a" stroke="#22c55e" strokeWidth="2" />
            <text x="200" y="25" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="monospace" fontWeight="bold">P2MR</text>
            <text x="200" y="34" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">bc1z…</text>
            <circle cx="100" cy="90" r="18" fill="#0a0a0a" stroke="#F7931A" strokeWidth="1.5" />
            <text x="100" y="94" textAnchor="middle" fill="#F7931A" fontSize="6" fontFamily="monospace">Branch A</text>
            <circle cx="300" cy="90" r="18" fill="#0a0a0a" stroke="#F7931A" strokeWidth="1.5" />
            <text x="300" y="94" textAnchor="middle" fill="#F7931A" fontSize="6" fontFamily="monospace">Branch B</text>
            {[{ cx: 48, label: "FALCON", sub: "sig" }, { cx: 148, label: "PQ-Multi", sub: "sig" }, { cx: 248, label: "Timelock", sub: "PQ" }, { cx: 348, label: "Emergency", sub: "PQ" }].map((n) => (
              <g key={n.cx}>
                <rect x={n.cx - 28} y="143" width="56" height="26" rx="4" fill="#0a0a0a" stroke="#60a5fa" strokeWidth="1" />
                <text x={n.cx} y="154" textAnchor="middle" fill="#60a5fa" fontSize="6" fontFamily="monospace">{n.label}</text>
                <text x={n.cx} y="163" textAnchor="middle" fill="#60a5fa" fontSize="5.5" fontFamily="monospace" opacity="0.7">{n.sub}</text>
              </g>
            ))}
            <text x="200" y="195" textAnchor="middle" fill="#4b5563" fontSize="6" fontFamily="monospace">
              Only the revealed leaf + proof is broadcast — privacy preserved
            </text>
          </svg>
        </div>
      </div>

      <div className="text-center">
        <a href="https://bip360.org" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#F7931A] hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-105">
          Explore BIP 360 ↗
        </a>
        <p className="text-gray-600 text-xs mt-3">Testnet live since March 20, 2026 · Open-source · Community driven</p>
      </div>
    </section>
  );
}
