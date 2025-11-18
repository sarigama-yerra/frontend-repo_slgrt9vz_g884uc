import React from 'react'

export default function FAQs() {
  const faqs = [
    {
      q: 'How long until I see results?',
      a: 'Most clients begin receiving leads within 72 hours of campaign launch.'
    },
    {
      q: 'Do you offer guarantees?',
      a: 'We guarantee the launch of your complete system within 14 days.'
    },
    {
      q: 'Do I need a CRM?',
      a: 'No — we can implement one for you (included at no cost).'
    },
    {
      q: 'What if I’ve tried ads before and they didn’t work?',
      a: 'Ads alone rarely work. Our system combines ads + funnel + automation for predictable results.'
    },
    {
      q: 'Is this good for B2B?',
      a: 'Yes — our questionnaire funnels + nurturing workflows are perfect for B2B acquisition.'
    }
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">FAQs</h2>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-slate-700/70 rounded-2xl border border-slate-700/80 bg-slate-800/50">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 py-4 open:bg-slate-800/70">
            <summary className="cursor-pointer list-none text-left text-slate-200">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </div>
            </summary>
            <div className="mt-2 text-slate-300">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
