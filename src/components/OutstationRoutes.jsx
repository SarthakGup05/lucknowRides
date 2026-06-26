import { useState, useRef, useEffect } from 'react'
import { phoneNum, whatsappUrl } from '../utils/contact'
import Underline from './Underline'
import GridLines from './GridLines'

function OutstationRoutes() {
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true)
  const [routeFilter, setRouteFilter] = useState('all')

  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (current) {
      const scrollAmount = 340
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (!isCarouselPlaying) return
    const interval = setInterval(() => {
      const { current } = scrollRef
      if (current) {
        const { scrollLeft, scrollWidth, clientWidth } = current
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scroll('right')
        }
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [isCarouselPlaying])

  const allRoutes = [
    {
      id: 1,
      title: "Lucknow to Ayodhya",
      tag: "SPIRITUAL",
      category: "spiritual",
      distance: "135 km",
      duration: "2.5 Hours",
      price: "₹3,000",
      image: "/ayodhya_temple.png"
    },
    {
      id: 2,
      title: "Lucknow to Prayagraj",
      tag: "SPIRITUAL",
      category: "spiritual",
      distance: "200 km",
      duration: "3.5 Hours",
      price: "₹4,000",
      image: "/prayagraj_sangam.png"
    },
    {
      id: 3,
      title: "Lucknow to Varanasi",
      tag: "SPIRITUAL",
      category: "spiritual",
      distance: "320 km",
      duration: "4.5 Hours",
      price: "₹5,000",
      image: "/varanasi_ghats.png"
    },
    {
      id: 4,
      title: "Lucknow to Agra",
      tag: "HISTORICAL",
      category: "city",
      distance: "330 km",
      duration: "5.5 Hours",
      price: "₹6,500",
      image: "/agra_taj.png"
    },
    {
      id: 5,
      title: "Lucknow to Delhi",
      tag: "MAJOR CITY",
      category: "city",
      distance: "555 km",
      duration: "7.5 Hours",
      price: "₹8,000",
      image: "/delhi_gate.png"
    },
    {
      id: 6,
      title: "Lucknow to Nainital",
      tag: "HILL STATION",
      category: "hills",
      distance: "410 km",
      duration: "7 Hours",
      price: "₹8,000",
      image: "/nainital_lake.png"
    },
    {
      id: 7,
      title: "Lucknow to Haridwar",
      tag: "SPIRITUAL",
      category: "spiritual",
      distance: "512 km",
      duration: "9.5 Hours",
      price: "₹8,500",
      image: "/haridwar_ghat.png"
    },
    {
      id: 8,
      title: "Lucknow to Mathura",
      tag: "SPIRITUAL",
      category: "spiritual",
      distance: "290 km",
      duration: "4.5 Hours",
      price: "₹7,500",
      image: "/mathura_temple.png"
    },
    {
      id: 9,
      title: "Lucknow to Gorakhpur",
      tag: "POPULAR",
      category: "city",
      distance: "313 km",
      duration: "5 Hours",
      price: "₹5,500",
      image: "/gorakhpur_temple.png"
    },
    {
      id: 10,
      title: "Lucknow to Jhansi",
      tag: "POPULAR",
      category: "city",
      distance: "315 km",
      duration: "6.5 Hours",
      price: "₹6,000",
      image: "/jhansi_fort.png"
    },
    {
      id: 11,
      title: "Lucknow to Haldwani",
      tag: "HILL STATION",
      category: "hills",
      distance: "360 km",
      duration: "7 Hours",
      price: "₹7,000",
      image: "/haldwani_hills.png"
    },
    {
      id: 12,
      title: "Lucknow to Azamgarh",
      tag: "POPULAR",
      category: "city",
      distance: "261 km",
      duration: "3 Hours",
      price: "₹5,500",
      image: "/azamgarh_landscape.png"
    }
  ]

  const trendingRoutes = allRoutes.slice(0, 4)

  const filteredRoutes = allRoutes.filter(route => {
    if (routeFilter === 'all') return true
    return route.category === routeFilter
  })

  return (
    <section id="trending-routes" className="py-16 bg-[#FAF8F5] relative overflow-hidden">
      <GridLines opacity="opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Trending <span className="relative inline-block text-orange-600 font-serif italic text-glow-orange">Outstation<Underline className="text-orange-600" /></span> Routes
          </h2>
          
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Play/Pause Autoplay Control */}
            <button 
              onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}
              className="h-10 w-10 rounded-full border border-stone-300 hover:border-orange-600 bg-white flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all cursor-pointer"
              title={isCarouselPlaying ? "Pause Autoplay" : "Play Autoplay"}
            >
              {isCarouselPlaying ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Scroll Left */}
            <button 
              onClick={() => {
                setIsCarouselPlaying(false)
                scroll('left')
              }}
              className="h-10 w-10 rounded-full border border-stone-300 hover:border-orange-600 bg-white flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all cursor-pointer"
              title="Scroll Left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scroll Right */}
            <button 
              onClick={() => {
                setIsCarouselPlaying(false)
                scroll('right')
              }}
              className="h-10 w-10 rounded-full border border-stone-300 hover:border-orange-600 bg-white flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all cursor-pointer"
              title="Scroll Right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x scrollbar-none pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingRoutes.map((route) => (
            <a 
              key={route.id}
              href={whatsappUrl(`${route.title} Outstation`)}
              target="_blank"
              rel="noreferrer"
              className="relative w-[290px] sm:w-[316px] h-[420px] rounded-3xl overflow-hidden shrink-0 snap-start shadow-lg hover:shadow-2xl border border-stone-200/50 transition-all duration-300 group block"
            >
              <img 
                src={route.image} 
                alt={route.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10" />
              <span className="absolute top-5 right-5 bg-orange-600 text-white font-extrabold text-[9px] tracking-widest px-3 py-1 rounded-full uppercase z-20 shadow-md shadow-orange-600/10">
                {route.tag}
              </span>
              <div className="absolute inset-x-6 bottom-6 z-20 flex flex-col justify-end text-left space-y-3.5">
                <div className="flex items-center gap-1.5 text-stone-300 text-xs font-semibold">
                  <span>Lucknow</span>
                  <span className="h-[1px] w-6 bg-stone-500/80"></span>
                  <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>{route.title.split(' to ')[1]}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {route.title}
                </h3>
                <div className="flex items-center gap-4 text-stone-300 text-[11px] font-bold">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {route.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {route.duration}
                  </span>
                </div>
                <div className="flex items-end justify-between pt-1 border-t border-white/10">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-extrabold text-stone-400 uppercase tracking-widest">Starts From</span>
                    <p className="text-xl font-extrabold text-white">{route.price}</p>
                  </div>
                  <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center text-stone-900 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-stone-200/80 my-16"></div>

        {/* Section Header: Explore All Outstation Routes */}
        <div id="all-routes" className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 text-left">
          <div className="space-y-3">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Outstation Coverage</span>
            <h3 className="text-3xl font-extrabold text-stone-900">
              Explore Fixed Fare Outstation Routes
            </h3>
            <p className="text-stone-600 max-w-2xl text-sm leading-relaxed">
              Choose from our popular destinations. Flat pricing with neat air-conditioned cabs, professional drivers, and direct Call/WhatsApp booking hooks.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 bg-stone-100 p-1.5 rounded-2xl self-start lg:self-auto shrink-0">
            <button 
              onClick={() => setRouteFilter('all')}
              className={`py-1.5 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer ${routeFilter === 'all' ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-500 hover:text-stone-800'}`}
            >
              All
            </button>
            <button 
              onClick={() => setRouteFilter('spiritual')}
              className={`py-1.5 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer ${routeFilter === 'spiritual' ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-500 hover:text-stone-850'}`}
            >
              Spiritual
            </button>
            <button 
              onClick={() => setRouteFilter('hills')}
              className={`py-1.5 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer ${routeFilter === 'hills' ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-500 hover:text-stone-850'}`}
            >
              Hill Stations
            </button>
            <button 
              onClick={() => setRouteFilter('city')}
              className={`py-1.5 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer ${routeFilter === 'city' ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-500 hover:text-stone-850'}`}
            >
              Major Cities
            </button>
          </div>
        </div>

        {/* Grid Layout (inspired by second screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route) => (
            <div 
              key={route.id}
              className="bg-white border border-stone-200/80 p-4 rounded-2xl flex gap-4 items-center shadow-sm hover:shadow-lg hover:border-orange-500/20 transition-all duration-305 transition-all duration-300 group"
            >
              <img 
                src={route.image} 
                alt={route.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between h-full text-left space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                      {route.title.replace('Lucknow to ', 'Lucknow → ')}
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 text-[9px] px-2 py-0.5 rounded font-extrabold uppercase shrink-0">
                      Popular
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500 text-[10px] font-semibold font-sans">
                    <svg className="w-3.5 h-3.5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                    <span>{route.distance}</span>
                    <span className="text-stone-300">|</span>
                    <svg className="w-3.5 h-3.5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    <span>{route.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-100">
                  <span className="text-base font-black text-orange-600">{route.price}</span>
                  <div className="flex gap-1.5">
                    <a 
                      href={`tel:${phoneNum}`}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-850 font-bold py-1.5 px-3 rounded-lg text-[10px] transition-colors border border-stone-200 cursor-pointer"
                    >
                      Book Now
                    </a>
                    <a 
                      href={whatsappUrl(`${route.title} Outstation`)}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-1.5 px-3 rounded-lg text-[10px] transition-colors"
                    >
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OutstationRoutes
