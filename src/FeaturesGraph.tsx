import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitGraph, 
  Clock, 
  Cpu, 
  Sparkles, 
  SlidersHorizontal,
  Terminal,
  ChevronRight,
  Filter,
  MousePointerClick
} from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  pitch: string;
  copy: string;
  icon: React.ComponentType<any>;
  color: string;
  nodeName: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Visual Workflow Graphs',
    pitch: 'Turn your tab clutter into a roadmap.',
    copy: 'Standard browser history is a flat, chronological list. Workflow Memory transforms your sessions into interactive, branching node-link diagrams. See exactly how you traveled from a Google search to developer docs, StackOverflow, and GitHub, mapping the actual lineage of your research.',
    icon: GitGraph,
    color: '#5a7cff',
    nodeName: 'Workflow Graph'
  },
  {
    id: 2,
    title: 'Workflow Time Travel (Restore Till Here)',
    pitch: 'Resuming work has never been this effortless.',
    copy: 'Reopen entire multi-tab sessions with a single click. Want to step back in time? Use "Restore Till Here" on the graph to rewind your workspace to a specific node, reopening only the exact tabs that were active at that stage of your project.',
    icon: Clock,
    color: '#8fa6ff',
    nodeName: 'Time Travel'
  },
  {
    id: 3,
    title: 'Universal AI Prompt & Code Log',
    pitch: 'Your unified AI workspace companion.',
    copy: 'Automatically tracks prompt submissions across all major chat interfaces (ChatGPT, Claude, Gemini, DeepSeek, Perplexity, Poe) and captures copied code snippets—even if you use custom UI "Copy Code" buttons. Never lose a prompt or code snippet again.',
    icon: Cpu,
    color: '#3b5bdb',
    nodeName: 'AI & Code Log'
  },
  {
    id: 4,
    title: 'Clean, Exact Restoration',
    pitch: 'Jump straight back to the context.',
    copy: 'Clicking a past prompt or page event reopens the site. It bypasses sidebars and navigation panels, restoring your exact context without polluting your URLs with hashes.',
    icon: Sparkles,
    color: '#5a7cff',
    nodeName: 'Clean Restore'
  },
  {
    id: 5,
    title: 'Multi-Dimensional Workspace Filters',
    pitch: 'Find exactly what you did, when you did it.',
    copy: 'Stop scrolling through thousands of lines of generic history. Instantly slice through your workflows by filtering for specific content tags—like Prompts, Copied Code, Searches, or Form Drafts—and narrow your search to precise date ranges (Today, Yesterday, or Last Week). Drill down directly to the exact moment of inspiration.',
    icon: SlidersHorizontal,
    color: '#8fa6ff',
    nodeName: 'Precision Filters'
  }
];

