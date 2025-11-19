import React from 'react'

const services = [
  {
    title: 'Web Design & Development',
    desc: 'Pixel-perfect, responsive websites built for speed and conversions. We use modern frameworks and proven UX patterns to reduce bounce rates and increase qualified leads.',
    bullets: ['Conversion-focused UX', 'CMS & eCommerce ready', 'Accessibility best practices']
  },
  {
    title: 'Branding & Creative',
    desc: 'A cohesive visual identity that stands out. From logos to full brand systems, we craft assets that scale across websites, ads, and social content without losing consistency.',
    bullets: ['Brand strategy & voice', 'Design systems & assets', 'Motion & micro-interactions']
  },
  {
    title: 'SEO & Content',
    desc: 'Technical SEO, on-page optimization, and content that ranks. We ship structured data, lightning-fast pages, and a publishing cadence geared for compounding growth.',
    bullets: ['Keyword research & IA', 'Schema & technical SEO', 'Editorial calendar & articles']
  },
  {
    title: 'Performance Marketing',
    desc: 'Cross-channel ad campaigns that drive measurable ROI. We build full funnels — from landing pages to retargeting — and iterate based on cohort data, not hunches.',
    bullets: ['Google & Meta Ads', 'Landing pages & CRO', 'Attribution & reporting']
  },
]

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Services built to grow your business</h2>
          <p className="mt-4 text-slate-600">Our work blends strategy, storytelling, and systems thinking. The result is a site that looks beautiful, loads fast, and supports a scalable marketing engine.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
