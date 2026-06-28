import { useState } from 'react'
import { phoneNum, whatsappUrl } from '../utils/contact'
import Underline from './Underline'
import GridLines from './GridLines'

function Hero() {
  const [activeTab, setActiveTab] = useState('local')

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] min-h-[90vh] flex flex-col">
      {/* ── Animated grid ── */}
      <GridLines animated={true} />

      {/* ── Deep orange radial glow top-right ── */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-30 -z-10"
        style={{ background: 'radial-gradient(circle, #fb923c 0%, #fdba74 30%, transparent 70%)' }}
      />
      {/* ── Soft amber glow top-left ── */}
      <div
        className="pointer-events-none absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }}
      />

      {/* ════════════════════════════════════════
          MAIN HERO CONTENT
          ════════════════════════════════════════ */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 lg:pt-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* ──────────────── LEFT COLUMN ──────────────── */}
          <div className="space-y-8 text-left">

            {/* Badge pill */}
            <div className="animate-fade-up inline-flex items-center gap-2.5 bg-orange-100 border border-orange-300/60 px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600" />
              </span>
              <span className="text-xs font-black text-orange-700 uppercase tracking-widest">#1 Taxi Service in Lucknow</span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up-d1 space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.1] sm:leading-[1.05]">
                Best{' '}
                <span className="text-orange-600">Taxi</span>
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05]">
                <span className="relative inline-block font-serif italic text-orange-600 text-glow-orange">
                  Service
                  <Underline className="text-orange-500" h="h-2.5 sm:h-3" />
                </span>
                <span className="text-stone-900"> in Lucknow</span>
              </h1>
            </div>

            {/* Description */}
            <p className="animate-fade-up-d2 text-sm sm:text-base lg:text-lg text-stone-500 leading-relaxed max-w-lg">
              Need a reliable <strong className="text-stone-700">taxi service in lucknow</strong>? Lucknow Rides offers the
              simplest <strong className="text-stone-700">cab booking</strong> and premium{' '}
              <strong className="text-stone-700">car booking lucknow</strong> experience. Book local or outstation rides instantly
              via Call or WhatsApp. Enjoy transparent rates and background-checked chauffeurs.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up-d3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={`tel:${phoneNum}`}
                className="inline-flex items-center justify-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-7 py-4 rounded-2xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all text-sm active:scale-95 w-full sm:w-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11z"/>
                </svg>
                Call to Book Now
              </a>
              <a
                href={whatsappUrl('Quick Book')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-stone-300 hover:border-orange-500 text-stone-800 hover:text-orange-600 font-bold px-7 py-4 rounded-2xl transition-all text-sm active:scale-95 w-full sm:w-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L0 24l6.341-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.214-3.727.881.949-3.629-.236-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* ── Stats row ── */}
            <div className="animate-fade-up-d4 flex flex-wrap items-center gap-2 pt-4 border-t border-stone-200/80">
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-black text-stone-800 ml-1">4.9 Rating</span>
              <span className="text-stone-300 mx-1 font-light">•</span>
              <span className="text-xs text-stone-500 font-semibold">38,000+ Happy Customers</span>
            </div>
          </div>

          {/* ──────────────── RIGHT COLUMN — Car showcase ──────────────── */}
          <div className="animate-fade-in-right relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">

            {/* Outer halo glow disc */}
            <div
              className="animate-halo-pulse absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.22) 0%, transparent 70%)' }}
            />

            {/* Car PNG — floating */}
            <div className="animate-float-bob relative z-10 w-full max-w-[580px] px-2 sm:px-0">
              <img
                src="https://p.kindpng.com/picc/s/217-2175123_swift-dzire-car-india-png-download-new-swift.png"
                alt="Lucknow Rides premium orange taxi"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(234,88,12,0.3)]"
              />

              {/* ── Floating "Driver dispatched" pill ── */}
              <div className="absolute top-4 left-2 sm:-left-4 lg:-left-10 bg-white/95 backdrop-blur border border-stone-200/80 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl flex items-center gap-2.5 sm:gap-3 animate-fade-up-d3">
                <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div>
                  <p className="text-[10px] sm:text-xs font-black text-stone-900">Driver Dispatched</p>
                  <p className="text-[9px] sm:text-[10px] text-stone-400 font-medium">Toyota Etios — 3 min away</p>
                </div>
              </div>

              {/* ── Floating "Rating" chip ── */}
              <div className="absolute bottom-10 right-2 sm:-right-2 lg:-right-8 bg-orange-600 text-white rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-2.5 animate-fade-up-d4">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <div>
                  <p className="text-[10px] sm:text-xs font-black">4.9 / 5 Stars</p>
                  <p className="text-[9px] sm:text-[10px] text-orange-200">38k+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            STAT CARDS ROW — below the two columns
            ════════════════════════════════════════ */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl lg:max-w-none">
          <div className="animate-stat-pop-1 bg-white border border-stone-200/80 rounded-2xl p-4 text-left shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-orange-600">4.9<span className="text-sm font-semibold text-stone-400">/5</span></p>
              <p className="text-xs text-stone-500 font-bold mt-0.5">38k+ Happy Reviews</p>
            </div>
          </div>
          <div className="animate-stat-pop-2 bg-white border border-stone-200/80 rounded-2xl p-4 text-left shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-orange-600">100%</p>
              <p className="text-xs text-stone-500 font-bold mt-0.5">Insured & Inspected</p>
            </div>
          </div>
          <div className="animate-stat-pop-3 bg-white border border-stone-200/80 rounded-2xl p-4 text-left shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-orange-600">3 Min</p>
              <p className="text-xs text-stone-500 font-bold mt-0.5">Average Pickup Time</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
