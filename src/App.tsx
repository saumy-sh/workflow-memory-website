import { Search, GitGraph, Clock, Shield, Settings, Play, ArrowRight } from 'lucide-react';
import { Feedback } from './Feedback';
import { Pricing } from './Pricing';
import logoUrl from './assets/icon128.png';


function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img src={logoUrl} className="logo-icon" width={28} height={28} alt="Workflow Memory Logo" />
            <span className="logo-text">Workflow Memory</span>
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#privacy">Privacy</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <button className="btn-primary header-cta">Add to Chrome - It's Free</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <h1 className="hero-title">Your Browser's Photographic Memory.</h1>
          <p className="hero-subtitle">
            Automatically map your research, instantly restore tabs, and never lose a prompt, search, or form draft again.
          </p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn">Install Extension</button>
            <button className="btn-secondary hero-btn">View Demo <Play size={18} /></button>
          </div>
          
          <div className="hero-image-container">
            <div className="mockup-frame">
              {/* Placeholder for the ReactFlow graph conceptual graphic */}
              <div className="mockup-content">
                <img src={logoUrl} width={120} height={120} alt="Workflow Memory Conceptual Graph" className="mockup-icon" style={{ opacity: 0.2 }} />
                <div className="mockup-nodes">
                  <div className="node n1">Search</div>
                  <div className="line l1"></div>
                  <div className="node n2">Article</div>
                  <div className="line l2"></div>
                  <div className="node n3">Prompt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><GitGraph size={32} /></div>
              <h3>Automated Graph Mapping</h3>
              <p>Visualizes your browsing journey by linking tabs and domains automatically.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Search size={32} /></div>
              <h3>Context Capture</h3>
              <p>Seamlessly tracks your prompts, form drafts, copy-pastes, and searches.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Clock size={32} /></div>
              <h3>Smart Session Restore</h3>
              <p>Intelligently remembers and restores surviving tabs from your past sessions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Settings size={32} /></div>
              <h3>Total Customization</h3>
              <p>Personalize your experience with custom node colors and workflow renaming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse Normally</h3>
              <p>Just use the web. We map everything behind the scenes.</p>
            </div>
            <div className="step-arrow"><ArrowRight size={24} /></div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Open the Graph</h3>
              <p>Click the extension to see your visual browsing history.</p>
            </div>
            <div className="step-arrow"><ArrowRight size={24} /></div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Restore & Resume</h3>
              <p>Click "Restore" on any past node to jump right back in time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="privacy">
        <div className="container privacy-container">
          <Shield size={64} className="privacy-icon" />
          <h2 className="section-title">100% Local. 100% Private.</h2>
          <div className="privacy-content">
            <ul className="privacy-list">
              <li><strong>Local Storage:</strong> All data is securely stored on your device using IndexedDB. No cloud sync.</li>
              <li><strong>Explicit Consent:</strong> Form drafts require your explicit Yes/No consent before saving.</li>
              <li><strong>Zero Tracking:</strong> Absolutely no data is sent to external servers or third parties.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Feedback Section */}
      <Feedback />

      {/* Footer */}

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-left">
            <div className="logo-small">
              <img src={logoUrl} width={20} height={20} alt="Logo" />
              <span>Workflow Memory</span>
            </div>
            <p className="copyright">© 2024 Workflow Memory. All rights reserved.</p>
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
