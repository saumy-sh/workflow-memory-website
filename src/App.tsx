import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink,
  CheckCircle,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';
import { Feedback } from './Feedback';
import { Pricing } from './Pricing';
import { ProblemFeatures } from './ProblemFeatures';
import { LoginButton } from './LoginButton';
import { PrivacyVault } from './PrivacyVault';
import logoUrl from './assets/icon128.png';
import demoVideoUrl from './assets/complete_demo.mp4';

const rotatingPhrases = [
  "prompts",
  "copied text",
  "searches",
  "tabs",
  "sites"
];

function App() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.75);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const triggerRestore = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      
      {/* Background Floating Grid Nodes */}
      <div style={{ position: 'absolute', top: '10%', left: '8%', width: 140, height: 140, pointerEvents: 'none', opacity: 0.12 }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="20" cy="20" r="6" fill="#5a7cff" />
          <circle cx="80" cy="40" r="6" fill="#5a7cff" />
          <circle cx="40" cy="80" r="6" fill="#5a7cff" />
          <line x1="20" y1="20" x2="80" y2="40" stroke="#5a7cff" strokeWidth="2" />
          <line x1="80" y1="40" x2="40" y2="80" stroke="#5a7cff" strokeWidth="2" />
        </svg>
      </div>

      <div style={{ position: 'absolute', top: '45%', right: '5%', width: 180, height: 180, pointerEvents: 'none', opacity: 0.08 }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="30" cy="10" r="5" fill="#5a7cff" />
          <circle cx="80" cy="30" r="5" fill="#5a7cff" />
          <circle cx="50" cy="70" r="5" fill="#5a7cff" />
          <circle cx="20" cy="60" r="5" fill="#5a7cff" />
          <line x1="30" y1="10" x2="80" y2="30" stroke="#5a7cff" strokeWidth="1.5" />
          <line x1="80" y1="30" x2="50" y2="70" stroke="#5a7cff" strokeWidth="1.5" />
          <line x1="50" y1="70" x2="20" y2="60" stroke="#5a7cff" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="30" y2="10" stroke="#5a7cff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={logoUrl} className="logo-icon" width={32} height={32} alt="Workflow Memory Logo" />
            <span className="logo-text">Workflow Memory</span>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#privacy">Privacy First</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="btn-primary header-cta" onClick={triggerRestore}>
              Add to Chrome <ExternalLink size={16} />
            </button>
            <LoginButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '140%',
            zIndex: -1,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.svg 
            width="600" height="600" viewBox="0 0 600 600" 
            style={{ filter: 'drop-shadow(0 0 12px rgba(90, 124, 255, 0.6))' }}
          >
            {/* Main vertical line */}
            <motion.path 
              d="M300,0 L300,600" 
              stroke="#5a7cff" 
              strokeWidth="3" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            />
            {/* Main line nodes */}
            <motion.circle cx="300" cy="150" r="8" fill="#010207" stroke="#5a7cff" strokeWidth="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
            <motion.circle cx="300" cy="350" r="12" fill="#5a7cff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.1 }} />
            <motion.circle cx="300" cy="350" r="24" fill="none" stroke="#5a7cff" strokeWidth="1" initial={{ scale: 0, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ delay: 2.1, duration: 1.5, repeat: Infinity }} />
            <motion.circle cx="300" cy="530" r="8" fill="#010207" stroke="#5a7cff" strokeWidth="3" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.7 }} />

            {/* Branch 1 (Right) */}
            <motion.path d="M300,100 L400,100 L400,130" stroke="#5a7cff" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4 }} />
            <motion.circle cx="400" cy="130" r="6" fill="#010207" stroke="#5a7cff" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} />

            {/* Branch 2 (Left) */}
            <motion.path d="M300,220 L180,220" stroke="#5a7cff" strokeWidth="2" strokeDasharray="4 4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.7 }} />
            <motion.circle cx="180" cy="220" r="6" fill="#010207" stroke="#5a7cff" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.9 }} />

            {/* Branch 2.1 (Sub-branch Left) */}
            <motion.path d="M180,220 L120,220 L120,180" stroke="#5a7cff" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.0 }} />
            <motion.circle cx="120" cy="180" r="5" fill="#5a7cff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} />

            {/* Branch 3 (Right) */}
            <motion.path d="M300,320 L450,320 L450,280" stroke="#5a7cff" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.0 }} />
            <motion.circle cx="450" cy="280" r="6" fill="#010207" stroke="#5a7cff" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.3 }} />

            {/* Branch 4 (Left) */}
            <motion.path d="M300,420 L220,420 L220,460" stroke="#5a7cff" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.4 }} />
            <motion.circle cx="220" cy="460" r="6" fill="#010207" stroke="#5a7cff" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6 }} />

            {/* Branch 5 (Right short) */}
            <motion.path d="M300,480 L360,480" stroke="#5a7cff" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5 }} />
            <motion.circle cx="360" cy="480" r="5" fill="#5a7cff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.7 }} />

            {/* Flowing Data Effects (Glows traveling through graph) */}
            <motion.path d="M300,0 L300,600" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeDasharray="40 800" initial={{ strokeDashoffset: 840 }} animate={{ strokeDashoffset: -40 }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 3.5 }} style={{ filter: 'drop-shadow(0 0 8px #ffffff)' }} />
            <motion.path d="M300,100 L400,100 L400,130" stroke="#ffffff" strokeWidth="2" strokeDasharray="20 400" initial={{ strokeDashoffset: 420 }} animate={{ strokeDashoffset: -20 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 4.2 }} style={{ filter: 'drop-shadow(0 0 6px #ffffff)' }} fill="none" />
            <motion.path d="M300,320 L450,320 L450,280" stroke="#ffffff" strokeWidth="2" strokeDasharray="30 400" initial={{ strokeDashoffset: 430 }} animate={{ strokeDashoffset: -30 }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 5.0 }} style={{ filter: 'drop-shadow(0 0 6px #ffffff)' }} fill="none" />
            <motion.path d="M300,420 L220,420 L220,460" stroke="#ffffff" strokeWidth="2" strokeDasharray="20 400" initial={{ strokeDashoffset: 420 }} animate={{ strokeDashoffset: -20 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 5.5 }} style={{ filter: 'drop-shadow(0 0 6px #ffffff)' }} fill="none" />
          </motion.svg>
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Workflow Memory
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ 
              lineHeight: '1.8', 
              fontSize: '1.25rem', 
              maxWidth: '750px', 
              margin: '0 auto 40px auto', 
              textAlign: 'center' 
            }}
          >
            Automatically map your web sessions on the fly, instantly restore tabs, and never lose your{' '}
            <span style={{ display: 'inline-block', position: 'relative', width: '140px', textAlign: 'left' }}>
              <span style={{ visibility: 'hidden', fontWeight: 600 }}>prompts</span>
              <AnimatePresence>
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ position: 'absolute', left: 0, top: 0, color: 'var(--primary-light)', fontWeight: 600, whiteSpace: 'nowrap' }}
                >
                  {rotatingPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span style={{ opacity: 0.7, fontSize: '0.85em', display: 'inline-block', marginTop: '16px', fontWeight: 400 }}>100% private. 100% offline.</span>
          </motion.p>
          
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={triggerRestore}>
              Install Chrome Extension
            </button>
            <a href="#features" className="btn-secondary hero-btn">
              Explore Features <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          {/* Animated Arrow & Text */}
          <div style={{ position: 'relative', width: '100%', zIndex: 20 }}>
            <motion.div
              initial={{ opacity: 0, y: -10, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              style={{
                position: 'absolute',
                top: -60,
                left: '12%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pointerEvents: 'none'
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <span style={{ 
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif', 
                  fontSize: '1.4rem', 
                  color: 'var(--primary-light, #8ba3ff)', 
                  fontWeight: 'bold',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))',
                  display: 'block',
                  transform: 'rotate(-5deg)'
                }}>
                  Watch the demo!
                </span>
                <svg width="70" height="70" viewBox="0 0 100 100" style={{ marginTop: -5, marginLeft: 10, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
                  <motion.path
                    d="M 15 20 Q 50 15, 65 70"
                    stroke="var(--primary-light, #8ba3ff)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                  <motion.path
                    d="M 45 60 L 65 70 L 75 50"
                    stroke="var(--primary-light, #8ba3ff)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.3 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Demo */}
          <div className="hero-image-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, border: '1px solid rgba(90, 124, 255, 0.2)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}>
            <video
              ref={videoRef}
              src={demoVideoUrl}
              loop
              muted={isMuted}
              playsInline
              onClick={handleVideoClick}
              style={{
                width: '100%',
                display: 'block',
                transform: 'scale(1.1)',
                objectFit: 'cover',
                cursor: 'pointer'
              }}
            />

            {!isPlaying && (
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 15,
                  cursor: 'pointer'
                }}
                onClick={handlePlay}
              >
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(90, 124, 255, 0.5)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Play size={40} color="white" style={{ marginLeft: 6 }} />
                </div>
              </div>
            )}
            
            <div style={{
              position: 'absolute',
              top: 20,
              right: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              zIndex: 10
            }}>
              {[1, 1.5, 1.75].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setPlaybackRate(rate)}
                  style={{
                    background: playbackRate === rate ? 'rgba(90, 124, 255, 0.9)' : 'rgba(0, 0, 0, 0.6)',
                    border: playbackRate === rate ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: 38,
                    height: 38,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (playbackRate !== rate) e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    if (playbackRate !== rate) e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
                  }}
                >
                  {rate}x
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMuted(!isMuted)}
              style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <ProblemFeatures />

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Zero configuration. No changes to your habits. Simply start browsing.</p>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse Normally</h3>
              <p>Just browse the web. Our background engine maps everything without slowing down your computer.</p>
            </div>
            
            <div className="step-arrow"><ArrowRight size={28} /></div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Open the Graph</h3>
              <p>Click the extension icon to view your visual, branching node-link research session roadmap.</p>
            </div>
            
            <div className="step-arrow"><ArrowRight size={28} /></div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Restore & Travel</h3>
              <p>Click "Restore" on any past node in the graph to travel back in time and recover your workspace state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="privacy">
        <div className="container privacy-container">
          <PrivacyVault />

          <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', paddingLeft: '48px', maxWidth: '700px', margin: '64px auto 0 auto' }}>
            {/* The vertical main branch line */}
            <div style={{ position: 'absolute', left: '15px', top: '24px', bottom: '24px', width: '4px', background: 'linear-gradient(to bottom, var(--primary), #22c55e, rgba(255, 189, 46, 0.2))', borderRadius: '4px' }} />

            <div style={{ position: 'relative' }}>
              {/* Branch connecting to node */}
              <div style={{ position: 'absolute', left: '-33px', top: '24px', width: '20px', height: '4px', background: 'var(--primary)', borderRadius: '4px' }} />
              {/* Node dot */}
              <div style={{ position: 'absolute', left: '-40px', top: '19px', width: '14px', height: '14px', background: '#040612', border: '3px solid var(--primary)', borderRadius: '50%', zIndex: 10 }} />
              
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                <h4 style={{ color: 'var(--primary-light)', fontSize: '1.2rem', marginBottom: '8px' }}>Local-First Architecture</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>All captured pages, prompts, and copied text are saved offline directly on your device inside IndexDB database storage. No cloud servers are involved.</p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-33px', top: '24px', width: '20px', height: '4px', background: '#22c55e', borderRadius: '4px' }} />
              <div style={{ position: 'absolute', left: '-40px', top: '19px', width: '14px', height: '14px', background: '#040612', border: '3px solid #22c55e', borderRadius: '50%', zIndex: 10 }} />
              
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                <h4 style={{ color: '#4ade80', fontSize: '1.2rem', marginBottom: '8px' }}>Opt-in Form Drafting Security</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>Input elements and text drafts require your explicit confirmation before saving, guaranteeing you never record passwords or billing credentials.</p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-33px', top: '24px', width: '20px', height: '4px', background: '#ffbd2e', borderRadius: '4px' }} />
              <div style={{ position: 'absolute', left: '-40px', top: '19px', width: '14px', height: '14px', background: '#040612', border: '3px solid #ffbd2e', borderRadius: '50%', zIndex: 10 }} />
              
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                <h4 style={{ color: '#ffbd2e', fontSize: '1.2rem', marginBottom: '8px' }}>No Cloud Connections</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>The only cloud connection is Google OAuth for secure login authentication. Absolutely no tracking scripts, analytics SDKs, or cloud synchronization are included. Your research data never leaves your device.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Feedback Section */}
      <Feedback />

      {/* Toast Notification for Simulated Actions */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            style={{ 
              position: 'fixed', 
              bottom: 32, 
              left: '50%', 
              transform: 'translateX(-50%)', 
              zIndex: 999,
              background: '#040612',
              border: '2px solid var(--primary)',
              borderRadius: 14,
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 12px 40px rgba(90, 124, 255, 0.4)'
            }}
          >
            <CheckCircle size={20} style={{ color: '#22c55e' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>
              Redirecting to Chrome Web Store...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer" style={{ padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#010207' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="logo-small" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={logoUrl} width={24} height={24} alt="Logo" style={{ filter: 'drop-shadow(0 0 4px rgba(90,124,255,0.4))' }} />
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>Workflow Memory</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              The definitive local-first tool for mapping your browsing research, saving prompts, and time-traveling through your workflow context.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', opacity: 0.7, marginTop: 'auto' }}>© 2026 Workflow Memory.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Connect</h4>
            <a href="https://saumysh.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>My Site (saumysh.com)</a>
            <a href="https://linkedin.com/in/saumysharan25" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>LinkedIn (saumysharan25)</a>
            <a href="https://twitter.com/Saumysha_1729" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Twitter (Saumysha_1729)</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Products</h4>
            <a href="https://flow.saumysh.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Flow</a>
            <a href="https://visual-memory.saumysh.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Visual Memory</a>
            <a href="https://saumysh.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>All Products</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Legal</h4>
            <a href="privacy.html" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Privacy Policy</a>
            <a href="terms.html" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Terms of Service</a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
