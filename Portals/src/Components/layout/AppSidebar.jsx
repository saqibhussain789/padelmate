import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiTrophyCup } from "react-icons/gi";
import { useSidebar } from "../context/SidebarContext";
import Logo from '../../assets/ace_community_logo.png';

const navItems = [
  { name: "Booking", icon: <GiTrophyCup />, path: "/dashboard" }, // Updated path
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 ease-in-out
        ${isExpanded || isMobileOpen ? "w-[240px]" : isHovered ? "w-[240px]" : "w-[80px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-center py-6">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="transition-all duration-300"
            width={isExpanded || isHovered || isMobileOpen ? 80 : 40}
            height={80}
          />
        </Link>
      </div>

      {/* Sidebar Menu */}
      <nav className="px-4">
        <ul className="space-y-2">
          {navItems.map((nav) => (
            <li key={nav.name}>
              <Link
                to={nav.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${activePath.startsWith(nav.path) ? "bg-[#2A7D9B] text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
              >
                <span className={`text-lg transition-all duration-300 ${activePath.startsWith(nav.path) ? "text-white" : "text-gray-500"}`}>
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && <span>{nav.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;