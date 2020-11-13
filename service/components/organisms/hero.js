import React, { useEffect, useState } from 'react'

export default function Hero() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <section className="section-hero">
        <img
          src='/assets/images/hero/hero-home.jpg'
          alt="The HOPR-Token"
          className="parallax"
          style={{
            transform: `translateY(${offset * 0.08}px)`,
          }}
        />
        <div className="text-wrapper">
          <h4>The HOPR-Token</h4>
          <h1>Changing Data Privacy for Good</h1>
        </div>
        <div className="container-bottom">
          <div className="type-btn">
            <span>
            Get HOPR-Token on SECRET
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
