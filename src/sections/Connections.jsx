import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import '../styles/connections.css'

const disciplines = ['PSYCHOLOGY', 'UX / PRODUCT', 'FRONT-END', 'MARKETING / CONTENT', 'HOSPITALITY']
const relationships = [
  { from: 'PSYCHOLOGY', to: 'UX / PRODUCT', transfer: 'BEHAVIOR BECOMES DESIGN', copy: 'Behavior, heuristics and decision-making help me design for how people actually behave—not how we assume they behave.', evidence: 'BEHAVIORAL ECONOMICS THESIS' },
  { from: 'HOSPITALITY', to: 'UX / PRODUCT', transfer: 'FRICTION BECOMES A PRODUCT QUESTION', copy: 'Direct contact with guests taught me to notice friction in real environments before turning a problem into an interface.', evidence: 'NEXT HOUSE GAMES' },
  { from: 'UX / PRODUCT', to: 'FRONT-END', transfer: 'INTENTION BECOMES IMPLEMENTATION', copy: 'Research and design give the build a reason to exist; technical understanding brings feasibility back into the design.', evidence: 'PROTOTYPES → WORKING EXPERIENCES' },
  { from: 'HOSPITALITY', to: 'FRONT-END', transfer: 'REPEATED NEEDS BECOME A TOOL', copy: 'Recurring guest questions and operational knowledge became the starting point for a conversational digital experience.', evidence: 'NEXUS' },
  { from: 'PSYCHOLOGY', to: 'MARKETING / CONTENT', transfer: 'ATTENTION BECOMES COMMUNICATION', copy: 'Behavior, perception and decision-making shape how I frame content—and content keeps clarity central to every experience.', evidence: 'NEXT HOUSE CONTENT' },
  { from: 'HOSPITALITY', to: 'MARKETING / CONTENT', transfer: 'REAL PEOPLE KEEP THE WORK HONEST', copy: 'Hospitality grounds communication in real contexts, real constraints and the consequences of whether people understand.', evidence: 'THE THREAD THROUGH EVERYTHING' },
]

function Connections() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const bridgeRef = useRef(null)
  const relationship = relationships[active]

  useEffect(() => {
    if (!bridgeRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo(bridgeRef.current.children, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .06, ease: 'power3.out', overwrite: true })
  }, [active])

  return (
    <section className="connections" ref={sectionRef} aria-labelledby="connections-title">
      <div className="connections-sticky">
        <p className="section-kicker light">HOW IT ALL CONNECTS</p>
        <h2 id="connections-title">THE VALUE ISN&rsquo;T IN THE DISCIPLINES.<br /><em>IT&rsquo;S IN WHAT HAPPENS BETWEEN THEM.</em></h2>
        <div className="connections-system">
          <div className="connection-nodes" aria-label="Disciplines">{disciplines.map((name) => <span className={name === relationship.from || name === relationship.to ? 'is-connected' : ''} key={name}>{name}</span>)}</div>
          <div className="relationship-picker" role="tablist" aria-label="Explore relationships">{relationships.map((item, index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)} key={`${item.from}-${item.to}`}>{item.from} <i>×</i> {item.to}</button>)}</div>
          <article className="connection-bridge" ref={bridgeRef} aria-live="polite"><p>{relationship.from} <span>→</span> {relationship.to}</p><h3>{relationship.transfer}</h3><p>{relationship.copy}</p><small>{relationship.evidence}</small></article>
        </div>
      </div>
    </section>
  )
}

export default Connections
