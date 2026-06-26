import { useEffect, useState } from 'react'
import { phoneNum, whatsappUrl } from '../utils/contact'

function FloatingActions() {
  const [scrollTarget, setScrollTarget] = useState('down') // 'down' to bottom, 'up' to top

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const totalScrollable = docHeight - winHeight

      if (totalScrollable > 0) {
        // If scrolled past 50% of the page, change target to scroll back 'up'
        if (scrollTop > totalScrollable / 2) {
          setScrollTarget('up')
        } else {
          setScrollTarget('down')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    if (scrollTarget === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-4 bottom-8 z-50 flex flex-col items-center gap-3 select-none">
      
      {/* ── Single Smart Scroll Action Button ── */}
      <button
        onClick={handleNavClick}
        aria-label={scrollTarget === 'up' ? 'Scroll to Top' : 'Scroll to Bottom'}
        className="w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(234,88,12,0.3)] cursor-pointer"
      >
        {scrollTarget === 'up' ? (
          <svg className="w-5 h-5 fill-none stroke-current stroke-3 animate-bounce" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        ) : (
          <svg className="w-5 h-5 fill-none stroke-current stroke-3 animate-bounce" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        )}
      </button>

      {/* ── Floating Contact Capsule ── */}
      <div className="flex flex-col bg-white/90 backdrop-blur-md border border-stone-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-full p-2.5 gap-2.5">
        
        {/* Call Button */}
        <div className="group relative flex items-center justify-center">
          <span className="absolute right-14 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
            Call Support
          </span>
          <span className="absolute inset-0 rounded-full bg-orange-600/10 animate-ping opacity-60" />
          <a
            href={`tel:${phoneNum}`}
            aria-label="Call Lucknow Rides Support"
            className="relative z-10 w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md shadow-orange-600/20"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11z"/>
            </svg>
          </a>
        </div>

        {/* Separator */}
        <div className="w-8 h-[1px] bg-stone-200/80 self-center" />

        {/* WhatsApp Button */}
        <div className="group relative flex items-center justify-center">
          <span className="absolute right-14 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
            WhatsApp Booking
          </span>
          <span className="absolute inset-0 rounded-full bg-emerald-500/15 animate-pulse" />
          <a
            href={whatsappUrl('Quick Floating Booking')}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp with Lucknow Rides"
            className="relative z-10 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-500/20"
          >
            <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.832L0 24l6.341-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.214-3.727.881.949-3.629-.236-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
          </a>
        </div>

      </div>

    </div>
  )
}

export default FloatingActions
