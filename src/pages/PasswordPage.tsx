import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export function PasswordPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || 'User';
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Intentionally weak: accepts any password
    if (password) {
      navigate('/dashboard', {
        state: {
          username
        }
      });
    }
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative" style={{
     backgroundImage: "url('/images/background.png')",  }}>
      <div className="absolute inset-0 bg-blue-900/30"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            WELCOME TO APRILBANK
          </h1>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              {/* SECURITY FLAW: Password is visible (type="text" instead of "password") */}
              <input id="password" type="text" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter your password" required />
              <p className="mt-2 text-xs text-white/70">
               
              </p>
            </div>

            <div className="text-center">
              <a href="/forgot-password" className="text-sm text-white/80 hover:text-white underline">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
              LOGIN
            </button>

            <div className="text-center pt-4">
              <button type="button" onClick={() => navigate('/')} className="text-white/80 text-sm hover:text-white underline">
                ← Back to Username
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}
