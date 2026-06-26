import { phoneNum, whatsappUrl } from "../utils/contact";
import Underline from "./Underline";
import GridLines from "./GridLines";
import TransparentCarImage from "./TransparentCarImage";
import Reveal from "./Reveal";

function Fleet() {
  const fleetCars = [
    {
      name: "Dzire / Etios",
      passengers: "4 Passengers",
      rate: "₹12.00",
      category: "Sedan",
      categoryColor: "bg-blue-600",
      image: "/deziree-1773751828.webp",
      whatsappParam: "Dzire Sedan",
    },
    {
      name: "Ertiga",
      passengers: "6-7 Passengers",
      rate: "₹14.00",
      category: "SUV",
      categoryColor: "bg-emerald-600",
      image: "/ertgg-1773753428.webp",
      whatsappParam: "Ertiga SUV",
    },
    {
      name: "Innova Crysta",
      passengers: "7-8 Passengers",
      rate: "₹18.00",
      category: "SUV",
      categoryColor: "bg-emerald-600",
      image: "/innova-1773751600.webp", // Already transparent
      whatsappParam: "Innova Crysta SUV",
    },
    {
      name: "Suzuki Fronx",
      passengers: "5 Passengers",
      rate: "₹7.00",
      category: "Crossover",
      categoryColor: "bg-orange-600",
      image: "/fornox.webp",
      whatsappParam: "Suzuki Fronx",
    },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fleetCars.map((car, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 100} className="h-full">
              <div
                className="bg-white border border-stone-200/80 rounded-[2rem] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.08)] hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-between group relative h-full pb-6"
              >
                {/* Image Container Section */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-stone-100 shrink-0">
                  {/* Standard image with full background */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Category Badge - Glassmorphic Top Right */}
                  <span className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    {car.category}
                  </span>
                </div>

                {/* Bottom content section (Curved Overlap) */}
                <div className="bg-white rounded-t-[2rem] p-4 sm:p-5 relative z-10 -mt-6 flex-1 flex flex-col justify-between border-t border-stone-100/50 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
                  <div className="text-left space-y-1 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {car.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        {car.passengers}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-100/80 gap-2">
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider leading-none">
                        Rate starts at
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-orange-600 tracking-tight mt-1 leading-none">
                        {car.rate}
                        <span className="text-xs font-semibold text-stone-450 ml-0.5">
                          /km
                        </span>
                      </p>
                    </div>

                    <a
                      href={whatsappUrl(car.whatsappParam)}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-orange-600 hover:bg-orange-700 hover:scale-[1.03] active:scale-95 text-white font-extrabold text-[10px] sm:text-xs px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md shadow-orange-600/10 hover:shadow-orange-600/20 transition-all cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <span>Book</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer info text */}
        <p className="text-xs text-stone-400 mt-12 max-w-xl mx-auto text-center leading-relaxed">
          *Rates exclude tolls, state tax, and parking charges. Need a custom
          quote? Book a{" "}
          <strong className="text-stone-500">car on rent in lucknow</strong>{" "}
          with Lucknow Rides for premium{" "}
          <strong className="text-stone-500">car rent in lucknow</strong>{" "}
          experience.
        </p>
      </div>
    </section>
  );
}

export default Fleet;
