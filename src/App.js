import { useState } from 'react';
import { FiArrowUpRight, FiArrowDown, FiMenu, FiX, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';

const emailAddress = 'anirudhpoluru@gmail.com';
const email = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
const projects = [
  {
    title: 'Document validation', category: 'Document AI', year: '2026',
    description: 'Turning document images into field-level checks against approved source data. A local OCR pipeline combines primary text extraction with targeted fallback recognition and keeps uncertain results available for human review.',
    tools: 'Python / Tesseract / PaddleOCR / ONNX Runtime',
  },
  {
    title: 'Synthetic-speech screening', category: 'Audio ML', year: '2026',
    description: 'A local feasibility prototype for screening short recordings with a pretrained AASIST model. Includes threshold calibration, held-out evaluation, and a browser interface for comparing original and telephone-like audio.',
    tools: 'Python / PyTorch / AASIST / SciPy',
  },
  {
    title: 'Local intelligence for system logs', category: 'Local AI', year: '2026',
    description: 'An offline-first monitoring prototype that turns telemetry into structured events and numerical trends. Combines optional local LLM interpretation with validated outputs, time-series forecasting, and traceable, rule-based recommendations.',
    tools: 'Python / llama.cpp / Pydantic / TiRex',
  },
];

function ExternalLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<FiArrowUpRight aria-hidden="true" /></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const [copyStatus, setCopyStatus] = useState('');
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Select the email address above to copy it.');
    }
  };
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#main" aria-label="Anirudh Poluru, home">anirudh poluru<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
        <nav id="navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
          <a href="#work"><span>01</span> Selected work</a><a href="#about"><span>02</span> About</a><a className="nav-contact" href="#contact"><span>03</span> Get in touch <FiArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <h1 id="hero-title">Building AI for<br />the <span className="serif">real world.</span></h1>
          <div className="hero-bottom">
            <div className="hero-intro"><p>I’m Anirudh, a computer science student at UMass Amherst and AI Solutions Architect Intern at iQor. I build practical AI systems, from local model inference to document understanding.</p><a className="text-link" href="#work">Explore selected work <FiArrowDown aria-hidden="true" /></a></div>
            <div className="hero-note"><span className="mini-label">My focus</span><p>Thoughtful model integration.<br />Careful evaluation.<br />Software people can use.</p></div>
          </div>
          <div className="hero-caption"><span>Amherst, Massachusetts</span><span>CS @ UMass Amherst · Class of 2026</span></div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">From models to <span className="serif">working systems.</span></h2></div><p className="section-intro">Selected projects in applied machine learning, local inference, and data analysis. A look at the problems I work on and the systems behind them.</p></div>
            <div className="work-filters" role="group" aria-label="Filter selected work">
              {['All work', 'AI systems', 'Research & data'].map(value => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</button>)}
            </div>
            <div className="work-results" aria-live="polite" aria-atomic="false">
            {filter !== 'Research & data' && <div className="project-list">
              {projects.map((project, index) => <article className="project" key={project.title}>
                <div className="project-index">0{index + 1}<span>{project.category}</span></div>
                <div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><p className="project-tools">{project.tools}</p></div>
                <div className="project-meta"><span>{project.year}</span></div>
              </article>)}
            </div>}
            {filter !== 'AI systems' && <div className="more-work">
              <article><p className="mini-label">Research / 2026</p><h3>Understanding the agent-skills ecosystem</h3><p>Team research on the languages used in GitHub agent skills and their relationship to repository popularity. Reproducible analysis with duplicate-aware grouping and manual validation.</p><span className="project-tools">Python / SQLite / Language detection</span></article>
              <article><p className="mini-label">Data visualization / 2026</p><h3>Spotify Chart Explorer</h3><p>An interactive view of chart longevity across three music markets. Linked D3 views connect country-level comparisons with daily rank histories and reference-track comparisons.</p><span className="project-tools">D3.js / JavaScript / Python</span></article>
            </div>}
            </div>
          </div>
        </section>

        <section id="about" className="about-section wrap" aria-labelledby="about-title">
          <div><p className="eyebrow">02 / A little about me</p><h2 id="about-title">An engineer’s mindset.<br /><span className="serif">A practical approach.</span></h2></div>
          <div className="about-copy"><p>I’m studying computer science at the University of Massachusetts Amherst, graduating in December 2026. My interests sit at the intersection of machine learning and backend engineering: integrating models, evaluating their behavior, and building useful applications around them.</p><p>Originally from Woodland Hills, California, I’m now based in Amherst, Massachusetts. Outside of work, you’ll usually find me playing volleyball or in the weight room. Always happy to get some reps in with good company!</p><div className="toolkit"><span className="mini-label">Core toolkit</span><p>Python · TypeScript · SQL · Java<br />PyTorch · FastAPI · React · Docker</p></div></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="wrap contact-inner"><div><p className="eyebrow">03 / Get in touch</p><h2 id="contact-title">Let’s build something <span className="serif">useful.</span></h2><p>Interested in applied AI, thoughtful engineering, or a conversation about my work? I’d love to connect.</p></div><div className="contact-actions"><ExternalLink className="contact-button" href={email}>Email in Gmail</ExternalLink><div className="email-address"><span>{emailAddress}</span><button type="button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email address copied.' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}</button></div><p className="copy-status" role="status">{copyStatus}</p></div></div></section>
      </main>
      <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Anirudh Poluru</span><div><ExternalLink href="https://github.com/eq-ani"><FiGithub aria-hidden="true" /> GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/anirudh-poluru-a20095241/"><FiLinkedin aria-hidden="true" /> LinkedIn</ExternalLink><ExternalLink href={email}>Email</ExternalLink></div></footer>
    </>
  );
}

export default App;
