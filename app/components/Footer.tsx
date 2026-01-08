export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/30 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="text-xs text-slate-600">
            <div className="font-semibold text-slate-900">
              Built by Asma Ahmed
            </div>
            <p className="mt-1 max-w-md">
              LegalAssist does not provide legal advice and does not create an
              attorney-client relationship. AI-generated content is for
              informational purposes only.
            </p>
          </div>

          {/* Right */}
          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
            <a href="/about" className="hover:text-ink-700">About</a>
            <a href="/contact" className="hover:text-ink-700">Contact</a>
            <a href="/privacy" className="hover:text-ink-700">Privacy</a>
            <a href="/terms" className="hover:text-ink-700">Terms</a>
          </nav>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} LegalAssist
        </div>
      </div>
    </footer>
  );
}
