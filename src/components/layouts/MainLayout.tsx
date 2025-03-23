import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../ui/Banner/Banner";

const MainLayout = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Banner />
      <Outlet />
    </main>
  );
};

export default MainLayout;
