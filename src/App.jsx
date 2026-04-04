import { useState, useEffect, useRef } from 'react'

// ─── IMPORT YOUR ASSETS HERE ───────────────────────────────────────────────
import gamePoster  from './assets/Posters/poster.png'
import einsteinImg from './assets/Posters/einstein.png'
import teslaImg    from './assets/Posters/tesla.png'
import newtonImg   from './assets/Posters/newton.png'
import galileoImg    from './assets/Posters/galileo.png'
import darwinImg   from './assets/Posters/darwin.png'
import oppenheimerImg  from './assets/Posters/oppenheimer.png'
import ss1 from './assets/Screenshots/SSwebsiteMom.jpg'
import ss2 from './assets/Screenshots/ssWebsiteMom2.jpg'
import ss3 from './assets/Screenshots/sswebmom3.jpg'
import ss4 from './assets/Screenshots/ssWebMom4.jpg'
import ss5 from './assets/Screenshots/SswebMom5.jpg'
import ss6 from './assets/Screenshots/ssWebMom6.jpg'
// ───────────────────────────────────────────────────────────────────────────

const scientists = [
  {
    name: 'ALBERT EINSTEIN',
    title: 'Physicist',
    bio: 'Renowned theoretical physicist and Nobel laureate. Famous for his mass-energy equivalence formula E=mc², the theory of relativity, and groundbreaking work in quantum mechanics. A genius whose ideas revolutionized our understanding of the universe.',
    img: einsteinImg,
    accent: '#FFE600',
    accentClass: 'text-yellow-400',
    borderClass: 'border-yellow-400',
    bgClass: 'bg-yellow-400',
    skill: 'Relativity Teleport',
    ult: 'Time Dilation',
  },
  {
    name: 'NIKOLA TESLA',
    title: 'Inventor',
    bio: 'Visionary inventor and electrical engineer. Pioneer of the Alternating Current (AC) induction motor and power distribution systems. Renowned for his Tesla coil, wireless communication systems, and groundbreaking work in electromagnetism. A brilliant mind whose innovations powered the modern world and inspired the future.',
    img: teslaImg,
    accent: '#00F5FF',
    accentClass: 'text-cyan-400',
    borderClass: 'border-cyan-400',
    bgClass: 'bg-cyan-400',
    skill: 'Resonance Step',
    ult: 'Wardenclyffe',
  },
  {
    name: 'ISAAC NEWTON',
    title: 'Polymath',
    bio: 'Renowned English physicist and mathematician. Formulated the laws of motion and universal gravitation, which dominated scientists\' view of the physical universe for the next three centuries.',
    img: newtonImg,
    accent: '#39FF14',
    accentClass: 'text-green-400',
    borderClass: 'border-green-400',
    bgClass: 'bg-green-400',
    skill: 'Gravitational Apple',
    ult: 'The Principia: Universal Gravitation',
  },
  {
    name: 'GALILEO GALILEI',
    title: 'Astronomer',
    bio: 'Renowned astronomer and physicist. Improved the telescope, observed Jupiter\'s moons, Venus\'s phases, and championed the heliocentric model, challenging geocentrism. Known as the "father of observational astronomy" and "father of modern science".',
    img: galileoImg,
    accent: '#FF2D55',
    accentClass: 'text-rose-500',
    borderClass: 'border-rose-500',
    bgClass: 'bg-rose-500',
    skill: 'Inertial Dash',
    ult: 'Sidereus Nuncius',
  },
  {
    name: 'CHARLES DARWIN',
    title: 'Biologist',
    bio: 'Renowned naturalist and biologist. Famous for his theory of evolution by natural selection, described in "On the Origin of Species". His observations during the voyage of the Beagle revolutionized biology and our understanding of life\'s diversity.',
    img: darwinImg,
    accent: '#FF8C00',
    accentClass: 'text-orange-500',
    borderClass: 'border-orange-500',
    bgClass: 'bg-orange-500',
    skill: 'Survival of the Fittest',
    skillTag: 'Passive',
    ult: 'The Apex Origin',
  },
  {
    name: 'J. ROBERT OPPENHEIMER',
    title: 'Physicist',
    bio: 'American theoretical physicist and "father of the atomic bomb." Led the Manhattan Project to develop nuclear weapons during World War II. A brilliant scientist whose work had profound global consequences.',
    img: oppenheimerImg,
    accent: '#BF00FF',
    accentClass: 'text-purple-500',
    borderClass: 'border-purple-500',
    bgClass: 'bg-purple-500',
    skill: 'Chain Reaction Dash',
    ult: 'The Destroyer of Worlds',
  },
]

