import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2 } from 'lucide-react'
import { COMPANY, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export const Route = createFileRoute('/about')({
  head: () => {
    const pageTitle = `About Us | ${COMPANY.name} - Packers & Movers Hyderabad`
    const pageDesc =
      'Agarwal Speed Packers & Movers is a trusted household and corporate relocation provider operating from Alwal, Secunderabad, serving all of Hyderabad and Pan-India.'
    const pageUrl = `${COMPANY.siteUrl}/about`
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
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 font-sans">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-bold uppercase text-red-600">About Us</span>
          <h1 className="mt-2 text-3xl font-black text-slate-900">{COMPANY.name}</h1>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Leading relocation and transport service provider operating from Alwal, Secunderabad & across Hyderabad.
          </p>
        </div>

        <a
          href={whatsappUrl('Hello, I would like to get a free quote for my shifting requirement.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:bg-emerald-700"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>Connect on WhatsApp</span>
        </a>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-4 text-xs leading-relaxed text-slate-700 sm:text-sm lg:col-span-7">
          <p>
            <strong>{COMPANY.name}</strong> is a trusted name in household goods shifting, corporate office
            movement, car transportation, and warehousing services in Hyderabad. Operating from our head office in
            Ambedkar Nagar Colony, Padmavathi Nagar Colony, Alwal, Secunderabad, we cater to customers across Alwal,
            Kukatpally, Madhapur, Gachibowli, Hitech City, Kompally, and Pan-India.
          </p>

          <p>
            We take pride in our systematic approach: using high-quality packing materials including multi-layer
            bubble wrap, waterproof stretch films, heavy-duty carton boxes, and wooden crates for fragile articles.
          </p>

          <div className="space-y-2 rounded-xl border border-red-200 bg-red-50 p-4">
            <span className="block text-xs font-extrabold text-slate-900">Official Branch Contact & Address:</span>
            <p className="text-xs font-medium text-slate-800">{COMPANY.address}</p>
            <p className="text-xs text-slate-800">
              Email:{' '}
              <a href={`mailto:${COMPANY.email}`} className="font-bold text-red-600 hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
              <span className="text-xs font-bold text-slate-900">Background Verified Labor</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
              <span className="text-xs font-bold text-slate-900">Full Value Insurance Cover</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:col-span-5">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Packing work in progress"
            className="h-80 w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
