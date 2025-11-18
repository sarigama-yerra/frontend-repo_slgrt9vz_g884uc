import React from 'react'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background gradient + glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-500/30">
            <span className="text-base">⚡</span> Automated Lead Engine
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Generate Qualified Leads Every Day With Our Automated Lead Generation System
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We combine META Ads, Google Ads, high-converting funnels, and automated nurturing so your business attracts qualified leads on autopilot — without increasing your workload.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-1px] hover:bg-blue-400">
              <span>👉</span> Get My Free Lead Growth Plan
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 px-6 py-3 text-slate-200 transition hover:bg-slate-800">
              <span>📞</span> Book a Discovery Call
            </a>
          </div>
        </div>

        {/* Visual Suggestion: dashboard + funnel + automation */}
        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-3">
          {/* Dashboard card */}
          <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2 w-28 rounded bg-slate-600/60" />
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-slate-700/40 p-4">
                <p className="text-xs text-slate-400">Leads Today</p>
                <p className="mt-1 text-2xl font-bold text-white">48</p>
                <div className="mt-3 h-2 w-full rounded bg-slate-600">
                  <div className="h-2 w-2/3 rounded bg-emerald-400" />
                </div>
              </div>
              <div className="rounded-lg bg-slate-700/40 p-4">
                <p className="text-xs text-slate-400">CPL</p>
                <p className="mt-1 text-2xl font-bold text-white">$12.40</p>
                <div className="mt-3 h-2 w-full rounded bg-slate-600">
                  <div className="h-2 w-1/2 rounded bg-cyan-400" />
                </div>
              </div>
              <div className="rounded-lg bg-slate-700/40 p-4">
                <p className="text-xs text-slate-400">Booked Calls</p>
                <p className="mt-1 text-2xl font-bold text-white">19</p>
                <div className="mt-3 h-2 w-full rounded bg-slate-600">
                  <div className="h-2 w-3/4 rounded bg-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Funnel schematic */}
          <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-5 shadow-xl">
            <p className="mb-3 text-sm font-semibold text-slate-300">Funnel Flow</p>
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-lg bg-blue-500/20 px-4 py-2 text-blue-200 ring-1 ring-inset ring-blue-500/30">Traffic (META + Google)</div>
              <div className="h-6 w-0.5 bg-slate-600" />
              <div className="rounded-lg bg-cyan-500/20 px-4 py-2 text-cyan-200 ring-1 ring-inset ring-cyan-500/30">Lead Magnet / Offer Page</div>
              <div className="h-6 w-0.5 bg-slate-600" />
              <div className="rounded-lg bg-emerald-500/20 px-4 py-2 text-emerald-200 ring-1 ring-inset ring-emerald-500/30">Form / Booking</div>
              <div className="h-6 w-0.5 bg-slate-600" />
              <div className="rounded-lg bg-violet-500/20 px-4 py-2 text-violet-200 ring-1 ring-inset ring-violet-500/30">Automated Nurture</div>
            </div>
          </div>

          {/* Automation workflow */}
          <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-5 shadow-xl">
            <p className="mb-3 text-sm font-semibold text-slate-300">Automation</p>
            <div className="space-y-3">
              {[
                'Instant lead notification to sales',
                'Email + WhatsApp sequence starts',
                'Qualification rules route leads',
                'Appointment reminders sent',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-500/30">✓</span>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
