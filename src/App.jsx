import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Cloud, Float, Scroll, Sparkles, useScroll } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { CanvasTexture } from 'three'
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

// Hello Kitty sprite with canvas-based drawing
function HelloKittySprite() {
  const meshRef = useRef()
  const [texture, setTexture] = useState(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 300
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#FFF8DC'
    ctx.fillRect(0, 0, 256, 300)

    // Head
    ctx.fillStyle = '#FFF8DC'
    ctx.strokeStyle = '#FFB6C1'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(128, 110, 70, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    // Ears
    ctx.beginPath()
    ctx.arc(70, 50, 28, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(186, 50, 28, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    // Ear inner
    ctx.fillStyle = '#FFB6C1'
    ctx.beginPath()
    ctx.arc(70, 50, 18, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(186, 50, 18, 0, Math.PI * 2)
    ctx.fill()

    // Eyes
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.arc(100, 95, 7, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(156, 95, 7, 0, Math.PI * 2)
    ctx.fill()

    // Nose
    ctx.fillStyle = '#FFB6C1'
    ctx.beginPath()
    ctx.arc(128, 115, 6, 0, Math.PI * 2)
    ctx.fill()

    // Mouth
    ctx.strokeStyle = '#FFB6C1'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.quadraticCurveTo(110, 135, 90, 130)
    ctx.stroke()
    ctx.beginPath()
    ctx.quadraticCurveTo(146, 135, 166, 130)
    ctx.stroke()

    // Body
    ctx.fillStyle = '#FFF8DC'
    ctx.strokeStyle = '#FFB6C1'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.ellipse(128, 185, 48, 60, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    // Bow
    ctx.fillStyle = '#FF69B4'
    ctx.beginPath()
    ctx.ellipse(85, 35, 14, 18, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(171, 35, 14, 18, 0, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#FF1493'
    ctx.beginPath()
    ctx.arc(128, 35, 8, 0, Math.PI * 2)
    ctx.fill()

    // Arms
    ctx.fillStyle = '#FFF8DC'
    ctx.strokeStyle = '#FFB6C1'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.ellipse(75, 175, 14, 28, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.ellipse(181, 175, 14, 28, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    // Feet
    ctx.beginPath()
    ctx.ellipse(100, 250, 16, 18, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.ellipse(156, 250, 16, 18, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    const canvasTexture = new CanvasTexture(canvas)
    setTexture(canvasTexture)
  }, [])

  if (!texture) return null

  return (
    <mesh ref={meshRef} position={[-1, -2, 0]}>
      <planeGeometry args={[1, 1.2]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  )
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
        {/* HELLO KITTY SPRITE (next to the blue cinnamon roll) */}
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
          <HelloKittySprite />
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
