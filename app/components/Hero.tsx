"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage:"linear-gradient(rgba(247,147,26,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(247,147,26,0.04) 1px,transparent 1px)",backgroundSize:"50px 50px"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-[#F7931A]/10 border border-[#F7931A]/30 rounded-full px-4 py-2 text-sm text-[#F7931A] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F7931A] animate-pulse inline-block" />
          Google moved Q-Day to 2029. The clock is running.
        </div>

        <div className="flex justify-center mb-6">
          <Image src="/logo.jpg" alt="StackerZero Shield" width={120} height={120} className="rounded-2xl" style={{boxShadow:"0 0 40px rgba(247,147,26,0.3)"}} />
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          <span className="text-[#F7931A]">Stacker</span><span className="text-white">Zero</span>
        </h1>

        <p className="text-xl md:text-2xl font-mono text-gray-300 mb-6 tracking-widest uppercase">
          Zero reuse. Zero exposure. Zero trust.
        </p>

        <p className="text-base text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
          Bitcoin defense intelligence for serious holders. We track quantum threats, BIP 360 progress,
          key hygiene, and every attack vector — so your stack survives what is coming.
        </p>

        <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto font-mono">
          // quantum computing . key exposure . BIP 360 . self-custody . post-quantum cryptography
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#auditor" className="bg-[#F7931A] hover:bg-[#d4780f] text-black font-bold px-8 py-4 rounded-lg transition-all" style={{boxShadow:"0 0 30px rgba(247,147,26,0.4)"}}>
            Audit Your Address
          </a>
          <a href="/briefings" className="border border-[#F7931A]/50 hover:border-[#F7931A] text-[#F7931A] font-bold px-8 py-4 rounded-lg transition-all">
            Read Daily Briefings
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          {[
            ["6.9M BTC","in addresses with exposed public keys"],
            ["2029","Google's updated Q-Day estimate"],
            ["BIP 360","live on testnet — the fix exists"]
          ].map(([n,l]) => (
            <div key={n}>
              <div className="text-xl font-black text-[#F7931A]">{n}</div>
              <div className="text-xs text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto border border-[#F7931A]/20 rounded-xl p-6 bg-[#F7931A]/5">
          <p className="text-sm text-gray-400 italic leading-relaxed font-mono">
            "The window to be calm and informed is open. It won't be forever.
            StackerZero exists to make sure serious Bitcoiners are ready before the community scrambles."
          </p>
          <p className="text-xs text-[#F7931A] mt-3 font-semibold">— StackerZero</p>
        </div>

      </div>
    </section>
  );
}
