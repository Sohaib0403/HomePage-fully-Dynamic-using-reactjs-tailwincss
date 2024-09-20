import ImageSection from "./ImageSection";
import StatItem from "./StatItem";

const ContainerThree = () => {
    return (
        <>
            <div className="h-auto w-full">
                {/* Heading Section */}
                <div className="h-44 w-full flex items-center justify-center px-4 md:px-0">
                    <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-semibold text-center">Why choose Gelato</h1>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row justify-around items-center w-full lg:space-x-10 px-4 lg:px-0">
                    {/* Image Section */}
                    <div className="h-[750px] w-full lg:w-[600px] p-4 lg:p-0 mb-8 lg:mb-0">
                        <ImageSection imgSrc="public/images/img2.webp" imgAlt="Ecommerce Image" />
                    </div>

                    {/* StatItems Section */}
                    <div className="h-[750px] w-full lg:w-[600px] p-4 lg:p-0 space-y-6">
                        <StatItem 
                            value="▻ World's largest print-on-demand network" 
                            description="140+ print partners in 32 countries. Gelato is a truly global service." 
                            valueClass="text-xl sm:text-2xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                        <StatItem 
                            value="▻ Sell globally, produce locally" 
                            description="Your products are produced close to your customers, wherever they are." 
                            valueClass="text-xl sm:text-2xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                        <StatItem 
                            value="▻ 100% free editing tools" 
                            description="Create your custom products using our suite of free tools." 
                            valueClass="text-xl sm:text-2xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                        <StatItem 
                            value="▻ 60+ logistics partners" 
                            description="Our global network of logistics partners ensures your products are delivered fast." 
                            valueClass="text-xl sm:text-2xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                        <StatItem 
                            value="▻ High-quality products" 
                            description="We partner with the world's leading brands to ensure the best quality products." 
                            valueClass="text-xl sm:text-2xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                        <StatItem 
                            value="▻ Endless creativity with Shutterstock Images" 
                            description="Access millions of images and graphics to create unique products you can sell in your store." 
                            valueClass="text-lg sm:text-xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                        <StatItem 
                            value="▻ 1-click integration to the leading ecommerce platforms" 
                            description="Connect your store to Gelato using our integrations with Shopify, Etsy, and more." 
                            valueClass="text-lg sm:text-xl mb-2 lg:mb-4" 
                            descriptionClass="text-sm sm:text-base font-sans"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerThree;
