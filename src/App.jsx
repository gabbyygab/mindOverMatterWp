import { useState, useEffect, useRef } from 'react'

// ─── IMPORT YOUR ASSETS HERE ───────────────────────────────────────────────
import gamePoster from './assets/Posters/poster.png'
import carouselEinstein    from './assets/HeroCarouselPics/Einstein_poster_for_202604110028.jpeg'
import carouselNewton      from './assets/HeroCarouselPics/Galactic_poster_Isaac_202604110028.jpeg'
import carouselGalileo     from './assets/HeroCarouselPics/Galileo_dropping_two_202604110028.jpeg'
import carouselGame        from './assets/HeroCarouselPics/Game_poster_for_202604110028.jpeg'
import carouselOppenheimer from './assets/HeroCarouselPics/Oppenheimer_holding_physics_202604110028.jpeg'
import carouselDarwin      from './assets/HeroCarouselPics/Poster_for_Darwin_202604110028.jpeg'
import trailerVideo from './assets/Trailer/MindOverMatter Trailer 2.mp4'
import einsteinImg from './assets/Posters/einstein.png'
import teslaImg    from './assets/Posters/tesla.png'
import newtonImg   from './assets/Posters/newton.png'
import galileoImg    from './assets/Posters/galileo.png'
import darwinImg   from './assets/Posters/darwin.png'
import oppenheimerImg  from './assets/Posters/oppenheimer.png'
import ss1 from './assets/Screenshots/SSwebsiteMom.jpg'
import ss2 from './assets/Screenshots/ssWebsiteMom2.jpg'
import ss3 from './assets/Screenshots/sswebmom3.jpg'
import ss4 from './assets/Screenshots/sswebMom4.jpg'
import ss5 from './assets/Screenshots/SswebMom5.jpg'
import ss6 from './assets/Screenshots/ssWebMom6.jpg'
import robbImg    from './assets/Team Members Picture/Robb Julian.jpg'
import gabrielImg from './assets/Team Members Picture/Gabriel Delicana.jpg'
import alexinImg  from './assets/Team Members Picture/Alexin.jpeg'
// ─── CHARACTER GUIDE IMAGES ────────────────────────────────────────────────
import einsteinSpecial  from './assets/Gameplay Guide/CharacterGuides/einstein-special.jpg'
import einsteinUlt      from './assets/Gameplay Guide/CharacterGuides/einstein-ultimate.jpg'
import teslaSpecial     from './assets/Gameplay Guide/CharacterGuides/tesla-special.jpg'
import teslaUlt         from './assets/Gameplay Guide/CharacterGuides/tesla-ult.jpg'
import newtonSpecial    from './assets/Gameplay Guide/CharacterGuides/newton-special.jpg'
import newtonUlt        from './assets/Gameplay Guide/CharacterGuides/newton-ult.jpg'
import galileoSpecial   from './assets/Gameplay Guide/CharacterGuides/galileo-special.jpg'
import galileoUlt       from './assets/Gameplay Guide/CharacterGuides/galileo-ult.jpg'
import darwinSpecial    from './assets/Gameplay Guide/CharacterGuides/darwin-special.jpg'
import darwinUlt        from './assets/Gameplay Guide/CharacterGuides/darwin-ult.jpg'
import oppieSpecial     from './assets/Gameplay Guide/CharacterGuides/oppie-skill.jpg'
import oppieUlt         from './assets/Gameplay Guide/CharacterGuides/oppie-ult.jpg'
// ─── HOW TO PLAY IMAGES ────────────────────────────────────────────────────
import htpAttacks         from './assets/Gameplay Guide/attacks.jpg'
import htpCharSelect      from './assets/Gameplay Guide/character-select.jpg'
import htpHealthBar       from './assets/Gameplay Guide/health-bar-intelligence-round-circle.jpg'
import htpMapSelection    from './assets/Gameplay Guide/map-selection.jpg'
import htpMovement        from './assets/Gameplay Guide/movement.jpg'
import htpMultiplayer     from './assets/Gameplay Guide/multiplayer.jpg'
import htpSettings        from './assets/Gameplay Guide/settings.jpg'
import htpSettings2       from './assets/Gameplay Guide/settings2.jpg'
import htpTraining        from './assets/Gameplay Guide/training.jpg'
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
    skillImg: einsteinSpecial,
    ultImg: einsteinUlt,
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
    skillImg: teslaSpecial,
    ultImg: teslaUlt,
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
    skillImg: newtonSpecial,
    ultImg: newtonUlt,
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
    skillImg: galileoSpecial,
    ultImg: galileoUlt,
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
    skillImg: darwinSpecial,
    ultImg: darwinUlt,
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
    skillImg: oppieSpecial,
    ultImg: oppieUlt,
  },
]

