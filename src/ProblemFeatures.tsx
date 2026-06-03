import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Tag, 
  MousePointer2, 
  Copy, 
  Terminal, 
  MessageSquare,
  Clock,
  CheckCircle2,
  Loader2
} from 'lucide-react';

// --- Reusable Animated Feature Container ---
const FeatureBlock = ({ 
  title, 
  subtitle, 
  children, 
  reverse = false 
}: { 
  title: string, 
  subtitle: string, 
  children: React.ReactNode, 
  reverse?: boolean 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div 
      ref={ref}
      style={{ 
        display: 'flex', 
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '60px',
        marginBottom: '120px',
        flexWrap: 'wrap'
      }}
      className="feature-block"
    >
      <div style={{ flex: '1 1 400px', zIndex: 10 }}>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', lineHeight: 1.2, color: 'var(--text)' }}
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}
        >
          {subtitle}
        </motion.p>
      </div>
      <div style={{ flex: '1 1 500px', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'rgba(20, 24, 44, 0.6)',
            border: '1px solid rgba(90, 124, 255, 0.2)',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '16/10',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Subtle gradient orb in background */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'var(--primary)',
            filter: 'blur(100px)',
            opacity: 0.15,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }} />
          
          {children}
        </motion.div>
      </div>
    </div>
  );
};