const VERSIONS = [
  {
    tag: 'v1.0.0.2',
    label: 'v1.0.0.2',
    badge: 'LATEST',
    badgeColor: '#39FF14',
    isLatest: true,
    changes: [
      { type: 'NEW',   text: 'Options Menu' },
      { type: 'NEW',   text: 'Pointing System' },
      { type: 'NEW',   text: 'Galileo Galilei — new playable fighter' },
      { type: 'NEW',   text: 'Isaac Newton — new playable fighter' },
      { type: 'NEW',   text: 'J. Robert Oppenheimer — new playable fighter' },
      { type: 'FIX',   text: 'Various bug fixes' },
    ],
  },
  {
    tag: 'v1.0.0.1',
    label: 'v1.0.0.1',
    badge: 'INITIAL',
    badgeColor: '#00F5FF',
    isLatest: false,
    downloadUrl: 'https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.1',
    changes: [
      { type: 'NEW',   text: 'Initial release' },
      { type: 'NEW',   text: 'Albert Einstein — playable fighter' },
      { type: 'NEW',   text: 'Nikola Tesla — playable fighter' },
      { type: 'NEW',   text: 'Charles Darwin — playable fighter' },
      { type: 'NEW',   text: 'LAN Multiplayer' },
      { type: 'NEW',   text: '2-Player VS Mode' },
    ],
  },
]

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'objective', label: 'OBJECTIVE' },
  { id: 'characters', label: 'CHARACTERS' },
  { id: 'specs', label: 'SPECS' },
  { id: 'download', label: 'DOWNLOAD' },
]

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────
function Section({ id, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      {children}
    </section>
  )
}

// ─── SECTION TITLE ────────────────────────────────────────────────────────
function SectionTitle({ color, accent, children }) {
  return (
    <h2 className={`font-pixel ${color} tracking-widest text-center mb-5 sm:mb-8`}
        style={{ fontSize: 'clamp(10px, 3vw, 18px)', textShadow: `0 0 20px ${accent}` }}>
      {children}
    </h2>
  )
}

