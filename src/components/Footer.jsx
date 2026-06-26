import { phoneNum, formattedPhone, whatsappUrl } from '../utils/contact'

function Footer() {
  return (
    <>
      {/* FINAL CALL TO ACTION (Orange Gradient background) */}
      <section className="py-20 bg-gradient-to-tr from-orange-600 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Your Reliable Ride Starts Here.
          </h2>
          <p className="text-orange-50/90 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Skip the apps and forms. Connect with a live dispatcher now via call or WhatsApp to confirm your ride in Lucknow within 2 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${phoneNum}`}
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all active:scale-98 text-sm"
            >
              📞 Call to Book Now
            </a>
            <a 
              href={whatsappUrl('Quick Book')}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all active:scale-98 text-sm flex items-center justify-center gap-2"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            
            {/* Branding / Tagline */}
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-extrabold text-md shadow-lg shadow-orange-500/20">
                  L
                </div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Lucknow<span className="text-orange-500">Rides</span>
                </span>
              </a>
              <p className="text-xs text-stone-500 leading-relaxed">
                Premium outstation cabs, airport transfers, and local packages in Lucknow. Reliable taxi booking via direct Call or WhatsApp.
              </p>
              <div className="text-xs text-stone-400 font-semibold space-y-2">
                <div>
                  Phone: <a href={`tel:${phoneNum}`} className="hover:text-orange-500">{formattedPhone}</a>
                </div>
                <div className="text-stone-500 leading-relaxed text-[11px] font-normal">
                  <span className="font-semibold text-stone-400">Address:</span><br />
                  House no 647A/01, Near MDM academy,<br />
                  Jankipuram, Lucknow, Uttar Pradesh - 226021
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Services</h4>
              <ul className="text-xs space-y-2.5">
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Airport Pick & Drop</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Local City Commutes</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">Outstation Roundtrips</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition-colors">VIP Luxury Rentals</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Why Choose Us</h4>
              <ul className="text-xs space-y-2.5">
                <li><a href="#safety" className="hover:text-orange-500 transition-colors">Background-Checked Drivers</a></li>
                <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Zero Surge Guarantee</a></li>
                <li><a href="#safety" className="hover:text-orange-500 transition-colors">Fully Sanitized Fleets</a></li>
                <li><a href="#how-it-works" className="hover:text-orange-500 transition-colors">One-Tap Direct Bookings</a></li>
              </ul>
            </div>

            {/* Contact Support info */}
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Support</h4>
              <ul className="text-xs space-y-2.5">
                <li><a href={`tel:${phoneNum}`} className="hover:text-orange-500 transition-colors">24/7 Booking Hotline</a></li>
                <li><a href={whatsappUrl('Helpdesk')} className="hover:text-orange-500 transition-colors">WhatsApp Helpdesk</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-650">
            <p>&copy; {new Date().getFullYear()} Lucknow Rides. All rights reserved.</p>
            <p>
              <a 
                href="https://saarthak.xyz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-550 hover:text-orange-500 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Designed with <span className="text-red-500">❤️</span> by Saarthak
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
