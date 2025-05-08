import { Outlet } from "react-router-dom";
import { useDarkMode } from "../componet/DarkModeContext";
import Sidebar from "../componet/Sidebar";

const RootLayout: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`root-layout flex min-h-screen ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Sidebar is fixed on the right */}
      <Sidebar
        scrollToSection={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      {/* Main Content */}
      <main
        className={`flex-grow p-0  ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;