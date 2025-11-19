import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Why us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">A small senior team with a bias for outcomes</h2>
            <p className="mt-4 text-slate-600">Were strategists, designers, and engineers who care about the same metrics you do: faster launch cycles, higher conversion rates, and compounding growth. We keep our team intentionally small so you work directly with the people doing the work.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Process that de-risks projects</h3>
              <p className="mt-2 text-sm text-slate-600">Every engagement starts with a discovery sprint to align on goals, audience, and success metrics. Then we prototype, validate, and iterate with transparent weekly milestones.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Design systems that scale</h3>
              <p className="mt-2 text-sm text-slate-600">We build flexible component libraries and documentation so your team can launch new pages and campaigns without reinventing the wheel each time.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Performance as a feature</h3>
              <p className="mt-2 text-sm text-slate-600">Speed isnt an afterthought — its built in. Our sites ship with image optimization, code splitting, and caching best practices to keep Core Web Vitals in the green.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Transparent collaboration</h3>
              <p className="mt-2 text-sm text-slate-600">We plan in the open. Youll have access to roadmaps, weekly demos, and metrics so there are no surprises — just steady, compounding progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
