import React from 'react'

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Most Businesses Don’t Need More Ads. They Need a System.</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-4 text-slate-300">
        <p>If you’re only running ads, you’re competing on luck.</p>
        <p>If you’re only using a CRM, you’re missing conversions.</p>
        <p>If you’re trying to grow without automation, you’re burning time and money.</p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-700/80 bg-slate-800/50 p-6">
        <p className="text-slate-200">The real issue is simple:</p>
        <ul className="mt-4 list-none space-y-3 text-slate-300">
          {[
            '➡️ No consistent acquisition system',
            '➡️ No automated follow-up',
            '➡️ No funnel optimized for conversions',
            '➡️ No clarity on what’s working',
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-lg">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-semibold text-emerald-300">Leadifier fixes all of this.</p>
      </div>
    </section>
  )
}
