import { ArrowLeft } from 'lucide-react';
import logoUrl from './assets/icon128.png';

export function Terms() {
  return (
    <div className="min-h-screen" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-muted)' }}>
        <ArrowLeft size={16} /> Back to Home
      </a>
      
      <div className="logo" style={{ marginBottom: '40px' }}>
        <img src={logoUrl} className="logo-icon" width={28} height={28} alt="Workflow Memory Logo" />
        <span className="logo-text">Workflow Memory</span>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '48px' }}>Last Updated: June 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'rgba(237,233,254,0.7)', lineHeight: '1.7', fontSize: '1.05rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Workflow Memory, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, you are prohibited from using this extension or our website.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>2. Description of Service</h2>
          <p>
            Workflow Memory provides a browser extension to capture, organize, and recall visual information from webpages and online documents. We reserve the right to modify, suspend, or discontinue the service at any time with or without notice to you.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>3. User Accounts & Subscriptions</h2>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>You may need to register for an account (e.g., via Google Login) to access certain features.</li>
            <li>We offer different subscription tiers (e.g., Freemium, Premium). Subscription fees, features, and limits are subject to change.</li>
            <li>You are responsible for maintaining the security of your account and any activities that occur under it.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>4. Acceptable Use</h2>
          <p>You agree not to use the service to:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Violate any local, state, national, or international law.</li>
            <li>Capture or distribute copyrighted material without permission.</li>
            <li>Interfere with or disrupt the integrity or performance of the service.</li>
            <li>Attempt to gain unauthorized access to our systems or related networks.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>5. Intellectual Property</h2>
          <p>
            All content, design, and code associated with Workflow Memory are the exclusive property of Workflow Memory and its licensors. You may not copy, modify, distribute, or reproduce any part of our service without explicit written permission.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>6. Limitation of Liability</h2>
          <p>
            In no event shall Workflow Memory be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <a href="mailto:zoomershredder@gmail.com" style={{ color: 'var(--text-main)', marginTop: '8px', display: 'inline-block' }}>zoomershredder@gmail.com</a>
        </section>
      </div>
    </div>
  )
}
