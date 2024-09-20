
import SocialMedia from './SocialMedia';  // Assuming you have this component
import FooterLowerSection from './FooterLowerSection';  // Assuming you have this component
import Btn from "./Btn";

const FooterTwo = () => {
    return (
      <div className="bg-black h-[1200px]: text-white p-10 flex flex-col items-startr">
        {/* White Logo and Description */}
        <div className="flex flex-col items-start mb-8">
          <img
            src="public/images/white_logo.svg"  // Update this path if needed
            alt="Gelato Logo"
            className="h-14 w-auto"
          />
          <p className="text-start mt-4 w-96">
            Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
          </p>
          <Btn text="Get started" customStyles="bg-white text-black mt-6"/>
        </div>
  
        {/* Select Tags with Hover Effect */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative ">
            <select className=" text-white text-3xl  bg-transparent border-none p-2 rounded ">
              <option>Print on demand</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div className="relative">
            <select className=" text-white text-3xl  bg-transparent border-none p-2 rounded ">
              <option>Integrations</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div className="relative">
            <select className=" text-white text-3xl  bg-transparent border-none p-2 rounded ">
              <option>Start Selling</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div className="relative">
            <select className=" text-white text-3xl  bg-transparent border-none p-2 rounded ">
              <option>Company</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
        </div>

           <div>
                <h2 className="text-2xl gap-6 mb-6">Get the app</h2>
            </div>
  
        {/* Images and Additional Sections */}
        <div className="flex  items-center gap-6 mb-8">

            
          <img
           
            src="public/images/AppStore.svg"  // Update these paths if needed
            alt="Image 1"
            className="h-10 w-auto"
          />
          <img
            src="public/images/PlayStore.svg"  // Update these paths if needed
            alt="Image 2"
            className="h-10 w-auto"
          />
        </div>
  
        {/* Call SocialMediaIcons and FooterLowerSection */}
        <div className='mb-8'>
           <SocialMedia />
        </div>
       


        <FooterLowerSection />
      </div>
    );
  };
  
  export default FooterTwo;
