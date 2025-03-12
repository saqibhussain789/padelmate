import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { AiFillHome } from "react-icons/ai"; // My Club/Home
import { FaUsers } from "react-icons/fa"; // Community
import { BsChatDots } from "react-icons/bs"; // Chat
import { GiSoccerBall } from "react-icons/gi"; // League
import { MdOutlineArticle } from "react-icons/md"; // News
import { useSidebar } from "../context/SidebarContext";
import { CalenderIcon }from "../icons"

const navItems = [
  // { name: "Booking", icon: < CalenderIcon />, path: "/" },
  { name: "Clubs", icon: <AiFillHome />, path: "/clubs" },
  // { name: "Community", icon: <FaUsers />, path: "/community" },
  // { name: "Chat", icon: <BsChatDots />, path: "/chat" },
  // { name: "League", icon: <GiSoccerBall />, path: "/league" },
  // { name: "News", icon: <MdOutlineArticle />, path: "/news" },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
        <Link to="/">
          <img src="/images/logo/padelmates.svg" alt="Logo" width={isExpanded || isHovered || isMobileOpen ? 80 : 32} height={80} />
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>Menu</h2>
              <ul className="flex flex-col gap-4">
                {navItems.map((nav) => (
                  <li key={nav.name}>
                    <Link to={nav.path} className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}>
                      <span className={`menu-item-icon-size ${isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>{nav.icon}</span>
                      {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;