import { phoneNum } from '../utils/contact'
import Underline from './Underline'
import Reveal from './Reveal'

function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
              Your Premium <span className="relative inline-block text-orange-600">Car Rental<Underline className="text-orange-600" /></span> in Lucknow
            </h2>
            <p className="text-stone-600 text-sm">
              Lucknow Rides is the leading <strong>car rental lucknow</strong> agency. Whether you require premium <strong>rental cars in lucknow</strong> for business travel, airport pickups, wedding events, or local city commuting, we have you covered.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Reveal direction="up" delay={0} className="h-full">
            <div className="h-full bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group text-left relative overflow-hidden">
              <span className="absolute top-4 right-6 text-stone-300 font-extrabold text-lg">01</span>
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Airport Transfers</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                On-time pickup/drop-off services at CCS International Airport, Amausi. Handled by professional chauffeurs.
              </p>
              <a href={`tel:${phoneNum}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Book Airport Ride &rarr;
              </a>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal direction="up" delay={100} className="h-full">
            <div className="h-full bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group text-left relative overflow-hidden">
              <span className="absolute top-4 right-6 text-stone-300 font-extrabold text-lg">02</span>
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">City Rides</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Convenient and clean cabs for daily commuting across Gomti Nagar, Hazratganj, Alambagh, and other parts of Lucknow.
              </p>
              <a href={`tel:${phoneNum}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Book City Ride &rarr;
              </a>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal direction="up" delay={200} className="h-full">
            <div className="h-full bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group text-left relative overflow-hidden">
              <span className="absolute top-4 right-6 text-stone-300 font-extrabold text-lg">03</span>
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Corporate Travel</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Monthly corporate tie-ups and reliable executive business rides. Streamlined billing and zero delays.
              </p>
              <a href={`tel:${phoneNum}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Corporate Cabs &rarr;
              </a>
            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal direction="up" delay={0} className="h-full">
            <div className="h-full bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group text-left relative overflow-hidden">
              <span className="absolute top-4 right-6 text-stone-300 font-extrabold text-lg">04</span>
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Luxury Rentals</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Travel in style for weddings, VIP guest hosting, or premium family gatherings in our high-end luxury car lineup.
              </p>
              <a href={`tel:${phoneNum}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Rent Luxury Cabs &rarr;
              </a>
            </div>
          </Reveal>

          {/* Card 5 */}
          <Reveal direction="up" delay={100} className="h-full">
            <div className="h-full bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group text-left relative overflow-hidden">
              <span className="absolute top-4 right-6 text-stone-300 font-extrabold text-lg">05</span>
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Hourly Bookings</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Retain a vehicle and chauffeur by the hour for local shopping sprees, dynamic business stops, or sightseeing.
              </p>
              <a href={`tel:${phoneNum}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Book by Hour &rarr;
              </a>
            </div>
          </Reveal>

          {/* Card 6 */}
          <Reveal direction="up" delay={200} className="h-full">
            <div className="h-full bg-[#FAF8F5]/80 border border-stone-200/80 p-8 rounded-2xl hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all group text-left relative overflow-hidden">
              <span className="absolute top-4 right-6 text-stone-300 font-extrabold text-lg">06</span>
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Group Transportation</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Spacious vans and tempo travelers for family vacations, wedding groups, or team-building retreats.
              </p>
              <a href={`tel:${phoneNum}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Book Group Ride &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Services
