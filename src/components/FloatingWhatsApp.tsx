import { whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl('Hello, I would like to get a free quote for my shifting requirement.')}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-20 right-4 z-50 flex items-center justify-center rounded-full border-2 border-white bg-emerald-600 p-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-700 lg:bottom-6 lg:right-6"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-extrabold transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:px-2">
        Chat on WhatsApp
      </span>
    </a>
  )
}
