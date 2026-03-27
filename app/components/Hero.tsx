"use client";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage:"linear-gradient(rgba(247,147,26,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(247,147,26,0.04) 1px,transparent 1px)",backgroundSize:"50px 50px"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-[#F7931A]/10 border border-[#F7931A]/30 rounded-full px-4 py-2 text-sm text-[#F7931A] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F7931A] animate-pulse inline-block" />
          Quantum threat window: 2030-2035. The clock is running.
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          The Last Line of Defense<br />
          <span className="text-[#F7931A]">For Every Satoshi</span>
        </h1>

        <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          We are building the ultimate team of AI and human intelligence -- dedicated to one mission: 
          ensuring every last Satoshi is mined, every wallet is future-proof, 
          and Bitcoin survives every threat vector known and unknown.
        </p>

        <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
          Quantum computing. Key exposure. Custodial risk. Supply chain attacks. Physical coercion.
          We track them all. We prepare you for what is coming.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#auditor" className="bg-[#F7931A] hover:bg-[#d4780f] text-black font-bold px-8 py-4 rounded-lg transition-all" style={{boxShadow:"0 0 30px rgba(247,147,26,0.4)"}}>
            Audit Your Address
          </a>
          <a href="#threats" className="border border-[#F7931A]/50 hover:border-[#F7931A] text-[#F7931A] font-bold px-8 py-4 rounded-lg transition-all">
            View Threat Matrix
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          {[
            ["~1.7M BTC","sitting in vulnerable P2PK outputs"],
            ["2030-35","estimated quantum threat window"],
            ["21M","total Bitcoin that will ever exist"]
          ].map(([n,l]) => (
            <div key={n}>
              <div className="text-xl font-black text-[#F7931A]">{n}</div>
              <div className="text-xs text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto border border-[#F7931A]/20 rounded-xl p-6 bg-[#F7931A]/5">
          <p className="text-sm text-gray-400 italic leading-relaxed">
            "The Bitcoin network is the most important financial infrastructure ever built.
            Our team exists to make sure it -- and your piece of it -- outlasts every threat,
            every government, every quantum computer, and every attack vector the future can throw at it."
          </p>
          <p className="text-xs text-[#F7931A] mt-3 font-semibold">-- Bitcoin Defense Team</p>
        </div>

      </div>
    </section>
  );
}
