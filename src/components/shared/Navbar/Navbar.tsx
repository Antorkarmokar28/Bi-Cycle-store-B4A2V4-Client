import { MenuItems } from "./MenuItems";
import { FaBicycle } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { PiSignInFill } from "react-icons/pi";
import { Link } from "react-router";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-0">
          {/* Logo inner */}
          <div className="text-2xl flex items-center gap-2 font-bold py-6 uppercase">
            <FaBicycle className="text-primary" />
            <p className="text-primary">
              Ride<span className="text-secondary">ology</span>
            </p>
          </div>
          {/* Menu inner */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {MenuItems.map((item) => {
                return (
                  <li key={item?.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-primary duration-200 ease-in font-semibold"
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
          <div className="flex gap-1 md:gap-4 items-center">
            <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full duration-200">
              <CiShoppingCart />
            </button>
            <button className="hover:bg-primary hover:text-white px-3 py-2 rounded-md border-2 border-primary text-primary duration-200 ease-in flex items-center gap-1 md:gap-2 font-semibold ">
              <Link to="/">Sign in</Link>
              <PiSignInFill className="font-semibold md:text-2xl" />
            </button>
          </div>
          {/* Mobile hamburger menu inner */}
          <div
            className="md:hidden"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <CiMenuFries className="text-3xl" />
          </div>
        </div>
        {/* Sidebar menu */}
        <ResponsiveMenu openMenu={openMenu} />
      </nav>
    </>
  );
};

export default Navbar;
