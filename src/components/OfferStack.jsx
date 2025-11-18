import React from 'react'

export default function OfferStack() {
  const sections = [
    {
      title: 'Full Ads Management (META & Google)',
      items: ['Campaign creation', 'Retargeting', 'Creative templates', 'Daily optimization', 'Conversion tracking'],
      color: 'blue',
    },
    {
      title: 'High-Converting Funnel',
      items: ['1 Lead funnel built from our templates', 'Mobile-optimized', 'CRO tweaks & A/B tests', 'Fast hosting or integration with your platform'],
      color: 'cyan',
    },
    {
      title: 'Automated Lead Nurturing',
      items: ['Email + WhatsApp sequences', 'CRM updates', 'Lead qualification', 'Appointment reminders'],
      color: 'emerald',
    },
    {
      title: 'CRM Setup',
      items: ['Pipeline setup', 'Automations', 'Calendar integration'],
      color: 'violet',
    },
    {
      title: 'Automated Reporting Dashboard',
      items: ['Real-time view', 'Cost per lead', 'Cost per booked call', 'Conversion rates'],
      color: 'indigo',
    },
  ]

  const colorMap = {
    blue: 'ring-blue-500/30 bg-blue-500/10',
    cyan: 'ring-cyan-500/30 bg-cyan-500/10',
    emerald: 'ring-emerald-500/30 bg-emerald-500/10',
    violet: 'ring-violet-500/30 bg-violet-500/10',
    indigo: 'ring-indigo-500/30 bg-indigo-500/10',
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything Included in the Leadifier System™</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title} className={`rounded-2xl border border-slate-700/80 ${colorMap[s.color]} p-6 ring-1 ring-inset`}>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <ul className="mt-3 ml-4 list-disc space-y-1 text-slate-200">
              {s.items.map((i) => (
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-700/80 bg-slate-800/50 p-6 text-slate-200">
        Bonus: Script for sales calls + follow-up templates
      </div>
    </section>
  )
}
