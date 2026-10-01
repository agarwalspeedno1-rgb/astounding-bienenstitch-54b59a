import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { QuoteForm } from '@/components/QuoteForm'

export const Route = createFileRoute('/contact')({
  head: () => {
    const pageTitle = `Contact Us | ${COMPANY.name} - Alwal, Secunderabad`
    const pageDesc = `Visit our office at ${COMPANY.shortAddress}, or call, email, or WhatsApp us to book a free moving quote.`
    const pageUrl = `${COMPANY.siteUrl}/contact`
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
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 font-sans">
      <div className="border-b border-slate-200 pb-6">
        <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-bold uppercase text-red-600">Get In Touch</span>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Contact {COMPANY.name}</h1>
        <p className="mt-1 text-xs text-slate-600 sm:text-sm">
          Visit our Padmavathi Nagar Colony office in Alwal or call/email us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-4 rounded-2xl bg-slate-900 p-6 text-white shadow-xl">
            <h3 className="text-xl font-black">Head Office Location</h3>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <div className="space-y-1">
                  <p className="font-extrabold text-white">Full Address:</p>
                  <p className="leading-relaxed">{COMPANY.address}</p>
                  <div className="pt-1">
                    <a
                      href={COMPANY.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-white"
                    >
                      <span>Open on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <span className="block text-[10px] text-slate-400">Call Hotline</span>
                  <a
                    href={`tel:${COMPANY.phoneFormatted}`}
                    className="font-bold text-white transition-colors hover:text-red-400"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <span className="block text-[10px] text-slate-400">Email Us</span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-bold text-white transition-colors hover:text-red-400"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-emerald-500" />
                <div>
                  <span className="block text-[10px] text-slate-400">WhatsApp</span>
                  <span className="font-bold text-white">{COMPANY.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-100 p-6 text-xs">
            <h4 className="font-extrabold text-slate-900">Alwal Office Operating Hours</h4>
            <p className="text-slate-600">{COMPANY.hours}</p>
            <p className="text-slate-600">Shift Execution: 24 Hours / 7 Days a week</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </div>
  )
}
