import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ux from '../assets/images/ux-product.png'
import frontend from '../assets/images/frontend-development.png'
import psychology from '../assets/images/psychology.png'
import marketing from '../assets/images/marketing-content.png'
import hospitality from '../assets/images/hospitality-operations.png'
import '../styles/what-i-do.css'

gsap.registerPlugin(ScrollTrigger)

const disciplines = [
  ['01', 'UX / PRODUCT DESIGN', ux],
  ['02', 'FRONT-END DEVELOPMENT', frontend],
  ['03', 'PSYCHOLOGY / RESEARCH', psychology],
  ['04', 'MARKETING / CONTENT', marketing],
  ['05', 'HOSPITALITY / OPERATIONS', hospitality],
]

function WhatIDo() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => gsap.from('.discipline-row', { opacity: 0, y: 26, duration: .7, stagger: .08, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' } }), sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="what-i-do" id="disciplines" ref={sectionRef} aria-labelledby="disciplines-title">
      <div className="section-kicker"><span>03</span><span>WHAT I DO</span></div>
      <div className="disciplines-layout">
        <div className="discipline-list">
          <h2 id="disciplines-title">Different lenses.<br /><em>One practice.</em></h2>
          {disciplines.map(([number, title], index) => (
            <button className={`discipline-row${active === index ? ' is-active' : ''}`} key={title} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} aria-pressed={active === index}>
              <span>{number}</span><strong>{title}</strong><span>↗</span>
            </button>
          ))}
        </div>
        <figure className="discipline-visual" aria-live="polite">
          {disciplines.map(([, title, image], index) => <img key={title} className={active === index ? 'is-active' : ''} src={image} alt={`${title} in practice`} />)}
          <figcaption><span>{disciplines[active][0]} / 05</span><span>MOVE BETWEEN DISCIPLINES</span></figcaption>
        </figure>
      </div>
    </section>
  )
}

export default WhatIDo

