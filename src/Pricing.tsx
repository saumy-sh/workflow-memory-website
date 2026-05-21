import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} style={{ padding: '100px 24px', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: 40 }}
      >
        <div style={{
          display: 'inline-block', padding: '6px 14px', borderRadius: 100,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          fontSize: 13, color: '#e5e5e5', letterSpacing: '0.05em', textTransform: 'uppercase',
          fontWeight: 600, marginBottom: 24,
        }}>Pricing</div>

        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 12, color: '#fff', lineHeight: 1.05, fontFamily: 'Inter, serif', fontWeight: 700 }}>
          Freemium today — premium soon
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 780, margin: '0 auto', fontSize: 15.5, lineHeight: 1.7, fontWeight: 300 }}>
          Workflow Memory is available now as a freemium product: core features are free to use forever.
          We plan to introduce a thoughtfully priced premium tier in the near future — pricing will be very affordable and guided by user feedback and reviews.
        </p>
      </motion.div>

      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        <div style={{ padding: 28, borderRadius: 16, background: 'rgba(10,10,10,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#e5e5e5', marginBottom: 8 }}>Freemium</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10 }}>Free</div>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 12, lineHeight: 1.6 }}>
            Full access to essential features — capture, organize, and revisit web content without limits.
          </p>
        </div>

        <div style={{ padding: 28, borderRadius: 16, background: 'rgba(10,10,10,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#e5e5e5', marginBottom: 8 }}>Premium (coming soon)</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10 }}>Affordable</div>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 12, lineHeight: 1.6 }}>
            Planned premium features will include advanced OCR and much more. Pricing will be set based on community input to remain affordable. Your feedback matters — let us know what you'd like to see in the premium tier!
          </p>
        </div>
      </div>
    </section>
  )
}
