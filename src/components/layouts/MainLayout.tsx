import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../ui/Banner/Banner";
import Service from "../ui/Service/Service";

const MainLayout = () => {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <Banner />
      <Service />
      <Outlet />
    </main>
  );
};

export default MainLayout;
