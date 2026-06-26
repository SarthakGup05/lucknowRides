function GridLines({ className = "", animated = false }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {/* inner div is 60px larger on all sides so drift animation never shows a hard edge */}
      <div
        className={animated ? 'animate-grid-drift' : ''}
        style={{ position: 'absolute', inset: '-60px' }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full text-orange-600/15"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Main grid pattern with dots at intersections */}
            <pattern id="decorative-grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="2.5" fill="currentColor" />
            </pattern>
            {/* A much softer radial mask that preserves grid visibility on sides */}
            <radialGradient id="decorative-fade-grad" cx="50%" cy="30%" r="85%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.7" />
              <stop offset="100%" stopColor="white" stopOpacity="0.25" />
            </radialGradient>
            <mask id="decorative-fade-mask">
              <rect width="100%" height="100%" fill="url(#decorative-fade-grad)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#decorative-grid-pattern)" mask="url(#decorative-fade-mask)" />
        </svg>
      </div>
    </div>
  )
}

export default GridLines
