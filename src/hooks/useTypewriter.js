import { useState, useEffect } from "react"

export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pause = 1800) {
  const [display, setDisplay] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed)
      } else {
        setWordIdx((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [display, typing, wordIdx, words, typeSpeed, deleteSpeed, pause])

  return display
}
