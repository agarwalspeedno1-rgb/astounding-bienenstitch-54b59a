import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'

interface InventoryCounts {
  beds: number
  sofas: number
  diningTables: number
  fridges: number
  washingMachines: number
  tvs: number
  acs: number
  boxes: number
  bikes: number
}

const DEFAULT_INVENTORY: InventoryCounts = {
  beds: 1,
  sofas: 1,
  diningTables: 1,
  fridges: 1,
  washingMachines: 1,
  tvs: 1,
  acs: 1,
  boxes: 12,
  bikes: 0,
}

const ITEM_FIELDS: Array<{ key: keyof InventoryCounts; label: string }> = [
  { key: 'beds', label: 'Beds / Cots' },
  { key: 'sofas', label: 'Sofa Sets' },
  { key: 'diningTables', label: 'Dining Table' },
  { key: 'fridges', label: 'Refrigerator' },
  { key: 'washingMachines', label: 'Washing Machine' },
  { key: 'tvs', label: 'TV / Electronics' },
  { key: 'acs', label: 'Air Conditioners' },
  { key: 'boxes', label: 'Carton Boxes' },
  { key: 'bikes', label: 'Two Wheeler / Bike' },
]

const CFT_PER_ITEM: InventoryCounts = {
  beds: 75,
  sofas: 60,
  diningTables: 40,
  fridges: 30,
  washingMachines: 25,
  tvs: 15,
  acs: 15,
  boxes: 5,
  bikes: 45,
}

export function InventoryEstimator() {
  const [inventory, setInventory] = useState<InventoryCounts>(DEFAULT_INVENTORY)
  const [floorLevel, setFloorLevel] = useState('1st Floor (Elevator)')
  const [promoCode, setPromoCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)
  const [promoMsg, setPromoMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  const updateQuantity = (key: keyof InventoryCounts, delta: number) => {
    setInventory((prev) => ({ ...prev, [key]: Math.max(0, prev[key] + delta) }))
  }

  const totalCFT = useMemo(() => {
    return ITEM_FIELDS.reduce((sum, { key }) => sum + inventory[key] * CFT_PER_ITEM[key], 0)
  }, [inventory])

  const calculation = useMemo(() => {
    let vehicle = 'Tata Ace / Pickup (7ft)'
    let basePrice = 3800
    let labor = '2 Packers & Movers'

    if (totalCFT > 150 && totalCFT <= 350) {
      vehicle = '14ft Covered Truck'
      basePrice = 6500
      labor = '3 Packers & Movers'
    } else if (totalCFT > 350 && totalCFT <= 650) {
      vehicle = '17ft Closed Container'
      basePrice = 10500
      labor = '4 Packers & Movers'
    } else if (totalCFT > 650) {
      vehicle = '19ft / 22ft Heavy Container'
      basePrice = 16000
      labor = '5 Packers & Skilled Carpenters'
    }

    if (floorLevel.includes('No Elevator')) {
      basePrice += 800
    }

    const discountMultiplier = discountApplied ? 0.9 : 1.0
    const finalMin = Math.round(basePrice * discountMultiplier)
    const finalMax = Math.round(basePrice * 1.25 * discountMultiplier)

    return { vehicle, labor, finalMin, finalMax }
  }, [totalCFT, floorLevel, discountApplied])

  const handleApplyCode = () => {
    if (promoCode.trim().toUpperCase() === 'SPEED10') {
      setDiscountApplied(true)
      setPromoMsg({ text: '10% Discount Applied!', type: 'success' })
    } else {
      setPromoMsg({ text: "Invalid coupon! Use 'SPEED10' for 10% OFF.", type: 'error' })
    }
  }

  return (
    <div className="space-y-6 rounded-2xl bg-slate-900 p-5 text-white shadow-xl sm:p-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-red-500" />
          <h3 className="text-base font-extrabold sm:text-lg">Interactive Room Inventory Calculator</h3>
        </div>
        <span className="rounded-full border border-red-500/30 bg-red-600/30 px-2.5 py-0.5 text-[10px] font-bold text-red-400">
          Live Volume CFT
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ITEM_FIELDS.map((item) => (
          <div
            key={item.key}
            className="flex flex-col justify-between rounded-xl border border-slate-700/60 bg-slate-800/80 p-2.5"
          >
            <span className="mb-2 truncate text-[11px] font-medium text-slate-300">{item.label}</span>
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-1">
              <button
                type="button"
                onClick={() => updateQuantity(item.key, -1)}
                className="flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-xs font-black text-slate-200 hover:bg-slate-700"
              >
                -
              </button>
              <span className="px-2 text-xs font-black text-red-400">{inventory[item.key]}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.key, 1)}
                className="flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-xs font-black text-slate-200 hover:bg-slate-700"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[11px] font-bold text-slate-400">Floor & Elevator Status</label>
          <select
            value={floorLevel}
            onChange={(e) => setFloorLevel(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-white px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            <option value="Ground Floor">Ground Floor</option>
            <option value="1st Floor (Elevator)">1st Floor (Elevator Available)</option>
            <option value="2nd Floor+ (Elevator)">2nd Floor+ (Elevator Available)</option>
            <option value="2nd Floor (No Elevator)">2nd Floor (Staircase / No Elevator)</option>
            <option value="3rd Floor+ (No Elevator)">3rd Floor+ (Staircase / No Elevator)</option>
          </select>
        </div>

        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="mb-1 block text-[11px] font-bold text-slate-400">Promo Code</label>
            <input
              type="text"
              placeholder="SPEED10"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-white px-3 py-2 text-xs uppercase text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <button
            type="button"
            onClick={handleApplyCode}
            className="h-[38px] rounded-xl bg-red-600 px-4 text-xs font-extrabold text-white transition-colors hover:bg-red-700"
          >
            Apply
          </button>
        </div>
      </div>

      {promoMsg && (
        <div
          className={`rounded-lg border px-3 py-1.5 text-[11px] font-bold ${
            promoMsg.type === 'success'
              ? 'border-emerald-500/40 bg-emerald-950/80 text-emerald-400'
              : 'border-red-500/40 bg-red-950/80 text-red-400'
          }`}
        >
          {promoMsg.text}
        </div>
      )}

      <div className="rounded-xl border border-red-500/30 bg-gradient-to-r from-red-950/60 via-slate-800 to-slate-900 p-4">
        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <div>
            <span className="block text-[10px] font-bold uppercase text-slate-400">Est. Volume</span>
            <span className="text-lg font-black text-white">
              {totalCFT} <span className="text-xs font-normal text-red-400">CFT</span>
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase text-slate-400">Vehicle Needed</span>
            <span className="mt-1 block text-xs font-bold leading-tight text-amber-300">
              {calculation.vehicle}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase text-slate-400">Recommended Labor</span>
            <span className="mt-1 block text-xs font-bold leading-tight text-emerald-400">
              {calculation.labor}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase text-slate-400">Est. Local Cost</span>
            <span className="text-base font-black text-white">
              ₹{calculation.finalMin.toLocaleString()} - ₹{calculation.finalMax.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
