import { useAuth } from './contexts/AuthContext';
import { LogOut } from 'lucide-react';

export function LoginButton() {
  const { user, profile, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) {
    return <div style={{ width: 100, height: 36, opacity: 0.5, background: 'rgba(255,255,255,0.1)', borderRadius: 8 }}></div>;
  }

  if (user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '13px' }}>
          <span style={{ fontWeight: 600 }}>{user.user_metadata?.full_name || user.user_metadata?.name || user.email}</span>
          <span style={{ opacity: 0.7, fontSize: '11px', textTransform: 'uppercase', color: profile?.subscription_tier === 'premium' ? '#f59e0b' : 'inherit' }}>
            {profile?.subscription_tier || 'freemium'}
          </span>
        </div>
        {user.user_metadata?.avatar_url || user.user_metadata?.picture ? (
          <img src={user.user_metadata.avatar_url || user.user_metadata.picture} alt="Avatar" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid var(--primary)' }} />
        ) : (
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {user.email?.[0].toUpperCase()}
          </div>
        )}
        <button 
          onClick={signOut}
          title="Sign Out"
          style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            border: 'none', 
            borderRadius: 8, 
            padding: 8, 
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={signInWithGoogle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'white',
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
      Login with Google
    </button>
  );
}
