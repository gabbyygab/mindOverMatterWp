import { useState, useEffect } from 'react'

// ─── IMPORT YOUR ASSETS HERE ───────────────────────────────────────────────
import gamePoster  from './assets/poster.png'
import einsteinImg from './assets/einstein.png'
import teslaImg    from './assets/tesla.png'
import newtonImg   from './assets/newton.png'
import galileoImg    from './assets/galileo.png'
import darwinImg   from './assets/darwin.png'
import oppenheimerImg  from './assets/oppenheimer.png'
// ───────────────────────────────────────────────────────────────────────────

const scientists = [
  {
    name: 'ALBERT EINSTEIN',
    type: 'PHYSICIST · SPACE-TIME TYPE',
    bio: 'Master of relativity. Einstein warps the battlefield itself, slowing time around enemies and bending light beams into devastating rays.',
    img: einsteinImg,
    accent: '#FFE600',
    accentClass: 'text-yellow-400',
    borderClass: 'border-yellow-400',
    bgClass: 'bg-yellow-400',
    stats: { power: 75, speed: 60, defense: 55, intellect: 98 },
    move: 'RELATIVITY RIFT — Time Dilation Strike',
  },
  {
    name: 'NIKOLA TESLA',
    type: 'INVENTOR · LIGHTNING TYPE',
    img: teslaImg,
    accent: '#00F5FF',
    accentClass: 'text-cyan-400',
    borderClass: 'border-cyan-400',
    bgClass: 'bg-cyan-400',
    bio: 'The lord of electricity. Tesla summons cascading lightning coils and AC current blasts that chain between enemies. His Tesla Coil super charges the entire stage.',
    stats: { power: 88, speed: 80, defense: 50, intellect: 90 },
    move: 'TESLA SURGE — Coil Overload Burst',
  },
  {
    name: 'ISAAC NEWTON',
    type: 'MATHEMATICIAN · GRAVITY TYPE',
    img: newtonImg,
    accent: '#39FF14',
    accentClass: 'text-green-400',
    borderClass: 'border-green-400',
    bgClass: 'bg-green-400',
    bio: 'What goes up must come down — hard. Newton commands gravitational pull, launching debris and opponents skyward before slamming them back to earth.',
    stats: { power: 92, speed: 45, defense: 78, intellect: 95 },
    move: 'GRAVITY WELL — Orbital Collapse',
  },
  {
    name: 'GALILEO GALILEI',
    type: 'ASTRONOMER · CELESTIAL TYPE',
    img: galileoImg,
    accent: '#FF2D55',
    accentClass: 'text-rose-500',
    borderClass: 'border-rose-500',
    bgClass: 'bg-rose-500',
    bio: 'Father of observational astronomy. Galileo turns the cosmos into a weapon — raining down celestial bodies, bending starlight into blinding beams, and pulling moons from orbit to crush his opponents.',
    stats: { power: 82, speed: 70, defense: 65, intellect: 97 },
    move: 'CELESTIAL DROP — Orbital Impact Strike',
  },
  {
    name: 'CHARLES DARWIN',
    type: 'BIOLOGIST · EVOLUTION TYPE',
    img: darwinImg,
    accent: '#FF8C00',
    accentClass: 'text-orange-500',
    borderClass: 'border-orange-500',
    bgClass: 'bg-orange-500',
    bio: 'Survival of the fittest, incarnate. Darwin adapts mid-battle, evolving new traits each round. The longer the fight, the stronger and more unpredictable he becomes.',
    stats: { power: 65, speed: 72, defense: 80, intellect: 88 },
    move: 'FINAL FORM — Apex Evolution Burst',
  },
  {
    name: 'J. ROBERT OPPENHEIMER',
    type: 'PHYSICIST · NUCLEAR TYPE',
    img: oppenheimerImg,
    accent: '#BF00FF',
    accentClass: 'text-purple-500',
    borderClass: 'border-purple-500',
    bgClass: 'bg-purple-500',
    bio: 'Father of the atomic bomb. Oppenheimer channels the destructive power of nuclear fission — detonating shockwaves that level the arena and leaving radioactive fallout that no one can escape.',
    stats: { power: 100, speed: 55, defense: 85, intellect: 100 },
    move: 'TRINITY TEST — Nuclear Detonation',
  },
]

const statLabels = ['power', 'speed', 'defense', 'intellect']

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'overview', label: 'OVERVIEW' },
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
    <h2 className={`font-pixel ${color} tracking-widest text-center mb-8`}
        style={{ fontSize: 'clamp(12px, 3.5vw, 18px)', textShadow: `0 0 20px ${accent}` }}>
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
      <div className="p-5 pt-6">
        {children}
      </div>
    </div>
  )
}

