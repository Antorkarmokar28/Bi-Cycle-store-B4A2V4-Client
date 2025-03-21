import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
