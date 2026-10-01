import { Link, createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, MapPin, Phone, Shield, Truck } from 'lucide-react'
import { COMPANY, PACKING_TYPES, SERVICES, SERVICE_AREAS, whatsappUrl } from '@/data/company'
import { QuoteForm } from '@/components/QuoteForm'
import { CustomerReviews } from '@/components/CustomerReviews'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useTrackModal } from '@/lib/track-modal-context'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: `${COMPANY.name} | Packers and Movers in Hyderabad & Secunderabad` },
      {
        name: 'description',
        content:
          'Government-approved packers and movers based in Alwal, Secunderabad, serving all of Hyderabad. Household shifting, office relocation, car transport, and warehousing with zero-damage guarantee.',
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  const { open: openTrackModal } = useTrackModal()

  return (
    <div className="space-y-16 pb-12 font-sans">
      <section className="relative overflow-hidden bg-slate-900 py-12 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400">
              <Shield className="h-4 w-4" />
              <span>Government Approved & Certified Relocation Movers</span>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Best Packers & Movers in <span className="text-red-500">Hyderabad & Secunderabad</span>
            </h1>

            <div className="flex items-start gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 p-3 text-xs text-slate-300 backdrop-blur">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              <div>
                <span className="block font-extrabold text-white">Head Office Location:</span>
                <span>{COMPANY.address}</span>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Professional household shifting, office relocation, car carrier transport, and warehouse storage
              serving <strong>Alwal, Hitech City, Gachibowli, Madhapur, Kondapur, Kukatpally, Jubilee Hills,
              Miyapur, Kompally, LB Nagar</strong> and all major places in Hyderabad.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl('Hello, I would like to get a free quote for my shifting requirement.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-emerald-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>WhatsApp Instant Quote</span>
              </a>

              <button
                onClick={openTrackModal}
                className="flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-amber-700"
              >
                <Truck className="h-4 w-4" />
                <span>Track Shipment</span>
              </button>

              <a
                href={`tel:${COMPANY.phoneFormatted}`}
                className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                <span>Call Hotline</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-6 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />
                <span>Zero Damage Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />
                <span>3-Layer Bubble Wrap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />
                <span>Waterproof Trucks</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-4">
        <div className="space-y-2 text-center">
          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold uppercase text-red-600">
            Local Coverage Area
          </span>
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            Serving All Main Places in <span className="text-red-600">Hyderabad & Secunderabad</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-slate-600 sm:text-sm">
            We provide fast, same-day house shifting and packing services across all major tech hubs, residential
            colonies, and commercial centers in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SERVICE_AREAS.map((place) => (
            <div
              key={place.name}
              className={`rounded-xl border p-3 text-center transition-all hover:scale-105 ${
                place.popular ? 'border-red-200 bg-red-50/70 shadow-sm' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-1 flex justify-center">
                <MapPin className={`h-4 w-4 ${place.popular ? 'text-red-600' : 'text-slate-400'}`} />
              </div>
              <span className="block truncate text-xs font-extrabold text-slate-900">{place.name}</span>
              <span className="block text-[10px] text-slate-500">{place.zone}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl space-y-8 px-4">
          <div className="space-y-2 text-center">
            <span className="rounded-full border border-red-800/50 bg-red-950/80 px-3 py-1 text-xs font-bold uppercase text-red-400">
              Professional Packing Quality
            </span>
            <h2 className="text-3xl font-black text-white">Our Packing & Moving Types</h2>
            <p className="mx-auto max-w-xl text-xs text-slate-400 sm:text-sm">
              Trained uniformed packers using high-grade multi-layer bubble wrap, edge protectors, and corrugated
              cartons.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKING_TYPES.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition-all hover:border-red-500/50"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-black uppercase text-white shadow-md">
                      {item.badge}
                    </span>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="text-base font-extrabold text-white">{item.title}</h3>
                    <p className="text-[11px] font-bold text-red-400">{item.subtitle}</p>
                    <p className="pt-1 text-xs leading-relaxed text-slate-300">{item.desc}</p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={whatsappUrl(`Hi, I am interested in ${item.title} packing service in Hyderabad`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span>Inquire Packing Cost</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="mb-10 space-y-2 text-center">
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase text-red-600">
            Our Core Services
          </span>
          <h2 className="text-3xl font-black text-slate-900">Relocation Services We Offer</h2>
          <p className="mx-auto max-w-xl text-xs text-slate-600 sm:text-sm">
            High quality multi-layer bubble packing, trained floor labor, and sealed transport trucks from Padmavathi
            Nagar Colony, Alwal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-extrabold uppercase text-white shadow-md">
                    Verified Service
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-extrabold text-slate-900">{service.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{service.shortDesc}</p>

                  <div className="space-y-1.5 pt-2">
                    {service.features.slice(0, 2).map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 p-5 pt-0">
                <a
                  href={whatsappUrl(`Hi, I want to book ${service.title} in Hyderabad`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 rounded-xl bg-emerald-600 py-2.5 text-[11px] font-extrabold text-white transition-colors hover:bg-emerald-700"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  to="/services"
                  className="flex items-center justify-center gap-1 rounded-xl bg-slate-900 py-2.5 text-[11px] font-extrabold text-white transition-colors hover:bg-red-600"
                >
                  <span>View Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CustomerReviews />

      <section className="border-y border-slate-200 bg-slate-100 py-12">
        <div className="mx-auto max-w-7xl space-y-10 px-4">
          <div className="space-y-2 text-center">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase text-red-600">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-black text-slate-900">100% Safe Shifting Guarantee</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">Full Transit Cover</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Complete road insurance policies for total peace of mind against unforeseen damages.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">3-Layer Bubble Wrap</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Heavy-duty corrugated sheets, bubble wrap, and stretch film for all fragile items.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">Dedicated Fleet</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Closed waterproof container trucks with hydraulic loading ramps for vehicle safety.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-amber-500">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">Local Hyderabad Staff</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Uniformed, background-verified packers and carpenter technicians for furniture assembly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
