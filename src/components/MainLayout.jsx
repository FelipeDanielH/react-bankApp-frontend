// src/components/MainLayout.jsx
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Navbar va aquí */}
      <main>
        <Outlet />
      </main>
      {/* Footer va aquí */}
    </>
  );
};

export default MainLayout;
