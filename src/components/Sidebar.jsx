import { ChevronFirst, ChevronLast, MoreVertical, LayoutDashboard, Home as HomeIcon, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings, User2Icon, LogOut } from "lucide-react";
import logo from "../assets/logo.png";
import { createContext, useContext } from "react";
import LogoutButton from "./LogoutButton";
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SidebarContext = createContext();

export default function Sidebar({ isAuthenticated, onToggle, expanded }) {
  const { user, isLoading } = useAuth0();
  const userEmail = user.email || '';

  // Function to determine user role based on email domain
  const getUserRole = () => {
    if (userEmail.endsWith('@admin.cry.org.in')) {
      return 'admin';
    } else if (userEmail.endsWith('@ngo.cry.org.in')) {
      return 'ngo';
    } else if (userEmail.endsWith('@designation.cry.org.in')) {
      return 'higherAuthority';
    }
    // Default to 'admin' if no specific role matched
    return 'admin';
  };

  // Function to render sidebar items based on user role
  const renderSidebarItems = () => {
    const role = getUserRole();

    switch (role) {
      case 'admin':
        return (
          <>
            <SidebarItem icon={<HomeIcon size={20} />} text="Home" to='/dashboard' />
            <SidebarItem icon={<LayoutDashboard size={20} />} to='/dashboard/managevnt' text="Dashboard" />
            <SidebarItem icon={<StickyNote size={20} />} to='/dashboard/createvnt' text="Projects" alert />
            <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
            <SidebarItem icon={<Layers size={20} />} text="Tasks" />
            <SidebarItem icon={<Flag size={20} />} text="Reporting" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
            <SidebarItem icon={<User2Icon size={20} />} to='/dashboard/profile' text="User Profile" />
            <SidebarItem icon={<LogOut size={20} />} onClick={() => <LogoutButton />} text="Logout" />
          </>
        );
      case 'ngo':
        return (
          <>
            <SidebarItem icon={<HomeIcon size={20} />} text="Home" to='/dashboard' />
            <SidebarItem icon={<StickyNote size={20} />} to='/dashboard/createvnt' text="Pitching" alert />
            <SidebarItem icon={<Layers size={20} />} text="Tracking Projects" />
            <SidebarItem icon={<Flag size={20} />} text="Fund Spending" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
            <SidebarItem icon={<User2Icon size={20} />} to='/dashboard/profile' text="User Profile" />
            <SidebarItem icon={<LogOut size={20} />} onClick={() => <LogoutButton />} text="Logout" />
          </>
        );
      case 'higherAuthority':
        return (
          <>
            <SidebarItem icon={<HomeIcon size={20} />} text="Home" to='/dashboard' />
            <SidebarItem icon={<LayoutDashboard size={20} />} to='/dashboard/managevnt' text="Dashboard" />
            <SidebarItem icon={<Layers size={20} />} text="Budget Distribution" />
            <SidebarItem icon={<StickyNote size={20} />} to='/dashboard/createvnt' text="Manage Projects" alert />
            <SidebarItem icon={<Flag size={20} />} text="Send Tickets" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
            <SidebarItem icon={<User2Icon size={20} />} to='/dashboard/profile' text="User Profile" />
            <SidebarItem icon={<LogOut size={20} />} onClick={() => <LogoutButton />} text="Logout" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
            <button onClick={onToggle} className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              {renderSidebarItems()}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src={user.picture} className="w-10 h-10 rounded-3xl" />
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
              <div className="leading-4">
                <h4 className="font-semibold">{user.name}</h4>
                <span className="text-xs text-gray-600">{user.email}</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({ icon, text, alert, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
      <NavLink
        to={to}
        exact
        className={`flex items-center space-x-2 ${expanded ? "text-gray-600" : ""}`}
        activeClassName="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></div>
        )}
        {!expanded && (
          <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
            {text}
          </div>
        )}
      </NavLink>
    </li>
  );
}
