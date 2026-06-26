function Underline({ className = "text-orange-500", h = "h-2.5" }) {
  return (
    <svg 
      className={`absolute left-0 -bottom-1.5 w-full ${h} ${className}`} 
      viewBox="0 0 100 10" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Hand-drawn organic curved underline path */}
      <path 
        d="M 2 8 C 30 2, 70 3, 98 8 C 80 5, 40 4, 15 7" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Underline
