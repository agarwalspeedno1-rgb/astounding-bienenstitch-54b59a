import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import { COMPANY, GALLERY_ITEMS } from '@/data/company'

export const Route = createFileRoute('/gallery')({
  head: () => {
    const pageTitle = `Work Gallery & Moving Photos | ${COMPANY.name}`
    const pageDesc =
      'Photos of our packing, loading, furniture assembly, and vehicle transport work across Hyderabad and Secunderabad.'
    const pageUrl = `${COMPANY.siteUrl}/gallery`
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
  component: GalleryPage,
})

const CATEGORIES = ['All', 'Packaging', 'Vehicles', 'Corporate', 'Furniture'] as const

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof CATEGORIES)[number]>('All')

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_ITEMS
    return GALLERY_ITEMS.filter((item) => item.cat === activeFilter)
  }, [activeFilter])

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 font-sans">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="rounded bg-red-50 px-2.5 py-1 text-xs font-bold uppercase text-red-600">
            Work Portfolio
          </span>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Packing & Shifting Live Gallery</h1>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Photos of our teams in action across Hyderabad and Secunderabad.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                activeFilter === cat ? 'bg-red-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-60 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-extrabold uppercase text-white backdrop-blur">
                {item.cat}
              </span>
            </div>
            <div className="space-y-1 p-4">
              <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
              <p className="flex items-center gap-1 text-xs font-medium text-red-600">
                <MapPin className="h-3.5 w-3.5" />
                <span>{item.loc}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
