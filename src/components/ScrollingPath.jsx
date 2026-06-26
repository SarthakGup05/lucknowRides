import { useEffect, useRef, useState } from 'react'

function ScrollingPath() {
  const pathRef = useRef(null)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [carPos, setCarPos] = useState({ x: 40, y: 0, angle: 90 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const totalScroll = docHeight - winHeight
      if (totalScroll > 0) {
        const pct = Math.max(0, Math.min(1, scrollTop / totalScroll))
        setScrollPercent(pct)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathRef.current) {
      try {
        const pathLength = pathRef.current.getTotalLength()
        const targetLength = pathLength * scrollPercent
        const point = pathRef.current.getPointAtLength(targetLength)

        const delta = 2 // pixels ahead/behind
        const prevLength = Math.max(0, targetLength - delta)
        const nextLength = Math.min(pathLength, targetLength + delta)
        
        const p1 = pathRef.current.getPointAtLength(prevLength)
        const p2 = pathRef.current.getPointAtLength(nextLength)
        
        const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI)
        
        setCarPos({ x: point.x, y: point.y, angle })
      } catch (e) {
        // Fallback
      }
    }
  }, [scrollPercent])

  const stops = [
    { label: 'Lucknow', percent: 0.05, y: 50 },
    { label: 'Ayodhya', percent: 0.45, y: 350 },
    { label: 'Varanasi', percent: 0.92, y: 720 }
  ]

  return (
    <div className="hidden xl:block fixed right-6 top-[10vh] h-[80vh] w-24 pointer-events-none z-40 select-none">
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-500/5 rounded-full blur-xl" />

        <svg 
          className="w-20 h-full overflow-visible"
          viewBox="0 0 80 800" 
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 40 10 
               C 10 120, 70 200, 40 320 
               C 10 440, 75 520, 35 640 
               C 10 720, 60 760, 40 790"
            fill="none"
            stroke="#292524"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <path
            d="M 40 10 
               C 10 120, 70 200, 40 320 
               C 10 440, 75 520, 35 640 
               C 10 720, 60 760, 40 790"
            fill="none"
            stroke="#eab308"
            strokeWidth="2.2"
            strokeDasharray="6, 8"
            strokeLinecap="round"
          />

          <path
            d="M 40 10 
               C 10 120, 70 200, 40 320 
               C 10 440, 75 520, 35 640 
               C 10 720, 60 760, 40 790"
            fill="none"
            stroke="#FAF8F5"
            strokeWidth="15"
            strokeDasharray="1, 100%"
            strokeLinecap="round"
            className="opacity-20"
          />

          {stops.map((stop, idx) => {
            const isActive = scrollPercent >= stop.percent - 0.15 && scrollPercent <= stop.percent + 0.15
            return (
              <g key={idx} className="transition-all duration-300">
                <circle 
                  cx={idx === 0 ? 38 : idx === 1 ? 40 : 41} 
                  cy={stop.y} 
                  r={isActive ? "10" : "7"} 
                  className={`fill-orange-500/20 stroke-orange-500/80 transition-all duration-300 ${isActive ? 'animate-pulse stroke-2' : 'stroke-1'}`}
                />
                <circle 
                  cx={idx === 0 ? 38 : idx === 1 ? 40 : 41} 
                  cy={stop.y} 
                  r="4" 
                  className="fill-white" 
                />
              </g>
            )
          })}
        </svg>

        {stops.map((stop, idx) => {
          const isActive = scrollPercent >= stop.percent - 0.15 && scrollPercent <= stop.percent + 0.15
          return (
            <div
              key={idx}
              className="absolute left-[-80px] -translate-y-1/2 flex items-center justify-end w-20 transition-all duration-300"
              style={{ top: `${(stop.y / 800) * 100}%` }}
            >
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border transition-all ${
                isActive 
                  ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/20 scale-105' 
                  : 'bg-white/80 text-stone-500 border-stone-200'
              }`}>
                {stop.label}
              </span>
            </div>
          )
        })}

        <div
          className="absolute z-10 w-9 h-9 flex items-center justify-center transition-transform duration-75"
          style={{
            left: '50%',
            top: `${(carPos.y / 800) * 100}%`,
            transform: `translate(-50%, -50%) rotate(${carPos.angle - 90}deg)`,
          }}
        >
          <div className="absolute w-6 h-6 bg-stone-900/40 rounded-full blur-[2px] translate-y-1 scale-x-125" />
          
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-7 h-7 text-orange-500 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          >
            <rect x="10" y="3" width="4" height="2" rx="0.5" fill="#facc15" stroke="#1c1917" strokeWidth="1" />
            <path 
              d="M19 8.5h-1.5l-1.8-3.2A1.5 1.5 0 0 0 14.4 4.5H9.6a1.5 1.5 0 0 0-1.3.8L6.5 8.5H5a2 2 0 0 0-2 2v4a1.5 1.5 0 0 0 1.5 1.5H5a2 2 0 0 0 4 0h6a2 2 0 0 0 4 0h.5a1.5 1.5 0 0 0 1.5-1.5v-4a2 2 0 0 0-2-2z" 
              fill="currentColor" 
              stroke="#1c1917" 
              strokeWidth="1.5" 
              strokeLinejoin="round" 
            />
            <path d="M8.8 5.7L10.1 8h3.8l1.3-2.3a.5.5 0 0 0-.4-.7H9.2a.5.5 0 0 0-.4.7z" fill="#FAF8F5" />
            <circle cx="7" cy="16" r="2" fill="#292524" stroke="#1c1917" strokeWidth="1" />
            <circle cx="17" cy="16" r="2" fill="#292524" stroke="#1c1917" strokeWidth="1" />
            <circle cx="7" cy="16" r="0.8" fill="#facc15" />
            <circle cx="17" cy="16" r="0.8" fill="#facc15" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default ScrollingPath
