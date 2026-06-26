import Underline from './Underline'
import GridLines from './GridLines'

function Safety() {
  return (
    <section id="safety" className="py-20 bg-[#FAF8F5] relative">
      <GridLines opacity="opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Stats & Info */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-4">
              <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Drivers & Safety</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Professional drivers. <br />
                <span className="relative inline-block text-orange-600">Premium standards<Underline className="text-orange-600" /></span>.
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Every driver with Lucknow Rides undergoes rigorous background checks, document verification, and road tests. We ensure our cars are fully sanitized and air-conditioned to maintain excellent safety standards.
              </p>
            </div>

            {/* Grid of stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h4 className="text-2xl font-extrabold text-orange-600">12,400+</h4>
                <p className="text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider">Verified Drivers</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h4 className="text-2xl font-extrabold text-orange-600">4.9/5</h4>
                <p className="text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider">Average Rating</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h4 className="text-2xl font-extrabold text-orange-600">100%</h4>
                <p className="text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider">Background Checked</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h4 className="text-2xl font-extrabold text-orange-600">24/7</h4>
                <p className="text-xs font-bold text-stone-500 mt-1 uppercase tracking-wider">Support Team</p>
              </div>
            </div>
          </div>

          {/* Right: Driver Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 blur-2xl -z-10 rounded-full" />
            <div className="border border-stone-200 rounded-3xl overflow-hidden shadow-2xl relative bg-white p-3">
              <img 
                src="/driver_portrait.png" 
                alt=" Lucknow Rides Driver Representative" 
                className="w-full rounded-2xl object-cover h-[450px]"
              />
              
              {/* Floating Rating Tag */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md border border-stone-200/80 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <div>
                  <p className="text-xs font-extrabold text-stone-900">4.9 Star Rating</p>
                  <p className="text-[10px] text-stone-500">Verified Chauffeur</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Safety
