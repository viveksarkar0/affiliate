import React from 'react';
import { Bell, LogOut, Moon, Settings, User, ChevronDown } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  sidebarCollapsed: boolean;
}

const Header = ({ sidebarCollapsed }: HeaderProps) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={`bg-white border-b border-gray-200 fixed top-0 right-0 z-40 h-16 transition-all duration-300 ${sidebarCollapsed ? 'left-16' : 'left-64'}`}>
      <div className="px-6 h-full flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Moon className="w-5 h-5 text-gray-600" />
          </motion.button>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                0
              </span>
            </motion.button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 bg-gray-100 rounded-lg px-2 py-1">
              <span>USD</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>USD</DropdownMenuItem>
              <DropdownMenuItem>EUR</DropdownMenuItem>
              <DropdownMenuItem>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5 h-auto" />
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5 h-auto mr-2" />
                English
              </DropdownMenuItem>
              <DropdownMenuItem>
                <img src="https://flagcdn.com/w20/es.png" alt="Spain" className="w-5 h-auto mr-2" />
                Spanish
              </DropdownMenuItem>
              <DropdownMenuItem>
                <img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-5 h-auto mr-2" />
                French
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>System Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {user?.name || 'User'}
              </span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;