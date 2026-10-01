import { useState } from 'react'
import { ChevronRight, Calculator } from 'lucide-react'
import { SERVICE_AREAS, whatsappUrl } from '@/data/company'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { InventoryEstimator } from '@/components/InventoryEstimator'

function encodeFormData(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

interface QuoteFormData {
  name: string
  mobile: string
  fromLocation: string
  toLocation: string
  moveType: string
  moveDate: string
}

const INITIAL_FORM: QuoteFormData = {
  name: '',
  mobile: '',
  fromLocation: 'Alwal & Padmavathi Nagar',
  toLocation: 'Hitech City',
  moveType: '1 BHK House',
  moveDate: '',
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM)
  const [estimatedCost, setEstimatedCost] = useState<{ min: number; max: number } | null>(null)
  const [showAdvancedCalculator, setShowAdvancedCalculator] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const calculateEstimate = () => {
    let base = 4500
    if (formData.moveType.includes('2 BHK')) base = 7500
    if (formData.moveType.includes('3 BHK')) base = 12000
    if (formData.moveType.includes('Office')) base = 15000
    if (formData.moveType.includes('Car')) base = 8500

    const toLower = formData.toLocation.toLowerCase()
    const isIntercity =
      !toLower.includes('hyderabad') && !toLower.includes('secunderabad') && !toLower.includes('alwal')
    const multiplier = isIntercity ? 2.2 : 1.0
    const total = Math.round(base * multiplier)

    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.15),
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const estimate = calculateEstimate()
    setEstimatedCost(estimate)
    setSubmitStatus('sending')

    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'quote-request',
          'bot-field': '',
          ...formData,
          estimateMin: String(estimate.min),
          estimateMax: String(estimate.max),
        }),
      })
      setSubmitStatus('sent')
    } catch {
      setSubmitStatus('error')
    }
  }

  const constructWhatsAppMessage = () => {
    const msg =
      `Hi Agarwal Speed Packers & Movers (Alwal Branch),\nI need shifting quotation:\n` +
      `Name: ${formData.name || 'Not provided'}\n` +
      `Phone: ${formData.mobile || 'Not provided'}\n` +
      `From: ${formData.fromLocation}\n` +
      `To: ${formData.toLocation}\n` +
      `Type: ${formData.moveType}\n` +
      `Date: ${formData.moveDate || 'Flexible'}`
    return whatsappUrl(msg)
  }

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-extrabold uppercase text-red-700">
            Instant Hyderabad Estimate
          </span>
          <h3 className="mt-1 text-xl font-black text-slate-900">Get Free Moving Quote</h3>
        </div>
        <button
          onClick={() => setShowAdvancedCalculator(!showAdvancedCalculator)}
          className="flex items-center gap-1 rounded-xl bg-red-50 p-2 text-xs font-bold text-red-600 transition-colors hover:text-red-700"
        >
          <Calculator className="h-4 w-4" />
          <span>{showAdvancedCalculator ? 'Simple Form' : 'Item Calculator'}</span>
        </button>
      </div>

      {showAdvancedCalculator ? (
        <InventoryEstimator />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700">Mobile Number</label>
              <input
                type="tel"
                required
                placeholder="e.g. 9142776932"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700">Move From (Area)</label>
              <select
                value={formData.fromLocation}
                onChange={(e) => setFormData({ ...formData, fromLocation: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {SERVICE_AREAS.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name} ({p.zone})
                  </option>
                ))}
                <option value="Other Area in Hyderabad">Other Area in Hyderabad</option>
                <option value="Outside Hyderabad / Intercity">Outside Hyderabad (Intercity)</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700">Move To (Area / City)</label>
              <select
                value={formData.toLocation}
                onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {SERVICE_AREAS.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name} ({p.zone})
                  </option>
                ))}
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai / Pune">Mumbai / Pune</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Other Pan-India City">Other Pan-India City</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700">Shifting Type</label>
              <select
                value={formData.moveType}
                onChange={(e) => setFormData({ ...formData, moveType: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="1 BHK House">1 BHK House Shifting</option>
                <option value="2 BHK House">2 BHK House Shifting</option>
                <option value="3 BHK House">3 BHK House Shifting</option>
                <option value="4+ BHK / Villa">4+ BHK / Villa</option>
                <option value="Office Relocation">Office Relocation</option>
                <option value="Car & Bike Transport">Car & Bike Transport</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-700">Shifting Date</label>
              <input
                type="date"
                value={formData.moveDate}
                onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitStatus === 'sending'}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-black uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg disabled:opacity-70"
          >
            <span>{submitStatus === 'sending' ? 'Sending...' : 'Calculate Estimated Cost'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>

          {submitStatus === 'error' && (
            <p className="text-center text-[11px] font-bold text-red-600">
              Could not send your request automatically — please tap WhatsApp below to reach us directly.
            </p>
          )}

          {estimatedCost && (
            <div className="mt-4 space-y-3 rounded-xl border border-red-200 bg-red-50 p-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                Estimated Price Range
              </span>
              <p className="text-2xl font-black text-slate-900">
                ₹{estimatedCost.min.toLocaleString()} - ₹{estimatedCost.max.toLocaleString()}*
              </p>
              <p className="text-[11px] text-slate-500">
                Includes complete 3-layer packing, labor loading, transit, and unloading.
                {submitStatus === 'sent' && ' Our team has received your request and will confirm shortly.'}
              </p>
              <a
                href={constructWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Lock Price & Book on WhatsApp</span>
              </a>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