export function FeaturesGraph() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Nodes positions for the SVG (width: 280, height: 480)
  const nodes = [
    { x: 70, y: 70, index: 0 },   // Node 1: Visual Workflow Graphs
    { x: 70, y: 170, index: 1 },  // Node 2: Workflow Time Travel
    { x: 180, y: 230, index: 2 }, // Node 3: AI Prompt Log (Branched)
    { x: 70, y: 310, index: 3 },  // Node 4: Clean Restore
    { x: 200, y: 370, index: 4 }  // Node 5: Workspace Filters (Branched)
  ];

  const activeFeature = features[activeIndex];

  return (
    <div className="git-graph-section" style={{ position: 'relative', zIndex: 5 }}>
      {/* Git Graph Visual SVG Column */}
      <div className="git-svg-container" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', top: 16, left: 24, fontSize: 13, color: 'rgba(90, 124, 255, 0.6)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Terminal size={14} /> git log --graph --oneline
        </div>
        
        <svg viewBox="0 0 280 480" width="100%" height="450" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="mainLineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5a7cff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b5bdb" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="branchLineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5a7cff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8fa6ff" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#5a7cff" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* MAIN BRANCH LINE */}
          <line x1="70" y1="20" x2="70" y2="450" stroke="url(#mainLineGrad)" strokeWidth="4" strokeLinecap="round" />

          {/* BRANCH 1: AI Prompt Log (Node 1 -> Node 3 -> Node 4 merge-back) */}
          <path 
            d="M 70 70 C 70 120, 180 120, 180 230 C 180 280, 70 280, 70 310" 
            fill="none" 
            stroke={activeIndex === 2 ? '#5a7cff' : 'rgba(90, 124, 255, 0.25)'} 
            strokeWidth={activeIndex === 2 ? "4" : "3"} 
            strokeDasharray={activeIndex === 2 ? "none" : "4,4"}
            style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
          />

          {/* BRANCH 2: Filters (Node 2 -> Node 5) */}
          <path 
            d="M 70 170 C 70 220, 200 240, 200 370" 
            fill="none" 
            stroke={activeIndex === 4 ? '#8fa6ff' : 'rgba(90, 124, 255, 0.25)'} 
            strokeWidth={activeIndex === 4 ? "4" : "3"}
            style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
          />

          {/* ACTIVE PATH HIGHLIGHTS (Dynamic Overlay) */}
          {activeIndex === 0 && (
            <line x1="70" y1="20" x2="70" y2="170" stroke="#5a7cff" strokeWidth="6" strokeLinecap="round" style={{ filter: 'url(#glow)' }} />
          )}
          {activeIndex === 1 && (
            <line x1="70" y1="70" x2="70" y2="310" stroke="#8fa6ff" strokeWidth="6" strokeLinecap="round" style={{ filter: 'url(#glow)' }} />
          )}
          {activeIndex === 3 && (
            <line x1="70" y1="170" x2="70" y2="420" stroke="#5a7cff" strokeWidth="6" strokeLinecap="round" style={{ filter: 'url(#glow)' }} />
          )}

          {/* SVG NODES */}
          {nodes.map((node) => {
            const isActive = activeIndex === node.index;
            const feat = features[node.index];
            
            return (
              <g 
                key={node.index} 
                onClick={() => setActiveIndex(node.index)} 
                style={{ cursor: 'pointer' }}
              >
                {/* Large glow background circle for active node */}
                {isActive && (
                  <circle 
                    cx={node.x} 
                    cy={node.y} 
                    r="24" 
                    fill="rgba(90, 124, 255, 0.2)" 
                    stroke="rgba(90, 124, 255, 0.4)" 
                    strokeWidth="1"
                    style={{ filter: 'url(#glow)' }}
                  />
                )}
                
                {/* Node Main Circle */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r="18" 
                  fill={isActive ? '#5a7cff' : '#040612'} 
                  stroke={isActive ? '#ffffff' : 'rgba(90, 124, 255, 0.4)'} 
                  strokeWidth="2" 
                  style={{ transition: 'all 0.3s' }}
                />

                {/* Number or Small Bullet inside Node */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r="6" 
                  fill={isActive ? '#ffffff' : '#5a7cff'} 
                  style={{ transition: 'all 0.3s' }}
                />

                {/* Text Label next to Node */}
                <text 
                  x={node.x + 26} 
                  y={node.y + 5} 
                  fill={isActive ? '#ffffff' : 'rgba(255,255,255,0.4)'} 
                  fontSize="12.5" 
                  fontWeight={isActive ? "700" : "500"}
                  fontFamily="'Outfit', sans-serif"
                  style={{ transition: 'fill 0.3s' }}
                >
                  {feat.nodeName}
                </text>
              </g>
            );
          })}
        </svg>

        <div style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center', display: 'flex', alignItems: 'center', gap: 6 }}>
          <MousePointerClick size={12} /> Click nodes to discover core features
        </div>
      </div>

      {/* Feature Details Panel Column */}
      <div className="git-detail-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="feature-card"
            style={{ minHeight: 460, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}
          >
            <div>
              {/* Feature Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div className="feature-icon" style={{ marginBottom: 0 }}>
                  {(() => {
                    const IconComp = activeFeature.icon;
                    return <IconComp size={28} />;
                  })()}
                </div>
                <div>
                  <span style={{ fontSize: 12, color: 'var(--primary-light)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Feature 0{activeIndex + 1}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', marginTop: 2, fontWeight: 700 }}>{activeFeature.title}</h3>
                </div>
              </div>

              {/* Pitch & Copy */}
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                "{activeFeature.pitch}"
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: 20 }}>
                {activeFeature.copy}
              </p>
            </div>

            {/* Micro Feature Simulation Mockup Panel */}
            <div style={{ 
              background: 'rgba(2, 3, 8, 0.8)', 
              borderRadius: 12, 
              border: '1px solid rgba(90, 124, 255, 0.1)', 
              padding: 16,
              fontSize: 13,
              fontFamily: 'Inter, monospace',
              color: '#fff',
              overflow: 'hidden',
              boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.5)'
            }}>
              {/* MOCKUP SWITCHER */}
              {activeIndex === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></span>
                    <span style={{ fontWeight: 600, fontSize: 11 }}>ACTIVE RESEARCH GRAPH</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--primary-light)' }}>●</span>
                      <span>Google Search: "how does react hooks state batching work"</span>
                    </div>
                    <div style={{ borderLeft: '2px solid rgba(90, 124, 255, 0.4)', marginLeft: 3, paddingLeft: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#e0f2fe' }}>├─●</span>
                        <span>React Docs: "Queueing a Series of State Updates"</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#fef08a' }}>└─●</span>
                        <span>StackOverflow: "React 18 automatic batching questions"</span>
                      </div>
                      <div style={{ borderLeft: '2px solid rgba(90, 124, 255, 0.4)', marginLeft: 15, paddingLeft: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#f43f5e' }}>└─●</span>
                        <span>GitHub Issue: "facebook/react #24018"</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} /> HISTORICAL RESTORE POINT</span>
                    <span style={{ background: 'rgba(90, 124, 255, 0.2)', color: 'var(--primary-light)', padding: '2px 6px', borderRadius: 4, fontSize: 9 }}>10 mins ago</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 11 }}>Move cursor over a node to check saved workspace tabs:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '4px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)', padding: 6, borderRadius: 6 }}>
                      <span>4 Tabs active at this stage</span>
                      <button style={{ 
                        fontSize: 10, 
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
                        color: '#fff', 
                        padding: '3px 8px', 
                        borderRadius: 6,
                        fontWeight: 600
                      }}>
                        Restore Till Here
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 11 }}>AI COMPANION CONTEXT LOG</span>
                    <span style={{ color: '#22c55e', fontSize: 11 }}>● Captured</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: 10 }}>[Claude.ai - 17:14:02] PROMPT:</div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 6, borderRadius: 6, fontSize: 11, fontStyle: 'italic' }}>
                      "How do I write a custom debounce function in vanilla TypeScript?"
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 10, marginTop: 4 }}>[Claude.ai - 17:14:15] COPIED CODE:</div>
                    <div style={{ background: 'rgba(90,124,255,0.05)', border: '1px solid rgba(90,124,255,0.15)', padding: 6, borderRadius: 6, fontSize: 10 }}>
                      <code style={{ color: '#a5b4fc' }}>export function debounce&lt;T&gt;(fn: T, delay: number) ...</code>
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 11 }}>CLEAN CONTEXT RESTORE (BYPASS SIDEBARS)</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 11 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ color: '#ef4444' }}>Standard Restoration (Polluted):</span>
                      <span style={{ color: 'rgba(239, 68, 68, 0.7)', fontSize: 10 }}>https://docs.microsoft.com/en-us/typescript#section-4-sidebar-scroll?ref=share&hash=392a83bd...</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ color: '#22c55e' }}>Workflow Memory Restoration (Clean):</span>
                      <span style={{ color: 'var(--primary-light)', fontSize: 10 }}>https://docs.microsoft.com/en-us/typescript</span>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 10, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 6 }}>
                      * Reopens the exact scroll context, but removes referral hash garbage.
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 4 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 11 }}>PRECISION TEMPORAL FILTERING</span>
                    <Filter size={12} style={{ color: 'var(--primary-light)' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '4px 0' }}>
                    <span style={{ background: 'rgba(90, 124, 255, 0.2)', border: '1px solid rgba(90, 124, 255, 0.4)', color: '#fff', padding: '2px 8px', borderRadius: 100, fontSize: 9 }}>Prompts</span>
                    <span style={{ background: 'rgba(90, 124, 255, 0.2)', border: '1px solid rgba(90, 124, 255, 0.4)', color: '#fff', padding: '2px 8px', borderRadius: 100, fontSize: 9 }}>Copied Code</span>
                    <span style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', padding: '2px 8px', borderRadius: 100, fontSize: 9 }}>Searches</span>
                    <span style={{ background: 'rgba(90, 124, 255, 0.2)', border: '1px solid rgba(90, 124, 255, 0.4)', color: '#fff', padding: '2px 8px', borderRadius: 100, fontSize: 9 }}>Last 24 Hours</span>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.8)' }}>
                      <span>✓ Found 12 items matching your tags</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Next Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + features.length) % features.length)}
                style={{ background: 'transparent', color: 'var(--text-muted)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}
              >
                Previous
              </button>
              <div style={{ display: 'flex', gap: 6 }}>
                {features.map((_, idx) => (
                  <span 
                    key={idx} 
                    onClick={() => setActiveIndex(idx)} 
                    style={{ 
                      width: 6, 
                      height: 6, 
                      borderRadius: '50%', 
                      background: activeIndex === idx ? 'var(--primary)' : 'rgba(255,255,255,0.15)',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                  />
                ))}
              </div>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % features.length)}
                style={{ background: 'transparent', color: 'var(--primary-light)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}
              >
                Next Feature <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
