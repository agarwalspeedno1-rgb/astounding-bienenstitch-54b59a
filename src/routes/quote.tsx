import { createFileRoute } from '@tanstack/react-router'
import { COMPANY } from '@/data/company'
import { QuoteForm } from '@/components/QuoteForm'

export const Route = createFileRoute('/quote')({
  head: () => ({
    meta: [
      { title: `Get Instant Moving Quote | ${COMPANY.name}` },
      {
        name: 'description',
        content: 'Get an instant estimate for household shifting, office relocation, or car transport in Hyderabad.',
      },
    ],
  }),
  component: QuotePage,
})

function QuotePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 font-sans">
      <div className="mb-6 space-y-2 text-center">
        <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-bold uppercase text-red-600">
          Free Quote
        </span>
        <h1 className="text-3xl font-black text-slate-900">Get Your Shifting Estimate</h1>
        <p className="mx-auto max-w-xl text-xs text-slate-600 sm:text-sm">
          Fill in your details for an instant estimate, or switch to the item calculator for a volume-based
          breakdown.
        </p>
      </div>
      <QuoteForm />
    </div>
  )
}