const CAROUSEL_POSTERS = [
  { img: gamePoster,          label: 'OFFICIAL POSTER' },
  { img: carouselGame,        label: 'NIKOLA TESLA' },
  { img: carouselEinstein,    label: 'ALBERT EINSTEIN' },
  { img: carouselNewton,      label: 'ISAAC NEWTON' },
  { img: carouselGalileo,     label: 'GALILEO GALILEI' },
  { img: carouselOppenheimer, label: 'J.R. OPPENHEIMER' },
  { img: carouselDarwin,      label: 'CHARLES DARWIN' },
]

const VERSIONS = [
  {
    tag: 'v1.0.0.6-BETA',
    label: 'v1.0.0.6-BETA',
    badge: 'LATEST',
    badgeColor: '#39FF14',
    isLatest: true,
    isBeta: true,
    downloadUrl: 'https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.6-BETA',
    changes: [
      { type: 'NEW',   text: 'Beta testing release' },
      { type: 'NEW',   text: 'Open beta — report bugs to the team' },
    ],
  },
  {
    tag: 'v1.0.0.5-BETA',
    label: 'v1.0.0.5-BETA',
    badge: 'BETA',
    badgeColor: '#FFE600',
    isLatest: false,
    isBeta: true,
    downloadUrl: 'https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.5-BETA',
    changes: [
      { type: 'NEW',   text: 'Beta testing release' },
      { type: 'NEW',   text: 'Open beta — report bugs to the team' },
    ],
  },
  {
    tag: 'v1.0.0.4',
    label: 'v1.0.0.4',
    badge: 'PRE-RELEASE',
    badgeColor: '#FF8C00',
    isLatest: false,
    downloadUrl: 'https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.4',
    changes: [
      { type: 'NEW',   text: 'New download version' },
    ],
  },
  {
    tag: 'v1.0.0.3',
    label: 'v1.0.0.3',
    badge: 'PRE-RELEASE',
    badgeColor: '#FF8C00',
    isLatest: false,
    downloadUrl: 'https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.3',
    changes: [
      { type: 'FIX',   text: 'Layout bug fixes' },
    ],
  },
  {
    tag: 'v1.0.0.2',
    label: 'v1.0.0.2',
    badge: 'PRE-RELEASE',
    badgeColor: '#FF8C00',
    isLatest: false,
    downloadUrl: 'https://github.com/gabbyygab/mindOverMatterWp/releases/tag/v1.0.0.2',
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
    badge: 'PRE-RELEASE',
    badgeColor: '#FF8C00',
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
  { id: 'trailer', label: 'TRAILER' },
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'objective', label: 'OBJECTIVE' },
  { id: 'characters', label: 'CHARACTERS' },
  { id: 'howtoplay', label: 'HOW TO PLAY' },
  { id: 'specs', label: 'SPECS' },
  { id: 'download', label: 'DOWNLOAD' },
  { id: 'team', label: 'TEAM' },
  { id: 'feedback', label: 'FEEDBACK' },
]

