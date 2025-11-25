import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { TrendingUpIcon, TrendingDownIcon, DollarSignIcon, CreditCardIcon, WrenchIcon } from 'lucide-react';
export function DashboardPage() {
  const location = useLocation();
  const username = location.state?.username || 'User';
  return <div className="flex min-h-screen bg-slate-100">
      <Sidebar username={username} />

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              {/* SECURITY FLAW: Shows username instead of full name */}
              <h1 className="text-2xl font-bold text-slate-800">
                Welcome Back, <span className="text-blue-600">{username}</span>
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                ⚠️ Security Issue: Displaying username instead of full name
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Account Number</p>
              <p className="text-lg font-semibold text-slate-800">2568</p>
              <p className="text-xs text-slate-400">Joined 11-8-Dec-2020</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Balance Card */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 text-white mb-8 shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-300 text-sm mb-2">Saving Account</p>
                <h2 className="text-4xl font-bold">RM420.78</h2>
              </div>
              <div className="text-right">
                <p className="text-slate-300 text-xs mb-1">Last 6 days</p>
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">+2.5%</span>
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-sm">Balance</div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <DollarSignIcon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-slate-700 font-medium text-sm">Deposit</p>
            </button>
            <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <DollarSignIcon className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-slate-700 font-medium text-sm">Transfer</p>
            </button>
            <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <CreditCardIcon className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-slate-700 font-medium text-sm">Cards</p>
            </button>
            <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <WrenchIcon className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-slate-700 font-medium text-sm">More</p>
            </button>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Recent Transactions
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingDownIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Grocery Store</p>
                    <p className="text-sm text-slate-500">Dec 15, 2024</p>
                  </div>
                </div>
                <span className="font-semibold text-red-600">-RM 45.20</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUpIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Salary Deposit</p>
                    <p className="text-sm text-slate-500">Dec 14, 2024</p>
                  </div>
                </div>
                <span className="font-semibold text-green-600">
                  +RM 2,500.00
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingDownIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Online Shopping
                    </p>
                    <p className="text-sm text-slate-500">Dec 13, 2024</p>
                  </div>
                </div>
                <span className="font-semibold text-red-600">-RM 89.99</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>;
}