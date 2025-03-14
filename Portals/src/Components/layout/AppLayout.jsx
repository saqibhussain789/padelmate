import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen flex flex-col xl:flex-row">
      {/* Sidebar - Adjust width based on state */}
      <AppSidebar />
      <Backdrop />

      {/* Main Content Wrapper */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isMobileOpen
            ? "ml-0" // Sidebar fully closes on mobile
            : isExpanded || isHovered
            ? "lg:ml-[240px]" // Expanded sidebar on larger screens
            : "lg:ml-[90px]" // Compact sidebar for desktops
        }`}
      >
        <AppHeader />

        {/* Main Content Section with Responsive Padding & Overflow Fix */}
        <div className="p-4 sm:p-6 mx-auto max-w-screen-2xl dark:bg-[#101828] overflow-x-auto min-h-[calc(100vh-64px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;