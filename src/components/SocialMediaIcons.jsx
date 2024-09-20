import SocialMedia from "./SocialMedia";



const SocialMediaIcons = () => {
  return (
    <div className="h-32 w-full pt-10 flex   md:flex-row items-start justify-around">
      {/* Logo (Hidden on small screens) */}
      <div className=" md:flex h-14 w-full flex justify-center items-center  gap-96">
        <img
          className="h-14 w-auto"
          src="public/images/white_logo.svg"
          alt="logo"
        />

   <div>
      <SocialMedia/>
        </div>
         
      </div>
        
      
     
    </div>
  );
};

export default SocialMediaIcons;
