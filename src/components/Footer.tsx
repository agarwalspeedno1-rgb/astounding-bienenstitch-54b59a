import { Link } from '@tanstack/react-router'
import { COMPANY, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 pb-24 pt-12 font-sans text-white lg:pb-12">
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-8 px-4 text-xs md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-black text-white">{COMPANY.shortName} Packers</div>
          <p className="leading-relaxed text-slate-400">
            Leading household packing and moving service provider operating across all main places in Hyderabad &
            Secunderabad.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold text-white">Quick Links</div>
          <div className="flex flex-col space-y-2 text-slate-300">
            <Link to="/" className="text-left hover:text-red-400">
              Home
            </Link>
            <Link to="/about" className="text-left hover:text-red-400">
              About Us
            </Link>
            <Link to="/services" className="text-left hover:text-red-400">
              Services
            </Link>
            <Link to="/gallery" className="text-left hover:text-red-400">
              Work Gallery
            </Link>
            <Link to="/faq" className="text-left hover:text-red-400">
              FAQ
            </Link>
            <Link to="/contact" className="text-left hover:text-red-400">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold text-white">Main Hyderabad Hubs</div>
          <p className="text-slate-400">Hitech City & Gachibowli</p>
          <p className="text-slate-400">Madhapur & Kondapur</p>
          <p className="text-slate-400">Alwal & Secunderabad</p>
          <p className="text-slate-400">Kukatpally & Miyapur</p>
          <p className="text-slate-400">Banjara & Jubilee Hills</p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold text-white">Alwal Head Office</div>
          <p className="leading-relaxed text-slate-400">{COMPANY.address}</p>
          <p className="font-bold text-slate-300">{COMPANY.phone}</p>
          <a href={`mailto:${COMPANY.email}`} className="block font-medium text-slate-300 hover:text-red-400">
            {COMPANY.email}
          </a>
          <a
            href={whatsappUrl('Hello, I would like to get a free quote for my shifting requirement.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pt-1 font-bold text-emerald-400 hover:underline"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Official WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-slate-800 px-4 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. • {COMPANY.shortAddress}
      </div>
    </footer>
  )
}
