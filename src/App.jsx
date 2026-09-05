import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Cloud, Float, Scroll, Sparkles, useScroll } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Overlay } from './Overlay'
import { TopNav } from './TopNav'
import './App.css'

// Hands the ScrollControls' real scrollable DOM element up to App state so
// the fixed TopNav (which lives outside the Canvas) can jump to a section.
function ScrollBridge({ onReady }) {
  const scroll = useScroll()
  useEffect(() => {
    onReady(scroll.el)
  }, [scroll.el, onReady])
  return null
}

// A custom component for background elements that move when you scroll
function BackgroundElements() {
  const group = useRef()
  // Optional: Rotate the whole background slowly
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05
    }
  })
  return (
    <group ref={group}>
      {/* Scroll-based 3D content. "rate={0.5}" means it moves at half the scroll speed (parallax). */}
      <Scroll>
        {/* BIG FLUFFY CLOUDS */}
        <Cloud position={[4, 2, -5]} speed={0.2} opacity={0.5} color="#fff" />
        <Cloud position={[-4, -2, -10]} speed={0.2} opacity={1} color="#fff" />
        <Cloud position={[0, 10, -15]} speed={0.2} opacity={0.5} color="#CDB4DB" />
        {/* SPARKLES */}
        <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#FFC8DD" />
        {/* FLOATING SHAPES (Abstract Cinnamoroll vibes) */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[2, -3, 0]} rotation={[0, 0.5, 0]}>
            <torusGeometry args={[0.8, 0.3, 16, 32]} />
            <meshStandardMaterial color="#A2D2FF" />
          </mesh>
        </Float>
        <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
          <mesh position={[-3, 4, -2]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#FFC8DD" />
          </mesh>
        </Float>
      </Scroll>
    </group>
  )
}


export default function App() {
  const [scrollEl, setScrollEl] = useState(null)

  return (
    <>
      <TopNav scrollEl={scrollEl} />
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* 1. LIGHTING (Soft & Bright) */}
        <ambientLight intensity={1} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        {/* 2. BACKGROUND COLOR (Sky) */}
        <color attach="background" args={['#BDE0FE']} />
        {/* 3. FOG (Seamless blend into distance) */}
        <fog attach="fog" args={['#BDE0FE', 5, 20]} />
        {/* 4. SCROLL CONTROLS */}
        {/* pages={8} to match the 8 sections in Overlay.jsx (Hero, About, Education, Skills, Experience, Projects, Papers, Contact) */}
        <ScrollControls pages={8} damping={0.3}>
          <ScrollBridge onReady={setScrollEl} />
          {/* The 3D World */}
          <BackgroundElements />
          {/* The HTML Overlay (from Overlay.jsx) */}
          <Overlay />
        </ScrollControls>
      </Canvas>
    </>
  )
}
