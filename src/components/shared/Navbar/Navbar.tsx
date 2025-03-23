import { MenuItems } from "./MenuItems";
import { FaBicycle } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { PiSignInFill } from "react-icons/pi";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [nav, setNav] = useState(false);
  const scrollNavbar = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
  }, []);
  return (
    <>
      <nav
        className={`sticky top-0 bg-white z-40 scroll-auto border-b-2  ${
          nav
            ? "text-primary duration-100 ease-in"
            : "text-transparent ease-out"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8 font-inter">
          {/* Logo inner */}
          <div className="text-2xl flex items-center gap-2 font-bold py-4 uppercase">
            <FaBicycle className="text-primary" />
            <p className="text-primary">
              Ride<span className="text-secondary">ology</span>
            </p>
          </div>
          {/* Menu inner */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {MenuItems.map((item) => {
                return (
                  <li key={item?.id}>
                    <a
                      className="inline-block text-secondary py-1 px-3 hover:text-primary duration-200 ease-in font-bold"
                      href={item?.link}
                    >
                      {item?.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons inner */}
          <div className="flex gap-4 md:gap-4 items-center">
            <button className="text-2xl bg-primary hover:text-white p-2 rounded-full duration-200 text-white">
              <CiShoppingCart className="font-bold" />
            </button>
            <button className="hover:bg-primary hover:text-white px-3 py-2 rounded-md border-2 border-primary text-primary duration-200 ease-in md:flex items-center gap-1 md:gap-2 font-semibold hidden ">
              <Link to="/">Sign in</Link>
              <PiSignInFill className="font-semibold md:text-2xl" />
            </button>
          </div>
          {/* Mobile hamburger menu inner */}
          <div
            className="lg:hidden"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <CiMenuFries className="text-3xl text-secondary" />
          </div>
        </div>
        {/* Sidebar menu */}
        <ResponsiveMenu openMenu={openMenu} />
      </nav>
    </>
  );
};

export default Navbar;
