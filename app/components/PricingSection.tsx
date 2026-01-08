"use client";

import { useMemo, useState } from "react";

type BillingMode = "monthly" | "annual";

export default function PricingSection({ waitlistUrl }: { waitlistUrl: string }) {
  const [mode, setMode] = useState<BillingMode>("annual");

  const plans = useMemo(
    () =>
      mode === "annual"
        ? {
            starter: { price: 39, billed: "$468/year" },
            professional: { price: 119, billed: "$1428/year" },
            enterprise: { price: 399, billed: "$4788/year" },
            note: "Pricing shown reflects annual billing (save 20%).",
          }
        : {
            // Monthly numbers aren't provided in your spec, so we keep annual as the “real” numbers
            // and show a small note so the UI still feels interactive.
            starter: { price: 49, billed: "Monthly billing" },
            professional: { price: 149, billed: "Monthly billing" },
            enterprise: { price: 499, billed: "Monthly billing" },
            note: "Monthly pricing shown is placeholder—update anytime.",
          },
    [mode]
  );

  return (
    <section
      id="pricing"
      className="rounded-[28px] border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Simple, Transparent Pricing</h2>
      <p className="mt-2 text-sm text-slate-600">Choose the plan that fits your practice. All plans include a 14-day free trial.</p>

      {/* Toggle */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 p-1 backdrop-blur">
        <button
          type="button"
          onClick={() => setMode("monthly")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            mode === "monthly" ? "bg-white text-slate-900 shadow-soft" : "text-slate-700 hover:bg-white/60"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setMode("annual")}
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
            mode === "annual" ? "bg-white text-slate-900 shadow-soft" : "text-slate-700 hover:bg-white/60"
          }`}
          title={mode === "annual" ? "" : "Switch to annual billing"}
        >
          Annual{" "}
          <span className="ml-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Save 20%</span>
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {/* Starter */}
        <div className="group rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow">
          <div className="text-sm font-semibold text-slate-900">Starter</div>
          <div className="mt-1 text-xs text-slate-600">Perfect for solo practitioners</div>

          <div className="mt-5 flex items-end gap-2">
            <div className="text-4xl font-semibold text-slate-900">${plans.starter.price}</div>
            <div className="pb-1 text-sm font-semibold text-slate-600">/month</div>
          </div>
          <div className="mt-1 text-xs text-slate-600">Billed {plans.starter.billed}</div>

          <a
            href={waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            Start Free Trial
          </a>

          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• 50 document generations/month</li>
            <li>• 20 document analyses/month</li>
            <li>• Unlimited case analyses</li>
            <li>• Basic legal research</li>
            <li>• Email support</li>
            <li>• HTML export</li>
          </ul>
        </div>

        {/* Professional */}
        <div className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow">
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-ink-500/25 blur-2xl" />
          <div className="inline-flex items-center gap-2 rounded-full bg-ink-600/10 px-3 py-1 text-xs font-semibold text-ink-800">
            Most Popular
          </div>

          <div className="mt-3 text-sm font-semibold text-slate-900">Professional</div>
          <div className="mt-1 text-xs text-slate-600">Best for small law firms</div>

          <div className="mt-5 flex items-end gap-2">
            <div className="text-4xl font-semibold text-slate-900">${plans.professional.price}</div>
            <div className="pb-1 text-sm font-semibold text-slate-600">/month</div>
          </div>
          <div className="mt-1 text-xs text-slate-600">Billed {plans.professional.billed}</div>

          <a
            href={waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-ink-600 to-ink-800 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Start Free Trial
          </a>

          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• 100 document generations/month</li>
            <li>• 50 document analyses/month</li>
            <li>• Unlimited case analyses</li>
            <li>• Advanced legal research</li>
            <li>• Priority support</li>
            <li>• PDF &amp; DOCX export</li>
            <li>• Custom templates</li>
            <li>• Team collaboration (3 users)</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="group rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow">
          <div className="text-sm font-semibold text-slate-900">Enterprise</div>
          <div className="mt-1 text-xs text-slate-600">For large firms &amp; legal departments</div>

          <div className="mt-5 flex items-end gap-2">
            <div className="text-4xl font-semibold text-slate-900">${plans.enterprise.price}</div>
            <div className="pb-1 text-sm font-semibold text-slate-600">/month</div>
          </div>
          <div className="mt-1 text-xs text-slate-600">Billed {plans.enterprise.billed}</div>

          <a
            href={waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            Contact Sales
          </a>

          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Unlimited document generations</li>
            <li>• Unlimited document analyses</li>
            <li>• Unlimited case analyses</li>
            <li>• Priority AI processing</li>
            <li>• Dedicated support manager</li>
            <li>• All export formats</li>
            <li>• Custom integrations</li>
            <li>• Unlimited team members</li>
            <li>• SSO &amp; advanced security</li>
            <li>• Custom AI training</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500">
        * {plans.note} Waitlist members get early access and launch offers.
      </div>
    </section>
  );
}