// ─── STAT BAR ─────────────────────────────────────────────────────────────
function StatBar({ label, value, accent, bgClass }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-pixel text-gray-600 w-16 shrink-0" style={{ fontSize: '7px' }}>
        {label.toUpperCase()}
      </span>
      <div className="flex-1 h-2 bg-white/5 border border-white/10 overflow-hidden">
        <div
          className={`h-full ${bgClass} transition-all duration-1000`}
          style={{ width: `${value}%`, boxShadow: `0 0 6px ${accent}` }}
        />
      </div>
    </div>
  )
}

// ─── CHARACTER CARD ───────────────────────────────────────────────────────
function CharCard({ s }) {
  return (
    <div className="bg-[#0C0C1A] border border-gray-800 overflow-hidden transition-transform duration-150 hover:-translate-y-1 cursor-pointer relative">
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
           style={{ background: s.accent, boxShadow: `0 0 10px ${s.accent}` }} />
      <div className="w-full bg-black/40 border-b border-gray-800 overflow-hidden mt-[3px]"
           style={{ aspectRatio: '3/4' }}>
        <img src={s.img} alt={s.name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-4">
        <p className={`font-pixel ${s.accentClass} mb-1`}
           style={{ fontSize: '11px', textShadow: `0 0 8px ${s.accent}` }}>
          {s.name}
        </p>
        <p className="font-pixel text-white/30 tracking-widest mb-3" style={{ fontSize: '7px' }}>
          {s.type}
        </p>
        <p className="font-vt text-lg text-gray-400 leading-relaxed mb-3">{s.bio}</p>
        <div className="flex flex-col gap-2 mb-3">
          {statLabels.map(label => (
            <StatBar key={label} label={label} value={s.stats[label]} accent={s.accent} bgClass={s.bgClass} />
          ))}
        </div>
        <div className={`border-l-2 ${s.borderClass} pl-3 py-1`} style={{ background: `${s.accent}10` }}>
          <p className={`font-pixel ${s.accentClass} mb-1`}
             style={{ fontSize: '7px', textShadow: `0 0 6px ${s.accent}` }}>
            ⚡ SIGNATURE MOVE
          </p>
          <p className="font-vt text-lg text-white">{s.move}</p>
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

  // ── TODO: Replace these with real MediaFire API data ──
  const [downloadUrl, setDownloadUrl] = useState('https://github.com/gabbyygab/mindOverMatterWp/releases')
  const [downloadCount, setDownloadCount] = useState('—')
  const [fileSize, setFileSize] = useState('—')
  const [version, setVersion] = useState('v1.0.0')

  useEffect(() => {
    fetch('https://api.github.com/repos/gabbyygab/mindOverMatterWp/releases/latest')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (!data) return
        setVersion(data.tag_name || 'v1.0.0')
        const apk = data.assets?.find(a => a.name.endsWith('.apk'))
        if (apk) {
          setDownloadUrl(apk.browser_download_url)
          setDownloadCount(apk.download_count.toLocaleString())
          const mb = (apk.size / (1024 * 1024)).toFixed(0)
          setFileSize(`~${mb} MB`)
        }
      })
      .catch(() => {})
  }, [])

  const scrollTo = (id) => {
    setActiveNav(id)
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

      {/* ══════════════ STICKY NAV ══════════════ */}
      <nav className="sticky top-0 z-30 bg-[#07070F]/90 backdrop-blur border-b border-gray-800/60">
        <div className="max-w-5xl mx-auto flex justify-center gap-1 sm:gap-3 px-2 py-2 flex-wrap">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-pixel tracking-wide transition-all duration-100 px-3 py-2 border"
              style={{
                fontSize: '8px',
                background: activeNav === id ? '#FFE600' : 'transparent',
                color: activeNav === id ? '#000' : '#6b7280',
                borderColor: activeNav === id ? '#FFE600' : '#374151',
                boxShadow: activeNav === id ? '0 0 14px rgba(255,230,0,0.4)' : 'none',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════ HERO SECTION ══════════════ */}
      <Section id="hero">
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
          {/* background glow effects */}
          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(255,45,85,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,245,255,0.08) 0%, transparent 50%)' }} />

          {/* blinking insert coin */}
          <p className="font-pixel text-yellow-400 tracking-widest mb-6"
             style={{ fontSize: '9px', animation: 'blink 1s step-end infinite' }}>
            ★ INSERT COIN TO CONTINUE ★
          </p>

          {/* poster */}
          <div className="relative border-2 border-yellow-400 overflow-hidden mb-8"
               style={{
                 width: 'min(280px, 70vw)',
                 boxShadow: '0 0 40px rgba(255,230,0,0.3), 0 0 80px rgba(255,45,85,0.15)',
               }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                 style={{ background: '#FFE600', boxShadow: '0 0 10px #FFE600' }} />
            <img src={gamePoster} alt="Mind Over Matter — Game Poster" className="w-full block" />
          </div>

          {/* title */}
          <h1 className="font-pixel text-yellow-400 leading-tight tracking-wider text-center"
              style={{ fontSize: 'clamp(22px, 7vw, 56px)', textShadow: '4px 4px 0 #FF2D55, 0 0 40px rgba(255,230,0,0.8)' }}>
            Mind Over Matter
          </h1>
          <p className="font-pixel text-cyan-400 tracking-[4px] mt-4 text-center"
             style={{ fontSize: '10px', textShadow: '0 0 12px #00F5FF' }}>
            WHERE GENIUS BECOMES POWER
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-8 flex-wrap justify-center">
            <button
              onClick={() => scrollTo('download')}
              className="font-pixel tracking-wide px-6 py-3 border-2 border-yellow-400 bg-yellow-400 text-black transition-all hover:scale-105"
              style={{ fontSize: '9px', boxShadow: '0 0 20px rgba(255,230,0,0.5)' }}
            >
              ▼ DOWNLOAD APK
            </button>
            <button
              onClick={() => scrollTo('characters')}
              className="font-pixel tracking-wide px-6 py-3 border-2 border-cyan-400 text-cyan-400 transition-all hover:bg-cyan-400/10"
              style={{ fontSize: '9px' }}
            >
              VIEW FIGHTERS
            </button>
          </div>

          {/* scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <p className="font-pixel text-gray-600 tracking-widest"
               style={{ fontSize: '7px', animation: 'blink 2s step-end infinite' }}>
              ▼ SCROLL DOWN ▼
            </p>
          </div>
        </div>
      </Section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden bg-rose-500 py-[6px]">
        <span className="font-pixel text-black tracking-widest whitespace-nowrap inline-block"
              style={{ fontSize: '8px', animation: 'marquee 22s linear infinite' }}>
          ★ E=MC² ★ PLAYER 1 WINS ★ THEORY OF RELATIVITY ACTIVATED ★ TESLA COIL SURGE ★ FLAWLESS VICTORY ★ NEW CHALLENGER ★ ROUND 1 FIGHT ★ K.O. ★ GRAVITY SMASH ★ QUANTUM COMBO ★ Mind Over Matter ★
        </span>
      </div>

      {/* ══════════════ CONTENT ══════════════ */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">

        {/* ── OVERVIEW ── */}
        <Section id="overview">
          <SectionTitle color="text-cyan-400" accent="#00F5FF">
            ▸ GAME OVERVIEW ◂
          </SectionTitle>

          <Panel accent="#00F5FF" className="mb-6">
            <p className="font-vt text-xl text-gray-300 leading-relaxed">
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
            <p className="font-pixel text-yellow-400 tracking-widest mb-4"
               style={{ fontSize: '9px', textShadow: '0 0 8px rgba(255,230,0,0.6)' }}>
              GAME STATS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[['6', 'SCIENTISTS'], ['8', 'ARENAS'], ['2P', 'VS MODE'], ['60', 'FPS'], ['LAN', 'MULTIPLAYER']].map(([val, label]) => (
                <div key={label} className="border border-cyan-400/20 bg-cyan-400/5 p-3 text-center">
                  <span className="font-pixel text-yellow-400 text-lg block"
                        style={{ textShadow: '0 0 8px rgba(255,230,0,0.5)' }}>{val}</span>
                  <span className="font-vt text-gray-400 text-base tracking-wider mt-1 block">{label}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* screenshots */}
          <Panel accent="#39FF14">
            <p className="font-pixel text-green-400 tracking-widest mb-4"
               style={{ fontSize: '9px', textShadow: '0 0 8px #39FF14' }}>
              SCREENSHOTS
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map(n => (
                <div key={n}
                     className="aspect-video border border-dashed border-yellow-400/20 hover:border-yellow-400/50 flex items-center justify-center transition-colors">
                  <span className="font-pixel text-yellow-400/25 text-center leading-relaxed" style={{ fontSize: '7px' }}>
                    SCR 0{n}<br />PLACE IMAGE
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </Section>

        {/* ── CHARACTERS ── */}
        <Section id="characters">
          <SectionTitle color="text-rose-500" accent="#FF2D55">
            ★ CHOOSE YOUR SCIENTIST ★
          </SectionTitle>
          <p className="font-pixel text-cyan-400 tracking-[3px] text-center -mt-4 mb-8"
             style={{ fontSize: '8px', textShadow: '0 0 8px #00F5FF' }}>
            6 GENIUSES · 1 ARENA · NO RULES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scientists.map(s => <CharCard key={s.name} s={s} />)}
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
              <p className="font-pixel text-green-400 tracking-widest mb-4"
                 style={{ fontSize: '9px', textShadow: '0 0 8px #39FF14' }}>
                ANDROID
              </p>
              <div className="space-y-3">
                {[
                  ['OS', 'Android 7.1+ (API 25)'],
                  ['CPU', 'ARM64 · Vulkan'],
                  ['RAM', '3 GB+'],
                  ['DISPLAY', 'Landscape · 400 × 300 min'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="font-pixel text-green-400 shrink-0 w-16" style={{ fontSize: '7px' }}>{label}</span>
                    <span className="font-vt text-gray-300 text-lg leading-tight">{val}</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel accent="#BF00FF">
              <p className="font-pixel text-purple-500 tracking-widest mb-4"
                 style={{ fontSize: '9px', textShadow: '0 0 8px #BF00FF' }}>
                iOS
              </p>
              <div className="space-y-3">
                {[
                  ['OS', 'iOS 15.0+'],
                  ['DEVICE', 'iPhone / iPad'],
                  ['GPU', 'Metal-capable'],
                  ['DISPLAY', 'Landscape · Auto-rotation'],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="font-pixel text-purple-500 shrink-0 w-16" style={{ fontSize: '7px' }}>{label}</span>
                    <span className="font-vt text-gray-300 text-lg leading-tight">{val}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          {/* Input & Controls */}
          <Panel accent="#FF2D55" className="mt-4">
            <p className="font-pixel text-rose-500 tracking-widest mb-4"
               style={{ fontSize: '9px', textShadow: '0 0 8px #FF2D55' }}>
              CONTROLS · D-PAD
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                ['MOVE', 'D-Pad'],
                ['ATTACK', 'Action Buttons'],
                ['JUMP', 'D-Pad Up'],
                ['CROUCH', 'D-Pad Down'],
                ['SPECIAL', 'Signature Move Button'],
                ['INTERACT', 'Hold Action Button'],
              ].map(([label, val]) => (
                <div key={label} className="border border-rose-500/20 bg-rose-500/5 p-3">
                  <span className="font-pixel text-rose-500 block mb-1" style={{ fontSize: '7px' }}>{label}</span>
                  <span className="font-vt text-gray-300 text-lg">{val}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Multiplayer */}
          <Panel accent="#FF8C00" className="mt-4">
            <p className="font-pixel text-orange-500 tracking-widest mb-4"
               style={{ fontSize: '9px', textShadow: '0 0 8px #FF8C00' }}>
              MULTIPLAYER
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-orange-500/20 bg-orange-500/5 p-4">
                <span className="font-pixel text-orange-500 block mb-1" style={{ fontSize: '7px' }}>LAN · AVAILABLE NOW</span>
                <span className="font-vt text-gray-300 text-lg">
                  Play locally over your network — connect via LAN for low-latency head-to-head matches.
                </span>
              </div>
              <div className="border border-orange-500/20 bg-orange-500/5 p-4 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="font-pixel text-black bg-orange-500 px-2 py-[2px]"
                        style={{ fontSize: '6px' }}>COMING SOON</span>
                </div>
                <span className="font-pixel text-orange-500 block mb-1" style={{ fontSize: '7px' }}>ONLINE · JOIN CODE</span>
                <span className="font-vt text-gray-300 text-lg">
                  Internet multiplayer via join codes — share a code with friends to battle online from anywhere.
                </span>
              </div>
            </div>
          </Panel>

          {/* Engine / Tech Bar */}
          <div className="mt-4 flex justify-center gap-4 sm:gap-8 flex-wrap">
            {[
              ['ENGINE', 'Unity 6.0'],
              ['PIPELINE', 'URP 2D'],
              ['INPUT', 'New Input System'],
              ['BACKEND', 'IL2CPP / Mono'],
            ].map(([label, val]) => (
              <div key={label} className="text-center">
                <span className="font-pixel text-gray-600 block" style={{ fontSize: '7px' }}>{label}</span>
                <span className="font-vt text-gray-400 text-lg">{val}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ══════════════ DOWNLOAD SECTION ══════════════ */}
        <Section id="download">
          <SectionTitle color="text-yellow-400" accent="#FFE600">
            ▼ DOWNLOAD APK ▼
          </SectionTitle>

          <Panel accent="#FFE600" className="text-center">
            {/* version badge */}
            <div className="inline-block border border-yellow-400/30 bg-yellow-400/5 px-4 py-1 mb-6">
              <span className="font-pixel text-yellow-400" style={{ fontSize: '9px' }}>
                {version} · ANDROID
              </span>
            </div>

            {/* download button */}
            <div className="mb-6">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-pixel tracking-wide px-8 py-4 border-2 border-yellow-400 bg-yellow-400 text-black transition-all hover:scale-105 hover:bg-yellow-300"
                style={{ fontSize: '12px', boxShadow: '0 0 30px rgba(255,230,0,0.5)' }}
              >
                ▼ DOWNLOAD NOW
              </a>
            </div>

            {/* file info */}
            <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-6">
              <div className="text-center">
                <p className="font-pixel text-gray-500" style={{ fontSize: '7px' }}>FILE SIZE</p>
                <p className="font-vt text-xl text-white mt-1">{fileSize}</p>
              </div>
              <div className="text-center">
                <p className="font-pixel text-gray-500" style={{ fontSize: '7px' }}>DOWNLOADS</p>
                <p className="font-vt text-xl text-cyan-400 mt-1"
                   style={{ textShadow: '0 0 8px #00F5FF' }}>
                  {downloadCount}
                </p>
              </div>
              <div className="text-center">
                <p className="font-pixel text-gray-500" style={{ fontSize: '7px' }}>PLATFORM</p>
                <p className="font-vt text-xl text-white mt-1">ANDROID 7+</p>
              </div>
            </div>

            {/* requirements */}
            <div className="border-t border-gray-800 pt-4">
              <p className="font-pixel text-gray-600 tracking-widest mb-3" style={{ fontSize: '7px' }}>
                SYSTEM REQUIREMENTS
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                {[['RAM', '3 GB+'], ['STORAGE', '2 GB'], ['OS', 'Android 7.1+']].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <span className="font-pixel text-gray-600 block" style={{ fontSize: '7px' }}>{label}</span>
                    <span className="font-vt text-gray-400 text-lg">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          {/* install instructions */}
          <Panel accent="#00F5FF" className="mt-4">
            <p className="font-pixel text-cyan-400 tracking-widest mb-4"
               style={{ fontSize: '9px', textShadow: '0 0 8px #00F5FF' }}>
              HOW TO INSTALL
            </p>
            <div className="space-y-3">
              {[
                ['01', 'Download the APK file using the button above'],
                ['02', 'Open your file manager and locate the downloaded .apk'],
                ['03', 'Tap the file — if prompted, enable "Install from unknown sources"'],
                ['04', 'Wait for installation to complete, then open the game'],
              ].map(([num, text]) => (
                <div key={num} className="flex gap-3 items-start">
                  <span className="font-pixel text-yellow-400 shrink-0" style={{ fontSize: '10px' }}>{num}</span>
                  <p className="font-vt text-lg text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Section>

      </div>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="text-center py-10 px-4 border-t border-gray-800 mt-4">
        <p className="font-pixel text-yellow-400 tracking-widest"
           style={{ fontSize: '10px', textShadow: '0 0 8px rgba(255,230,0,0.4)' }}>
          Mind Over Matter
        </p>
        <p className="font-vt text-gray-700 text-base tracking-widest mt-1">
          © 2025 YOUR STUDIO NAME · ALL RIGHTS RESERVED
        </p>
        <div className="flex justify-center gap-2 mt-3 text-lg">❤️ ❤️ ❤️</div>
        <p className="font-pixel text-gray-800 tracking-widest mt-3"
           style={{ fontSize: '7px', animation: 'blink 1s step-end infinite' }}>
          GAME OVER — INSERT COIN TO CONTINUE
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        .font-pixel { font-family: 'Press Start 2P', monospace; }
        .font-vt    { font-family: 'VT323', monospace; }
        @keyframes blink   { 50% { opacity: 0; } }
        @keyframes marquee { from { transform: translateX(100vw); } to { transform: translateX(-100%); } }
      `}</style>
    </div>
  )
}
