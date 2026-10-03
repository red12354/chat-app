import React, { useState } from 'react';

const Login = ({ onLoginSuccess, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      name: email.split('@')[0], // Automatically derives display name from email (e.g., Aritra)
      email: email
    };
    localStorage.setItem('ChatUser', JSON.stringify(userObj));
    if (onLoginSuccess) {
      onLoginSuccess(userObj);
    }
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '400px', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>Messenger</h1>
          <p style={{ color: '#475569', marginTop: '4px' }}>
            Login with your <span style={{ color: '#2563eb' }}>Account</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Email Box */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px 14px', backgroundColor: '#ffffff' }}>
            <span style={{ marginRight: '10px' }}>✉️</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', border: 'none', outline: 'none', backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
            />
          </div>

          {/* Password Box */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '10px 14px', backgroundColor: '#ffffff' }}>
            <span style={{ marginRight: '10px' }}>🔑</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', border: 'none', outline: 'none', backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
            />
          </div>

          <button
            type="submit"
            style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px', marginTop: '8px' }}
          >
            Login
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#475569' }}>
          Don't have any Account?{' '}
          <button 
            type="button"
            onClick={onSwitch} 
            style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Signup
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;