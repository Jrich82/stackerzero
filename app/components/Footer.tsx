import { Zap } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 text-[#F7931A]" />
          <span className="font-black text-lg font-mono">Stacker<span className="text-[#F7931A]">Zero</span></span>
        </div>
        <p className="text-sm text-gray-500 max-w-xl mx-auto font-mono">
          Zero reuse. Zero exposure. Zero trust.
        </p>
        <p className="text-xs text-gray-600 max-w-xl mx-auto">
          Bitcoin security intelligence for serious holders -- quantum threats, key hygiene, and self-custody.
        </p>
        <p className="text-xs text-[#F7931A]/60 font-mono">Not your keys, not your Bitcoin. Not your node, not your rules.</p>
        <p className="text-xs text-gray-500 font-mono"><a href="https://x.com/stacker_zero" target="_blank" className="hover:text-[#F7931A] transition-colors">@stacker_zero</a></p>
        <p className="text-xs text-gray-700">Not financial advice. Verify everything. Trust no one. Run your own node.</p>
        <p className="text-xs text-gray-800">&copy; {new Date().getFullYear()} Stacker Zero</p>
      </div>
    </footer>
  );
}