const TEAM_MEMBERS = [
  {
    name: 'ROBB JULLIAN OLAZO',
    role: 'Asst Dev and Assets Designer',
    img: robbImg,
    accent: '#00F5FF',
    accentClass: 'text-cyan-400',
    bio: 'A 3rd-year BSIT-WMAD student at Bulacan State University with a strong foundation in backend development, proficient in Java, SQL, PHP, and JavaScript, with frontend experience in React, HTML, and CSS. Conceptualized the idea for Mind Over Matter, aiming to create a fun and engaging game that subtly introduces children to famous scientists while promoting learning through play.',
  },
  {
    name: 'JOHN GABRIEL DELICANA',
    role: 'Lead Developer',
    img: gabrielImg,
    accent: '#FFE600',
    accentClass: 'text-yellow-400',
    bio: 'A 3rd-year BSIT-WMAD student at Bulacan State University specializing in Web and Mobile Development. As Lead Developer of Mind Over Matter, he translated the team\'s vision into a fully playable experience — engineering the core systems, game mechanics, and overall architecture from the ground up. Driven by a passion for immersive design and interactive storytelling, he believes great games are built at the intersection of code and creativity.',
  },
  {
    name: 'JUSTIN ALEXIN SANTIAGO',
    role: 'Assistant Developer',
    img: alexinImg,
    accent: '#39FF14',
    accentClass: 'text-green-400',
    bio: 'Supporting the core development cycle, Justin Alexin plays a vital role in the implementation and refinement of the game\'s mechanics. Working closely with the Lead Developer, he focuses on optimizing performance and streamlining the user experience to ensure a polished final product.',
  },
]

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────
function Section({ id, children }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`scroll-mt-20 transition-all duration-1000 ease-out transform will-change-transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
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
              <div className="aspect-video overflow-hidden m-2"
                   style={{ border: `1px solid ${s.accent}40`, boxShadow: `0 0 12px ${s.accent}20` }}>
                <img src={s.skillImg} alt={`${s.skill} preview`} className="w-full h-full object-cover" />
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
              <div className="aspect-video overflow-hidden m-2"
                   style={{ border: `1px solid ${s.accent}40`, boxShadow: `0 0 12px ${s.accent}20` }}>
                <img src={s.ultImg} alt={`${s.ult} preview`} className="w-full h-full object-cover" />
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
  const [selectedVersion, setSelectedVersion] = useState('v1.0.0.6-BETA')
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [cardTilts, setCardTilts] = useState(() => CAROUSEL_POSTERS.map(() => ({ x: 0, y: 0, shine: { x: 50, y: 50 } })))
  const cardRefs = useRef([])
  const touchStartX = useRef(null)

  const handleCardMouseMove = (e, i) => {
    const el = cardRefs.current[i]
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setCardTilts(prev => prev.map((t, j) => j === i ? { x: dy * -14, y: dx * 14, shine: { x: 50 + dx * 30, y: 50 + dy * 30 } } : t))
  }
  const handleCardMouseLeave = (i) => {
    setCardTilts(prev => prev.map((t, j) => j === i ? { x: 0, y: 0, shine: { x: 50, y: 50 } } : t))
  }
  const carouselPrev = () => setCarouselIdx(i => (i - 1 + CAROUSEL_POSTERS.length) % CAROUSEL_POSTERS.length)
  const carouselNext = () => setCarouselIdx(i => (i + 1) % CAROUSEL_POSTERS.length)

  // ── Fetch stats for ALL releases so past versions also show download info ──
  const [releaseStats, setReleaseStats] = useState({}) // tag -> { downloadCount, fileSize, downloadUrl }
  useEffect(() => {
    fetch('https://api.github.com/repos/gabbyygab/mindOverMatterWp/releases')
      .then(res => res.ok ? res.json() : [])
      .then(releases => {
        const map = {}
        releases.forEach(release => {
          const apk = release.assets?.find(a => a.name.endsWith('.apk'))
          map[release.tag_name] = {
            downloadCount: apk ? (apk.download_count > 0 ? apk.download_count.toLocaleString() : '0') : '—',
            fileSize: apk ? `~${(apk.size / (1024 * 1024)).toFixed(0)} MB` : '—',
            downloadUrl: apk ? apk.browser_download_url : release.html_url,
          }
        })
        setReleaseStats(map)
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
      {/* ── GLOBAL HERO BACKGROUND (fixed, behind every section) ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        <img src={einsteinImg}    alt="" className="absolute object-cover" style={{ top: '-8%',  left: '-6%',  width: 'clamp(90px,28vw,36%)', opacity: 0.10, transform: 'rotate(-13deg)', filter: 'blur(1px) saturate(2)' }} />
        <img src={teslaImg}       alt="" className="absolute object-cover" style={{ top: '4%',   right: '-8%', width: 'clamp(80px,24vw,32%)', opacity: 0.09, transform: 'rotate(11deg)',  filter: 'blur(1px) saturate(2)' }} />
        <img src={newtonImg}      alt="" className="absolute object-cover" style={{ bottom: '-6%', left: '6%', width: 'clamp(75px,22vw,30%)', opacity: 0.09, transform: 'rotate(8deg)',   filter: 'blur(1px) saturate(1.8)' }} />
        <img src={galileoImg}     alt="" className="absolute object-cover" style={{ bottom: '2%', right: '8%', width: 'clamp(70px,20vw,28%)', opacity: 0.08, transform: 'rotate(-9deg)',  filter: 'blur(1px) saturate(1.8)' }} />
        <img src={darwinImg}      alt="" className="absolute object-cover" style={{ top: '22%',  left: '-3%', width: 'clamp(55px,16vw,22%)', opacity: 0.06, transform: 'rotate(18deg)',  filter: 'blur(2px) saturate(1.5)' }} />
        <img src={oppenheimerImg} alt="" className="absolute object-cover" style={{ top: '18%',  right: '-3%',width: 'clamp(60px,18vw,24%)', opacity: 0.06, transform: 'rotate(-20deg)', filter: 'blur(2px) saturate(1.5)' }} />
        {/* colour atmosphere */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 18% 25%, rgba(255,45,85,0.10) 0%, transparent 48%), radial-gradient(ellipse at 82% 75%, rgba(0,245,255,0.08) 0%, transparent 45%), radial-gradient(ellipse at 50% 50%, rgba(255,230,0,0.05) 0%, transparent 55%)' }} />
      </div>

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
          style={{ background: 'rgba(0,0,0,0.55)' }}
        />
      )}

      {/* ══════════════ FAB NAV ══════════════ */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] flex flex-col-reverse items-center gap-3">
        {/* Main FAB button */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 font-pixel flex items-center justify-center shrink-0"
          style={{
            borderColor: menuOpen ? '#FF2D55' : '#FFE600',
            color: menuOpen ? '#FF2D55' : '#FFE600',
            background: menuOpen ? 'rgba(255,45,85,0.12)' : 'rgba(7,7,15,0.95)',
            boxShadow: menuOpen
              ? '0 0 22px rgba(255,45,85,0.45)'
              : '0 0 18px rgba(255,230,0,0.3)',
            transform: menuOpen ? 'rotate(135deg)' : 'rotate(0deg)',
            transition: 'transform 0.28s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
            willChange: 'transform',
            fontSize: '20px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Bubble nav items — stacked upward */}
        {menuOpen && (
          <div className="flex flex-col items-center gap-1.5"
               style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', overflowX: 'hidden', paddingRight: '2px' }}>
            {[...NAV_ITEMS].reverse().map(({ id, label }, i) => {
              const isActive = activeNav === id
              const reverseI = NAV_ITEMS.length - 1 - i
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="font-pixel tracking-wider rounded-full border-2 text-center fab-bubble-in w-[120px] md:w-[180px] shrink-0"
                  style={{
                    fontSize: 'clamp(6px, 1.3vw, 10px)',
                    padding: 'clamp(6px, 1vw, 11px) 0',
                    animationDelay: `${reverseI * 0.035}s`,
                    background: isActive ? '#FFE600' : 'rgba(12,12,26,0.96)',
                    color: isActive ? '#07070F' : '#d1d5db',
                    borderColor: isActive ? '#FFE600' : 'rgba(255,255,255,0.12)',
                    boxShadow: isActive ? '0 0 14px rgba(255,230,0,0.35)' : '0 2px 8px rgba(0,0,0,0.45)',
                    willChange: 'transform, opacity',
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

          {/* ── INSERT COIN ── */}
          <p className="relative z-10 font-pixel text-yellow-400 tracking-widest mb-5"
             style={{ fontSize: 'clamp(7px, 2vw, 9px)', animation: 'blink 1s step-end infinite' }}>
            ★ INSERT COIN TO CONTINUE ★
          </p>

          {/* ── POSTER CAROUSEL ── */}
          <div className="relative z-10 mb-2 w-full flex flex-col items-center">
            {/* card track */}
            <div
              className="relative w-full"
              style={{ height: 'min(360px, 78vw)' }}
              onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
              onTouchEnd={e => {
                if (touchStartX.current === null) return
                const dx = e.changedTouches[0].clientX - touchStartX.current
                if (dx > 40) carouselPrev()
                else if (dx < -40) carouselNext()
                touchStartX.current = null
              }}
            >
              {CAROUSEL_POSTERS.map((item, i) => {
                // circular offset so both sides are always populated
                const n = CAROUSEL_POSTERS.length
                let offset = ((i - carouselIdx) % n + n) % n
                if (offset > n / 2) offset -= n
                if (Math.abs(offset) > 2) return null
                const tilt = cardTilts[i]
                const isCenter = offset === 0
                const absOff = Math.abs(offset)
                const isTilting = tilt.x !== 0 || tilt.y !== 0
                const scale = isCenter ? 1 : absOff === 1 ? 0.72 : 0.50
                const rotateY = isCenter ? tilt.y : offset * -22
                const rotateX = isCenter ? tilt.x : 0
                const opacity = isCenter ? 1 : absOff === 1 ? 0.58 : 0.28
                const zIdx = 10 - absOff * 3
                return (
                  <div
                    key={i}
                    ref={el => cardRefs.current[i] = el}
                    onMouseMove={e => handleCardMouseMove(e, i)}
                    onMouseLeave={() => handleCardMouseLeave(i)}
                    onClick={() => !isCenter && setCarouselIdx(i)}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      width: 'min(230px, 50vw)',
                      transform: `translate(calc(-50% + ${offset} * clamp(115px, 23vw, 195px)), -50%) perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                      transition: isTilting
                        ? 'transform 0.08s ease'
                        : 'transform 0.45s cubic-bezier(0.23,1,0.32,1), opacity 0.45s ease, filter 0.45s ease',
                      transformStyle: 'preserve-3d',
                      zIndex: zIdx,
                      opacity,
                      cursor: isCenter ? 'default' : 'pointer',
                      filter: isCenter ? 'none' : `brightness(0.65) blur(${absOff === 2 ? 1 : 0}px)`,
                    }}
                  >
                    {/* outer glow ring */}
                    <div className="absolute -inset-[6px] rounded-sm pointer-events-none"
                         style={{ background: 'linear-gradient(135deg, #FFE600, #FF2D55, #00F5FF, #FFE600)', opacity: isCenter ? 0.70 : 0.18, filter: 'blur(6px)' }} />
                    {/* card face */}
                    <div className="relative border-2 overflow-hidden"
                         style={{
                           borderColor: isCenter ? '#FFE600' : 'rgba(255,230,0,0.25)',
                           boxShadow: isCenter
                             ? `0 0 50px rgba(255,230,0,0.45), 0 0 100px rgba(255,45,85,0.2), 0 ${20 + rotateX * 1.5}px 70px rgba(0,0,0,0.9)`
                             : '0 0 18px rgba(0,0,0,0.85)',
                         }}>
                      <img src={item.img} alt={item.label} className="w-full block"
                           style={{ aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
                      {/* glare */}
                      <div className="absolute inset-0 pointer-events-none"
                           style={{ background: `radial-gradient(circle at ${tilt.shine.x}% ${tilt.shine.y}%, rgba(255,255,255,${isCenter ? 0.15 : 0.04}) 0%, transparent 55%)` }} />
                      {/* label strip */}
                      <div className="absolute bottom-0 left-0 right-0 px-2 py-2"
                           style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.92))' }}>
                        <p className="font-pixel text-yellow-400 text-center tracking-widest"
                           style={{ fontSize: 'clamp(4px, 1.1vw, 6px)', textShadow: '0 0 8px #FFE600' }}>
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ── CAROUSEL CONTROLS ── */}
            <div className="relative z-10 flex items-center gap-3 mt-3">
              <button
                onClick={carouselPrev}
                className="font-pixel text-yellow-400 border border-yellow-400/40 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all"
                style={{ fontSize: '10px', padding: '5px 10px', lineHeight: 1 }}
              >◀</button>

              {/* dot indicators */}
              <div className="flex items-center gap-[6px]">
                {CAROUSEL_POSTERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIdx(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === carouselIdx ? '16px' : '5px',
                      height: '5px',
                      background: i === carouselIdx ? '#FFE600' : 'rgba(255,230,0,0.28)',
                      boxShadow: i === carouselIdx ? '0 0 8px #FFE600' : 'none',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={carouselNext}
                className="font-pixel text-yellow-400 border border-yellow-400/40 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all"
                style={{ fontSize: '10px', padding: '5px 10px', lineHeight: 1 }}
              >▶</button>
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
            <div className="mt-3 flex justify-center">
              <span
                className="font-pixel tracking-widest px-3 py-1 border border-orange-400 text-orange-400"
                style={{ fontSize: 'clamp(6px, 1.8vw, 8px)', background: 'rgba(255,140,0,0.1)', boxShadow: '0 0 12px rgba(255,140,0,0.4)', animation: 'blink 2s step-end infinite' }}
              >
                ● NOW IN BETA TESTING
              </span>
            </div>
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

        {/* ── TRAILER ── */}
        <Section id="trailer">
          <SectionTitle color="text-yellow-400" accent="#FFE600">
            ▶ OFFICIAL TRAILER ◀
          </SectionTitle>
          <Panel accent="#FFE600">
            <div className="w-full aspect-video border border-yellow-400/30 bg-black relative">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
                src={trailerVideo}
              />
            </div>
          </Panel>
        </Section>

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
              {[['6', 'SCIENTISTS'], ['6', 'ARENAS'], ['2P', 'VS MODE'], ['60', 'FPS'], ['LAN', 'MULTIPLAYER']].map(([val, label]) => (
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

            <Panel accent="#BF00FF">
              <p className="font-pixel text-purple-500 tracking-widest mb-3"
                 style={{ fontSize: 'clamp(6px, 1.5vw, 8px)', textShadow: '0 0 8px rgba(191,0,255,0.6)' }}>
                WHY "MIND OVER MATTER"
              </p>
              <p className="font-vt text-lg sm:text-xl text-gray-300 leading-relaxed">
                The name isn't just a title — it's the{' '}
                <span className="text-purple-400">core philosophy</span> of the game.
                In Mind Over Matter, raw strength alone will never be enough.
                Every fight is won or lost in the mind first. Strategy, adaptability,
                and the mastery of your scientist's knowledge are what separate a{' '}
                <span className="text-yellow-400">champion from a contender</span>.
                No matter how hard you hit, no matter how fast you move —{' '}
                <span className="text-purple-400" style={{ textShadow: '0 0 10px rgba(191,0,255,0.7)' }}>
                  the mind will always prevail.
                </span>
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
            6 GENIUSES · 6 ARENAS · NO RULES
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

        {/* ══════════════ HOW TO PLAY ══════════════ */}
        <Section id="howtoplay">
          <SectionTitle color="text-cyan-400" accent="#00F5FF">
            ◈ HOW TO PLAY ◈
          </SectionTitle>

          {[
            {
              label: 'CHARACTER SELECT',
              img: htpCharSelect,
              desc: 'Choose your scientist from the roster. Each fighter has unique stats, a signature Special move, and a devastating Ultimate.',
              accent: '#FFE600',
              accentClass: 'text-yellow-400',
            },
            {
              label: 'MOVEMENT',
              img: htpMovement,
              desc: 'Use the D-Pad to move left and right. Press D-Pad Up to jump. Hold D-Pad Down to crouch and block low attacks.',
              accent: '#39FF14',
              accentClass: 'text-green-400',
            },
            {
              label: 'ATTACKS',
              img: htpAttacks,
              desc: 'Tap action buttons to perform light and heavy attacks. Chain them together for devastating combos.',
              accent: '#FF2D55',
              accentClass: 'text-rose-500',
            },
            {
              label: 'HEALTH BAR, INTELLIGENCE & ROUND',
              img: htpHealthBar,
              desc: 'Your health bar depletes as you take damage. The intelligence meter charges your Special and Ultimate. Win 2 rounds to claim victory.',
              accent: '#00F5FF',
              accentClass: 'text-cyan-400',
            },
            {
              label: 'MAP SELECTION',
              img: htpMapSelection,
              desc: 'Pick your battlefield before each match. Each arena has its own atmosphere and hazards.',
              accent: '#BF00FF',
              accentClass: 'text-purple-500',
            },
            {
              label: 'MULTIPLAYER',
              img: htpMultiplayer,
              desc: 'Challenge a friend over LAN — connect on the same network and battle head-to-head with low latency.',
              accent: '#FF8C00',
              accentClass: 'text-orange-500',
            },
            {
              label: 'TRAINING MODE',
              img: htpTraining,
              desc: 'Sharpen your skills in Training Mode. Practice combos, test specials, and learn each scientist\'s move set without the pressure of a live match.',
              accent: '#39FF14',
              accentClass: 'text-green-400',
            },
            {
              label: 'SETTINGS',
              img: htpSettings,
              desc: 'Adjust audio, controls, and display options to match your play style.',
              accent: '#00F5FF',
              accentClass: 'text-cyan-400',
            },
            {
              label: 'SETTINGS · ADVANCED',
              img: htpSettings2,
              desc: 'Fine-tune advanced options including button remapping and visual preferences.',
              accent: '#FFE600',
              accentClass: 'text-yellow-400',
            },
          ].map(({ label, img, desc, accent, accentClass }) => (
            <div key={label} className="mb-4">
              <Panel accent={accent}>
                <p className={`font-pixel ${accentClass} tracking-widest mb-3`}
                   style={{ fontSize: 'clamp(7px, 2vw, 9px)', textShadow: `0 0 8px ${accent}` }}>
                  {label}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-center">
                  <div className="overflow-hidden border"
                       style={{ borderColor: `${accent}40`, boxShadow: `0 0 16px ${accent}20` }}>
                    <img src={img} alt={label} className="w-full h-full object-cover block" />
                  </div>
                  <p className="font-vt text-base sm:text-lg text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </Panel>
            </div>
          ))}
        </Section>

        {/* ══════════════ SYSTEM REQUIREMENTS ══════════════ */}
        <Section id="specs">
          <SectionTitle color="text-green-400" accent="#39FF14">
            ▸ SYSTEM REQUIREMENTS ◂
          </SectionTitle>

          {/* Mobile Requirements */}
          <div className="mb-4">
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
              <div className="border border-gray-700/40 bg-gray-900/40 p-3 sm:p-4 relative overflow-hidden opacity-50 cursor-not-allowed select-none">
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 flex gap-1">
                  <span className="font-pixel text-black bg-gray-500 px-1.5 py-[2px] sm:px-2"
                        style={{ fontSize: 'clamp(5px, 1.3vw, 6px)' }}>NOT AVAILABLE</span>
                  <span className="font-pixel text-black bg-orange-500 px-1.5 py-[2px] sm:px-2"
                        style={{ fontSize: 'clamp(5px, 1.3vw, 6px)' }}>COMING SOON</span>
                </div>
                <span className="font-pixel text-gray-500 block mb-1" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>ONLINE · JOIN CODE</span>
                <span className="font-vt text-gray-500 text-base sm:text-lg">
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
          <div className="flex justify-center mb-4">
            <span
              className="font-pixel tracking-widest px-3 py-1 border border-orange-400 text-orange-400"
              style={{ fontSize: 'clamp(6px, 1.8vw, 8px)', background: 'rgba(255,140,0,0.1)', boxShadow: '0 0 12px rgba(255,140,0,0.4)' }}
            >
              ● BETA — v1.0.0.5-BETA IS NOW AVAILABLE FOR TESTING
            </span>
          </div>

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
            const stats = releaseStats[v.tag]
            const activeUrl = stats?.downloadUrl || v.downloadUrl || 'https://github.com/gabbyygab/mindOverMatterWp/releases'
            return (
              <Panel key={v.tag} accent="#FFE600" className="text-center mb-4">
                {/* version badge */}
                <div className="inline-block border border-yellow-400/30 bg-yellow-400/5 px-4 py-1 mb-4">
                  <span className="font-pixel text-yellow-400" style={{ fontSize: '9px' }}>
                    {v.tag} · ANDROID
                  </span>
                </div>
                {v.isBeta && (
                  <div className="mb-6">
                    <span
                      className="font-pixel tracking-widest px-3 py-1 border border-orange-400 text-orange-400"
                      style={{ fontSize: 'clamp(6px, 1.8vw, 8px)', background: 'rgba(255,140,0,0.1)', boxShadow: '0 0 10px rgba(255,140,0,0.35)' }}
                    >
                      ● BETA BUILD — MAY CONTAIN BUGS
                    </span>
                  </div>
                )}

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

                {/* file info — show for all versions */}
                <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-4 sm:mb-6">
                  <div className="text-center">
                    <p className="font-pixel text-gray-500" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>FILE SIZE</p>
                    <p className="font-vt text-lg sm:text-xl text-white mt-1">{stats?.fileSize ?? '—'}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-pixel text-gray-500" style={{ fontSize: 'clamp(6px, 1.5vw, 7px)' }}>DOWNLOADS</p>
                    <p className="font-vt text-lg sm:text-xl text-cyan-400 mt-1"
                       style={{ textShadow: '0 0 8px #00F5FF' }}>
                      {stats?.downloadCount ?? '—'}
                    </p>
                  </div>
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

        {/* ══════════════ TEAM / DEVELOPERS SECTION ══════════════ */}
        <Section id="team">
          <SectionTitle color="text-cyan-400" accent="#00F5FF">
            ◈ MEET THE DEVELOPERS ◈
          </SectionTitle>
          <p className="font-pixel text-gray-500 tracking-[2px] text-center -mt-3 sm:-mt-4 mb-6 sm:mb-8"
             style={{ fontSize: 'clamp(6px, 1.8vw, 8px)' }}>
            BSIT-3DG2 · BULACAN STATE UNIVERSITY
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.name}
                className="bg-[#0C0C1A] border border-gray-800 overflow-hidden relative flex flex-col"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                     style={{ background: m.accent, boxShadow: `0 0 12px ${m.accent}` }} />

                {/* photo */}
                <div className="w-full bg-black/40 overflow-hidden mt-[3px]" style={{ aspectRatio: '1/1' }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* info */}
                <div className="p-3 sm:p-5 flex flex-col gap-2 flex-1">
                  <p className={`font-pixel ${m.accentClass} leading-tight`}
                     style={{ fontSize: 'clamp(6px, 1.8vw, 10px)', textShadow: `0 0 8px ${m.accent}` }}>
                    {m.name}
                  </p>
                  <p className="font-pixel text-white/30 tracking-widest"
                     style={{ fontSize: 'clamp(4px, 1.1vw, 7px)' }}>
                    {m.role.toUpperCase()}
                  </p>
                  <p className="font-vt text-base sm:text-lg text-gray-400 leading-relaxed mt-1 flex-1">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══════════════ FEEDBACK SECTION ══════════════ */}
        <Section id="feedback">
          <SectionTitle color="text-rose-500" accent="#FF2D55">
            ✉ GET IN TOUCH ✉
          </SectionTitle>
          <p className="font-pixel text-gray-500 tracking-[2px] text-center -mt-3 sm:-mt-4 mb-6 sm:mb-8"
             style={{ fontSize: 'clamp(6px, 1.8vw, 8px)' }}>
            FEEDBACK · BUG REPORTS · COLLAB
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email card */}
            <a
              id="feedback-email"
              href="mailto:delicanagabriel1212@gmail.com"
              className="group bg-[#0C0C1A] border border-gray-800 relative overflow-hidden block transition-all duration-200 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                   style={{ background: '#FF2D55', boxShadow: '0 0 12px #FF2D55' }} />
              <div className="p-5 sm:p-7 flex flex-col gap-3 items-start">
                <span className="font-pixel text-rose-500 tracking-widest"
                      style={{ fontSize: 'clamp(6px, 1.5vw, 8px)', textShadow: '0 0 8px #FF2D55' }}>
                  ✉ EMAIL
                </span>
                <p className="font-vt text-lg sm:text-2xl text-white group-hover:text-rose-400 transition-colors break-all">
                  delicanagabriel1212@gmail.com
                </p>
                <span className="font-pixel text-gray-600 mt-1"
                      style={{ fontSize: 'clamp(5px, 1.3vw, 7px)' }}>
                  CLICK TO SEND EMAIL ▸
                </span>
              </div>
            </a>

            {/* Phone card */}
            <a
              id="feedback-phone"
              href="tel:+639945771623"
              className="group bg-[#0C0C1A] border border-gray-800 relative overflow-hidden block transition-all duration-200 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                   style={{ background: '#00F5FF', boxShadow: '0 0 12px #00F5FF' }} />
              <div className="p-5 sm:p-7 flex flex-col gap-3 items-start">
                <span className="font-pixel text-cyan-400 tracking-widest"
                      style={{ fontSize: 'clamp(6px, 1.5vw, 8px)', textShadow: '0 0 8px #00F5FF' }}>
                  ☎ CONTACT NUMBER
                </span>
                <p className="font-vt text-lg sm:text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  0994 577 1623
                </p>
                <span className="font-pixel text-gray-600 mt-1"
                      style={{ fontSize: 'clamp(5px, 1.3vw, 7px)' }}>
                  JOHN GABRIEL M. DELICANA · LEAD DEV ▸
                </span>
              </div>
            </a>
          </div>

          {/* extra note */}
          <Panel accent="#FFE600" className="mt-4">
            <p className="font-pixel text-yellow-400 tracking-widest mb-3"
               style={{ fontSize: 'clamp(6px, 1.5vw, 8px)', textShadow: '0 0 8px rgba(255,230,0,0.6)' }}>
              LEAVE YOUR THOUGHTS
            </p>
            <p className="font-vt text-lg sm:text-xl text-gray-400 leading-relaxed">
              Found a bug? Have an idea for a new scientist fighter? Want to collaborate?
              {' '}Drop us a message — we read every email and appreciate every bit of feedback.
              Mind Over Matter is built by students, for players, and your input directly shapes the game.
            </p>
          </Panel>
        </Section>

      </div>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="text-center py-6 sm:py-10 px-3 sm:px-4 border-t border-gray-800 mt-4">
        <p className="font-pixel text-yellow-400 tracking-widest"
           style={{ fontSize: 'clamp(8px, 2.2vw, 10px)', textShadow: '0 0 8px rgba(255,230,0,0.4)' }}>
          Mind Over Matter
        </p>
        <p className="font-vt text-gray-600 text-sm sm:text-base tracking-widest mt-1">
          © 2025 Mind Over Matter · All Rights Reserved
        </p>
        {/* Developer credits */}
        <div className="mt-3 flex flex-col items-center gap-1">
          <p className="font-pixel text-cyan-400 tracking-widest"
             style={{ fontSize: 'clamp(6px, 1.6vw, 8px)', textShadow: '0 0 8px #00F5FF' }}>
            BSIT-3DG2
          </p>
          <p className="font-pixel text-gray-600 tracking-widest"
             style={{ fontSize: 'clamp(5px, 1.3vw, 7px)' }}>
            ROBB JULLIAN OLAZO · JOHN GABRIEL DELICANA · JUSTIN ALEXIN SANTIAGO
          </p>
        </div>
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
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fab-bubble-in {
          animation: fabBubbleIn 0.2s ease-out both;
        }
      `}</style>
    </div>
  )
}
