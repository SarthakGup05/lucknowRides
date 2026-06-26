import { phoneNum, whatsappUrl } from '../utils/contact'
import Underline from './Underline'
import GridLines from './GridLines'
import Reveal from './Reveal'

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#FAF8F5] relative">
      <GridLines opacity="opacity-[0.06]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">Clear Fares</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
              <span className="relative inline-block text-orange-600">Fixed fares<Underline className="text-orange-600" /></span>. No surge. Ever.
            </h2>
            <p className="text-stone-600">
              Check out our standard base rates. What we quote over call or WhatsApp is what you pay. No hidden charges.
            </p>
          </div>
        </Reveal>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Price 1 */}
          <Reveal direction="up" delay={0} className="h-full flex">
            <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-md flex flex-col justify-between text-left w-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">City Local</h3>
                  <p className="text-xs text-stone-500 mt-1">Standard sedan, anywhere in city</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-stone-900">₹149</span>
                  <span className="text-xs font-semibold text-stone-500">/ base drop</span>
                </div>
                <ul className="space-y-3 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <li className="flex items-center gap-2">✓ Safe point-to-point drop</li>
                  <li className="flex items-center gap-2">✓ AC sedan (Dzire/Etios)</li>
                  <li className="flex items-center gap-2">✓ No booking cancel fee</li>
                  <li className="flex items-center gap-2">✓ Cash or Online UPI payment</li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href={`tel:${phoneNum}`}
                  className="w-full flex items-center justify-center gap-2 border border-stone-300 hover:border-orange-600 hover:text-orange-600 text-stone-900 font-bold py-3 rounded-xl text-xs transition-all"
                >
                  Call Base Rate
                </a>
              </div>
            </div>
          </Reveal>

          {/* Price 2 - Highlighted */}
          <Reveal direction="up" delay={100} className="h-full flex relative z-20">
            <div className="bg-white border-2 border-orange-600 rounded-3xl p-8 shadow-xl flex flex-col justify-between text-left relative transform scale-102 w-full">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-orange-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                Most Booked
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Airport Transfer</h3>
                  <p className="text-xs text-stone-500 mt-1">CCS Airport pick & drop</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-orange-600">₹599</span>
                  <span className="text-xs font-semibold text-stone-500">/ flat fare</span>
                </div>
                <ul className="space-y-3 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <li className="flex items-center gap-2">✓ Toll taxes included</li>
                  <li className="flex items-center gap-2">✓ Flight tracking included</li>
                  <li className="flex items-center gap-2">✓ 60 min free wait time</li>
                  <li className="flex items-center gap-2">✓ Meet & Greet service</li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href={whatsappUrl('Airport')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-orange-600/10"
                >
                  WhatsApp Book Airport
                </a>
              </div>
            </div>
          </Reveal>

          {/* Price 3 */}
          <Reveal direction="up" delay={200} className="h-full flex">
            <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-md flex flex-col justify-between text-left w-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Outstation Cabs</h3>
                  <p className="text-xs text-stone-500 mt-1">Highway intercity trips</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-stone-900">₹11</span>
                  <span className="text-xs font-semibold text-stone-500">/ km base</span>
                </div>
                <ul className="space-y-3 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <li className="flex items-center gap-2">✓ Neat hatch/sedan/SUV</li>
                  <li className="flex items-center gap-2">✓ Certified highway driver</li>
                  <li className="flex items-center gap-2">✓ Round-trip or One-way</li>
                  <li className="flex items-center gap-2">✓ Fixed pricing policy</li>
                </ul>
              </div>
              <div className="pt-8">
                <a 
                  href={`tel:${phoneNum}`}
                  className="w-full flex items-center justify-center gap-2 border border-stone-300 hover:border-orange-600 hover:text-orange-600 text-stone-900 font-bold py-3 rounded-xl text-xs transition-all"
                >
                  Call Outstation Quote
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Pricing
