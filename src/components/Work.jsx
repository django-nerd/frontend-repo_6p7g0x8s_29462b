import React from 'react'

const work = [
  {
    name: 'Atlas Outdoors',
    result: '220% increase in qualified leads in 90 days',
    desc: 'We rebuilt the site architecture, simplified the product taxonomy, and launched a high-speed, SEO-first storefront with reusable landing page blocks.',
  },
  {
    name: 'Kite Clinic',
    result: 'Booked out 6 weeks after launch',
    desc: 'We clarified the positioning, added clear CTAs throughout the funnel, and implemented booking integrations with automated reminders and reviews.',
  },
  {
    name: 'Vantage SaaS',
    result: 'From idea to 1,000 signups in 30 days',
    desc: 'We designed a conversion-focused marketing site with transparent pricing, comparison tables, and lifecycle emails that nurtured trial users into paid plans.',
  },
]

function Work() {
  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Selected work</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Results were proud of</h2>
          <p className="mt-4 text-slate-600">Every project starts with clear, measurable goals. We partner closely with teams to build experiences that earn attention and convert it into revenue.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {work.map((w) => (
            <div key={w.name} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Case Study</div>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{w.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{w.desc}</p>
              <div className="mt-4 inline-flex items-center rounded-md bg-slate-900 px-3 py-1 text-white text-sm">{w.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
