import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2 } from 'lucide-react'
import { COMPANY, SERVICES, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export const Route = createFileRoute('/services')({
  head: () => {
    const pageTitle = `Relocation Services | ${COMPANY.name} - Hyderabad & Pan-India`
    const pageDesc =
      'Comprehensive moving services: household shifting, corporate office relocation, car & bike transportation, and secure warehousing across Hyderabad and Pan-India.'
    const pageUrl = `${COMPANY.siteUrl}/services`
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
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 font-sans">
      <div className="border-b border-slate-200 pb-6">
        <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-bold uppercase text-red-600">Our Services</span>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Comprehensive Moving Solutions</h1>
        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          Professional packing, transportation, and warehousing across Hyderabad and India.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-black uppercase text-white">
                  {service.category}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-extrabold text-slate-900">{service.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600">{service.fullDesc}</p>

                <div className="space-y-2 pt-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={whatsappUrl(`Hi ${COMPANY.shortName} Packers, I need a quotation for ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-extrabold text-white shadow-md transition-colors hover:bg-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Book Service via WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
