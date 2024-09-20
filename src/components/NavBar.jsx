import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Btn from "./Btn";
import UpperBlock from "./UpperBlock";
import MenuItems from "./MenuItems";
import SlidingMenu from "./SlidingMenu";
import BottomBlock from "./BottomBlockNavBar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
    if (window.innerWidth >= 1024) {
      setMenuOpen(false); // Automatically close the menu
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Black overlay when the slider is open */}
      <div
        className={`fixed inset-0 bg-black ${
          menuOpen ? "opacity-40" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 ease-in-out`}
        onClick={toggleMenu}
      ></div>

      {/* Upper Block */}
      <UpperBlock />

      {/* Navigation Bar */}
      <nav className="sticky top-0 flex justify-around items-center h-auto lg:h-16 border-b-gray-200 border-2 w-full p-4 lg:p-0 bg-white z-10">
        {/* Left Section */}
        <div className="flex items-center gap-4 lg:gap-10">
          <FiMenu
            className="block lg:hidden h-8 w-8 cursor-pointer"
            onClick={toggleMenu}
          />
          <div className="w-32 lg:w-40">
            <img className="w-full" src="public/images/logo.svg" alt="logo" />
          </div>
        </div>

        {/* Button Section - Always visible on small screens */}
        <div className="lg:hidden">
          <Btn text="Sign in for free" customStyles="bg-black text-white" />
        </div>

        {/* Links Section - Hidden on small screens */}
        <div className="hidden lg:flex lg:items-start lg:gap-1">
          <MenuItems />
          <div className="mt-[2px]">
            <Btn text="Sign in for free" customStyles="bg-black text-white" />
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      <SlidingMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Bottom Block */}
      {!isMobile && (
        <div className="sticky top-16 w-full flex items-center justify-around border-b-2 bg-gray-100 z-10">
          <BottomBlock style="h-16 gap-16 flex items-center" />
        </div>
      )}
    </>
  );
};

export default NavBar;
