import React from 'react'

const posts = [
  {
    title: 'The 7-page framework for high-converting websites',
    excerpt: 'Most sites try to do too much. Here’s the minimalist structure we use to turn attention into action — and why it consistently outperforms bloated designs.',
    tag: 'Strategy'
  },
  {
    title: 'A practical SEO checklist for new launches',
    excerpt: 'Skip the guesswork. From site architecture to schema, this pragmatic checklist keeps your launch fast, indexable, and ready to rank from day one.',
    tag: 'SEO'
  },
  {
    title: 'Design systems for marketing teams',
    excerpt: 'Reusable components aren’t just for engineers. Learn how a simple design system lets marketers ship pages faster while keeping quality high.',
    tag: 'Design'
  }
]

function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Insights</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Guides and practical playbooks</h2>
          <p className="mt-4 text-slate-600">We publish straightforward advice drawn from real projects. No jargon, no fluff — just strategies and checklists you can apply immediately to improve performance and conversions.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{p.tag}</span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#contact" className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">Read the guide →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
