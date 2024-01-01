import { useState, useEffect } from 'react'

export default function ({ children }) {
  const [imgIndex, setImgIndex] = useState(0)
  useEffect(() => {
    if (imgIndex < 0) {
      setImgIndex(children - 1)
    }
    if (imgIndex >= children.length()) {
      setImgIndex(0)
    }
  }, [imgIndex])

  const nextImgIndex = () => {
    setImgIndex(imgIndex + 1)
  }
  const prevImgIndex = () => {
    setImgIndex(imgIndex - 1)
  }

  return (
    <div>
      <div>{children}</div>
      <button onClick={nextImgIndex}>{'>'}</button>
      <button onClick={prevImgIndex}>{'<'}</button>
    </div>
  )
}
