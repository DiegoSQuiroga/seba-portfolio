import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import '../styles/hero.css'

const capabilities = ['THAT.', 'DESIGN.', 'CODE.', 'PEOPLE.', 'RESEARCH.', 'CONTENT.', 'DATA.', 'IDEAS.']

function Hero() {
  const heroRef = useRef(null)
  const wordRef = useRef(null)
  const [active, setActive] = useState(0)
  const previous = useRef(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      gsap.set('.hero-capability, .hero-cta, .hero-scroll', { opacity: 0 })
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-meta > *', { yPercent: -120, duration: .65, stagger: .08 })
        .from('.hero-word .hero-glyph', { yPercent: 115, rotate: 4, duration: .95, stagger: .035 }, '-=.25')
        .from('.hero-rule', { scaleX: 0, duration: .9 }, '-=.62')
        .from('.hero-counter', { opacity: 0, x: -14, duration: .5 }, '-=.5')
        .to('.hero-capability', { opacity: 1, duration: .35, stagger: .045 }, '-=.25')
        .to('.hero-cta, .hero-scroll', { opacity: 1, duration: .5, stagger: .08 }, '-=.2')

      const switches = [
        gsap.delayedCall(2.1, () => setActive(1)),
        gsap.delayedCall(3.25, () => setActive(2)),
        gsap.delayedCall(4.4, () => setActive(3)),
        gsap.delayedCall(5.55, () => setActive(7)),
        gsap.delayedCall(6.8, () => setActive(0)),
      ]

      const stage = heroRef.current.querySelector('.hero-composition')
      const xTo = gsap.quickTo(stage, 'x', { duration: .8, ease: 'power3.out' })
      const yTo = gsap.quickTo(stage, 'y', { duration: .8, ease: 'power3.out' })
      const move = (event) => {
        xTo((event.clientX / window.innerWidth - .5) * 9)
        yTo((event.clientY / window.innerHeight - .5) * 6)
      }
      heroRef.current.addEventListener('pointermove', move)

      return () => {
        switches.forEach((switchCall) => switchCall.kill())
        heroRef.current?.removeEventListener('pointermove', move)
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!wordRef.current || previous.current === active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      previous.current = active
      return
    }

    const element = wordRef.current
    gsap.killTweensOf(element)
    gsap.fromTo(element, { yPercent: 105, rotate: 2, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: .65, ease: 'power4.out' })
    previous.current = active
  }, [active])

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
      <header className="hero-meta">
        <p>DIEGO SEBASTIAN QUIROGA</p>
        <p>DESIGN / CODE / PEOPLE</p>
        <p>PORTFOLIO / 2026</p>
      </header>

      <div className="hero-composition">
        <h1 className="hero-statement" id="hero-title" aria-label="I can probably do that.">
          <span className="hero-word" aria-hidden="true">{'I CAN'.split('').map((glyph, index) => <span className="hero-glyph" key={index}>{glyph === ' ' ? '\u00a0' : glyph}</span>)}</span>
          <span className="hero-word hero-word--probably" aria-hidden="true">{'PROBABLY'.split('').map((glyph, index) => <span className="hero-glyph" key={index}>{glyph}</span>)}</span>
          <span className="hero-do" aria-hidden="true">DO</span>
          <span className="hero-variable-mask" aria-hidden="true"><span className="hero-variable" ref={wordRef} key={capabilities[active]}>{capabilities[active]}</span></span>
        </h1>

        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-counter" aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(capabilities.length).padStart(2, '0')}</p>
      </div>

      <div className="hero-capabilities" aria-label="Explore disciplines">
        {capabilities.slice(1).map((capability, index) => (
          <button className={`hero-capability${active === index + 1 ? ' is-active' : ''}`} type="button" key={capability} onMouseEnter={() => setActive(index + 1)} onFocus={() => setActive(index + 1)} onClick={() => setActive(index + 1)} aria-pressed={active === index + 1}>
            <span>{String(index + 1).padStart(2, '0')}</span>{capability.replace('.', '')}
          </button>
        ))}
      </div>

      <div className="hero-footer">
        <a className="hero-cta" href="#work">SEE WHAT I MEAN <span aria-hidden="true">{'\u2198'}</span></a>
        <p className="hero-scroll">SCROLL TO TEST THAT CLAIM <span aria-hidden="true">{'\u2193'}</span></p>
      </div>
    </section>
  )
}

export default Hero

