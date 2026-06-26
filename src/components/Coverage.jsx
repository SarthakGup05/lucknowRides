function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Coverage locations */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="space-y-4">
              <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">City Coverage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                Operating across all of Lucknow & major highway routes.
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                From dense commercial areas like Hazratganj and Aminabad to residential sectors like Gomti Nagar, Indira Nagar, and CCS Airport, we ensure rapid taxi pickups.
              </p>
            </div>

            {/* Location Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs font-bold text-stone-700">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Hazratganj
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Gomti Nagar
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Indira Nagar
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Alambagh
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                CCS Airport
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Jankipuram
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Aminabad
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Ashiyana
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                Charbagh
              </div>
            </div>
          </div>

          {/* Right: Map Graphic representation */}
          <div className="lg:col-span-6">
            <div className="border border-stone-200 rounded-3xl p-8 bg-[#FAF8F5] relative shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
              
              {/* Simulated Map Visual using CSS nodes */}
              <div className="relative h-64 w-full flex items-center justify-center">
                
                {/* Central Node */}
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center border border-orange-500/30 animate-pulse relative">
                  <div className="h-4 w-4 rounded-full bg-orange-600" />
                  <span className="absolute -bottom-6 text-[10px] font-black text-stone-900 whitespace-nowrap">Lucknow Central</span>
                </div>

                {/* Satellite nodes representing nearby cities */}
                <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-[9px] font-bold text-stone-500">Kanpur</span>
                </div>

                <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-[9px] font-bold text-stone-500">Ayodhya</span>
                </div>

                <div className="absolute top-[75%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-[9px] font-bold text-stone-500">Prayagraj</span>
                </div>

                <div className="absolute top-[75%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-[9px] font-bold text-stone-500">Varanasi</span>
                </div>

                {/* Linking Lines */}
                <svg className="absolute inset-0 w-full h-full text-orange-600/20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4">
                  <line x1="50%" y1="50%" x2="25%" y2="25%" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" />
                  <line x1="50%" y1="50%" x2="30%" y2="75%" />
                  <line x1="50%" y1="50%" x2="70%" y2="75%" />
                </svg>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/60 shadow-sm inline-block mt-4 text-xs font-bold text-stone-700">
                📍 Outstation highway rides coverage map
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Coverage
