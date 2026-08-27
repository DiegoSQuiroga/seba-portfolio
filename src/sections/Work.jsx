import { useEffect, useRef, useState } from 'react'
import nexthouseGames from '../assets/images/nexthousegames.png'
import nexusVideo from '../assets/images/nexusperro.mp4'
import muzko from '../assets/images/muzco.png'
import nexthouseContent from '../assets/images/nexthouse.png'
import { socialLinks } from '../config/socialLinks'
import '../styles/portfolio.css'

const projects = [
  { title: 'NEXT HOUSE GAMES', category: 'UX / PRODUCT / SERVICE DESIGN', copy: 'A researched reservation concept for hostel games, designed around real guest, staff and payment constraints.', meta: 'APPROVED CONCEPT — AWAITING IMPLEMENTATION', visual: 'nhg', image: nexthouseGames },
  { title: 'NEXUS', category: 'AI / FRONT-END / HOSPITALITY', copy: 'A conversational hostel assistant shaped by recurring guest questions and operational knowledge.', meta: 'REACT / FIREBASE / OPENAI API / NODE.JS / VITE / TAILWIND', visual: 'nexus', video: nexusVideo },
  { title: 'MUZKO', category: 'FULL-STACK LEARNING PROJECT', copy: 'An e-commerce build created to learn the practical relationship between interface, routing, APIs and payments.', meta: 'REACT / TYPESCRIPT / REACT ROUTER / TAILWIND / NODE.JS / EXPRESS / MERCADO PAGO / FRAMER MOTION', visual: 'muzko', image: muzko },
  { title: 'NEXT HOUSE CONTENT', category: 'MARKETING / CONTENT', copy: 'Published social content co-created with one other team member for Next House Copenhagen.', meta: 'CAMPAIGNS / VIDEO / REELS / COPY / EDITING', visual: 'content', image: nexthouseContent, href: socialLinks.nextHouseInstagram, linkLabel: 'SEE THE WORK IN THE WILD ↗' },
  { title: 'THIS PORTFOLIO', category: 'DESIGN / FRONT-END / CREATIVE DEVELOPMENT', copy: 'An editorial narrative connecting a multidisciplinary path through typography, interaction and code.', meta: 'REACT / VITE / GSAP', visual: 'portfolio' },
]

function Work() {
  const [active, setActive] = useState(0)
  const videoRef = useRef(null)
  const project = projects[active]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduceMotion) video.play().catch(() => {})
    return () => {
      video.pause()
      video.currentTime = 0
    }
  }, [active])

  return (
    <section className={`work work--${project.visual}`} id="work" aria-labelledby="work-title">
      <div className="section-kicker light">SELECTED WORK</div>
      <div className="work-layout">
        <div className="work-list"><h2 id="work-title">THINGS I&rsquo;VE<br /><em>MADE REAL.</em></h2>
          <div role="tablist" aria-label="Selected projects">{projects.map((item, index) => <button key={item.title} role="tab" aria-selected={active === index} aria-controls="project-preview" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={active === index ? 'is-active' : ''}><span>{item.title}</span><small>{item.category}</small></button>)}</div>
        </div>
        <article className={`work-preview work-preview--${project.visual}`} id="project-preview" role="tabpanel" aria-live="polite">
          <div className={`work-preview-visual${project.image || project.video ? ' has-media' : ''}`} key={project.title} aria-hidden="true">
            {project.image && <img src={project.image} alt="" />}
            {project.video && <video ref={videoRef} src={project.video} muted loop playsInline preload="metadata" />}
            {!project.image && !project.video && <span>{project.title}</span>}
          </div>
          <p>{project.category}</p><h3>{project.title}</h3><p>{project.copy}</p><small>{project.meta}</small>
          <a href={project.href || '#contact'} target={project.href ? '_blank' : undefined} rel={project.href ? 'noreferrer' : undefined}>{project.linkLabel || 'ASK ME ABOUT IT ↗'}</a>
        </article>
      </div>
    </section>
  )
}

export default Work
