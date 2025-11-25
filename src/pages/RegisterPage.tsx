import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // SECURITY FLAW: Accepts weak passwords like "12345678"
    // No password strength validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    // Registration successful - redirect to login
    alert('Account created successfully! You can now login.');
    navigate('/');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative py-12" style={{
    backgroundImage: `url('https://uploadthingy.s3.us-west-1.amazonaws.com/iqRfJEthY94cmKawYb9xpJ/Screenshot_2025-11-25_at_9.19.07_PM.png')`
  }}>
      <div className="absolute inset-0 bg-blue-900/30"></div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            CREATE ACCOUNT
          </h1>
          <p className="text-white/80 text-center text-sm mb-6">
            Join AprilBank today
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
                Full Name
              </label>
              <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="John Doe" required />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white/90 mb-2">
                Username
              </label>
              <input id="username" name="username" type="text" value={formData.username} onChange={handleChange} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="johndoe123" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="john@example.com" required />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              {/* SECURITY FLAW: Visible password, accepts weak passwords */}
              <input id="password" name="password" type="text" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter password" required />
              <p className="mt-1 text-xs text-white/70">
                ⚠️ Accepts weak passwords (e.g., "12345678")
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/90 mb-2">
                Confirm Password
              </label>
              <input id="confirmPassword" name="confirmPassword" type="text" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Confirm password" required />
            </div>

            {error && <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-lg text-sm">
                {error}
              </div>}

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
              CREATE ACCOUNT
            </button>

            <div className="text-center pt-4">
              <span className="text-white/80 text-sm">
                Already have an account?{' '}
              </span>
              <a href="/" className="text-white font-semibold hover:underline">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>;
}