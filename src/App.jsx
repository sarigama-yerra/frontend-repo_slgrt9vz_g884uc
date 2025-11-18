import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatWeDo from './components/WhatWeDo'
import WhoWeHelp from './components/WhoWeHelp'
import WhyChoose from './components/WhyChoose'
import OfferStack from './components/OfferStack'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-500 text-white shadow-lg shadow-blue-500/30">L</span>
            <span className="font-semibold">Leadifier</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#problem" className="hover:text-white">Problem</a>
            <a href="#what" className="hover:text-white">System</a>
            <a href="#who" className="hover:text-white">Who We Help</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
          </nav>
          <a href="#pricing" className="hidden rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/30 transition hover:bg-blue-400 sm:inline-block">Get Plan</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="problem"><Problem /></div>
        <div id="what"><WhatWeDo /></div>
        <div id="who"><WhoWeHelp /></div>
        <WhyChoose />
        <OfferStack />
        <SocialProof />
        <Pricing />
        <div id="faqs"><FAQs /></div>
        <FinalCTA />
      </main>

      <footer className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Leadifier. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#top" className="hover:text-white">Back to top</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#faqs" className="hover:text-white">FAQs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
