import React from 'react'

function Header() {
  return (
    <header className="relative overflow-hidden bg-white">
      <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white grid place-items-center font-bold shadow-lg shadow-blue-600/20">
                N
              </div>
              <div>
                <p className="text-slate-900 font-semibold leading-5">Nova Digital</p>
                <p className="text-xs text-slate-500 -mt-1">Design • Growth • Systems</p>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#blog" className="hover:text-blue-600 transition-colors">Insights</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Start a Project</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative isolate pt-16">
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                We design websites that convert clicks into customers
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Nova is a boutique digital agency helping ambitious brands launch fast, sell more, and scale with confidence. From strategy to execution, we build high-performance sites and campaigns that grow revenue — not just traffic.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Get a Free Strategy Call</a>
                <a href="#work" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">See Our Work</a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-slate-900">120+</p>
                  <p className="text-xs text-slate-500">Sites launched</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                  <p className="text-xs text-slate-500">Client rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">$18M+</p>
                  <p className="text-xs text-slate-500">Revenue influenced</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="p-6 text-center">
                    <p className="text-sm uppercase tracking-widest text-blue-400/80">Our Approach</p>
                    <h3 className="mt-3 text-2xl font-bold text-white">Strategy • Design • Launch • Optimize</h3>
                    <p className="mt-3 text-slate-300">We combine conversion-focused UX with fast, scalable tech. Every build ships with analytics, SEO foundations, and a clear roadmap for growth.</p>
                  </div>
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Lightning-fast performance</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />SEO-first architecture</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Clean, scalable design systems</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Analytics and A/B testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
