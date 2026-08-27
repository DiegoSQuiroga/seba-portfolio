import { socialLinks } from '../config/socialLinks'
import '../styles/portfolio.css'

const email = 'quirogadiegosebastian@gmail.com'

function Contact() {
  return (
    <footer className="contact" id="contact">
      <p className="section-kicker light">CONTACT / COPENHAGEN</p>
      <h2>LET&rsquo;S <em>TALK.</em></h2>
      <div className="contact-direct"><a href={`mailto:${email}`}>{email}</a><a href="tel:+4550179934">+45 50 17 99 34</a></div>
      <nav className="contact-links" aria-label="Social links">
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
        <a href={socialLinks.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
        <a href={socialLinks.nextHouseInstagram} target="_blank" rel="noreferrer">NEXT HOUSE INSTAGRAM ↗</a>
      </nav>
      <div className="contact-foot"><span>DIEGO SEBASTIAN QUIROGA</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  )
}

export default Contact
