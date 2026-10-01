import { createFileRoute } from '@tanstack/react-router'
import { COMPANY } from '@/data/company'
import { QuoteForm } from '@/components/QuoteForm'

export const Route = createFileRoute('/quote')({
  head: () => {
    const pageTitle = `Get Free Moving Quote & Cost Calculator | ${COMPANY.name}`
    const pageDesc =
      'Get an instant shifting quote or calculate relocation volume and pricing for household goods, office moving, and vehicle transport in Hyderabad.'
    const pageUrl = `${COMPANY.siteUrl}/quote`
    return {
      meta: [
        { title: pageTitle },
        { name: 'description', content: pageDesc },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: pageDesc },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: `${COMPANY.siteUrl}/logo.png` },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: pageDesc },
        { name: 'twitter:image', content: `${COMPANY.siteUrl}/logo.png` },
      ],
      links: [{ rel: 'canonical', href: pageUrl }],
    }
  },
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
