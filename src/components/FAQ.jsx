import React from 'react'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most sites launch in 3–6 weeks depending on scope and team availability. We plan in weekly sprints with clear milestones and frequent check-ins so you always know what’s next.'
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. Our Partner plan includes continuous design, development, and growth support. We can also work on a retainer to ship new pages, run experiments, and improve conversion rates each month.'
  },
  {
    q: 'What platforms and tools do you use?',
    a: 'We work with modern stacks that prioritize performance and maintainability. We’re comfortable across headless CMS, Shopify, and best‑in‑class analytics and automation tools.'
  },
  {
    q: 'Can you help with copy and content?',
    a: 'Absolutely. We offer brand voice development, messaging frameworks, and editorial planning. Clear, persuasive copy is core to our process.'
  }
]

function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 open:bg-slate-50">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                <span className="text-lg font-semibold text-slate-900">{f.q}</span>
                <span className="text-slate-500 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
