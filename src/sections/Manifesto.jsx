import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/manifesto.css'

gsap.registerPlugin(ScrollTrigger)

function Manifesto() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', { yPercent: 110, duration: 1, stagger: .1, ease: 'power4.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } })
      gsap.from('.manifesto-aside', { opacity: 0, y: 24, duration: .8, scrollTrigger: { trigger: '.manifesto-aside', start: 'top 88%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="manifesto" id="manifesto" ref={sectionRef} aria-labelledby="manifesto-title">
      <div className="section-kicker"><span>02</span><span>MANIFESTO</span></div>
      <h2 className="manifesto-title" id="manifesto-title">
        {['My career never', 'followed one', 'straight line.'].map((line) => <span className="manifesto-mask" key={line}><span className="manifesto-line">{line}</span></span>)}
      </h2>
      <div className="manifesto-aside"><span className="manifesto-rule" /><p>Psychology, technology, design, marketing and hospitality might look unrelated. Together, they taught me how to understand people, untangle problems and make digital experiences feel more human.</p></div>
    </section>
  )
}

export default Manifesto