// --- Feature 1: Prompts ---
const PromptsAnimation = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <Terminal size={20} color="var(--primary-light)" />
        <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: 14 }}>Prompt History</span>
      </div>
      
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: i === 1 ? 1 : 0.5, x: 0 }}
          transition={{ delay: i * 0.4, duration: 0.5 }}
          style={{
            background: i === 1 ? 'rgba(90, 124, 255, 0.15)' : 'rgba(255,255,255,0.03)',
            border: i === 1 ? '1px solid rgba(90, 124, 255, 0.4)' : '1px solid transparent',
            padding: '16px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {i === 1 && (
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
              style={{ position: 'absolute', top: 0, bottom: 0, width: '50%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }}
            />
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 12 }}>
            <MessageSquare size={14} />
            <span>ChatGPT</span>
            <span style={{ marginLeft: 'auto', fontSize: 11 }}>{i * 2} hrs ago</span>
          </div>
          <motion.div 
            style={{ color: 'var(--text)', fontSize: 13, lineHeight: 1.5 }}
          >
            {i === 1 
              ? "Write a python script to analyze financial data from a CSV, specifically looking for moving averages over a 30-day window..." 
              : i === 2 
                ? "Can you explain quantum computing as if I'm 5 years old?" 
                : "Generate a list of 10 modern web design trends for 2026."}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};


// --- Feature 2: Search / Date / Tags ---
const SearchAnimation = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      while(true) {
        setStage(0);
        await new Promise(r => setTimeout(r, 1000));
        setStage(1); // Cursor moves to date range
        await new Promise(r => setTimeout(r, 800));
        setStage(2); // Clicks date range (dropdown opens)
        await new Promise(r => setTimeout(r, 500));
        setStage(3); // Moves to 'Yesterday'
        await new Promise(r => setTimeout(r, 500));
        setStage(4); // Selects 'Yesterday'
        await new Promise(r => setTimeout(r, 800));
        setStage(5); // Cursor moves to Tags
        await new Promise(r => setTimeout(r, 800));
        setStage(6); // Clicks Tags (dropdown opens)
        await new Promise(r => setTimeout(r, 500));
        setStage(7); // Moves to 'Searches'
        await new Promise(r => setTimeout(r, 500));
        setStage(8); // Selects 'Searches'
        await new Promise(r => setTimeout(r, 800));
        setStage(9); // Cursor moves to Search input / button
        await new Promise(r => setTimeout(r, 600));
        setStage(10); // Clicks Search
        await new Promise(r => setTimeout(r, 300));
        setStage(11); // Show workflows loading
        await new Promise(r => setTimeout(r, 3500));
      }
    };
    sequence();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px', position: 'relative' }}>
      
      {/* Top Controls */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, zIndex: 10 }}>
        
        {/* Date Dropdown */}
        <div style={{ position: 'relative' }}>
          <div style={{ 
            background: stage >= 4 ? 'rgba(90,124,255,0.2)' : 'rgba(255,255,255,0.05)', 
            border: stage >= 4 ? '1px solid rgba(90,124,255,0.4)' : '1px solid rgba(255,255,255,0.1)',
            padding: '8px 12px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: 6,
            fontSize: 12,
            color: stage >= 4 ? 'var(--primary-light)' : 'var(--text-muted)'
          }}>
            <Calendar size={14} /> {stage >= 4 ? 'Yesterday' : 'Date Range'}
          </div>
          
          {/* Dropdown Options */}
          {stage >= 2 && stage < 4 && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, background: '#1a1b26', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: 4, width: 120, zIndex: 20 }}
            >
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Today</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'white', background: stage === 3 ? 'rgba(90,124,255,0.2)' : 'transparent', borderRadius: 4 }}>Yesterday</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Last 7 Days</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Last 1 Week</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Last 1 Month</div>
            </motion.div>
          )}
        </div>

        {/* Tags Dropdown */}
        <div style={{ position: 'relative' }}>
          <div style={{ 
            background: stage >= 8 ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255,255,255,0.05)', 
            border: stage >= 8 ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255,255,255,0.1)',
            padding: '8px 12px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: 6,
            fontSize: 12,
            color: stage >= 8 ? '#4ade80' : 'var(--text-muted)'
          }}>
            <Tag size={14} /> {stage >= 8 ? 'Searches' : 'Tags'}
          </div>

          {/* Dropdown Options */}
          {stage >= 6 && stage < 8 && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, background: '#1a1b26', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: 4, width: 130, zIndex: 20 }}
            >
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>All</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'white', background: stage === 7 ? 'rgba(34, 197, 94, 0.2)' : 'transparent', borderRadius: 4 }}>Searches</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Prompts</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Copied Text</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Pages</div>
              <div style={{ padding: '6px 8px', fontSize: 12, color: 'var(--text-muted)' }}>Forms</div>
            </motion.div>
          )}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, background: stage >= 10 ? 'var(--primary)' : 'rgba(255,255,255,0.05)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
          <Search size={16} color={stage >= 10 ? 'white' : 'var(--text-muted)'} />
        </div>
      </div>

      {/* Results */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, overflow: 'hidden', position: 'relative' }}>
        {stage >= 11 && (
          <>
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i - 1) * 0.2 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '16px',
                  borderRadius: '12px',
                  borderLeft: '4px solid ' + (i === 1 ? '#4ade80' : 'var(--primary)'),
                  position: 'relative'
                }}
              >
                <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 11, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 12 }}>
                  {i === 1 ? 'Duration: 14 mins' : 'Duration: 45 mins'}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 6 }}>
                  {i === 1 ? "React Performance Profiling" : "Next.js App Router Research"}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 8 }}>
                  <span>Yesterday</span> • <span>{i === 1 ? '12 searches' : '8 searches'}</span>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Simulated Cursor */}
      <motion.div
        animate={{
          x: stage === 0 ? 150 : stage === 1 || stage === 2 ? 40 : stage === 3 || stage === 4 ? 40 : stage === 5 || stage === 6 ? 150 : stage === 7 || stage === 8 ? 150 : stage >= 9 ? 340 : 150,
          y: stage === 0 ? 150 : stage === 1 || stage === 2 ? 15 : stage === 3 || stage === 4 ? 75 : stage === 5 || stage === 6 ? 15 : stage === 7 || stage === 8 ? 75 : stage >= 9 ? 15 : 150,
          scale: (stage === 2 || stage === 4 || stage === 6 || stage === 8 || stage === 10) ? 0.9 : 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          zIndex: 30,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'
        }}
      >
        <MousePointer2 size={24} color="white" fill="black" />
      </motion.div>

    </div>
  );
};


