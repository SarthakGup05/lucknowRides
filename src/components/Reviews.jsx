function Reviews() {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left space-y-4">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Trusted In The City</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
              Riders who never go back.
            </h2>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm font-extrabold text-stone-800 ml-1">4.9</span>
            <span className="text-xs font-semibold text-stone-500">from 38,000+ reviews</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl text-left space-y-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-stone-600 text-sm italic leading-relaxed">
              "Booked an airport pickup from Hazratganj to CCS Airport. The cab was spotlessly clean, arrived 10 minutes early, and driver behaved very professionally. Settle fare via UPI. Will definitely use again."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">
                SR
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Sofia Reyes</h4>
                <p className="text-[10px] text-stone-500">Frequent Traveler</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl text-left space-y-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-stone-600 text-sm italic leading-relaxed">
              "We shifted our complete corporate business travel bookings to Lucknow Rides. Their centralized monthly invoices are perfect, and drivers are very punctual. Saved hours of expense tracking."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">
                JW
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">James Whitman</h4>
                <p className="text-[10px] text-stone-500">Corporate Administrator</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl text-left space-y-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-stone-600 text-sm italic leading-relaxed">
              "Took a round-trip outstation cab from Lucknow to Ayodhya. The drive was smooth and the driver knew the route perfectly. Chilled AC made the highway heat bearable. Very happy with the flat fare quote!"
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">
                AK
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900">Aisha Khan</h4>
                <p className="text-[10px] text-stone-500">Local Commuter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
