import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import portrait from '../assets/images/me.png'
import '../styles/hero.css'

const contextWords = ['DO THAT.', 'UNDERSTAND IT.', 'DESIGN IT.', 'BUILD IT.', 'EXPLAIN IT.', 'FIX IT.']

function Hero() {
  const heroRef = useRef(null)
  const phraseRef = useRef(null)
  const [phrase, setPhrase] = useState(contextWords[0])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-meta > *', { yPercent: -130, duration: .7, stagger: .08 })
        .from('.hero-line-inner', { yPercent: 115, rotate: 2, duration: 1, stagger: .09 }, '-=.35')
        .from('.hero-context, .hero-footer', { opacity: 0, y: 14, duration: .65, stagger: .08 }, '-=.45')
      const composition = heroRef.current.querySelector('.hero-composition')
      const xTo = gsap.quickTo(composition, 'x', { duration: .9, ease: 'power3.out' })
      const yTo = gsap.quickTo(composition, 'y', { duration: .9, ease: 'power3.out' })
      const move = ({ clientX, clientY }) => {
        xTo((clientX / window.innerWidth - .5) * 10)
        yTo((clientY / window.innerHeight - .5) * 7)
      }
      heroRef.current.addEventListener('pointermove', move)
      return () => heroRef.current?.removeEventListener('pointermove', move)
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const selectPhrase = (nextPhrase) => {
    if (nextPhrase === phrase) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setPhrase(nextPhrase)
      return
    }
    gsap.to(phraseRef.current, { yPercent: -105, opacity: 0, duration: .18, ease: 'power2.in', onComplete: () => {
      setPhrase(nextPhrase)
      gsap.fromTo(phraseRef.current, { yPercent: 105, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .38, ease: 'power4.out' })
    } })
  }

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
      <header className="hero-meta"><p>DIEGO SEBASTIAN QUIROGA</p><p>COPENHAGEN</p><p>OPEN TO GOOD PROBLEMS</p></header>
      <figure className="hero-portrait"><img src={portrait} alt="Diego Sebastian Quiroga" /></figure>
      <div className="hero-composition">
        <h1 className="hero-statement" id="hero-title" aria-label={`I can probably ${phrase.toLowerCase()}`}>
          {['I CAN', 'PROBABLY'].map((line) => <span className="hero-line" key={line} aria-hidden="true"><span className="hero-line-inner">{line}</span></span>)}
          <span className={`hero-line hero-line--phrase${phrase === 'UNDERSTAND IT.' ? ' hero-line--understand' : ''}`} aria-hidden="true"><span className="hero-line-inner" ref={phraseRef}>{phrase}</span></span>
        </h1>
        <div className="hero-context" aria-label="Choose the hero statement">{contextWords.map((word) => <button type="button" className={phrase === word ? 'is-active' : ''} aria-pressed={phrase === word} onClick={() => selectPhrase(word)} key={word}>{word}</button>)}</div>
      </div>
      <div className="hero-footer"><a href="#disciplines">FOLLOW THE THREAD <span aria-hidden="true">↓</span></a><p>PEOPLE / IDEAS / SYSTEMS</p></div>
    </section>
  )
}

export default Hero
