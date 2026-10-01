import { Phone, Truck } from 'lucide-react'
import { COMPANY, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useTrackModal } from '@/lib/track-modal-context'

export function MobileBottomBar() {
  const { open } = useTrackModal()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 gap-1.5 border-t border-slate-200 bg-white p-2 shadow-2xl lg:hidden">
      <a
        href={`tel:${COMPANY.phoneFormatted}`}
        className="flex items-center justify-center gap-1 rounded-xl bg-red-600 py-2.5 text-[11px] font-extrabold uppercase text-white shadow-md"
      >
        <Phone className="h-3.5 w-3.5" />
        <span>Call</span>
      </a>

      <button
        onClick={open}
        className="flex items-center justify-center gap-1 rounded-xl bg-slate-900 py-2.5 text-[11px] font-extrabold uppercase text-amber-400 shadow-md"
      >
        <Truck className="h-3.5 w-3.5" />
        <span>Track</span>
      </button>

      <a
        href={whatsappUrl('Hello, I would like to get a free quote for my shifting requirement.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 rounded-xl bg-emerald-600 py-2.5 text-[11px] font-extrabold uppercase text-white shadow-md"
      >
        <WhatsAppIcon className="h-3.5 w-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
