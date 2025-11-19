import React from 'react'

const plans = [
  {
    name: 'Launch',
    price: '$3,500',
    desc: 'Best for new brands that need to move fast with a solid foundation.',
    features: ['1-3 page site', 'Copy template library', 'Speed & SEO setup', 'Analytics & lead tracking'],
    cta: 'Start with Launch'
  },
  {
    name: 'Growth',
    price: '$7,500',
    desc: 'For teams ready to scale content, campaigns, and conversion experiments.',
    features: ['5-10 page site', 'Design system & CMS', 'Landing page builder', 'A/B testing setup'],
    highlighted: true,
    cta: 'Scale with Growth'
  },
  {
    name: 'Partner',
    price: 'Custom',
    desc: 'Ongoing design, development, and performance marketing support.',
    features: ['Roadmap & backlog', 'Quarterly strategy', 'Priority support', 'Dedicated Slack channel'],
    cta: 'Book a Strategy Call'
  }
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Simple pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Choose a plan that fits your stage</h2>
          <p className="mt-4 text-slate-600">We believe in clarity. No hidden fees, no lock-in, and no vague deliverables. Just meaningful outcomes and a team that shows up.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 bg-white ${p.highlighted ? 'border-blue-600 shadow-xl shadow-blue-600/10' : 'border-slate-200'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <div className="text-2xl font-bold text-slate-900">{p.price}</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 font-semibold ${p.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
