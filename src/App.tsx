import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ArrowRight, 
  ExternalLink,
  CheckCircle,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';
import { Feedback } from './Feedback';
import { Pricing } from './Pricing';
import { FeaturesGraph } from './FeaturesGraph';
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
            <a href="#privacy">Privacy</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <button className="btn-primary header-cta" onClick={triggerRestore}>
            Add to Chrome <ExternalLink size={16} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
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

      {/* Features Showcase Section (Git log graph) */}
      <section id="features" className="features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="section-title">A Branch For Every Line of Research</h2>
            <p className="section-subtitle">
              Unlike flat chronology lists, Workflow Memory creates visual links. Dive into how it works through our interactive git-like timeline log.
            </p>
          </div>
          
          <FeaturesGraph />
        </div>
      </section>

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
          <Shield size={64} className="privacy-icon" />
          <h2 className="section-title">100% Local. 100% Private.</h2>
          <p className="section-subtitle">We never see your data. Because we never collect it in the first place.</p>
          
          <div className="privacy-content">
            <ul className="privacy-list">
              <li>
                <strong>Local-First Architecture</strong>
                All captured pages, prompts, and snapshots are saved offline directly on your device inside IndexDB database storage. No cloud servers are involved.
              </li>
              <li>
                <strong>Opt-in Form Drafting Security</strong>
                Input elements and text drafts require your explicit confirmation before saving, guaranteeing you never record passwords or billing credentials.
              </li>
              <li>
                <strong>Zero Analytics & Ad Trackers</strong>
                Absolutely no tracking scripts, analytics SDKs, or cloud connections are included inside the extensions codebase.
              </li>
            </ul>
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
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left">
            <div className="logo-small">
              <img src={logoUrl} width={22} height={22} alt="Logo" style={{ filter: 'drop-shadow(0 0 4px rgba(90,124,255,0.4))' }} />
              <span>Workflow Memory</span>
            </div>
            <p className="copyright">© 2026 Workflow Memory. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="privacy.html" className="footer-link">Privacy Policy</a>
            <a href="https://github.com/workflow-memory" target="_blank" rel="noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="mailto:support@workflowmemory.com" className="footer-link">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
