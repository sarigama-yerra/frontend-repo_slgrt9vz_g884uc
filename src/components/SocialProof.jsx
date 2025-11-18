import React from 'react'

export default function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Pilot Program Results</h2>
        <p className="mt-3 text-slate-300">During our initial pilot program, businesses saw:</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { stat: '40–70% lower', label: 'Cost per lead' },
          { stat: '3–5× increase', label: 'Qualified leads' },
          { stat: '2× more', label: 'Appointments from automation' },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-6 text-center">
            <p className="text-3xl font-bold text-white">{item.stat}</p>
            <p className="mt-2 text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-slate-400">✨ You can add your first testimonials here once campaigns are launched.</p>
    </section>
  )
}
