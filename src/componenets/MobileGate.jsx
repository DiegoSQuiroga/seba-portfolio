import { socialLinks } from '../config/socialLinks'
import '../styles/mobile-gate.css'

function MobileGate() {
  return (
    <aside className="mobile-gate" aria-label="Small screen notice">
      <p className="mobile-gate-meta"><span>DIEGO SEBASTIAN QUIROGA</span><span>COPENHAGEN</span></p>
      <h1>THIS ONE<br />NEEDS A<br /><em>BIGGER SCREEN.</em></h1>
      <p className="mobile-gate-copy">I spent way too much time on this portfolio for you to experience it with your thumb.<br /><br />Open it on a laptop. I&rsquo;ll wait.</p>
      <nav aria-label="Contact Diego">
        <a href="mailto:quirogadiegosebastian@gmail.com"><small>EMAIL</small><span>quirogadiegosebastian@gmail.com</span></a>
        <a href="tel:+4550179934"><small>PHONE</small><span>+45 50 17 99 34</span></a>
        <div className="mobile-gate-socials">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
        </div>
      </nav>
    </aside>
  )
}

export default MobileGate
