import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const ContainerOne = () => {
    return (
        <div className="w-full h-auto lg:h-[625px] flex flex-col-reverse lg:flex-row justify-center items-center">
            {/* Left Container (Text) */}
            <TextSection />

            {/* Right Container (Image) */}
            <ImageSection imgSrc="public/images/img1.webp" imgAlt="Ecommerce Image" />
        </div>
    );
};

export default ContainerOne;
