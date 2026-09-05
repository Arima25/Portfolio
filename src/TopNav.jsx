import Resume from './assets/Junye_Wang_Resume.docx?url'

const JUMP_LINKS = [
  { id: 'section-about', label: 'About' },
  { id: 'section-education', label: 'Education' },
  { id: 'section-skills', label: 'Skills' },
  { id: 'section-experience', label: 'Experience' },
  { id: 'section-projects', label: 'Projects' },
  { id: 'section-contact', label: 'Contact' },
]

export const TopNav = ({ scrollEl }) => {
  const scrollToId = (id) => {
    if (!scrollEl) return
    const target = document.getElementById(id)
    if (!target) return

    // drei's ScrollControls maps scrollTop (0..scrollThreshold) to a visual
    // translateY (0..-(clientHeight*(pages-1))) — those two ranges aren't
    // equal, so we can't just add a getBoundingClientRect() pixel delta to
    // scrollTop directly (that under/overshoots). Instead use the section's
    // untransformed layout position (offsetTop, unaffected by the transform)
    // and rescale it into scrollTop's range.
    const naturalTop = target.offsetTop
    const scrollThreshold = scrollEl.scrollHeight - scrollEl.clientHeight
    const visualTravel = scrollThreshold - scrollEl.clientHeight
    if (visualTravel <= 0) return

    const navOffset = 90 // leave room for the fixed top nav
    const targetOffset = (naturalTop - navOffset) / visualTravel
    const targetScrollTop = Math.max(0, Math.min(scrollThreshold, targetOffset * scrollThreshold))
    scrollEl.scrollTo({ top: targetScrollTop, behavior: 'smooth' })
  }

  return (
    <div className="top-nav">
      <span className="top-nav-name font-header">Junye Wang</span>

      <nav className="top-nav-jump">
        {JUMP_LINKS.map(({ id, label }) => (
          <button key={id} type="button" className="top-nav-jump-link" onClick={() => scrollToId(id)}>
            {label}
          </button>
        ))}
      </nav>

      <div className="top-nav-links">
        <a
          href="https://github.com/Arima25"
          target="_blank"
          rel="noopener noreferrer"
          className="top-nav-link"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/junye-wang-/"
          target="_blank"
          rel="noopener noreferrer"
          className="top-nav-link"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </a>
        <a
          href="mailto:wjunye72@gmail.com"
          className="top-nav-link"
          aria-label="Email"
          title="Email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.2.2 7.8 6.1 7.8-6.1H4.2zM20 7.1l-7.4 5.8a1 1 0 0 1-1.2 0L4 7.1v11.4c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.1z" />
          </svg>
        </a>
        <a
          href={Resume}
          download="Junye_Wang_Resume.docx"
          className="top-nav-link top-nav-resume"
          aria-label="Download Resume"
          title="Download Resume"
        >
          Resume
        </a>
      </div>
    </div>
  )
}
