import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Menu, Phone, Truck, X } from 'lucide-react'
import { COMPANY, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useTrackModal } from '@/lib/track-modal-context'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { open: openTrackModal } = useTrackModal()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-900 px-4 py-2 text-xs font-medium text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${COMPANY.phoneFormatted}`}
              className="flex items-center gap-1.5 transition-colors hover:text-red-400"
            >
              <Phone className="h-3.5 w-3.5 text-red-500" />
              <span>{COMPANY.phone}</span>
            </a>
            <span className="hidden text-slate-700 md:inline">|</span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-red-400 sm:flex"
            >
              <Mail className="h-3.5 w-3.5 text-red-500" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="hidden text-slate-700 md:inline">|</span>
            <div className="hidden items-center gap-1.5 text-slate-300 lg:flex">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-red-500" />
              <span className="max-w-md truncate">{COMPANY.shortAddress}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openTrackModal}
              className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-bold text-amber-300 transition-colors hover:text-amber-200"
            >
              <Truck className="h-3.5 w-3.5 text-amber-400" />
              <span>Track Shipment</span>
            </button>
            <a
              href={whatsappUrl('Hello, I would like to get a free quote for my shifting requirement.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition-all hover:bg-emerald-700"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 text-left">
          <img src="/logo.png" alt={`${COMPANY.name} logo`} className="h-14 w-auto sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="pb-1 text-xs font-extrabold uppercase tracking-wider text-slate-700 transition-colors hover:text-red-600"
              activeProps={{ className: 'border-b-2 border-red-600 text-red-600' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/quote"
            className="rounded-xl bg-red-600 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700"
          >
            Get Free Quote
          </Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-800 hover:bg-slate-100 lg:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="space-y-3 border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full border-b border-slate-50 py-2 text-left text-sm font-bold text-slate-800"
            >
              {item.label}
            </Link>
          ))}
          <div className="space-y-1 pt-2 text-xs text-slate-600">
            <p className="font-bold text-slate-900">Alwal Office Branch:</p>
            <p>{COMPANY.address}</p>
            <p className="pt-1">
              <a href={`mailto:${COMPANY.email}`} className="font-semibold text-red-600">
                {COMPANY.email}
              </a>
            </p>
          </div>
          <button
            onClick={() => {
              openTrackModal()
              setMobileMenuOpen(false)
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-bold uppercase text-white shadow"
          >
            <Truck className="h-4 w-4 text-amber-400" />
            <span>Track Live Consignment</span>
          </button>
        </div>
      )}
    </header>
  )
}
