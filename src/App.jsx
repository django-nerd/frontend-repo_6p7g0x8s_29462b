import React from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Services />
        <Work />
        <About />
        <Pricing />
        <Blog />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center font-bold">N</div>
              <span className="font-semibold text-slate-900">Nova Digital</span>
            </div>
            <p className="mt-3">We design, build, and grow high‑performing websites for ambitious teams. Strategy-led, results-driven, and refreshingly easy to work with.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Services</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#services" className="hover:text-blue-600">Web Design</a></li>
              <li><a href="#services" className="hover:text-blue-600">Branding</a></li>
              <li><a href="#services" className="hover:text-blue-600">SEO</a></li>
              <li><a href="#services" className="hover:text-blue-600">Performance Marketing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#work" className="hover:text-blue-600">Work</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#blog" className="hover:text-blue-600">Insights</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Newsletter</p>
            <p className="mt-3">Get one practical tip each month to improve your site’s performance and conversions.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Nova Digital. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
