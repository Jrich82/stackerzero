import { Shield } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-5 h-5 text-[#F7931A]" />
          <span className="font-black text-lg">Bitcoin <span className="text-[#F7931A]">Defense</span></span>
        </div>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          The ultimate team of AI and human intelligence -- ensuring every last Satoshi is mined,
          every wallet is future-proof, and Bitcoin outlasts every threat the future can build.
        </p>
        <p className="text-xs text-[#F7931A]/60 font-mono">Not your keys, not your Bitcoin. Not your node, not your rules.</p>
        <p className="text-xs text-gray-700">Not financial advice. Verify everything. Trust no one. Run your own node.</p>
      </div>
    </footer>
  );
}