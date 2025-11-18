import React from 'react'

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Start Getting Predictable Lead Flow?</h2>
      <p className="mx-auto mt-3 max-w-3xl text-slate-300">Your next customers are one system away.</p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-1px] hover:bg-blue-400">
          👉 Get Your Free Lead Growth Plan
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 px-6 py-3 text-slate-200 transition hover:bg-slate-800">
          📞 Book a Discovery Call
        </a>
      </div>
    </section>
  )
}