// ─── CARD PANEL ───────────────────────────────────────────────────────────
function Panel({ accent, children, className = '' }) {
  return (
    <div className={`bg-[#0C0C1A] border border-gray-800 relative ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
           style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
      <div className="p-3 pt-5 sm:p-5 sm:pt-6">
        {children}
      </div>
    </div>
  )
}

// ─── CHARACTER CARD ───────────────────────────────────────────────────────
function CharCard({ s, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#0C0C1A] border border-gray-800 overflow-hidden transition-transform duration-150 active:scale-95 hover:-translate-y-1 cursor-pointer relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
           style={{ background: s.accent, boxShadow: `0 0 10px ${s.accent}` }} />
      <div className="w-full bg-black/40 border-b border-gray-800 overflow-hidden mt-[3px]"
           style={{ aspectRatio: '3/4' }}>
        <img src={s.img} alt={s.name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-2 sm:p-4">
        <p className={`font-pixel ${s.accentClass} mb-0.5 leading-tight`}
           style={{ fontSize: 'clamp(6px, 1.8vw, 11px)', textShadow: `0 0 8px ${s.accent}` }}>
          {s.name}
        </p>
        <p className="font-pixel text-white/30 tracking-widest mb-2 sm:mb-3"
           style={{ fontSize: 'clamp(4px, 1.1vw, 7px)' }}>
          {s.title.toUpperCase()}
        </p>

        {/* Skills */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className={`border-l-2 ${s.borderClass} pl-1.5 sm:pl-2 py-0.5 sm:py-1`}
               style={{ background: `${s.accent}0D` }}>
            <p className="font-pixel text-white/40 mb-0.5"
               style={{ fontSize: 'clamp(4px, 1vw, 6px)' }}>
              SKILL{s.skillTag ? ` · ${s.skillTag.toUpperCase()}` : ''}
            </p>
            <p className={`font-vt text-sm sm:text-lg ${s.accentClass} leading-tight`}>{s.skill}</p>
          </div>
          <div className={`border-l-2 ${s.borderClass} pl-1.5 sm:pl-2 py-0.5 sm:py-1`}
               style={{ background: `${s.accent}1A` }}>
            <p className="font-pixel text-white/40 mb-0.5"
               style={{ fontSize: 'clamp(4px, 1vw, 6px)' }}>
              ULTIMATE
            </p>
            <p className={`font-vt text-sm sm:text-lg ${s.accentClass} leading-tight`}
               style={{ textShadow: `0 0 8px ${s.accent}` }}>
              {s.ult}
            </p>
          </div>
        </div>

        <p className="font-pixel text-white/20 text-center mt-2 sm:mt-3"
           style={{ fontSize: 'clamp(4px, 1vw, 6px)' }}>
          TAP TO VIEW ▸
        </p>
      </div>
    </div>
  )
}

// ─── CHARACTER MODAL ──────────────────────────────────────────────────────
function CharModal({ s, onClose }) {
  if (!s) return null
  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-[#0C0C1A] border border-gray-700 w-full sm:max-w-3xl sm:mx-4 max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-xl sm:rounded-none"
        onClick={e => e.stopPropagation()}
      >
        {/* top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10 rounded-t-xl sm:rounded-none"
             style={{ background: s.accent, boxShadow: `0 0 16px ${s.accent}` }} />

        {/* mobile drag handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* close button — large tap target */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 w-10 h-10 flex items-center justify-center font-pixel text-white/40 hover:text-white active:text-white transition-colors"
          style={{ fontSize: '14px' }}
        >
          ✕
        </button>

        <div className="pt-2 sm:pt-6 pb-5 px-3 sm:px-6">
          {/* header — compact row on mobile, wider on desktop */}
          <div className="flex flex-row gap-3 sm:gap-6 mb-4 sm:mb-5 items-start">
            {/* poster */}
            <div className="shrink-0" style={{ width: 'clamp(80px, 22vw, 180px)' }}>
              <div className="border overflow-hidden"
                   style={{ borderColor: s.accent, boxShadow: `0 0 16px ${s.accent}40` }}>
                <img src={s.img} alt={s.name} className="w-full block" />
              </div>
            </div>

            {/* name + title + desc */}
            <div className="flex-1 min-w-0 pt-1">
              <p className={`font-pixel ${s.accentClass} mb-0.5 leading-tight`}
                 style={{ fontSize: 'clamp(8px, 2.5vw, 18px)', textShadow: `0 0 12px ${s.accent}` }}>
                {s.name}
              </p>
              <p className="font-pixel text-white/30 tracking-widest mb-2 sm:mb-3"
                 style={{ fontSize: 'clamp(5px, 1.3vw, 8px)' }}>
                {s.title.toUpperCase()}
              </p>
              <p className="font-vt text-sm sm:text-lg text-gray-300 leading-relaxed">
                {s.bio}
              </p>
            </div>
          </div>

          {/* skills + video holders — stacked on mobile, side-by-side on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {/* Skill */}
            <div className="border border-gray-800 bg-black/30">
              <div className="border-b border-gray-800 px-2 sm:px-3 py-2">
                <p className="font-pixel text-white/40"
                   style={{ fontSize: 'clamp(5px, 1.3vw, 6px)' }}>
                  SKILL{s.skillTag ? ` · ${s.skillTag.toUpperCase()}` : ''}
                </p>
                <p className={`font-vt text-base sm:text-xl ${s.accentClass} mt-0.5`}>{s.skill}</p>
              </div>
              <div className="aspect-video flex flex-col items-center justify-center border border-dashed m-2"
                   style={{ borderColor: `${s.accent}40` }}>
                <span className="font-pixel text-white/20 text-center leading-loose"
                      style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>
                  ▶ VIDEO<br />COMING SOON
                </span>
              </div>
            </div>

            {/* Ultimate */}
            <div className="border border-gray-800 bg-black/30">
              <div className="border-b border-gray-800 px-2 sm:px-3 py-2">
                <p className="font-pixel text-white/40"
                   style={{ fontSize: 'clamp(5px, 1.3vw, 6px)' }}>
                  ULTIMATE
                </p>
                <p className={`font-vt text-base sm:text-xl ${s.accentClass} mt-0.5`}
                   style={{ textShadow: `0 0 8px ${s.accent}` }}>
                  {s.ult}
                </p>
              </div>
              <div className="aspect-video flex flex-col items-center justify-center border border-dashed m-2"
                   style={{ borderColor: `${s.accent}40` }}>
                <span className="font-pixel text-white/20 text-center leading-loose"
                      style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>
                  ▶ VIDEO<br />COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// ─── APP ──────────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════

export default function App() {
  const [activeNav, setActiveNav] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedChar, setSelectedChar] = useState(null)
  const [selectedVersion, setSelectedVersion] = useState('v1.0.0.2')
  const [posterTilt, setPosterTilt] = useState({ x: 0, y: 0, shine: { x: 50, y: 50 } })
  const posterRef = useRef(null)

  const handlePosterMouseMove = (e) => {
    const rect = posterRef.current.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setPosterTilt({ x: dy * -14, y: dx * 14, shine: { x: 50 + dx * 30, y: 50 + dy * 30 } })
  }
  const handlePosterMouseLeave = () => setPosterTilt({ x: 0, y: 0, shine: { x: 50, y: 50 } })

  // ── TODO: Replace these with real MediaFire API data ──
  const [downloadUrl, setDownloadUrl] = useState('https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.2')
  const [downloadCount, setDownloadCount] = useState('—')
  const [fileSize, setFileSize] = useState('—')
  useEffect(() => {
    fetch('https://api.github.com/repos/gabbyygab/mindOverMatterWp/releases/latest')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (!data) return
        const apk = data.assets?.find(a => a.name.endsWith('.apk'))
        if (apk) {
          setDownloadUrl(apk.browser_download_url)
          setDownloadCount(apk.download_count > 0 ? apk.download_count.toLocaleString() : '—')
          const mb = (apk.size / (1024 * 1024)).toFixed(0)
          setFileSize(`~${mb} MB`)
        }
      })
      .catch(() => {})
  }, [])

  const scrollTo = (id) => {
    setActiveNav(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: '#07070F', fontFamily: '"VT323", monospace' }}
    >
      {/* scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.13) 2px, rgba(0,0,0,0.13) 4px)' }}
      />
      {/* vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%)' }}
      />

      {/* ══════════════ FLOATING ACTION BUTTON NAV ══════════════ */}
      {/* Backdrop overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[59]"
          onClick={() => setMenuOpen(false)}
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)' }}
        />
      )}

      {/* ══════════════ FAB NAV ══════════════ */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] flex flex-col-reverse items-center gap-3">
        {/* Main FAB button */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 font-pixel flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            borderColor: menuOpen ? '#FF2D55' : '#FFE600',
            color: menuOpen ? '#FF2D55' : '#FFE600',
            background: menuOpen ? 'rgba(255,45,85,0.12)' : 'rgba(7,7,15,0.95)',
            boxShadow: menuOpen
              ? '0 0 25px rgba(255,45,85,0.5), 0 0 50px rgba(255,45,85,0.15)'
              : '0 0 20px rgba(255,230,0,0.35), 0 0 40px rgba(255,230,0,0.1)',
            transform: menuOpen ? 'rotate(135deg)' : 'rotate(0deg)',
            fontSize: '20px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Bubble nav items — stacked upward */}
        {menuOpen && (
          <div className="flex flex-col items-center gap-2.5 md:gap-3.5">
            {[...NAV_ITEMS].reverse().map(({ id, label }, i) => {
              const isActive = activeNav === id
              const reverseI = NAV_ITEMS.length - 1 - i
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="font-pixel tracking-wider rounded-full border-2 text-center fab-bubble-in w-[130px] md:w-[220px]"
                  style={{
                    fontSize: 'clamp(8px, 1.5vw, 14px)',
                    padding: 'clamp(10px, 1.5vw, 18px) 0',
                    animationDelay: `${reverseI * 0.06}s`,
                    background: isActive
                      ? 'linear-gradient(135deg, #FFE600, #FFC800)'
                      : 'rgba(12,12,26,0.95)',
                    color: isActive ? '#07070F' : '#d1d5db',
                    borderColor: isActive ? '#FFE600' : 'rgba(255,255,255,0.12)',
                    boxShadow: isActive
                      ? '0 0 16px rgba(255,230,0,0.4), inset 0 0 8px rgba(255,230,0,0.15)'
                      : '0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* ══════════════ HERO SECTION ══════════════ */}
      <Section id="hero">
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pb-16 overflow-hidden">

          {/* ── COLLAGE BACKGROUND ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <img src={einsteinImg}    alt="" className="absolute object-cover" style={{ top: '-8%',  left: '-6%',  width: 'clamp(90px,28vw,36%)', opacity: 0.18, transform: 'rotate(-13deg)', filter: 'blur(1px) saturate(2)' }} />
            <img src={teslaImg}       alt="" className="absolute object-cover" style={{ top: '4%',   right: '-8%', width: 'clamp(80px,24vw,32%)', opacity: 0.16, transform: 'rotate(11deg)',  filter: 'blur(1px) saturate(2)' }} />
            <img src={newtonImg}      alt="" className="absolute object-cover" style={{ bottom: '-6%', left: '6%', width: 'clamp(75px,22vw,30%)', opacity: 0.15, transform: 'rotate(8deg)',   filter: 'blur(1px) saturate(1.8)' }} />
            <img src={galileoImg}     alt="" className="absolute object-cover" style={{ bottom: '2%', right: '8%', width: 'clamp(70px,20vw,28%)', opacity: 0.14, transform: 'rotate(-9deg)',  filter: 'blur(1px) saturate(1.8)' }} />
            <img src={darwinImg}      alt="" className="absolute object-cover" style={{ top: '22%',  left: '-3%', width: 'clamp(55px,16vw,22%)', opacity: 0.10, transform: 'rotate(18deg)',  filter: 'blur(2px) saturate(1.5)' }} />
            <img src={oppenheimerImg} alt="" className="absolute object-cover" style={{ top: '18%',  right: '-3%',width: 'clamp(60px,18vw,24%)', opacity: 0.10, transform: 'rotate(-20deg)', filter: 'blur(2px) saturate(1.5)' }} />
            {/* radial dark center so text stays readable */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(7,7,15,0.35) 0%, rgba(7,7,15,0.72) 55%, rgba(7,7,15,0.94) 100%)' }} />
            {/* colour atmosphere */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 18% 25%, rgba(255,45,85,0.13) 0%, transparent 48%), radial-gradient(ellipse at 82% 75%, rgba(0,245,255,0.10) 0%, transparent 45%), radial-gradient(ellipse at 50% 50%, rgba(255,230,0,0.07) 0%, transparent 55%)' }} />
          </div>

          {/* ── INSERT COIN ── */}
          <p className="relative z-10 font-pixel text-yellow-400 tracking-widest mb-5"
             style={{ fontSize: 'clamp(7px, 2vw, 9px)', animation: 'blink 1s step-end infinite' }}>
            ★ INSERT COIN TO CONTINUE ★
          </p>

          {/* ── INTERACTIVE POSTER ── */}
          <div
            ref={posterRef}
            onMouseMove={handlePosterMouseMove}
            onMouseLeave={handlePosterMouseLeave}
            className="relative z-10 mb-7 cursor-pointer"
            style={{
              width: 'min(300px, 68vw)',
              transform: `perspective(700px) rotateX(${posterTilt.x}deg) rotateY(${posterTilt.y}deg) scale(${posterTilt.x !== 0 || posterTilt.y !== 0 ? 1.05 : 1})`,
              transition: posterTilt.x === 0 && posterTilt.y === 0 ? 'transform 0.55s cubic-bezier(0.23,1,0.32,1)' : 'transform 0.08s ease',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* outer glow ring */}
            <div className="absolute -inset-[6px] rounded-sm pointer-events-none"
                 style={{ background: 'linear-gradient(135deg, #FFE600, #FF2D55, #00F5FF, #FFE600)', opacity: 0.7, filter: 'blur(6px)' }} />
            <div className="relative border-2 border-yellow-400 overflow-hidden"
                 style={{ boxShadow: `0 0 50px rgba(255,230,0,0.45), 0 0 100px rgba(255,45,85,0.2), 0 ${20 + posterTilt.x * 1.5}px 70px rgba(0,0,0,0.9)` }}>
              <img src={gamePoster} alt="Mind Over Matter — Game Poster" className="w-full block" />
              {/* glare overlay */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: `radial-gradient(circle at ${posterTilt.shine.x}% ${posterTilt.shine.y}%, rgba(255,255,255,0.14) 0%, transparent 55%)` }} />
            </div>
          </div>

          {/* ── TITLE ── */}
          <div className="relative z-10 text-center">
            <h1 className="font-pixel text-yellow-400 leading-tight tracking-wider"
                style={{ fontSize: 'clamp(22px, 6.5vw, 54px)', textShadow: '4px 4px 0 #FF2D55, 0 0 40px rgba(255,230,0,0.85)' }}>
              Mind Over Matter
            </h1>
            <p className="font-pixel text-cyan-400 tracking-[2px] sm:tracking-[4px] mt-2"
               style={{ fontSize: 'clamp(7px, 2.2vw, 10px)', textShadow: '0 0 12px #00F5FF' }}>
              WHERE GENIUS BECOMES POWER
            </p>
          </div>

          {/* ── CTA BUTTONS ── */}
          <div className="relative z-10 flex gap-2 sm:gap-3 mt-5 flex-wrap justify-center">
            <button
              onClick={() => scrollTo('download')}
              className="font-pixel tracking-wide px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-yellow-400 bg-yellow-400 text-black transition-all hover:scale-105"
              style={{ fontSize: 'clamp(7px, 2vw, 9px)', boxShadow: '0 0 20px rgba(255,230,0,0.5)' }}
            >
              ▼ DOWNLOAD APK
            </button>
            <button
              onClick={() => scrollTo('characters')}
              className="font-pixel tracking-wide px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-cyan-400 text-cyan-400 transition-all hover:bg-cyan-400/10"
              style={{ fontSize: 'clamp(7px, 2vw, 9px)' }}
            >
              VIEW FIGHTERS
            </button>
          </div>

          {/* ── SCROLL INDICATOR ── */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <p className="font-pixel text-gray-600 tracking-widest"
               style={{ fontSize: '7px', animation: 'blink 2s step-end infinite' }}>
              ▼ SCROLL DOWN ▼
            </p>
          </div>
        </div>
      </Section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden bg-rose-500 py-1 sm:py-[6px]">
        <span className="font-pixel text-black tracking-widest whitespace-nowrap inline-block"
              style={{ fontSize: 'clamp(6px, 1.8vw, 8px)', animation: 'marquee 22s linear infinite' }}>
          ★ E=MC² ★ PLAYER 1 WINS ★ THEORY OF RELATIVITY ACTIVATED ★ TESLA COIL SURGE ★ FLAWLESS VICTORY ★ NEW CHALLENGER ★ ROUND 1 FIGHT ★ K.O. ★ GRAVITY SMASH ★ QUANTUM COMBO ★ Mind Over Matter ★
        </span>
      </div>

      {/* ══════════════ CONTENT ══════════════ */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-8 sm:py-12 space-y-12 sm:space-y-20">

        {/* ── OVERVIEW ── */}
        <Section id="overview">
          <SectionTitle color="text-cyan-400" accent="#00F5FF">
            ▸ GAME OVERVIEW ◂
          </SectionTitle>

          <Panel accent="#00F5FF" className="mb-6">
            <p className="font-vt text-lg sm:text-xl text-gray-300 leading-relaxed">
              Welcome to <span className="text-yellow-400">Mind Over Matter</span> — the fighting game where
              history's greatest scientific minds settle their rivalries in the arena. Einstein bends
              space-time, Tesla unleashes electrical storms, and Newton commands the very force of gravity.
              <br /><br />
              Each scientist fights using their real-world discoveries as weapons. Master their theories,
              chain their formulas into devastating combos, and prove once and for all whose intellect —
              and whose fists — reign supreme.
            </p>
          </Panel>

          {/* stats grid */}
          <Panel accent="#FFE600" className="mb-6">
            <p className="font-pixel text-yellow-400 tracking-widest mb-3 sm:mb-4"
               style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px rgba(255,230,0,0.6)' }}>
              GAME STATS
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
              {[['6', 'SCIENTISTS'], ['8', 'ARENAS'], ['2P', 'VS MODE'], ['60', 'FPS'], ['LAN', 'MULTIPLAYER']].map(([val, label]) => (
                <div key={label} className="border border-cyan-400/20 bg-cyan-400/5 p-2 sm:p-3 text-center">
                  <span className="font-pixel text-yellow-400 text-base sm:text-lg block"
                        style={{ textShadow: '0 0 8px rgba(255,230,0,0.5)' }}>{val}</span>
                  <span className="font-vt text-gray-400 text-sm sm:text-base tracking-wider mt-1 block">{label}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* screenshots */}
          <Panel accent="#39FF14">
            <p className="font-pixel text-green-400 tracking-widest mb-3 sm:mb-4"
               style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #39FF14' }}>
              SCREENSHOTS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              {[ss1, ss2, ss3, ss4, ss5, ss6].map((src, i) => (
                <div key={i} className="aspect-video overflow-hidden border border-green-400/20 hover:border-green-400/60 transition-colors">
                  <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Panel>
        </Section>

        {/* ── OBJECTIVE ── */}
        <Section id="objective">
          <SectionTitle color="text-yellow-400" accent="#FFE600">
            ◈ WHY WE BUILT THIS ◈
          </SectionTitle>

          <div className="space-y-4">
            <Panel accent="#FFE600">
              <p className="font-pixel text-yellow-400 tracking-widest mb-3"
                 style={{ fontSize: 'clamp(6px, 1.5vw, 8px)', textShadow: '0 0 8px rgba(255,230,0,0.6)' }}>
                THE SPARK
              </p>
              <p className="font-vt text-lg sm:text-xl text-gray-300 leading-relaxed">
                What if history's greatest minds didn't just change the world with their ideas — but{' '}
                <span className="text-yellow-400">fought for it?</span>{' '}
                That's the question that started <span className="text-yellow-400">Mind Over Matter</span>.
                We built this game because we believed science shouldn't be locked away in textbooks,
                delivered in dry lectures, or reduced to a formula on a chalkboard. Einstein's theory
                of relativity, Tesla's electromagnetic mastery, Newton's command over gravity,
                Darwin's law of evolution — these aren't just academic concepts. They are{' '}
                <span className="text-cyan-400">forces of nature</span> that literally reshaped how humanity
                understands existence itself. We wanted to tear those ideas off the page, hand them to players,
                and let them feel what it truly means to{' '}
                <span className="text-rose-400">weaponize knowledge</span> — to experience science as something
                visceral, electric, and alive.
              </p>
            </Panel>

            <Panel accent="#FF2D55">
              <p className="font-pixel text-rose-500 tracking-widest mb-3"
                 style={{ fontSize: 'clamp(6px, 1.5vw, 8px)', textShadow: '0 0 8px rgba(255,45,85,0.6)' }}>
                THE TWIST
              </p>
              <p className="font-vt text-lg sm:text-xl text-gray-300 leading-relaxed">
                But here's where it gets interesting — this isn't just a game about who hits harder.
                Every scientist's abilities are <span className="text-rose-400">directly rooted in their real discoveries</span>,
                and those discoveries carry their own natural strengths, weaknesses, and counters.
                Darwin's <span className="text-orange-400">Survival of the Fittest</span> means he evolves
                mid-fight, growing deadlier the longer the battle drags on — punishing impatience and rewarding
                pressure. Tesla's electrical chains devastate at range but leave him dangerously exposed up close.
                Oppenheimer's nuclear output is catastrophic, yet its very power demands precision and timing.
                The arena becomes a{' '}
                <span className="text-cyan-400">living argument between theories</span> — a place where history's
                greatest intellectual rivalries are finally resolved not by reputation or legacy, but by{' '}
                <span className="text-yellow-400">combat, strategy, and mastery of science itself.</span>
              </p>
            </Panel>
          </div>
        </Section>

        {/* ── CHARACTERS ── */}
        <Section id="characters">
          <SectionTitle color="text-rose-500" accent="#FF2D55">
            ★ CHOOSE YOUR SCIENTIST ★
          </SectionTitle>
          <p className="font-pixel text-cyan-400 tracking-[2px] sm:tracking-[3px] text-center -mt-3 sm:-mt-4 mb-6 sm:mb-8"
             style={{ fontSize: 'clamp(6px, 1.8vw, 8px)', textShadow: '0 0 8px #00F5FF' }}>
            6 GENIUSES · 1 ARENA · NO RULES
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {scientists.map(s => (
              <CharCard key={s.name} s={s} onClick={() => setSelectedChar(s)} />
            ))}
          </div>
          <p className="font-pixel text-gray-800 tracking-widest text-center mt-8"
             style={{ fontSize: '8px', animation: 'blink 1.5s step-end infinite' }}>
            MORE SCIENTISTS UNLOCKABLE IN STORY MODE
          </p>
        </Section>

        {/* ══════════════ SYSTEM REQUIREMENTS ══════════════ */}
        <Section id="specs">
          <SectionTitle color="text-green-400" accent="#39FF14">
            ▸ SYSTEM REQUIREMENTS ◂
          </SectionTitle>

          {/* Mobile Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Panel accent="#39FF14">
              <p className="font-pixel text-green-400 tracking-widest mb-3 sm:mb-4"
                 style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #39FF14' }}>
                ANDROID
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  ['OS', 'Android 7.1+ (API 25)'],
                  ['CPU', 'ARM64 · Vulkan'],
                  ['RAM', '3 GB+'],
                  ['DISPLAY', 'Landscape · 400 × 300 min'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-start gap-1.5 sm:gap-2">
                    <span className="font-pixel text-green-400 shrink-0 w-14 sm:w-16" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>{label}</span>
                    <span className="font-vt text-gray-300 text-base sm:text-lg leading-tight">{val}</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel accent="#BF00FF">
              <p className="font-pixel text-purple-500 tracking-widest mb-3 sm:mb-4"
                 style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #BF00FF' }}>
                iOS
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  ['OS', 'iOS 15.0+'],
                  ['DEVICE', 'iPhone / iPad'],
                  ['GPU', 'Metal-capable'],
                  ['DISPLAY', 'Landscape · Auto-rotation'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-start gap-1.5 sm:gap-2">
                    <span className="font-pixel text-purple-500 shrink-0 w-14 sm:w-16" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>{label}</span>
                    <span className="font-vt text-gray-300 text-base sm:text-lg leading-tight">{val}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          {/* Input & Controls */}
          <Panel accent="#FF2D55" className="mt-3 sm:mt-4">
            <p className="font-pixel text-rose-500 tracking-widest mb-3 sm:mb-4"
               style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #FF2D55' }}>
              CONTROLS · D-PAD
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                ['MOVE', 'D-Pad'],
                ['ATTACK', 'Action Buttons'],
                ['JUMP', 'D-Pad Up'],
                ['CROUCH', 'D-Pad Down'],
                ['SPECIAL', 'Signature Move Button'],
                ['INTERACT', 'Hold Action Button'],
              ].map(([label, val]) => (
                <div key={label} className="border border-rose-500/20 bg-rose-500/5 p-2 sm:p-3">
                  <span className="font-pixel text-rose-500 block mb-1" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>{label}</span>
                  <span className="font-vt text-gray-300 text-base sm:text-lg">{val}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Multiplayer */}
          <Panel accent="#FF8C00" className="mt-3 sm:mt-4">
            <p className="font-pixel text-orange-500 tracking-widest mb-3 sm:mb-4"
               style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #FF8C00' }}>
              MULTIPLAYER
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="border border-orange-500/20 bg-orange-500/5 p-3 sm:p-4">
                <span className="font-pixel text-orange-500 block mb-1" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>LAN · AVAILABLE NOW</span>
                <span className="font-vt text-gray-300 text-base sm:text-lg">
                  Play locally over your network — connect via LAN for low-latency head-to-head matches.
                </span>
              </div>
              <div className="border border-orange-500/20 bg-orange-500/5 p-3 sm:p-4 relative overflow-hidden">
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
                  <span className="font-pixel text-black bg-orange-500 px-1.5 py-[2px] sm:px-2"
                        style={{ fontSize: 'clamp(5px, 1.3vw, 6px)' }}>COMING SOON</span>
                </div>
                <span className="font-pixel text-orange-500 block mb-1" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>ONLINE · JOIN CODE</span>
                <span className="font-vt text-gray-300 text-base sm:text-lg">
                  Internet multiplayer via join codes — share a code with friends to battle online from anywhere.
                </span>
              </div>
            </div>
          </Panel>

          {/* Engine / Tech Bar */}
          <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-8">
            {[
              ['ENGINE', 'Unity 6.0'],
              ['PIPELINE', 'URP 2D'],
              ['INPUT', 'New Input System'],
              ['BACKEND', 'IL2CPP / Mono'],
            ].map(([label, val]) => (
              <div key={label} className="text-center">
                <span className="font-pixel text-gray-600 block" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>{label}</span>
                <span className="font-vt text-gray-400 text-base sm:text-lg">{val}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ══════════════ DOWNLOAD SECTION ══════════════ */}
        <Section id="download">
          <SectionTitle color="text-yellow-400" accent="#FFE600">
            ▼ DOWNLOAD APK ▼
          </SectionTitle>

          {/* ── VERSION PICKER TABS ── */}
          <div className="flex gap-2 mb-4 justify-center flex-wrap">
            {VERSIONS.map(v => {
              const isActive = selectedVersion === v.tag
              return (
                <button
                  key={v.tag}
                  onClick={() => setSelectedVersion(v.tag)}
                  className="font-pixel tracking-wider border-2 transition-all duration-200 relative"
                  style={{
                    fontSize: 'clamp(7px, 1.8vw, 9px)',
                    padding: 'clamp(8px, 1.5vw, 12px) clamp(12px, 2.5vw, 20px)',
                    borderColor: isActive ? '#FFE600' : 'rgba(255,255,255,0.12)',
                    color: isActive ? '#07070F' : '#9ca3af',
                    background: isActive
                      ? 'linear-gradient(135deg, #FFE600, #FFC800)'
                      : 'rgba(12,12,26,0.95)',
                    boxShadow: isActive ? '0 0 20px rgba(255,230,0,0.45)' : 'none',
                  }}
                >
                  {v.label}
                  {v.badge && (
                    <span
                      className="absolute -top-2 -right-2 font-pixel text-black px-1 py-px"
                      style={{ fontSize: '5px', background: v.badgeColor, lineHeight: 1.4 }}
                    >
                      {v.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* ── VERSION DETAIL PANEL ── */}
          {VERSIONS.map(v => {
            if (v.tag !== selectedVersion) return null
            const activeUrl = v.isLatest ? downloadUrl : v.downloadUrl
            return (
              <Panel key={v.tag} accent="#FFE600" className="text-center mb-4">
                {/* version badge */}
                <div className="inline-block border border-yellow-400/30 bg-yellow-400/5 px-4 py-1 mb-6">
                  <span className="font-pixel text-yellow-400" style={{ fontSize: '9px' }}>
                    {v.tag} · ANDROID
                  </span>
                </div>

                {/* download button */}
                <div className="mb-6">
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-pixel tracking-wide px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-400 bg-yellow-400 text-black transition-all hover:scale-105 hover:bg-yellow-300"
                    style={{ fontSize: 'clamp(9px, 2.5vw, 12px)', boxShadow: '0 0 30px rgba(255,230,0,0.5)' }}
                  >
                    ▼ DOWNLOAD NOW
                  </a>
                </div>

                {/* file info — only show live stats for latest */}
                <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-4 sm:mb-6">
                  {v.isLatest && (
                    <>
                      <div className="text-center">
                        <p className="font-pixel text-gray-500" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>FILE SIZE</p>
                        <p className="font-vt text-lg sm:text-xl text-white mt-1">{fileSize}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-pixel text-gray-500" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>DOWNLOADS</p>
                        <p className="font-vt text-lg sm:text-xl text-cyan-400 mt-1"
                           style={{ textShadow: '0 0 8px #00F5FF' }}>
                          {downloadCount}
                        </p>
                      </div>
                    </>
                  )}
                  <div className="text-center">
                    <p className="font-pixel text-gray-500" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>PLATFORM</p>
                    <p className="font-vt text-lg sm:text-xl text-white mt-1">ANDROID 7.1+</p>
                  </div>
                </div>

                {/* requirements */}
                <div className="border-t border-gray-800 pt-3 sm:pt-4">
                  <p className="font-pixel text-gray-600 tracking-widest mb-2 sm:mb-3" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>
                    SYSTEM REQUIREMENTS
                  </p>
                  <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                    {[['RAM', '3 GB+'], ['STORAGE', '2 GB'], ['OS', 'Android 7.1+']].map(([label, val]) => (
                      <div key={label} className="text-center">
                        <span className="font-pixel text-gray-600 block" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>{label}</span>
                        <span className="font-vt text-gray-400 text-base sm:text-lg">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
            )
          })}

          {/* ── CHANGELOG PANEL ── */}
          {VERSIONS.map(v => {
            if (v.tag !== selectedVersion) return null
            const typeColors = { NEW: '#39FF14', FIX: '#00F5FF', CHANGE: '#FFE600' }
            return (
              <Panel key={`log-${v.tag}`} accent="#39FF14" className="mb-4">
                <p className="font-pixel text-green-400 tracking-widest mb-3 sm:mb-4"
                   style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #39FF14' }}>
                  CHANGELOG · {v.tag}
                </p>
                <div className="space-y-2">
                  {v.changes.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <span
                        className="font-pixel shrink-0 px-1.5 py-px text-black"
                        style={{ fontSize: 'clamp(5px, 1.2vw, 6px)', background: typeColors[c.type] || '#FFE600', lineHeight: 1.6 }}
                      >
                        {c.type}
                      </span>
                      <p className="font-vt text-base sm:text-lg text-gray-300 leading-tight">{c.text}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            )
          })}

          {/* install instructions */}
          <Panel accent="#00F5FF" className="mt-3 sm:mt-4">
            <p className="font-pixel text-cyan-400 tracking-widest mb-3 sm:mb-4"
               style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: '0 0 8px #00F5FF' }}>
              HOW TO INSTALL
            </p>
            <div className="space-y-2 sm:space-y-3">
              {[
                ['01', 'Download the APK file using the button above'],
                ['02', 'Open your file manager and locate the downloaded .apk'],
                ['03', 'Tap the file — if prompted, enable "Install from unknown sources"'],
                ['04', 'Wait for installation to complete, then open the game'],
              ].map(([num, text]) => (
                <div key={num} className="flex gap-2 sm:gap-3 items-start">
                  <span className="font-pixel text-yellow-400 shrink-0" style={{ fontSize: 'clamp(8px, 2.2vw, 10px)' }}>{num}</span>
                  <p className="font-vt text-base sm:text-lg text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Section>

      </div>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="text-center py-6 sm:py-10 px-3 sm:px-4 border-t border-gray-800 mt-4">
        <p className="font-pixel text-yellow-400 tracking-widest"
           style={{ fontSize: 'clamp(8px, 2.2vw, 10px)', textShadow: '0 0 8px rgba(255,230,0,0.4)' }}>
          Mind Over Matter
        </p>
        <p className="font-vt text-gray-700 text-sm sm:text-base tracking-widest mt-1">
          © 2025 YOUR STUDIO NAME · ALL RIGHTS RESERVED
        </p>
        <div className="flex justify-center gap-2 mt-3 text-lg">❤️ ❤️ ❤️</div>
        <p className="font-pixel text-gray-800 tracking-widest mt-3"
           style={{ fontSize: '7px', animation: 'blink 1s step-end infinite' }}>
          GAME OVER — INSERT COIN TO CONTINUE
        </p>
      </footer>

      {/* ── CHARACTER MODAL ── */}
      <CharModal s={selectedChar} onClose={() => setSelectedChar(null)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        .font-pixel { font-family: 'Press Start 2P', monospace; }
        .font-vt    { font-family: 'VT323', monospace; }
        @keyframes blink   { 50% { opacity: 0; } }
        @keyframes marquee { from { transform: translateX(100vw); } to { transform: translateX(-100%); } }
        @keyframes fabBubbleIn {
          0%   { opacity: 0; transform: scale(0.3) translateY(20px); }
          60%  { opacity: 1; transform: scale(1.08) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .fab-bubble-in {
          animation: fabBubbleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>
    </div>
  )
}
