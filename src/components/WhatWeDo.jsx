import React from 'react'

function Card({ title, children, accent = 'blue' }) {
  const accents = {
    blue: 'from-blue-500/10 ring-blue-500/20',
    cyan: 'from-cyan-500/10 ring-cyan-500/20',
    emerald: 'from-emerald-500/10 ring-emerald-500/20',
    violet: 'from-violet-500/10 ring-violet-500/20',
  }
  return (
    <div className={`rounded-2xl border border-slate-700/80 bg-gradient-to-b ${accents[accent]} to-slate-900/40 p-6 ring-1 ring-inset shadow-xl` }>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-2 text-slate-300">{children}</div>
    </div>
  )
}

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">The Leadifier System™</h2>
        <p className="mt-3 text-slate-300">A lean, powerful, done-for-you growth engine built to bring you qualified leads daily.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="1️⃣ Paid Traffic (META + Google Ads)" accent="blue">
          <p>We run proven ad frameworks that attract your ideal customer and lower your cost per lead.</p>
          <p className="mt-3 text-sm font-semibold text-slate-200">Includes:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Campaign setup</li>
            <li>Retargeting</li>
            <li>Creative templates</li>
            <li>Daily optimization</li>
            <li>Conversion API + tracking setup</li>
          </ul>
        </Card>

        <Card title="2️⃣ High-Converting Lead Funnels" accent="cyan">
          <p>We build you a simple but highly optimized funnel based on our battle-tested template.</p>
          <p className="mt-3 text-sm font-semibold text-slate-200">Formats we can deploy instantly:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Lead magnet page</li>
            <li>Free audit/schedule call funnel</li>
            <li>Offer/landing page</li>
            <li>Multi-step questionnaire funnel</li>
          </ul>
          <p className="mt-2">These are designed for speed, clarity, and conversions.</p>
        </Card>

        <Card title="3️⃣ Automated Lead Nurturing" accent="emerald">
          <p>Never lose a lead again. We install automation that does the follow-up for you.</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Email + WhatsApp sequences</li>
            <li>Appointment reminders</li>
            <li>Lead qualification workflows</li>
            <li>CRM pipeline automation</li>
            <li>Instant notifications for your sales team</li>
          </ul>
          <p className="mt-2">Your leads get engaged. Your team gets more ready-to-buy prospects.</p>
        </Card>

        <Card title="4️⃣ Reporting & Optimization" accent="violet">
          <p>Fully automated dashboards so you always know what’s driving results.</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>CPL</li>
            <li>CPS (cost per schedule)</li>
            <li>ROAS (if needed)</li>
            <li>Ad performance</li>
            <li>Funnel drop-off</li>
          </ul>
          <p className="mt-2">Your system improves every week with data—not guesses.</p>
        </Card>
      </div>
    </section>
  )
}
