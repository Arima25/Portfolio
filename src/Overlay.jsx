import { Scroll } from '@react-three/drei'
import Essay1 from './assets/Econ 197 - Essay 1.pdf'
import Essay2 from './assets/Short Essay 2.pdf'

const Section = ({ children, align = "center" }) => {
  return (
    <section className="section" style={{ justifyContent: align === "left" ? "flex-start" : "center" }}>
      <div className="cute-card" style={{ marginLeft: align === "left" ? "10vw" : "0" }}>
        {children}
      </div>
    </section>
  )
}

export const Overlay = () => {
  return (
    <Scroll html style={{ width: '100%', height: '100%' }}>
      
      {/* 1. HERO */}
      <Section>
        <h1 className="font-header" style={{ fontSize: '3.5rem', color: '#5AA9E6', margin: 0 }}>
          Hello!
        </h1>
        <p className="font-body" style={{ fontSize: '1.2rem', color: '#888', marginTop: '10px' }}>
          Welcome to my portfolio.
        </p>
        <div style={{ marginTop: '20px', color: '#FFB7B2', fontSize: '2rem' }}>
          ☁️ 🎀 ☁️
        </div>
      </Section>

      {/* 2. ABOUT (Aligned Left so you can see the 3D character on the right) */}
      <Section align="left">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#FFB7B2' }}>About Me</h2>
        <p className="font-body" style={{ color: '#666', lineHeight: '1.6' }}>
          Experienced builder and strategic thinker with an ambition to help innovative tech products reach global audiences. Combines a dual background in Computer Science and Business Management Economics with a high-agency mindset and strong analytical skills. Passionate about bridging the gap between technical engineering and international market strategy.
        </p>
        <br></br>
        <p className="font-body" style={{ color: '#666', lineHeight: '1.6' }}>
          Specialties include: Product Strategy, Technical Analysis, Market Research, Digital Marketing, Python, TypeScript.
        </p>
      </Section>

      {/* 3. PROJECTS */}
      <Section align = "right">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Projects</h2>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px', position: 'relative', zIndex: 2 }}>
            {/* Project Pill 1 */}
            <a href="https://arima25.github.io/JapanTravel/index.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#E0F7FA', padding: '15px 25px', borderRadius: '25px', border: '2px solid #5AA9E6', color: '#555', cursor: 'pointer' }}>
                 <b className="font-header">Japanese Travel Site</b>
                 <br/><span style={{fontSize: '0.8rem'}}>Javascript</span>
              </div>
            </a>
            {/* Project Pill 2 */}
            <a href="https://docs.google.com/document/d/1_2vULd1aoI8UTgrw18HjHhhYmjqLXZlIHIIpytqI5bE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#FFF0F5', padding: '15px 25px', borderRadius: '25px', border: '2px solid #FFB7B2', color: '#555', cursor: 'pointer' }}>
                 <b className="font-header">Marketing Campaign Design</b>
                 <br/><span style={{fontSize: '0.8rem'}}>Product</span>
              </div>
            </a>
        </div>
      </Section>

       {/* 3. Papers */}
      <Section align = "right">
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Papers</h2>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px', position: 'relative', zIndex: 2 }}>
            <a href={Essay1} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#E0F7FA', padding: '15px 25px', borderRadius: '25px', border: '2px solid #5AA9E6', color: '#555', cursor: 'pointer' }}>
                 <b className="font-header">Essay 1: China's economy</b>
                 <br/><span style={{fontSize: '0.8rem'}}>View PDF</span>
              </div>
            </a>
            
            <a href={Essay2} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#FFF0F5', padding: '15px 25px', borderRadius: '25px', border: '2px solid #FFB7B2', color: '#555', cursor: 'pointer' }}>
                 <b className="font-header">Essay 2: Technology growth</b>
                 <br/><span style={{fontSize: '0.8rem'}}>View PDF</span>
              </div>
            </a>

            {/* Placeholder for Paper 3 */}
            <div style={{ background: '#f0f0f0', padding: '15px 25px', borderRadius: '25px', border: '2px dashed #ccc', color: '#999' }}>
               <b className="font-header">Paper 3</b>
               <br/><span style={{fontSize: '0.8rem'}}>Coming Soon</span>
            </div>

            {/* Placeholder for Paper 4 */}
            <div style={{ background: '#f0f0f0', padding: '15px 25px', borderRadius: '25px', border: '2px dashed #ccc', color: '#999' }}>
               <b className="font-header">Paper 4</b>
               <br/><span style={{fontSize: '0.8rem'}}>Coming Soon</span>
            </div>
        </div>
      </Section>

      {/* 4. CONTACT */}
      <Section>
        <h2 className="font-header" style={{ fontSize: '2rem', color: '#5AA9E6' }}>Let's Chat!</h2>
        <button style={{ 
            background: '#5AA9E6', color: 'white', border: 'none', 
            padding: '12px 30px', borderRadius: '50px', 
            fontSize: '1.2rem', fontFamily: 'Fredoka, sans-serif',
            cursor: 'pointer', marginTop: '15px', boxShadow: '0 4px 0 #3178C6'
        }}>
          Send Email ✉️
        </button>
      </Section>

    </Scroll>
  )
}