import React from 'react'

export default function WhyChoose() {
  const points = [
    {
      title: 'We build the entire system for you',
      desc: 'Not just ads. Not just funnels. The whole predictable acquisition engine.',
    },
    { title: 'Fast implementation', desc: 'Your complete system is live in 14 days.' },
    { title: 'Automation-first', desc: 'We automate everything possible so you get better results with less effort.' },
    { title: 'Proven templates', desc: 'Funnels, automations, scripts, dashboards — all pre-built and customized.' },
    { title: 'No long contracts', desc: 'You stay because it works.' },
    { title: 'You get leads. We handle the rest.', desc: '' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Businesses Choose Leadifier</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-700/80 bg-slate-800/50 p-6">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-500/30">✔️</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                {p.desc && <p className="mt-1 text-slate-300">{p.desc}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
