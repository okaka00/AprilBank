import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function ForgotPasswordPage() {
  const [step, setStep] = useState<'username' | 'reset'>('username');
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      // SECURITY FLAW: No verification, no security questions
      setStep('reset');
    }
  };
  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // SECURITY FLAW: No double verification, no security questions
    if (newPassword) {
      alert('Password reset successful! You can now login with your new password.');
      navigate('/');
    }
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative" style={{
    backgroundImage: `url('https://uploadthingy.s3.us-west-1.amazonaws.com/iqRfJEthY94cmKawYb9xpJ/Screenshot_2025-11-25_at_9.19.07_PM.png')`
  }}>
      <div className="absolute inset-0 bg-blue-900/30"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            RESET PASSWORD
          </h1>
          <p className="text-white/80 text-center text-sm mb-6">
            {step === 'username' ? 'Enter your username to continue' : 'Enter your new password'}
          </p>

          {step === 'username' ? <form onSubmit={handleUsernameSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white/90 mb-2">
                  Username
                </label>
                <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter your username" required />
                <p className="mt-2 text-xs text-white/70">
                  ⚠️ No verification required
                </p>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                CONTINUE
              </button>

              <div className="text-center pt-4">
                <a href="/" className="text-white/80 text-sm hover:text-white underline">
                  ← Back to Login
                </a>
              </div>
            </form> : <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-white/90 mb-2">
                  New Password
                </label>
                {/* SECURITY FLAW: No double verification, password visible */}
                <input id="newPassword" type="text" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter new password" required />
                <p className="mt-2 text-xs text-white/70">
                  ⚠️ No password confirmation required
                </p>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3">
                <p className="text-white text-xs">
                  <strong>Security Issues:</strong>
                  <br />
                  • No security questions
                  <br />
                  • No email verification
                  <br />• Single password entry (no confirmation)
                </p>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                RESET PASSWORD
              </button>

              <div className="text-center pt-4">
                <button type="button" onClick={() => setStep('username')} className="text-white/80 text-sm hover:text-white underline">
                  ← Back
                </button>
              </div>
            </form>}
        </div>
      </div>
    </div>;
}