import { useEffect, useRef, useState } from 'react'

function Reveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 700, 
  distance = '24px', 
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.05, // Trigger early when it just enters the screen
        rootMargin: '0px 0px -40px 0px' // Trigger slightly before it hits full view
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getTransform = () => {
    if (!isVisible) {
      if (direction === 'up') return `translateY(${distance})`
      if (direction === 'down') return `translateY(-${distance})`
      if (direction === 'left') return `translateX(${distance})`
      if (direction === 'right') return `translateX(-${distance})`
      return 'none'
    }
    return 'none'
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform'
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

export default Reveal
