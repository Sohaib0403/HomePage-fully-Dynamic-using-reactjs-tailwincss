import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="h-32 w-full pt-10  flex flex-col md:flex-row items-start justify-around">
     

      {/* Find Gelato Heading */}
      <div>
        <h1 className="text-white text-[30px] w-60 mb-6 text-start md:text-left">Find Gelato on:</h1>
      </div>

      {/* Social Media Icons */}
      <div className="h-14 w-full flex text-white gap-11 mb-6 items-start">
        <CiInstagram className="h-12 w-12 cursor-pointer hover:text-gray-300" />
        <FaFacebookF className="h-12 w-12 cursor-pointer hover:text-gray-300" />
        <FaTiktok className="h-12 w-12 cursor-pointer hover:text-gray-300" />
        <FaLinkedinIn className="h-12 w-12 cursor-pointer hover:text-gray-300" />
        <FaYoutube className="h-12 w-12 cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
};

export default SocialMedia;
