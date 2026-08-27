import '../styles/portfolio.css'

const email = 'mailto:quirogadiegosebastian@gmail.com'

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="section-kicker light"><span>06</span><span>CONTACT</span></div>
      <p className="contact-eyebrow">HAVE A PROBLEM WORTH PUSHING?</p>
      <a className="contact-title" href={email}>LET&rsquo;S SEE IF<br />I CAN DO <em>THAT.</em></a>
      <nav className="contact-links" aria-label="Contact links">
        <a href={email}>EMAIL <span aria-hidden="true">{'\u2197'}</span></a>
        <a href="#linkedin">LINKEDIN <span aria-hidden="true">{'\u2197'}</span></a>
        <a href="#github">GITHUB <span aria-hidden="true">{'\u2197'}</span></a>
        <a href="/Diego-Sebastian-Quiroga-CV.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD CV <span aria-hidden="true">{'\u2197'}</span></a>
      </nav>
      <div className="contact-foot"><span>DIEGO SEBASTIAN QUIROGA</span><a href="#top">BACK TO TOP <span aria-hidden="true">{'\u2191'}</span></a></div>
    </footer>
  )
}

export default Contact

