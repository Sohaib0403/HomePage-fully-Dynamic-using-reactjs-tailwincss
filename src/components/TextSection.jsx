import Btn from "./Btn";
import RatingSection from "./RatingSection";

const TextSection = () => {
    return (
        <div className="h-auto w-full lg:w-[600px] p-4 lg:p-0">
            <p className="text-4xl lg:text-6xl font-bold leading-tight">
                Print on demand for your ecommerce business
            </p>
            <p className="text-xl lg:text-2xl font-sans mt-8">
                Sign up for free and only pay for what you sell
            </p>
            <p className="text-[16px] lg:text-[18px] font-thin mt-2">
                Turn your passion into profit with the world's largest <u>print on demand</u> network.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 mt-6">
                <Btn text="Get Started for Free" customStyles="bg-black text-white" />
                <Btn text="See our Products" customStyles="bg-white text-black border border-black" />
            </div>

            {/* Shopify Logo */}
            <div className="w-32 lg:w-40 mt-7">
                <img src="public/images/shopify_monotone_black.svg" alt="Shopify Logo" />
            </div>

            {/* Rating Section */}
            <RatingSection />
        </div>
    );
};

export default TextSection;
