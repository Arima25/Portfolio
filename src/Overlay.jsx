import { Scroll } from '@react-three/drei'
import Essay1 from './assets/Econ 197 - Essay 1.pdf'
import Essay2 from './assets/Short Essay 2.pdf'
import Essay3 from './assets/Advancement With AI in the Global Economy.pdf'

const Section = ({ children, align = "center", id }) => {
  return (
    <section id={id} className="section" style={{ justifyContent: align === "left" ? "flex-start" : "center" }}>
      <div className="cute-card" style={{ marginLeft: align === "left" ? "10vw" : "0" }}>
        {children}
      </div>
    </section>
  )
}

const Pill = ({ href, bg, border, title, subtitle }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <div style={{ background: bg, padding: '15px 25px', borderRadius: '25px', border: `2px solid ${border}`, color: '#555', cursor: 'pointer', textAlign: 'left', maxWidth: '260px' }}>
      <b className="font-header">{title}</b>
      <br /><span style={{ fontSize: '0.8rem' }}>{subtitle}</span>
    </div>
  </a>
)

const SkillGroup = ({ label, tags, alt = false }) => (
  <div style={{ marginBottom: '16px' }}>
    <p className="font-header" style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {tags.map((tag) => (
        <span key={tag} className={`skill-tag${alt ? ' alt' : ''}`}>{tag}</span>
      ))}
    </div>
  </div>
)

