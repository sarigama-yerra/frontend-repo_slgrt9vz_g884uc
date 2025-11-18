import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-3 text-slate-300">Leadifier System™ — $997/month</p>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/70 to-slate-900/50 p-8 shadow-xl">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'Meta Ads Management',
            'Google Ads Management',
            'Funnel Setup',
            'Automated Nurturing',
            'CRM Setup',
            'Dashboard Reporting',
            'Unlimited Optimization',
            'Support',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-slate-200">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-500/30">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-1px] hover:bg-blue-400">
            👉 Start My Leadifier System
          </a>
          <a href="#top" className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 px-6 py-3 text-slate-200 transition hover:bg-slate-800">
            Back to top
          </a>
        </div>
      </div>
    </section>
  )
}
