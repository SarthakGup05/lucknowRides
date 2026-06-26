import { phoneNum, whatsappUrl } from '../utils/contact'
import Underline from './Underline'
import GridLines from './GridLines'
import TransparentCarImage from './TransparentCarImage'

function Fleet() {
  const fleetCars = [
    {
      name: 'Dzire / Etios',
      passengers: '4 Passengers',
      rate: '₹12.00',
      category: 'Sedan',
      categoryColor: 'bg-blue-600',
      image: '/dzire_sedan.png',
      whatsappParam: 'Dzire Sedan'
    },
    {
      name: 'Ertiga',
      passengers: '6-7 Passengers',
      rate: '₹14.00',
      category: 'SUV',
      categoryColor: 'bg-emerald-600',
      image: '/ertiga.png',
      whatsappParam: 'Ertiga SUV'
    },
    {
      name: 'Innova Crysta',
      passengers: '7-8 Passengers',
      rate: '₹18.00',
      category: 'SUV',
      categoryColor: 'bg-emerald-600',
      image: '/purepng.webp', // Already transparent
      whatsappParam: 'Innova Crysta SUV'
    },
    {
      name: 'Suzuki Fronx',
      passengers: '5 Passengers',
      rate: '₹7.00',
      category: 'Crossover',
      categoryColor: 'bg-orange-600',
      image: '/suzuki_fronx.png',
      whatsappParam: 'Suzuki Fronx'
    }
  ]

  return (
    <section id="fleet" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background decoration */}
      <GridLines opacity="opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/80 px-4 py-1 rounded-full">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest flex items-center gap-1">
               Our Fleet
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Choose Your <span className="text-orange-600">Ride</span>
          </h2>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetCars.map((car, idx) => (
            <div 
              key={idx}
              className="bg-white border border-stone-200 rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-between group"
            >
              
              {/* Image Container Section */}
              <div className="relative h-56 bg-stone-50/30 flex items-center justify-center p-6 overflow-hidden">
                {/* Clean Transparent Image processing component */}
                <TransparentCarImage 
                  src={car.image} 
                  alt={car.name}
                  className="w-[90%] max-h-[155px] object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
                />

                {/* Category Badge - Top Right */}
                <span className={`absolute top-5 right-5 ${car.categoryColor} text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm`}>
                  {car.category}
                </span>

                {/* Info Text Overlay - Bottom Left */}
                <div className="absolute bottom-5 left-5 text-left">
                  <h3 className="text-lg font-black text-stone-900 leading-tight">
                    {car.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-stone-400 mt-0.5">
                    {car.passengers}
                  </p>
                </div>
              </div>

              {/* Separator line like the reference image */}
              <div className="h-[1px] bg-stone-150 w-full" />

              {/* Bottom pricing row */}
              <div className="p-6 flex items-center justify-between bg-white">
                <div className="text-left">
                  <p className="text-2xl sm:text-3xl font-black text-orange-600 tracking-tight">
                    {car.rate}
                    <span className="text-xs font-semibold text-stone-400">/km</span>
                  </p>
                </div>
                
                <a 
                  href={whatsappUrl(car.whatsappParam)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs px-6 py-3 rounded-full shadow-md shadow-orange-600/10 transition-all active:scale-95 cursor-pointer"
                >
                  Book
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Footer info text */}
        <p className="text-xs text-stone-400 mt-12 max-w-xl mx-auto text-center leading-relaxed">
          *Rates exclude tolls, state tax, and parking charges. Need a custom quote? Book a <strong className="text-stone-500">car on rent in lucknow</strong> with Lucknow Rides for premium <strong className="text-stone-500">car rent in lucknow</strong> experience.
        </p>

      </div>
    </section>
  )
}

export default Fleet
