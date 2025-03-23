import React, { useState } from "react";
import {
  Home,
  Link,
  CreditCard,
  Users,
  Store,
  Settings,
  Activity,
  Wallet,
  MessageSquare,
  Cloud,
  Layers,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ListChecks,
  Flag,
  Globe,
  FileText,
  Server,
  Package,
  Star,
  Palette,
  FileClock,
  HelpCircle,
  Terminal,
  BarChart,
  Banknote,
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  children?: React.ReactNode;
  isCollapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  hasDropdown = false,
  children,
  isCollapsed = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={`w-full flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors ${
          hasDropdown ? "justify-between" : ""
        }`}
        onClick={() => hasDropdown && setIsOpen(!isOpen)}
        title={isCollapsed ? label : undefined}
      >
        <div className="flex items-center gap-3">
          {icon}
          {!isCollapsed && <span className="font-medium">{label}</span>}
        </div>
        {hasDropdown && !isCollapsed && (
          <div className="text-gray-400">
            {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
        )}
      </button>
      {hasDropdown && isOpen && !isCollapsed && (
        <div className="ml-10 mt-1 space-y-1">{children}</div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
    >
      {/* Logo and Toggle */}
      <div className="h-16 bg-blue-600 flex items-center px-4 justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="text-white text-2xl">
              <Layers />
            </div>
            <span className="text-white text-xl font-semibold">logoipsum</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:bg-blue-700 p-2 rounded-lg transition-colors"
        >
          {isCollapsed ? <Menu size={24} /> : <X size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <NavItem
          icon={<Home size={20} />}
          label="Dashboard"
          isCollapsed={isCollapsed}
        ></NavItem>
        <NavItem
          icon={<Link size={20} />}
          label="Useful Links"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem
            icon={<Settings size={20} />}
            label="Settings"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Package size={20} />}
            label="Add Ons"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Star size={20} />}
            label="Award Level"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Palette size={20} />}
            label="Themes"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Globe size={20} />}
            label="Language"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<CreditCard size={20} />}
            label="Currency"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Server size={20} />}
            label="Server"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FileClock size={20} />}
            label="Cron Job"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<ListChecks size={20} />}
            label="To-Do List"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<MessageSquare size={20} />}
            label="Tickets"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Flag size={20} />}
            label="Countries"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FileText size={20} />}
            label="User API"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<HelpCircle size={20} />}
            label="Tutorials"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Terminal size={20} />}
            label="System Logs"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FileText size={20} />}
            label="Troubleshoot"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FileText size={20} />}
            label="Sitemap"
            isCollapsed={isCollapsed}
          />
        </NavItem>
        <NavItem
          icon={<CreditCard size={20} />}
          label="Payments"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Layers size={18} />} label="Payment Gateways" />
          <NavItem icon={<Layers size={18} />} label="All Transactions" />
          <NavItem
            icon={<Layers size={18} />}
            label="Uncompleted Transactions"
          />
        </NavItem>
        <NavItem
          icon={<Users size={20} />}
          label="Members"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Layers size={18} />} label="Users List" />
          <NavItem icon={<Layers size={18} />} label="Users Groups" />
          <NavItem icon={<Layers size={18} />} label="Referring Tree" />
          <NavItem icon={<Layers size={18} />} label="Mail Sender" />
          <NavItem icon={<Layers size={18} />} label="Manage Admin" />
        </NavItem>
        <NavItem
          icon={<Store size={20} />}
          label="Local Store"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem
            icon={<Settings size={20} />}
            label="Settings"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<Store size={20} />}
            label="Products"
            hasDropdown
            isCollapsed={isCollapsed}
          >
            <NavItem icon={<Layers size={18} />} label="Cart Products" />
            <NavItem icon={<Layers size={18} />} label="Sales Products" />
            <NavItem icon={<Layers size={18} />} label="Vendor Requests" />
            <NavItem icon={<Layers size={18} />} label="Categories" />
          </NavItem>


          <NavItem
            icon={<CreditCard size={20} />}
            label="Orders"
            isCollapsed={isCollapsed}
          >

<NavItem icon={<Layers size={20} />} label="System Orders" isCollapsed={isCollapsed} />
<NavItem icon={<Cloud size={20} />} label="System Logs" isCollapsed={isCollapsed} />
<NavItem icon={<Activity size={20} />} label="Users Report" isCollapsed={isCollapsed} />
<NavItem icon={<Wallet size={20} />} label="Wallet Report" isCollapsed={isCollapsed} />
<NavItem icon={<BarChart size={20} />} label="Graphs Report" isCollapsed={isCollapsed} />

          </NavItem>
          <NavItem
            icon={<Users size={20} />}
            label="Clients"
            isCollapsed={isCollapsed}
          />
        </NavItem>
        <NavItem
          icon={<Settings size={20} />}
          label="MarketTools"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Layers size={18} />} label="Campaigns" />
          <NavItem icon={<Layers size={18} />} label="Programs" />
          <NavItem icon={<Layers size={18} />} label="Categories" />
        </NavItem>
        <NavItem
          icon={<Activity size={20} />}
          label="Activity"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Layers size={20} />} label="System Orders" isCollapsed={isCollapsed} />
<NavItem icon={<Cloud size={20} />} label="System Logs" isCollapsed={isCollapsed} />
<NavItem icon={<Activity size={20} />} label="Users Report" isCollapsed={isCollapsed} />
<NavItem icon={<Wallet size={20} />} label="Wallet Report" isCollapsed={isCollapsed} />
<NavItem icon={<BarChart size={20} />} label="Graphs Report" isCollapsed={isCollapsed} />

        </NavItem>
        <NavItem
          icon={<Wallet size={20} />}
          label="Wallet"
          hasDropdown
          isCollapsed={isCollapsed}
        >

<NavItem icon={<CreditCard size={20} />} label="All Transactions" isCollapsed={isCollapsed} />
<NavItem icon={<Wallet size={20} />} label="Withdraw Requests" isCollapsed={isCollapsed} />
<NavItem icon={<Banknote size={20} />} label="Payment Gateway" isCollapsed={isCollapsed} />
<NavItem icon={<Settings size={20} />} label="Settings" isCollapsed={isCollapsed} />

        </NavItem>
        <NavItem
          icon={<MessageSquare size={20} />}
          label="MLM"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Settings size={20} />} label="MLM Settings" isCollapsed={isCollapsed} />
<NavItem icon={<Layers size={20} />} label="MLM Levels" isCollapsed={isCollapsed} />

        </NavItem>
        <NavItem
          icon={<Cloud size={20} />}
          label="SaaS"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Settings size={20} />} label="Settings" isCollapsed={isCollapsed} />
<NavItem icon={<CreditCard size={20} />} label="Transactions" isCollapsed={isCollapsed} />

        </NavItem>
        <NavItem
          icon={<Layers size={20} />}
          label="Membership"
          hasDropdown
          isCollapsed={isCollapsed}
        >
          <NavItem icon={<Layers size={18} />} label="Membership Plans" />
          <NavItem icon={<Layers size={18} />} label="Membership Orders" />
          <NavItem icon={<Layers size={18} />} label="Membership Settings" />
        </NavItem>
      </nav>
    </div>
  );
};

export default Sidebar;
