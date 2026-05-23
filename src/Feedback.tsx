import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Feedback() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', type: 'feedback', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = e.currentTarget

    if (!formElement.checkValidity() || !form.message.trim()) {
      formElement.reportValidity()
      return
    }

    setStatus('sending')

    // sendForm using the form selector '#myForm' as requested
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        '#myForm',
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text)
          setStatus('sent')
          formElement.reset()
          setForm({ name: '', email: '', type: 'feedback', message: '' })
          setTimeout(() => setStatus('idle'), 4000)
        },
        error => {
          console.error('FAILED...', error)
          setStatus('error')
          setTimeout(() => setStatus('idle'), 4000)
        }
      )
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 16px',
    borderRadius: 12,
    background: focused === field ? 'rgba(139,92,246,0.07)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === field ? 'rgba(139,92,246,0.45)' : 'rgba(255,255,255,0.08)'}`,
    color: '#ede9fe',
    fontSize: 14,
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'background 0.2s, border-color 0.2s',
    caretColor: '#8b5cf6',
  })

  const types = ['feedback', 'bug', 'feature', 'other']

  return (
    <section id="feedback" style={{
      padding: '120px 24px',
      position: 'relative',
    }}>
      {/* Top divider */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', filter: 'blur(30px)',
      }} />

      <div style={{ maxWidth: 640, margin: '0 auto' }} ref={ref}>
        {status === 'sent' && (
          <div style={{
            position: 'fixed', top: 20, right: 20, zIndex: 60,
            padding: '10px 14px', borderRadius: 10, color: '#0f172a',
            background: '#bbf7d0',
            boxShadow: '0 8px 30px rgba(2,6,23,0.4)',
            fontWeight: 600,
          }}>Feedback sent — thanks!</div>
        )}
        {status === 'error' && (
          <div style={{
            position: 'fixed', top: 20, right: 20, zIndex: 60,
            padding: '10px 14px', borderRadius: 10, color: '#0f172a',
            background: '#fecaca',
            boxShadow: '0 8px 30px rgba(2,6,23,0.4)',
            fontWeight: 600,
          }}>Failed to send feedback. Try again.</div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '5px 14px', borderRadius: 100,
            background: 'rgba(139,92,246,0.1)',
            border: '1px solid rgba(139,92,246,0.25)',
            fontSize: 12, color: '#c4b5fd',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            fontWeight: 500, marginBottom: 20,
          }}>Feedback</div>

          <h2 style={{
            fontFamily: 'Instrument Serif, serif',
            fontSize: 'clamp(34px, 5vw, 50px)',
            lineHeight: 1.1, letterSpacing: '-0.025em',
            marginBottom: 16,
          }}>
            Help shape<br />
            <em style={{ color: 'rgba(167,139,250,0.9)' }}>Workflow Memory.</em>
          </h2>
          <p style={{
            fontSize: 15.5, color: 'rgba(237,233,254,0.5)',
            fontWeight: 300, lineHeight: 1.7,
          }}>
            Found a bug? Have a feature idea? Just want to say hi?<br />
            Everything helps — I read every message.
          </p>
        </motion.div>

        <motion.form
          id="myForm"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          style={{
            padding: '40px',
            borderRadius: 24,
            background: 'rgba(13,10,26,0.7)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
            display: 'flex', flexDirection: 'column', gap: 20,
          }}
        >
          <input type="hidden" name="subject" value={`Workflow Memory : ${form.type}`} />
          <input type="hidden" name="type" value={form.type} />
          {/* Name + Email row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, color: 'rgba(237,233,254,0.4)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' }}>
                Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                required
                style={inputStyle('name')}
              />
            </div>
            <div>
              <label style={{ fontSize: 12, color: 'rgba(237,233,254,0.4)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' }}>
                Email <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                required
                style={inputStyle('email')}
              />
            </div>
          </div>

          {/* Type selector */}
          <div>
            <label style={{ fontSize: 12, color: 'rgba(237,233,254,0.4)', display: 'block', marginBottom: 10, letterSpacing: '0.02em' }}>
              Type
            </label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {types.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, type: t }))}
                  style={{
                    padding: '7px 16px', borderRadius: 100, fontSize: 13,
                    background: form.type === t
                      ? 'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(59,130,246,0.25))'
                      : 'rgba(255,255,255,0.04)',
                    border: form.type === t
                      ? '1px solid rgba(139,92,246,0.5)'
                      : '1px solid rgba(255,255,255,0.08)',
                    color: form.type === t ? '#c4b5fd' : 'rgba(237,233,254,0.45)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >{t}</button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={{ fontSize: 12, color: 'rgba(237,233,254,0.4)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' }}>
              Message <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell me what you think, what broke, or what you wish Workflow Memory could do..."
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              rows={5}
              required
              style={{
                ...inputStyle('message'),
                resize: 'vertical',
                minHeight: 120,
              }}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            whileHover={status === 'idle' ? { scale: 1.01 } : {}}
            whileTap={status === 'idle' ? { scale: 0.99 } : {}}
            style={{
              padding: '14px 28px',
              borderRadius: 12,
              background: status === 'sent'
                ? 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.2))'
                : 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              border: status === 'sent' ? '1px solid rgba(34,197,94,0.4)' : 'none',
              color: status === 'sent' ? '#86efac' : '#fff',
              fontSize: 15, fontWeight: 500,
              boxShadow: status === 'idle' ? '0 0 30px rgba(139,92,246,0.35)' : 'none',
              transition: 'all 0.3s',
              cursor: status === 'idle' ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}
          >
            {status === 'sending' && (
              <div style={{
                width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)',
                borderTop: '2px solid white', borderRadius: '50%',
                animation: 'spin-slow 0.7s linear infinite',
              }} />
            )}
            {status === 'idle' && 'Send message →'}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && '✓ Message received — thank you!'}
            {status === 'error' && 'Something went wrong. Try again.'}
          </motion.button>

          <p style={{ fontSize: 12, color: 'rgba(237,233,254,0.25)', textAlign: 'center', lineHeight: 1.6 }}>
            Your message goes directly to the developer.
            No bots, no ticketing system.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
