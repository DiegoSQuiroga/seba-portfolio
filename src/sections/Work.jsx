import nexthouse from '../assets/images/nexthousegames.png'
import '../styles/portfolio.css'

const projects = [
  { number: '01', title: 'NEXT HOUSE GAMES', category: 'Product Design / Front-End', copy: 'A digital booking experience for pool, darts, shuffleboard and ping-pong in a hostel environment.', meta: 'Product thinking / Interface design / Front-end', mark: 'NHG', image: nexthouse },
  { number: '02', title: 'PERSONAL PORTFOLIO', category: 'UI Design / Creative Development', copy: 'An editorial one-page experience built around typography, movement and an intentionally multidisciplinary point of view.', meta: 'React / Responsive design / GSAP', mark: 'I CAN' },
  { number: '03', title: 'LEGAL AI EXPERIENCE', category: 'UX/UI Concept / Upcoming', copy: 'An early exploration of how a complex legal AI product might feel clearer, calmer and easier to navigate.', meta: 'Concept exploration / Case study forthcoming', mark: 'AI?' },
]

function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-kicker light"><span>04</span><span>SELECTED WORK</span></div>
      <h2 id="work-title">A few things<br />I&rsquo;ve made <em>real.</em></h2>
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-index">{project.number}</div>
            <div className="project-copy">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <small>{project.meta}</small>
              <a href="#contact" aria-label={`Ask about ${project.title}`}>CASE STUDY / LET&rsquo;S TALK <span aria-hidden="true">{'\u2197'}</span></a>
            </div>
            <div className={`project-visual${project.image ? ' project-visual--moon' : ''}`} aria-hidden="true">
              {project.image ? <img src={project.image} alt="" /> : <span>{project.mark}</span>}
              {project.image && <span className="moon-orbit" />}
              <i>{project.number}</i>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work

