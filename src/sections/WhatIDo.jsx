import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { socialLinks } from '../config/socialLinks'
import '../styles/what-i-do.css'

gsap.registerPlugin(ScrollTrigger)

const disciplines = [
  {
    visual: 'psychology', title: 'PSYCHOLOGY / RESEARCH', headline: 'I STARTED WITH PEOPLE.',
    metaLabel: 'EDUCATION', meta: 'Licenciado en Psicología — Universidad del Aconcagua, Mendoza',
    secondaryMeta: 'Máster en Terapia Cognitivo-Conductual — ISEP Barcelona',
    primary: 'My formal training covers human behavior, cognition and research. My quantitative thesis in Behavioral Economics studied representativeness, probabilistic reasoning and cognitive bias in 69 first-year Psychology and Engineering students.',
    secondary: 'Biases appeared substantially across both groups. That work taught me that decisions depend on heuristics, context and expectations—an understanding I now bring to UX, research and communication.',
    labels: ['Behavioral Economics', 'Cognitive Biases', 'Heuristics', 'Decision Making', 'Quantitative Research', 'Behavioral Observation', 'Interviewing', 'Human Behavior'],
  },
  {
    visual: 'ux', title: 'UX / PRODUCT', headline: 'I FIGURE OUT WHAT SHOULD BE BUILT.',
    metaLabel: 'PRIMARY EVIDENCE', meta: 'Next House Games — User research / Service design / Figma prototype',
    primary: 'After repeatedly observing conflict around an unclear first-come-first-served games system, I interviewed guests, staff and management before designing anything. The research surfaced real constraints around remote reservations, minimal personal data, on-site payment and equipment handling.',
    secondary: 'I designed and presented a flow from QR entry to temporary reservation, physical payment and confirmation. Unconfirmed slots would reopen 45 minutes before booking time.',
    status: 'APPROVED CONCEPT — AWAITING IMPLEMENTATION',
    labels: ['User Research', 'Guest Interviews', 'Stakeholder Interviews', 'User Flows', 'Service Design', 'Interaction Design', 'Prototyping', 'Figma'],
  },
  {
    visual: 'frontend', title: 'FRONT-END', headline: 'I LIKE BEING ABLE TO BUILD THE IDEA MYSELF.',
    metaLabel: 'CREDENTIAL', meta: 'Meta Front-End Developer Professional Certificate — Meta / Coursera',
    primary: 'The certificate gave me structured training in HTML, CSS, JavaScript, version control, React, advanced React and UX/UI principles. I continued learning by turning my own ideas into working projects.',
    secondary: 'Nexus Chat uses React, Vite, Tailwind, Firebase Cloud Functions, Node.js and the OpenAI API. Muzko Store combines React, TypeScript, Express and Mercado Pago. This portfolio is built with React, Vite and GSAP.',
    labels: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind', 'Node.js', 'Express', 'Firebase', 'REST APIs', 'Git / GitHub', 'Vite', 'GSAP', 'Framer Motion'],
  },
  {
    visual: 'marketing', title: 'MARKETING / CONTENT', headline: 'IDEAS STILL NEED ATTENTION.',
    metaLabel: 'PROFESSIONAL CONTEXT', meta: 'Next House Copenhagen — Marketing / Social Content',
    primary: 'I co-create the hotel’s published social content with one other team member across Instagram and TikTok. My role spans ideas, campaign concepts, scripts, filming, editing and publication-ready content.',
    secondary: 'The work includes reels, video, carousels, event promotion and influencer outreach—connecting creative production with the practical question of how to earn and hold attention.',
    cta: 'SEE THE WORK IN THE WILD ↗',
    labels: ['Content Creation', 'Campaign Concepts', 'Video / Reels', 'TikTok', 'Carousels', 'Copywriting', 'Influencer Outreach', 'Event Promotion', 'CapCut', 'Premiere Pro', 'After Effects', 'Illustrator', 'Canva', 'Figma'],
  },
  {
    visual: 'hospitality', title: 'HOSPITALITY / OPERATIONS', headline: 'WHERE THEORY MEETS REAL PEOPLE.',
    metaLabel: 'PROFESSIONAL CONTEXT', meta: 'Next House Copenhagen — Front Desk / Hospitality Operations',
    primary: 'Years in hospitality have given me direct experience with international guests, cross-cultural communication, operational pressure, conflict resolution, service recovery and recurring service friction.',
    secondary: 'It keeps my work grounded in real behavior and real constraints. It is also where I identified the problems that became Next House Games and Nexus Chat.',
    labels: ['Guest Experience', 'Operations', 'Service Recovery', 'Conflict Resolution', 'Night Audit', 'Cross-cultural Communication', 'Problem Solving', 'MEWS', 'Suite8', 'Oracle'],
  },
]

function WhatIDo() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const item = disciplines[active]
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => gsap.from('.discipline-row', { opacity: 0, y: 20, duration: .65, stagger: .07, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' } }), sectionRef)
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    if (!panelRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo(panelRef.current.querySelectorAll(':scope > *:not(.panel-watermark)'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .45, stagger: .035, ease: 'power3.out', overwrite: true })
  }, [active])

  return (
    <section className="what-i-do" id="disciplines" ref={sectionRef} aria-labelledby="disciplines-title">
      <div className="section-kicker"><span>CAPABILITIES</span></div>
      <div className="disciplines-layout">
        <div className="discipline-list"><h2 id="disciplines-title">WHAT I <em>BRING</em></h2><div role="tablist" aria-label="Disciplines">
          {disciplines.map(({ title }, index) => <button id={`discipline-${index}`} role="tab" aria-controls="discipline-panel" aria-selected={active === index} className={`discipline-row${active === index ? ' is-active' : ''}`} key={title} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}><strong>{title}</strong><span aria-hidden="true">↗</span></button>)}
        </div></div>
        <article className={`discipline-panel discipline-panel--${item.visual}`} id="discipline-panel" role="tabpanel" aria-labelledby={`discipline-${active}`} ref={panelRef} aria-live="polite">
          <div className="panel-watermark" aria-hidden="true"><i /><i /><i /><b>{item.visual === 'psychology' ? 'P(A)' : item.visual === 'frontend' ? '{ }' : item.visual === 'marketing' ? 'REC' : '→'}</b></div>
          <p className="discipline-eyebrow">{item.title}</p><h3>{item.headline}</h3>
          <div className="discipline-meta"><span>{item.metaLabel}</span><p>{item.meta}</p>{item.secondaryMeta && <p>{item.secondaryMeta}</p>}</div>
          <p className="discipline-summary">{item.primary}</p><p className="discipline-detail">{item.secondary}</p>
          {item.status && <p className="discipline-status">{item.status}</p>}
          {item.cta && <a className="discipline-cta" href={socialLinks.nextHouseInstagram} target="_blank" rel="noreferrer">{item.cta}</a>}
          <ul aria-label={`${item.title} skills`}>{item.labels.map((label) => <li key={label}>{label}</li>)}</ul>
        </article>
      </div>
    </section>
  )
}

export default WhatIDo
