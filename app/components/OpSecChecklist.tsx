"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "btc-opsec-checklist-v1";

type Severity = "Critical" | "High" | "Medium";

interface ChecklistItem {
  id: string;
  label: string;
  severity: Severity;
  detail?: string;
}

interface Section {
  title: string;
  icon: string;
  items: ChecklistItem[];
}

const sections: Section[] = [
  {
    title: "Address Hygiene",
    icon: "🔑",
    items: [
      { id: "no-reuse", label: "Never reuse Bitcoin addresses", severity: "Critical", detail: "Each address should be used only once. Reuse exposes your public key permanently." },
      { id: "bech32", label: "Use bech32 bc1q or Taproot bc1p addresses", severity: "Critical", detail: "Modern address formats reduce fees and offer better privacy vs legacy formats." },
      { id: "no-discuss", label: "Never discuss holdings publicly", severity: "Critical", detail: "You become a target the moment anyone knows you hold significant Bitcoin." },
    ],
  },
  {
    title: "Key Security",
    icon: "🛡",
    items: [
      { id: "metal-seed", label: "Seed phrase on metal, not digital", severity: "Critical", detail: "Paper burns. Digital gets hacked. Steel/titanium plates survive fires and floods." },
      { id: "hw-official", label: "Hardware wallet from official source only", severity: "Critical", detail: "Amazon, eBay resellers may ship pre-compromised devices. Buy direct from manufacturer." },
    ],
  },
  {
    title: "Custody Setup",
    icon: "🏛",
    items: [
      { id: "multisig", label: "2-of-3 multisig for holdings over $10K", severity: "High", detail: "No single point of failure. Requires 2 of 3 keys to spend — geographically distributed." },
      { id: "decoy", label: "Decoy wallet for coercion defense", severity: "High", detail: "A plausible secondary wallet with some funds. Use under duress — $5 wrench attack defense." },
    ],
  },
  {
    title: "Quantum Readiness",
    icon: "⚛",
    items: [
      { id: "pq-plan", label: "Post-quantum migration plan documented", severity: "High", detail: "Know exactly which addresses hold your Bitcoin and have a plan to move to bc1z when BIP360 activates." },
      { id: "bip360-test", label: "BIP360 testnet address tested", severity: "Medium", detail: "Hands-on experience with bc1z addresses now means you won't panic when mainnet activates." },
    ],
  },
  {
    title: "Physical Security",
    icon: "🔒",
    items: [
      { id: "full-node", label: "Full Bitcoin node running", severity: "High", detail: "Verify your own transactions. Don't trust — verify. Pruned node is fine." },
    ],
  },
  {
    title: "Network Privacy",
    icon: "🌐",
    items: [
      { id: "vpn-tor", label: "VPN/Tor when checking balances", severity: "Medium", detail: "Your ISP and any network observer can see which addresses you look up. Route through Tor." },
    ],
  },
];

const allItems = sections.flatMap((s) => s.items);

const severityConfig: Record<Severity, { color: string; bg: string; border: string }> = {
  Critical: { color: "#ef4444", bg: "#ef444410", border: "#ef444440" },
  High: { color: "#f97316", bg: "#f9731610", border: "#f9731640" },
  Medium: { color: "#eab308", bg: "#eab30810", border: "#eab30840" },
};

function getEncouragement(pct: number): string {
  if (pct === 0) return "Start securing your Bitcoin today.";
  if (pct < 30) return "Good start. Keep going — every item matters.";
  if (pct < 60) return "Solid progress. You're safer than most.";
  if (pct < 90) return "Almost there. Finish the list!";
  if (pct < 100) return "Nearly perfect. One final push.";
  return "🛡 Maximum OpSec achieved. Stay vigilant.";
}

export default function OpSecChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(new Set(JSON.parse(stored)));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checked)));
  }, [checked, loaded]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const total = allItems.length;
  const done = allItems.filter((i) => checked.has(i.id)).length;
  const pct = Math.round((done / total) * 100);
  const critical = allItems.filter((i) => i.severity === "Critical");
  const criticalDone = critical.filter((i) => checked.has(i.id)).length;

  return (
    <section id="opsec" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-[#F7931A] border border-[#F7931A]/30 px-3 py-1 rounded-full">
          Interactive · Saved Locally
        </span>
        <h2 className="text-4xl font-black mt-4 mb-4">
          Bitcoin <span className="text-[#F7931A]">OpSec Checklist</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Every item that stands between your Bitcoin and catastrophic loss. Check them off as you complete them — progress is saved in your browser.
        </p>
      </div>

      {/* Score Card */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 mb-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="text-center shrink-0">
            <div
              className="text-6xl font-black tabular-nums"
              style={{ color: pct === 100 ? "#22c55e" : pct >= 60 ? "#F7931A" : "#ef4444" }}
            >
              {pct}%
            </div>
            <div className="text-gray-500 text-sm mt-1">{done}/{total} complete</div>
          </div>
          <div className="flex-1 w-full">
            <div className="h-3 bg-gray-900 rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${pct}%`,
                  background: pct === 100 ? "#22c55e" : "linear-gradient(90deg, #ef4444, #F7931A)",
                }}
              />
            </div>
            <p className="text-gray-300 text-sm">{getEncouragement(pct)}</p>
            <p className="text-gray-600 text-xs mt-2">
              Critical items: {criticalDone}/{critical.length} completed
              {criticalDone < critical.length && (
                <span className="text-red-500 ml-2">· {critical.length - criticalDone} critical remaining</span>
              )}
            </p>
          </div>
          <button
            onClick={() => {
              setChecked(new Set());
            }}
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors shrink-0"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section) => {
          const sectionDone = section.items.filter((i) => checked.has(i.id)).length;
          return (
            <div key={section.title} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="font-bold">{section.title}</h3>
                </div>
                <span className="text-sm text-gray-500">{sectionDone}/{section.items.length}</span>
              </div>
              <div className="divide-y divide-gray-800/50">
                {section.items.map((item) => {
                  const isChecked = checked.has(item.id);
                  const sc = severityConfig[item.severity];
                  return (
                    <label
                      key={item.id}
                      className="flex items-start gap-4 px-6 py-4 cursor-pointer hover:bg-gray-900/40 transition-colors"
                    >
                      <div className="mt-0.5 shrink-0">
                        <div
                          className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                          style={{
                            borderColor: isChecked ? "#22c55e" : "#374151",
                            background: isChecked ? "#22c55e20" : "transparent",
                          }}
                        >
                          {isChecked && <span className="text-green-400 text-xs font-bold">✓</span>}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => toggle(item.id)}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-sm font-medium ${isChecked ? "line-through text-gray-600" : "text-gray-100"}`}>
                            {item.label}
                          </span>
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded shrink-0"
                            style={{ color: sc.color, background: sc.bg, border: `1px solid ${sc.border}` }}
                          >
                            {item.severity}
                          </span>
                        </div>
                        {item.detail && (
                          <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-gray-700 text-xs mt-8 font-mono">
        Progress stored locally in your browser · Never sent anywhere
      </p>
    </section>
  );
}
