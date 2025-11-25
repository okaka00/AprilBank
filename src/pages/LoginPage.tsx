import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      navigate('/password', {
        state: {
          username
        }
      });
    }
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative" style={{
    backgroundImage: `url('https://uploadthingy.s3.us-west-1.amazonaws.com/iqRfJEthY94cmKawYb9xpJ/Screenshot_2025-11-25_at_9.19.07_PM.png')`
  }}>
      <div className="absolute inset-0 bg-blue-900/30"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            WELCOME TO APRILBANK
          </h1>

          <form onSubmit={handleNext} className="mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white/90 mb-2">
                Username
              </label>
              <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter your username" required />
            </div>

            <div className="text-center">
              <a href="/forgot-password" className="text-sm text-white/80 hover:text-white underline">
                Forgot Username?
              </a>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
              NEXT
            </button>

            <div className="text-center pt-4">
              <span className="text-white/80 text-sm">
                Don't have an account?{' '}
              </span>
              <a href="/register" className="text-white font-semibold hover:underline">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>;
}