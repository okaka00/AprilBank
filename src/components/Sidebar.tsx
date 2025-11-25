import React from 'react';
import { HomeIcon, ArrowLeftRightIcon, CreditCardIcon, UserIcon, SettingsIcon, HelpCircleIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface SidebarProps {
  username: string;
}
export function Sidebar({
  username
}: SidebarProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  const menuItems = [{
    icon: HomeIcon,
    label: 'My Account',
    active: true
  }, {
    icon: ArrowLeftRightIcon,
    label: 'Transfer'
  }, {
    icon: CreditCardIcon,
    label: 'Cards'
  }, {
    icon: UserIcon,
    label: 'Profile'
  }, {
    icon: SettingsIcon,
    label: 'Settings'
  }, {
    icon: HelpCircleIcon,
    label: 'Contact Us'
  }];
  return <div className="w-64 bg-slate-700 min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-600">
        <h2 className="text-white text-xl font-bold">AprilBank</h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => <li key={index}>
              <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active ? 'bg-slate-600 text-white' : 'text-slate-300 hover:bg-slate-600/50 hover:text-white'}`}>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>)}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-600">
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-600/50 hover:text-white transition-colors">
          <LogOutIcon className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>;
}