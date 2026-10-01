import { Star } from 'lucide-react'
import { REVIEWS } from '@/data/company'

export function CustomerReviews() {
  return (
    <section className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl space-y-8 px-4">
        <div className="space-y-2 text-center">
          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold uppercase text-red-600">
            Real Customer Ratings
          </span>
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            Trusted By 5,000+ Families in Hyderabad
          </h2>
          <p className="mx-auto max-w-xl text-xs text-slate-600 sm:text-sm">
            Ratings from local residents shifting across Alwal, Hitech City, Gachibowli, Kukatpally and Pan-India.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((rev) => (
            <div
              key={rev.name}
              className="flex flex-col justify-between space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs italic leading-relaxed text-slate-700">&ldquo;{rev.comment}&rdquo;</p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-xs">
                <div>
                  <span className="block font-extrabold text-slate-900">{rev.name}</span>
                  <span className="block text-[10px] font-medium text-red-600">{rev.location}</span>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