// --- Feature 3: Restore Tabs ---
const RestoreTabsAnimation = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      while(true) {
        setStage(0);
        await new Promise(r => setTimeout(r, 1000));
        setStage(1); // Cursor moving
        await new Promise(r => setTimeout(r, 1000));
        setStage(2); // Clicked
        await new Promise(r => setTimeout(r, 300));
        setStage(3); // Loading tabs
        await new Promise(r => setTimeout(r, 1500));
        setStage(4); // Tabs loaded
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    sequence();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Mock Browser Top Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : -20 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40px',
          background: '#1a1b26',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0 12px',
          gap: 8,
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px'
        }}
      >
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, marginRight: 16 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        </div>

        {[1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: stage >= 3 ? 80 : 0, 
              opacity: stage >= 3 ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: (i-1) * 0.1 }}
            style={{
              height: '32px',
              background: i === 1 ? '#24283b' : 'rgba(255,255,255,0.05)',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {stage === 3 ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                <Loader2 size={12} color="var(--primary-light)" />
              </motion.div>
            ) : (
              <div style={{ width: 12, height: 12, borderRadius: 2, background: i%2===0 ? '#4ade80' : 'var(--primary)' }} />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Restore Button */}
      <motion.button
        animate={{ 
          scale: stage === 2 ? 0.95 : 1,
          background: stage >= 2 ? 'rgba(90, 124, 255, 1)' : 'rgba(90, 124, 255, 0.15)',
          color: stage >= 2 ? 'white' : 'var(--primary-light)'
        }}
        style={{
          border: '1px solid var(--primary)',
          padding: '12px 24px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontSize: 16,
          fontWeight: 600,
          cursor: 'default',
          zIndex: 10,
          opacity: stage >= 3 ? 0 : 1,
          pointerEvents: 'none'
        }}
      >
        <Clock size={20} />
        Restore Session
      </motion.button>

      {/* Simulated Cursor */}
      <motion.div
        animate={{
          x: stage === 0 ? 100 : 0,
          y: stage === 0 ? 100 : 10,
          opacity: stage >= 3 ? 0 : 1
        }}
        transition={{ 
          x: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" }
        }}
        style={{
          position: 'absolute',
          zIndex: 20,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'
        }}
      >
        <MousePointer2 size={28} color="white" fill="black" />
      </motion.div>
    </div>
  );
};


// --- Feature 4: Copied Text ---
const CopiedTextAnimation = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      while(true) {
        setStage(0);
        await new Promise(r => setTimeout(r, 1000));
        setStage(1); // Cursor moves to copy button
        await new Promise(r => setTimeout(r, 800));
        setStage(2); // Clicks copy button
        await new Promise(r => setTimeout(r, 400));
        setStage(3); // Toast appears
        await new Promise(r => setTimeout(r, 2500));
      }
    };
    sequence();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Copy size={18} color="var(--primary-light)" /> Clipboard History
      </div>

      {/* Code Block with Copy Button */}
      <div style={{
        background: '#1a1b26',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 12, 
          right: 12, 
          background: stage === 2 ? 'rgba(90, 124, 255, 0.4)' : 'rgba(255,255,255,0.05)',
          padding: '6px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Copy size={14} color="var(--text-muted)" />
        </div>
        <pre style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0, fontFamily: 'monospace', overflow: 'hidden' }}>
          <code>
            {"function calculateTotal(items) {\n  return items.reduce(...);\n}"}
          </code>
        </pre>
      </div>

      {/* Simulated Cursor */}
      <motion.div
        animate={{
          x: stage === 0 ? 50 : 380,
          y: stage === 0 ? 200 : 50,
          scale: stage === 2 ? 0.9 : 1,
          opacity: stage >= 3 ? 0 : 1
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          zIndex: 30,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'
        }}
      >
        <MousePointer2 size={24} color="white" fill="black" />
      </motion.div>

      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? -10 : 10, scale: stage >= 3 ? 1 : 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#22c55e',
          color: 'white',
          fontSize: 14,
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)',
          zIndex: 40,
          pointerEvents: 'none'
        }}
      >
        <CheckCircle2 size={16} /> Copied and Stored!
      </motion.div>

    </div>
  );
};


export const ProblemFeatures = () => {
  return (
    <section id="features" className="features" style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">
        
        <FeatureBlock 
          title="Lost that perfect AI prompt?" 
          subtitle="You spent 15 minutes crafting the perfect ChatGPT prompt, closed the tab, and now it's gone forever. Not anymore. Workflow Memory automatically saves your prompts across all AI tools."
        >
          <PromptsAnimation />
        </FeatureBlock>

        <FeatureBlock 
          title="Can't find that specific research?" 
          subtitle="You know you found the solution last Tuesday, but history search is useless. Filter your entire browsing graph by date ranges, specific tags, and exact workflows to pinpoint your exact thought process."
          reverse={true}
        >
          <SearchAnimation />
        </FeatureBlock>

        <FeatureBlock 
          title="Closed 20 tabs by mistake?" 
          subtitle="Browser crashed? Or you just closed a window with your entire research session? Instantly travel back in time and restore entire workflows with a single click."
        >
          <RestoreTabsAnimation />
        </FeatureBlock>

        <FeatureBlock 
          title="Remember copying this code snippet?" 
          subtitle="Stop switching back and forth between windows to copy multiple things. Your clipboard history is automatically mapped to the exact page and context you copied it from."
          reverse={true}
        >
          <CopiedTextAnimation />
        </FeatureBlock>

      </div>
    </section>
  );
};
