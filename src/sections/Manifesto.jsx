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
      gsap.from('.manifesto-line', { yPercent: 110, duration: 1, stagger: .1, ease: 'power4.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' } })
      gsap.from('.manifesto-copy', { opacity: 0, y: 28, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.manifesto-copy', start: 'top 86%' } })
      gsap.fromTo('.manifesto-glow', { scale: .8, opacity: .15 }, { scale: 1.15, opacity: .65, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: '55% center', end: 'bottom top', scrub: 1 } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="manifesto" id="manifesto" ref={sectionRef} aria-labelledby="manifesto-title">
      <div className="manifesto-glow" aria-hidden="true" />
      <div className="section-kicker light"><span>MANIFESTO</span></div>
      <h2 className="manifesto-title" id="manifesto-title">
        {['I DON’T REALLY', 'BELIEVE IN', 'BOXES.'].map((line) => <span className="manifesto-mask" key={line}><span className="manifesto-line">{line}</span></span>)}
      </h2>
      <div className="manifesto-copy"><p>I never quite fit into one box. Eventually, I stopped trying to.</p><p>What once looked like a scattered path became the reason I learned to see problems from more than one angle.</p><strong>NOT A STRAIGHT LINE.</strong></div>
    </section>
  )
}

export default Manifesto
