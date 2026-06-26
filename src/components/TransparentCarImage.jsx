import { useEffect, useState } from 'react'

function TransparentCarImage({ src, alt, className, ...props }) {
  const [cleanedSrc, setCleanedSrc] = useState(src)

  useEffect(() => {
    // Only process local generated images that might contain checkerboard artifacts
    if (!src.includes('dzire_sedan') && !src.includes('ertiga_suv') && !src.includes('suzuki_fronx')) {
      setCleanedSrc(src)
      return
    }

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imgData.data
        const width = canvas.width
        const height = canvas.height
        const visited = new Uint8Array(width * height)
        const queue = []

        const getPixelIndex = (x, y) => (y * width + x) * 4
        
        // Helper to check if pixel is part of the checkerboard grid background (white/grey)
        const isBackground = (r, g, b) => {
          const isWhite = r > 235 && g > 235 && b > 235
          const isGrayGrid = Math.abs(r - 204) < 18 && Math.abs(g - 204) < 18 && Math.abs(b - 204) < 18
          const isAltGrayGrid = Math.abs(r - 192) < 18 && Math.abs(g - 192) < 18 && Math.abs(b - 192) < 18
          const isSoftGrayGrid = Math.abs(r - 238) < 12 && Math.abs(g - 238) < 12 && Math.abs(b - 238) < 12
          return isWhite || isGrayGrid || isAltGrayGrid || isSoftGrayGrid
        }

        // Initialize BFS from all borders
        for (let x = 0; x < width; x++) {
          queue.push([x, 0])
          queue.push([x, height - 1])
          visited[x] = 1
          visited[(height - 1) * width + x] = 1
        }
        for (let y = 1; y < height - 1; y++) {
          queue.push([0, y])
          queue.push([width - 1, y])
          visited[y * width] = 1
          visited[y * width + (width - 1)] = 1
        }

        let head = 0
        while (head < queue.length) {
          const [cx, cy] = queue[head++]
          const idx = getPixelIndex(cx, cy)
          const r = data[idx]
          const g = data[idx + 1]
          const b = data[idx + 2]

          if (isBackground(r, g, b)) {
            data[idx + 3] = 0 // transparent
            
            const neighbors = [
              [cx + 1, cy],
              [cx - 1, cy],
              [cx, cy + 1],
              [cx, cy - 1]
            ]
            for (const [nx, ny] of neighbors) {
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                const nIdx = ny * width + nx
                if (!visited[nIdx]) {
                  visited[nIdx] = 1
                  queue.push([nx, ny])
                }
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0)
        setCleanedSrc(canvas.toDataURL())
      } catch (e) {
        console.error("Failed to make image background transparent", e)
      }
    }
  }, [src])

  return <img src={cleanedSrc} alt={alt} className={className} {...props} />
}

export default TransparentCarImage
