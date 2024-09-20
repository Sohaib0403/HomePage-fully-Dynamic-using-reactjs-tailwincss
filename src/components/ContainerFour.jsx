import StatItem from "./StatItem";
import Btn from "./Btn";
import ImageSection from "./ImageSection";

const ContainerFour = () => {
  return (
    <>
      <div className="h-auto lg:h-[800px] w-full flex flex-col lg:flex-row items-center justify-center bg-orange-100 p-4">
        {/* Right Section - Image on top for small screens */}
        <div className="order-1 lg:order-2 h-auto lg:h-[600px] w-full lg:w-[650px] ">
          <ImageSection imgSrc="public/images/img3.gif" imgAlt="Ecommerce Image" className="h-full w-full object-contain" />
        </div>

        {/* Left Section */}
        <div className="order-2 lg:order-1 h-auto lg:h-[600px] w-full lg:w-[650px] flex flex-col items-start justify-center mb-6 lg:mb-0">
          <StatItem
            description="For print on demand sellers"
            descriptionClass="text-xl lg:text-2xl font-semibold font-sans"
          />
          <StatItem
            value="Accelerate business growth with innovative design tools and apps"
            description="See how our cutting-edge solutions can help you reach new customers and maximize your profits."
            valueClass="text-[40px] sm:text-[50px] lg:text-[75px] leading-tight mt-2"
            descriptionClass="text-[20px] sm:text-[28px] lg:text-[35px] mt-4"
          />
          <Btn text="Get Started" customStyles="bg-black text-white mt-5" />
        </div>
      </div>
    </>
  );
};

export default ContainerFour;
