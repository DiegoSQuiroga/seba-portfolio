import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/portfolio.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-ribbon', { xPercent: -3 }, { xPercent: -12, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="about" ref={sectionRef} aria-labelledby="about-title">
      <div className="section-kicker"><span>05</span><span>ABOUT</span></div>
      <div className="about-grid">
        <h2 id="about-title">Not a straight line.<br /><em>A useful one.</em></h2>
        <div className="about-copy"><p>I&rsquo;ve moved through psychology, design, front-end, marketing and hospitality. Each field added a different way to notice what people need&mdash;and a practical instinct for making things work.</p><p>I&rsquo;m most at home where human behavior, visual ideas and useful technology overlap.</p></div>
      </div>
      <div className="about-ribbon-wrap"><p className="about-ribbon" aria-label="Psychology, Design, Front-end, Marketing, Hospitality">PSYCHOLOGY &middot; DESIGN &middot; FRONT-END &middot; MARKETING &middot; HOSPITALITY</p></div>
    </section>
  )
}

export default About

