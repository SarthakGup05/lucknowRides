import { phoneNum, formattedPhone } from '../utils/contact'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            L
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-900">
            Lucknow<span className="text-orange-600">Rides</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
          <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
          <a href="#fleet" className="hover:text-orange-600 transition-colors">Fleet</a>
          <a href="#how-it-works" className="hover:text-orange-600 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-orange-600 transition-colors">Pricing</a>
          <a href="#safety" className="hover:text-orange-600 transition-colors">Safety</a>
          <a href="#coverage" className="hover:text-orange-600 transition-colors">Coverage</a>
        </nav>

        {/* Call / WhatsApp CTAs */}
        <div className="flex items-center gap-3">
          <a 
            href={`tel:${phoneNum}`} 
            className="hidden lg:flex items-center gap-2 text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200/80 px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11z"/>
            </svg>
            {formattedPhone}
          </a>
          <a 
            href={`tel:${phoneNum}`}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-orange-600/10 hover:shadow-orange-600/20 transition-all flex items-center gap-1.5"
          >
            Call to Book
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
