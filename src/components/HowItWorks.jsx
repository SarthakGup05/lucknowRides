import { useEffect, useRef, useState } from 'react'

function HowItWorks() {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Start filling the timeline when the section top is near 70% viewport
      // Finish filling when the section bottom is near 30% viewport
      const startTrigger = windowHeight * 0.75
      const endTrigger = windowHeight * 0.25
      
      const totalDist = rect.height - (startTrigger - endTrigger)
      const scrolled = startTrigger - rect.top
      
      const pct = Math.max(0, Math.min(1, scrolled / totalDist))
      setScrollProgress(pct)
    }

    window.addEventListener('scroll', calculateProgress, { passive: true })
    window.addEventListener('resize', calculateProgress)
    calculateProgress()
    
    return () => {
      window.removeEventListener('scroll', calculateProgress)
      window.removeEventListener('resize', calculateProgress)
    }
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Choose Route',
      desc: 'Determine if your ride is Local (hourly package), Airport Transfer, or Outstation (intercity round-trip).',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.69C3.24 5.88 3 6.27 3 6.697v10.758c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      threshold: 0.1
    },
    {
      number: '02',
      title: 'Contact Us',
      desc: 'Tap to Call or send a quick WhatsApp specifying your pickup location and time.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      threshold: 0.38
    },
    {
      number: '03',
      title: 'Instant Assign',
      desc: 'Our support desk assigns the nearest professional driver and shares their contact and car details.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.5h.008v.008H10.5V9zm0 3h.008v.008H10.5V12zm0 3h.008v.008H10.5V15z" />
        </svg>
      ),
      threshold: 0.65
    },
    {
      number: '04',
      title: 'Arrive Safely',
      desc: 'Board your sanitized cab, track your live journey, and settle the fare via cash or UPI.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      threshold: 0.9
    }
  ]

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background SVG Grid Accents */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      {/* Warm Ambient Background Radial Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-150/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 md:mb-28">
          <span className="text-orange-600 text-xs font-black uppercase tracking-widest bg-orange-50 border border-orange-200/60 px-4 py-1.5 rounded-full inline-block">
            Simplifying Travel
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Your Ride in <span className="text-orange-600">Four Simple Steps</span>
          </h2>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed">
            No complex forms or mandatory logins. Get a premium cab confirmed instantly via a single tap.
          </p>
        </div>

        {/* ── TIMELINE CONTAINER ── */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Line (Desktop: center, Mobile: left-aligned) */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-4 bottom-4 w-[3px] bg-stone-100 rounded-full overflow-hidden">
            {/* Scroll-filled interactive path */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-400 via-orange-600 to-amber-500 rounded-full transition-all duration-150 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Scrolling active dot marker (Desktop-only) */}
          {scrollProgress > 0 && scrollProgress < 1 && (
            <div 
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-600 border-4 border-white shadow-lg shadow-orange-600/35 transition-all duration-100 z-20 pointer-events-none"
              style={{ top: `calc(${scrollProgress * 100}% + 16px)` }}
            />
          )}

          {/* Timeline Step Cards */}
          <div className="space-y-12 lg:space-y-20 relative">
            {steps.map((step, idx) => {
              const isActive = scrollProgress >= step.threshold
              const isEven = idx % 2 === 0

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } relative`}
                >
                  {/* Visual Node Dot on timeline line */}
                  <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-5 z-10 flex items-center justify-center">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-orange-600 border-orange-600 scale-125 shadow-lg shadow-orange-600/50' 
                        : 'bg-white border-stone-300'
                    }`} />
                  </div>

                  {/* Left Column (Empty on desktop for alignment, or used for Content depending on side) */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Right Column / Content Card */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12">
                    <div 
                      className={`text-left p-8 sm:p-10 rounded-3xl border transition-all duration-500 ${
                        isActive
                          ? 'bg-white border-orange-200/80 shadow-[0_20px_45px_rgba(234,88,12,0.06)] translate-y-[-4px] scale-[1.01]'
                          : 'bg-[#FAF8F5]/85 border-stone-200/50 opacity-60 scale-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-5">
                        {/* Elegant minimalist icon badge */}
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-orange-50 text-orange-600 shadow-sm' 
                            : 'bg-stone-100 text-stone-400'
                        }`}>
                          {step.icon}
                        </div>
                        {/* Modern bold number */}
                        <span className={`text-sm font-black tracking-widest uppercase transition-all duration-500 ${
                          isActive ? 'text-orange-600' : 'text-stone-300'
                        }`}>
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-3 transition-colors duration-500 ${
                        isActive ? 'text-stone-900' : 'text-stone-500'
                      }`}>
                        {step.title}
                      </h3>
                      
                      <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-500 ${
                        isActive ? 'text-stone-600' : 'text-stone-400'
                      }`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks
