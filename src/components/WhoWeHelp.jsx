import React from 'react'

export default function WhoWeHelp() {
  const items = [
    'Service-based businesses',
    'Local businesses',
    'Coaches & consultants',
    'Real estate',
    'Healthcare clinics',
    'Home services',
    'B2B services',
    'E-commerce brands (lead capture funnels + conversions)'
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Who We Help</h2>
        <p className="mt-3 text-slate-300">Leadifier works for businesses that want predictable growth:</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <div key={t} className="rounded-xl border border-slate-700/80 bg-slate-800/50 p-4 text-slate-200">
            {t}
          </div>
        ))}
      </div>
    </section>
  )
}
