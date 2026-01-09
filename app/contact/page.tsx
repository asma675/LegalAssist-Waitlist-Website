import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        <div className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-ink-600/10 px-3 py-1 text-xs font-semibold text-ink-800">
            ✉️ Contact
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
            Get in touch
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            Have feedback, partnership ideas, or want early access for your team? Reach out:
          </p>

          <div className="mt-6 rounded-3xl border border-white/60 bg-white/60 p-5 backdrop-blur">
            <div className="text-sm font-semibold text-slate-900">Email</div>
            <a
              className="mt-2 inline-block text-sm font-semibold text-ink-700 hover:underline"
              href="mailto:asma.ahmed.work@gmail.com"
            >
              asma.ahmed.work@gmail.com
            </a>

            <div className="mt-4 text-xs text-slate-500">
              (Tip: For investors/clients, include “LegalAssist” in the subject line.)
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
