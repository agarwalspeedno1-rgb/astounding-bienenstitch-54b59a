import { createFileRoute } from '@tanstack/react-router'
import { COMPANY, FAQS } from '@/data/company'

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: `FAQ | ${COMPANY.name}` },
      {
        name: 'description',
        content:
          'Answers to common questions about booking, pricing, insurance, and prohibited items for packing and moving services in Hyderabad.',
      },
    ],
  }),
  component: FAQPage,
})

function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 font-sans">
      <div className="space-y-2 border-b border-slate-200 pb-6 text-center">
        <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-bold uppercase text-red-600">
          Got Questions?
        </span>
        <h1 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h1>
        <p className="text-xs text-slate-600 sm:text-sm">
          Everything you need to know about booking our packing and moving services.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => (
          <div key={faq.q} className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="flex items-start gap-2 text-base font-extrabold text-slate-900">
              <span className="text-red-600">Q.</span>
              <span>{faq.q}</span>
            </h3>
            <p className="pl-6 text-xs leading-relaxed text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
