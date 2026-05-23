import { ArrowLeft } from 'lucide-react';
import logoUrl from './assets/icon128.png';

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--text-muted)' }}>
        <ArrowLeft size={16} /> Back to Home
      </a>
      
      <div className="logo" style={{ marginBottom: '40px' }}>
        <img src={logoUrl} className="logo-icon" width={28} height={28} alt="Workflow Memory Logo" />
        <span className="logo-text">Workflow Memory</span>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '48px' }}>Last Updated: May 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'rgba(237,233,254,0.7)', lineHeight: '1.7', fontSize: '1.05rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Introduction</h2>
          <p>
            Workflow Memory is a browser extension designed to help users capture, organize, and recall visual information from webpages and online PDFs for research, learning, and productivity purposes.
          </p>
          <p style={{ marginTop: '16px' }}>
            This Privacy Policy explains what information the extension accesses, how it is used, and how user privacy is protected.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Information We Collect</h2>
          <p>Workflow Memory only accesses content and screenshots when explicitly initiated by the user.</p>
          <p style={{ marginTop: '16px' }}>The extension may process:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>User-selected screenshots from webpages or PDFs</li>
            <li>Notes or annotations created by the user</li>
            <li>Feedback messages voluntarily submitted by the user</li>
            <li>Basic extension usage information required for core functionality</li>
          </ul>
          <p style={{ marginTop: '16px' }}>
            Workflow Memory does not collect personal information such as passwords, payment information, or browsing history unrelated to the extension’s functionality.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>How Information Is Used</h2>
          <p>The information processed by Workflow Memory is used solely to provide the extension’s core features, including:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Capturing visual content from webpages and PDFs</li>
            <li>Organizing saved visual memories</li>
            <li>Displaying stored screenshots and notes</li>
            <li>Improving user experience and extension functionality</li>
            <li>Responding to user feedback or support requests</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Data Storage</h2>
          <p>By default, user data is stored locally within the user's browser storage.</p>
          <p style={{ marginTop: '16px' }}>Workflow Memory does not sell, rent, or share user data with third parties.</p>
          <p style={{ marginTop: '16px' }}>If future cloud synchronization features are introduced, this Privacy Policy will be updated accordingly.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Feedback and Communication</h2>
          <p>If a user submits feedback through the extension or website, the submitted information (such as email address and message content) may be processed through trusted third-party communication services including:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>EmailJS</li>
          </ul>
          <p style={{ marginTop: '16px' }}>This information is used only for:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Customer support</li>
            <li>Bug reports</li>
            <li>Feature requests</li>
            <li>Product improvement</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Permissions Usage</h2>
          <p>Workflow Memory may request browser permissions necessary for its functionality, including:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Active tab access</li>
            <li>Screenshot capture</li>
            <li>Storage access</li>
          </ul>
          <p style={{ marginTop: '16px' }}>These permissions are used exclusively to enable user-requested functionality.</p>
          <p style={{ marginTop: '16px' }}>The extension does not access webpage or PDF content unless the user actively interacts with the extension.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Third-Party Services</h2>
          <p>Workflow Memory may use trusted third-party services for limited operational purposes, including:</p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>EmailJS for feedback delivery</li>
            <li>Vercel or GitHub Pages for website hosting</li>
          </ul>
          <p style={{ marginTop: '16px' }}>These services may process limited technical information necessary for functionality.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Data Security</h2>
          <p>Reasonable measures are taken to protect user information and minimize unnecessary data access.</p>
          <p style={{ marginTop: '16px' }}>However, no method of electronic storage or transmission is completely secure, and absolute security cannot be guaranteed.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Children's Privacy</h2>
          <p>Workflow Memory is not intended for children under the age of 13.</p>
          <p style={{ marginTop: '16px' }}>The extension does not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Changes to This Privacy Policy</h2>
          <p>This Privacy Policy may be updated periodically to reflect product improvements, legal requirements, or feature changes.</p>
          <p style={{ marginTop: '16px' }}>Updated versions will be posted with a revised "Last Updated" date.</p>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px' }}>Contact</h2>
          <p>For questions, feedback, or privacy-related concerns, contact:</p>
          <a href="mailto:zoomershredder@gmail.com" style={{ color: 'var(--text-main)', marginTop: '8px', display: 'inline-block' }}>zoomershredder@gmail.com</a>
        </section>
      </div>
    </div>
  )
}
