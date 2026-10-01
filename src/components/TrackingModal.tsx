import { useState } from 'react'
import { Search, Truck, X } from 'lucide-react'
import { COMPANY, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useTrackModal } from '@/lib/track-modal-context'

export function TrackingModal() {
  const { isOpen, close } = useTrackModal()
  const [bookingId, setBookingId] = useState('')

  if (!isOpen) return null

  const trimmedId = bookingId.trim()
  const message = trimmedId
    ? `Hello, please share the live status of my shipment. Booking / LR number: ${trimmedId.toUpperCase()}`
    : 'Hello, please share the live status of my shipment. My booking / LR number is:'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracking-modal-title"
    >
      <div className="relative w-full max-w-md space-y-5 rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={close}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-1 text-slate-400 hover:text-slate-800"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-red-100 p-2.5 text-red-600">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <h3 id="tracking-modal-title" className="text-lg font-black text-slate-900">
              Check Shipment Status
            </h3>
            <p className="text-xs text-slate-500">
              Enter the booking / LR number from your receipt and our team will confirm the status
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="booking-id" className="block text-xs font-bold text-slate-700">
            Booking / LR Number
          </label>
          <input
            id="booking-id"
            type="text"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            placeholder="e.g. ASPM-9842"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 font-mono text-xs uppercase text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Ask on WhatsApp</span>
          </a>
          <a
            href={`tel:${COMPANY.phoneFormatted}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-slate-800"
          >
            <Search className="h-4 w-4" />
            <span>Call for Status</span>
          </a>
        </div>

        <p className="text-center text-[11px] text-slate-400">
          Our dispatch team can confirm pickup, transit, and delivery status for any active booking.
        </p>
      </div>
    </div>
  )
}
