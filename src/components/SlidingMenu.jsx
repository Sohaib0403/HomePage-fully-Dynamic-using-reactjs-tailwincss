import { BsGlobe } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { RxCross1 } from "react-icons/rx"; // Close Icon
import Btn from "./Btn";
import BottomBlock from "./BottomBlockNavBar";

const SlidingMenu = ({ menuOpen, toggleMenu , }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-[300px] bg-white z-50 transform ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <RxCross1
        className="absolute top-2 left-2 h-4 w-4 cursor-pointer"
        onClick={toggleMenu}
      />

      <ul className="flex flex-wrap gap-2 p-2 text-sm  border-b border-gray-200">
        {/* Language & Currency */}
        <li className="hover:bg-gray-200 w-28 border-b pl-5 border-gray-200  flex justify-between items-center">
          <BsGlobe className="h-6 w-6" />
          <select className="bg-transparent border-none focus:outline-none">
            <option value="">IN/INR</option>
            <option value="">IN</option>
            <option value="">INR</option>
          </select>
          <span className="text-gray-400  gap-5 text-3xl">|</span>
        </li>

        {/* Cart */}
        <li className=" hover:bg-gray-200 w-28 border-b pl-8 border-gray-200  flex justify-between items-center">
          <FaCartShopping className="h-6 w-6" />
          <a href="#">Cart</a>
          <span className="text-gray-400 text-3xl ">|</span>
        </li>

        {/* Button */}
        <li className="hover:bg-gray-200 w-40  flex justify-between items-center">
          <Btn text="Sign in for free" customStyles="bg-black  text-white "/>
          <span className="text-gray-400 text-3xl pl-4">|</span>
        </li>

        {/* Sign In */}
        <li className="hover:bg-gray-200 w-24  flex justify-between items-center">
          <IoMdPerson className="h-6 w-6" />
          <a href="#">Sign in</a>
          <span className="text-gray-400 text-3xl">|</span>
        </li>
      </ul>

      <BottomBlock style='sticky h-16   gap-8 text-xl  items-center w-full'/>
    </div>
  );
};

export default SlidingMenu;
