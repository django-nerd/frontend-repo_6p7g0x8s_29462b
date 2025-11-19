import React from 'react'

function CTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to design a site that actually sells?</h2>
        <p className="mt-4 text-slate-600">Tell us about your goals and well send a tailored plan with timelines, pricing, and quick wins you can implement immediately. No hard sell — just real advice.</p>
        <form className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
          <input type="text" placeholder="Your name" className="col-span-3 sm:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Work email" className="col-span-3 sm:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Company" className="col-span-3 sm:col-span-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="What are you trying to achieve?" rows={4} className="col-span-3 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="col-span-3 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send My Plan</button>
        </form>
        <p className="mt-4 text-xs text-slate-500">By submitting, you agree to our privacy policy and consent to receiving emails about our services.</p>
      </div>
    </section>
  )
}

export default CTA
