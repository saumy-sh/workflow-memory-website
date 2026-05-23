import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ArrowRight, 
  ExternalLink,
  Laptop,
  CheckCircle,
  Undo2
} from 'lucide-react';
import { Feedback } from './Feedback';
import { Pricing } from './Pricing';
import { FeaturesGraph } from './FeaturesGraph';
import logoUrl from './assets/icon128.png';

// Simulation nodes for the Hero section
const heroNodes = [
  { id: 'h1', label: 'Google Search', type: 'search', url: 'google.com/search?q=react+state...', tabs: 1, time: '14:20' },
  { id: 'h2', label: 'React docs', type: 'docs', url: 'react.dev/reference/react/useState', tabs: 2, time: '14:22' },
  { id: 'h3', label: 'StackOverflow', type: 'so', url: 'stackoverflow.com/questions/4320...', tabs: 4, time: '14:25' },
  { id: 'h4', label: 'Gemini prompt', type: 'ai', url: 'gemini.google.com/app', tabs: 5, time: '14:27' },
  { id: 'h5', label: 'Localhost port', type: 'code', url: 'localhost:5173', tabs: 5, time: '14:30' },
];

function App() {
  const [activeHeroNode, setActiveHeroNode] = useState('h4');
  const [showToast, setShowToast] = useState(false);

  const triggerRestore = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const selectedNode = heroNodes.find(n => n.id === activeHeroNode) || heroNodes[3];

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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Your Browser's Photographic Memory.</h1>
            <p className="hero-subtitle">
              Automatically map your research, instantly restore tabs, and never lose a prompt, search, or form draft again. 100% private, 100% offline.
            </p>
          </motion.div>
          
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={triggerRestore}>
              Install Chrome Extension
            </button>
            <a href="#features" className="btn-secondary hero-btn">
              Explore Features <ArrowRight size={18} />
            </a>
          </div>
          
          {/* Interactive Hero Simulator */}
          <div className="hero-image-container">
            <div className="mockup-frame">
              {/* Browser bar */}
              <div style={{ 
                height: 44, 
                background: '#0a0d1d', 
                borderBottom: '1px solid rgba(90, 124, 255, 0.15)', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 16px', 
                gap: 12,
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b' }}></span>
                  <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#10b981' }}></span>
                </div>
                <div style={{ 
                  background: 'rgba(4, 6, 18, 0.6)', 
                  borderRadius: 6, 
                  height: 28, 
                  flex: 1, 
                  maxWidth: 600, 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '0 12px',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(90, 124, 255, 0.08)',
                  gap: 8
                }}>
                  <span style={{ color: '#22c55e' }}>🔒 Secures</span>
                  <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    workflow-memory://dashboard/workspaces/react-rendering
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={logoUrl} width={18} height={18} alt="extension" />
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Extension Active</span>
                </div>
              </div>

              {/* Workspace Split View */}
              <div style={{ display: 'flex', flex: 1, height: 'calc(100% - 44px)' }}>
                {/* Left Tree Graph (Interactive) */}
                <div style={{ 
                  width: '60%', 
                  borderRight: '1px solid rgba(90, 124, 255, 0.1)', 
                  background: 'radial-gradient(circle at 50% 50%, rgba(90, 124, 255, 0.03) 0%, transparent 80%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ position: 'absolute', top: 12, left: 16, fontSize: 11, color: 'var(--text-muted)' }}>
                    Visual Flow Workspace Simulator
                  </div>
                  
                  {/* Vector connecting branches */}
                  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <path d="M 60 220 Q 150 160, 240 130" fill="none" stroke="rgba(90, 124, 255, 0.15)" strokeWidth="3" />
                    <path d="M 60 220 Q 150 220, 240 220" fill="none" stroke="rgba(90, 124, 255, 0.15)" strokeWidth="3" />
                    <path d="M 60 220 Q 150 280, 240 310" fill="none" stroke="rgba(90, 124, 255, 0.15)" strokeWidth="3" />
                    <path d="M 240 130 L 380 100" fill="none" stroke="rgba(90, 124, 255, 0.15)" strokeWidth="3" />
                    <path d="M 240 310 L 380 340" fill="none" stroke="rgba(90, 124, 255, 0.15)" strokeWidth="3" strokeDasharray="4" />
                    
                    {/* Active highlighted lines */}
                    {activeHeroNode === 'h1' && <circle cx="60" cy="220" r="14" fill="rgba(90,124,255,0.15)" stroke="var(--primary)" strokeWidth="1" />}
                    {activeHeroNode === 'h2' && <path d="M 60 220 Q 150 160, 240 130" fill="none" stroke="var(--primary)" strokeWidth="3" />}
                    {activeHeroNode === 'h3' && <path d="M 60 220 Q 150 220, 240 220" fill="none" stroke="var(--primary)" strokeWidth="3" />}
                    {activeHeroNode === 'h4' && <path d="M 240 130 L 380 100" fill="none" stroke="var(--primary)" strokeWidth="3" />}
                    {activeHeroNode === 'h5' && <path d="M 60 220 Q 150 280, 240 310" fill="none" stroke="var(--primary)" strokeWidth="3" />}
                  </svg>

                  {/* Interactive Nodes */}
                  <div 
                    onClick={() => setActiveHeroNode('h1')} 
                    style={{ position: 'absolute', left: 40, top: 200, cursor: 'pointer', zIndex: 10 }}
                  >
                    <div style={{ 
                      width: 40, height: 40, borderRadius: '50%', 
                      background: activeHeroNode === 'h1' ? 'var(--primary)' : '#0f172a',
                      border: '2px solid ' + (activeHeroNode === 'h1' ? '#fff' : 'rgba(90,124,255,0.3)'),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: activeHeroNode === 'h1' ? '0 0 15px var(--primary)' : 'none',
                      transition: 'all 0.3s'
                    }}>
                      🔍
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveHeroNode('h2')} 
                    style={{ position: 'absolute', left: 220, top: 110, cursor: 'pointer', zIndex: 10 }}
                  >
                    <div style={{ 
                      width: 40, height: 40, borderRadius: '50%', 
                      background: activeHeroNode === 'h2' ? 'var(--primary)' : '#0f172a',
                      border: '2px solid ' + (activeHeroNode === 'h2' ? '#fff' : 'rgba(90,124,255,0.3)'),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: activeHeroNode === 'h2' ? '0 0 15px var(--primary)' : 'none',
                      transition: 'all 0.3s'
                    }}>
                      📄
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveHeroNode('h3')} 
                    style={{ position: 'absolute', left: 220, top: 200, cursor: 'pointer', zIndex: 10 }}
                  >
                    <div style={{ 
                      width: 40, height: 40, borderRadius: '50%', 
                      background: activeHeroNode === 'h3' ? 'var(--primary)' : '#0f172a',
                      border: '2px solid ' + (activeHeroNode === 'h3' ? '#fff' : 'rgba(90,124,255,0.3)'),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: activeHeroNode === 'h3' ? '0 0 15px var(--primary)' : 'none',
                      transition: 'all 0.3s'
                    }}>
                      💬
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveHeroNode('h4')} 
                    style={{ position: 'absolute', left: 360, top: 80, cursor: 'pointer', zIndex: 10 }}
                  >
                    <div style={{ 
                      width: 40, height: 40, borderRadius: '50%', 
                      background: activeHeroNode === 'h4' ? 'var(--primary)' : '#0f172a',
                      border: '2px solid ' + (activeHeroNode === 'h4' ? '#fff' : 'rgba(90,124,255,0.3)'),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: activeHeroNode === 'h4' ? '0 0 15px var(--primary)' : 'none',
                      transition: 'all 0.3s'
                    }}>
                      🤖
                    </div>
                  </div>

                  <div 
                    onClick={() => setActiveHeroNode('h5')} 
                    style={{ position: 'absolute', left: 220, top: 290, cursor: 'pointer', zIndex: 10 }}
                  >
                    <div style={{ 
                      width: 40, height: 40, borderRadius: '50%', 
                      background: activeHeroNode === 'h5' ? 'var(--primary)' : '#0f172a',
                      border: '2px solid ' + (activeHeroNode === 'h5' ? '#fff' : 'rgba(90,124,255,0.3)'),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: activeHeroNode === 'h5' ? '0 0 15px var(--primary)' : 'none',
                      transition: 'all 0.3s'
                    }}>
                      ⚙️
                    </div>
                  </div>
                </div>

                {/* Right Inspect Panel (Shows active node detail) */}
                <div style={{ 
                  width: '40%', 
                  background: 'rgba(4, 6, 18, 0.9)', 
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--primary-light)', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 12 }}>
                      <Laptop size={12} /> Node Inspector
                    </div>
                    
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 6, color: '#fff' }}>{selectedNode.label}</h3>
                    <div style={{ color: 'var(--text-muted)', fontSize: 12, wordBreak: 'break-all', marginBottom: 16 }}>
                      {selectedNode.url}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 6 }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Visited Time</span>
                        <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{selectedNode.time}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 6 }}>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Tabs Open</span>
                        <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{selectedNode.tabs} tabs</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <button 
                      onClick={triggerRestore}
                      className="btn-primary" 
                      style={{ width: '100%', fontSize: 13, padding: '10px 16px', gap: 6 }}
                    >
                      <Undo2 size={14} /> Restore Till Here
                    </button>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                      Reopens the exact browser tabs active at {selectedNode.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
