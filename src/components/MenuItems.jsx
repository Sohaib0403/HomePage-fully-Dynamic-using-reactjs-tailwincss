import { BsGlobe } from "react-icons/bs";
import { FaCartShopping, FaHeadset } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const MenuItems = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:mt-2 items-start gap-[2px] lg:gap-[2px] mb-[2px] pl-0">
      {/* Contact Us */}
      <li className="hover:bg-gray-200 h-10 lg:h-8 text-sm w-full lg:w-32 flex justify-center items-center rounded-3xl">
        <a className="flex gap-2 items-center" href="#">
          <FaHeadset className="h-6 w-6" /> Contact Us
        </a>
      </li>

      {/* Language & Currency */}
      <li className="hover:bg-gray-200 h-10 lg:h-8 text-sm w-full lg:w-24 flex justify-center items-center rounded-3xl">
        <a className="flex gap-2 items-center" href="#">
          <BsGlobe className="h-6 w-6" />
          <select className="hover:bg-gray-200 border-none bg-transparent focus:outline-none">
            <option value="">IN/INR</option>
            <option value="">IN</option>
            <option value="">INR</option>
          </select>
        </a>
      </li>

      {/* Cart */}
      <li className="hover:bg-gray-200 h-10 lg:h-8 text-sm w-full lg:w-24 flex justify-center items-center rounded-3xl">
        <a className="flex gap-2 items-center" href="#">
          <FaCartShopping className="h-6 w-6" /> Cart
        </a>
      </li>

      {/* Sign In */}
      <li className="hover:bg-gray-200 h-10 lg:h-8 text-sm w-full lg:w-24 flex justify-center items-center rounded-3xl">
        <a className="flex gap-2 items-center" href="#">
          <IoMdPerson className="h-6 w-6" /> Sign in
        </a>
      </li>
    </ul>
  );
};

export default MenuItems;