export const Overlay = () => {
  return (
    <Scroll html style={{ width: '100%', height: '100%' }}>

      {/* 1. HERO */}
      <Section id="section-hero">
        <h1 className="font-header" style={{ fontSize: '3rem', color: '#5AA9E6', margin: 0 }}>
          Hi, I'm Junye Wang
        </h1>
        <p className="font-body" style={{ fontSize: '1.15rem', color: '#888', marginTop: '10px' }}>
          Aspiring Product Manager — blending Computer Science and Business Strategy to build products that reach global markets.
        </p>
        <div style={{ marginTop: '20px', color: '#FFB7B2', fontSize: '2rem' }}>
          ☁️ 🎀 ☁️
        </div>
      </Section>

      {/* 2. ABOUT (Aligned Left so you can see the 3D character on the right) */}
      <Section id="section-about" align="left">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#FFB7B2' }}>About Me</h2>
        <p className="font-body" style={{ color: '#666', lineHeight: '1.6' }}>
          Experienced builder and strategic thinker with an ambition to help innovative tech products reach global audiences. I combine a dual background in Computer Science and Business Management Economics with a high-agency mindset and strong analytical skills — sitting comfortably at the intersection of product strategy, market research, and technical execution.
        </p>
        <br></br>
        <p className="font-body" style={{ color: '#666', lineHeight: '1.6' }}>
          Fluent in English and Chinese, and passionate about bridging the gap between engineering teams and international market strategy.
        </p>
      </Section>

      {/* 3. EDUCATION */}
      <Section id="section-education" align="left">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '15px', textAlign: 'left' }}>
          <div>
            <b className="font-header" style={{ color: '#555' }}>University of California, Santa Cruz</b>
            <p className="font-body" style={{ color: '#666', margin: '4px 0 0', lineHeight: '1.5', fontSize: '0.95rem' }}>
              B.S. Computer Science & B.A. Business Management Economics
            </p>
            <span style={{ fontSize: '0.8rem', color: '#999' }}>Expected May 2027 · GPA 3.86</span>
          </div>
          <div>
            <b className="font-header" style={{ color: '#555' }}>University of Hong Kong</b>
            <p className="font-body" style={{ color: '#666', margin: '4px 0 0', lineHeight: '1.5', fontSize: '0.95rem' }}>
              Study Abroad Exchange — Business Administration. Focus: Asian Market Dynamics, Marketing Research, Econometrics, Business Strategy, Data Analysis.
            </p>
            <span style={{ fontSize: '0.8rem', color: '#999' }}>Sep 2026 – May 2027</span>
          </div>
        </div>
      </Section>

      {/* 4. SKILLS */}
      <Section id="section-skills" align="left">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#FFB7B2' }}>Skills</h2>
        <div style={{ marginTop: '15px' }}>
          <SkillGroup
            label="Product & Strategy"
            tags={['Product Strategy', 'Product Lifecycle Management', 'Market Research', 'RICE Prioritization', 'Go-To-Market (GTM)', 'Agile / Scrum', 'Strategic Planning', 'Data Analysis']}
          />
          <SkillGroup
            label="Technical & Tools"
            alt
            tags={['Python', 'TypeScript', 'Figma', 'SPSS', 'Excel', 'Prompt Engineering']}
          />
        </div>
      </Section>

      {/* 5. EXPERIENCE */}
      <Section id="section-experience" align="right">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '15px', textAlign: 'left' }}>
          <div>
            <b className="font-header" style={{ color: '#555' }}>Web Developer</b>
            <span style={{ fontSize: '0.8rem', color: '#999' }}> · Tech4Good, Santa Cruz, CA · Jan 2025 – Jun 2026</span>
            <ul className="font-body" style={{ color: '#666', margin: '6px 0 0', paddingLeft: '18px', lineHeight: '1.5', fontSize: '0.9rem' }}>
              <li>Built and deployed "Timely" (Angular/TypeScript), automating manual coordination workflows and cutting cycle time by 30% based on market research.</li>
              <li>Owned CI/CD pipelines end-to-end — automated validation, linting, and test gates — cutting deployment time by 50%.</li>
              <li>Built Jest unit and integration test suites with 90%+ coverage across UI, auth, and database layers, reducing production regressions.</li>
              <li>Hardened Firebase data consistency with secure queries, real-time sync, and Google OAuth, eliminating sync failures across concurrent sessions.</li>
              <li>Doubled platform feature capability by architecting a 3D Pomodoro timer prototype — secure login, context-aware GenUI mood styling, an audio mood system, and async tab notifications — from design to launch.</li>
            </ul>
          </div>
          <div>
            <b className="font-header" style={{ color: '#555' }}>Business Development Intern</b>
            <span style={{ fontSize: '0.8rem', color: '#999' }}> · Porygon Studio, Dublin, CA · Jan 2025 – Aug 2025</span>
            <ul className="font-body" style={{ color: '#666', margin: '6px 0 0', paddingLeft: '18px', lineHeight: '1.5', fontSize: '0.9rem' }}>
              <li>Analyzed local market trends and client specifications to architect a competitive business bid for the City of Temple's video production contract.</li>
              <li>Grew the company's professional network by 25% by attending and engaging at 15+ tech and networking events across the Bay Area.</li>
              <li>Collaborated with cross-functional stakeholders to define business goals, improving quarterly objective completion rates by 20%.</li>
              <li>Built client engagement skills through active listening and empathetic communication, initiating conversations that led to multiple qualified leads.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. PROJECTS */}
      <Section id="section-projects" align="right">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Projects</h2>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: '20px', position: 'relative', zIndex: 2 }}>
          <Pill
            href="mailto:wjunye72@gmail.com?subject=Serene%20project"
            bg="#E7F9F2" border="#5AA9E6"
            title="Serene"
            subtitle="Product lead · PRD-driven AI SaaS"
          />
          <Pill
            href="https://github.com/Arima25/SilkSync"
            bg="#F0EBFF" border="#B39DDB"
            title="SilkSync"
            subtitle="Expo + Flask · AI travel planner"
          />
          <Pill
            href="https://docs.google.com/document/d/1_2vULd1aoI8UTgrw18HjHhhYmjqLXZlIHIIpytqI5bE/edit?usp=sharing"
            bg="#FFF0F5" border="#FFB7B2"
            title="Sephora on Wheels"
            subtitle="Marketing strategy · view brief"
          />
          <Pill
            href="https://arima25.github.io/JapanTravel/index.html"
            bg="#E0F7FA" border="#5AA9E6"
            title="Japanese Travel Site"
            subtitle="JavaScript · live site"
          />
        </div>
        <p className="font-body" style={{ color: '#999', fontSize: '0.85rem', marginTop: '18px', maxWidth: '420px', position: 'relative', zIndex: 2 }}>
          Serene: identified the need for automated, cross-LLM brand-visibility audits and translated it into measurable PRD targets — 880 citations analyzed and 61 recommendations synthesized across 11 audit runs (median 108s turnaround) via a Supabase Edge Function pipeline. Ask me for a demo.
          <br />
          SilkSync: an AI-powered China travel planner addressing fragmented trip planning — real-time 12306 train data, map-based route visualization, and itinerary generation across a React Native (Expo) app and Flask backend.
        </p>
      </Section>

      {/* 7. PAPERS */}
      <Section id="section-papers" align="right">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Papers</h2>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px', position: 'relative', zIndex: 2 }}>
          <a href={Essay1} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#E0F7FA', padding: '15px 25px', borderRadius: '25px', border: '2px solid #5AA9E6', color: '#555', cursor: 'pointer' }}>
              <b className="font-header">Essay 1: China's Economy</b>
              <br /><span style={{ fontSize: '0.8rem' }}>View PDF</span>
            </div>
          </a>

          <a href={Essay2} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#FFF0F5', padding: '15px 25px', borderRadius: '25px', border: '2px solid #FFB7B2', color: '#555', cursor: 'pointer' }}>
              <b className="font-header">Essay 2: Technology Growth</b>
              <br /><span style={{ fontSize: '0.8rem' }}>View PDF</span>
            </div>
          </a>

          <a href={Essay3} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#E7F9F2', padding: '15px 25px', borderRadius: '25px', border: '2px solid #5AA9E6', color: '#555', cursor: 'pointer' }}>
              <b className="font-header">Essay 3: AI in the Global Economy</b>
              <br /><span style={{ fontSize: '0.8rem' }}>View PDF</span>
            </div>
          </a>
        </div>
      </Section>

      {/* 8. CONTACT */}
      <Section id="section-contact">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Let's Chat!</h2>
        <p className="font-body" style={{ color: '#888', marginTop: '8px' }}>wjunye72@gmail.com</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '15px', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
          <a
            href="mailto:wjunye72@gmail.com"
            style={{
              display: 'inline-block', background: '#5AA9E6', color: 'white', textDecoration: 'none',
              padding: '12px 30px', borderRadius: '50px',
              fontSize: '1.2rem', fontFamily: 'Fredoka, sans-serif',
              boxShadow: '0 4px 0 #3178C6'
            }}
          >
            Send Email ✉️
          </a>
          <a
            href="https://www.linkedin.com/in/junye-wang-/"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', background: 'white', color: '#5AA9E6', textDecoration: 'none',
              padding: '12px 30px', borderRadius: '50px', border: '2px solid #5AA9E6',
              fontSize: '1.2rem', fontFamily: 'Fredoka, sans-serif',
            }}
          >
            LinkedIn
          </a>
        </div>
      </Section>

    </Scroll>
  )
}
