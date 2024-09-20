import StatItem from "./StatItem";
import Btn from "./Btn";
import ImageSection from "./ImageSection";

const ContainerFive = () => {
  return (
    <>
      <div className="h-auto lg:h-[700px] w-full flex flex-col lg:flex-row items-center justify-around p-4">
        {/* Right Section - Image on top for small screens */}
        <div className="  h-auto lg:h-[600px] w-full lg:w-[650px] ">
          <ImageSection imgSrc="public/images/img4.gif" imgAlt="Ecommerce Image" className="h-full w-full object-contain" />
        </div>

       
        

        {/* Left Section */}

        <div className=" h-auto lg:h-[600px] w-full lg:w-[650px] flex flex-col items-start justify-center mb-6 lg:mb-0">
          <StatItem
            description="For print producers"
            descriptionClass="text-xl lg:text-2xl font-semibold font-sans"
          />
          <StatItem
            value="GelatoConnect"
            description="Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry"
            valueClass="text-[40px] sm:text-[50px] lg:text-[75px] leading-tight mt-2"
            descriptionClass="text-[20px] sm:text-[28px] lg:text-[35px] mt-4"
          />
          <Btn text="Learn more" customStyles="bg-black text-white mt-5" />
        </div>

        
        
      </div>
    </>
  );
};

export default ContainerFive;
