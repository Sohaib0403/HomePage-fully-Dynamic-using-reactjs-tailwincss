import Btn from "./Btn";
import FooterLinks from "./FooterLinks";

const FooterContentSection = () => {
  return (
    <div className="h-[475px] w-full flex justify-evenly">
      {/* Footer Content Section 1 */}
      <div className="h-[510px] w-[510px] flex items-center justify-center">
        <div className="h-[490px] w-[400px]">
          <div>
            <p className="text-white">
              Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
            </p>
            <Btn
              text="Get started"
              customStyles="bg-white text-black font-semibold h-10 mt-6"
            />
          </div>
          <div className="w-full h-[100px] mt-20">
            <h1 className="text-white text-[30px]">Get the app:</h1>
            <div className="w-full h-auto mt-3 flex gap-10">
              <img src="public/images/AppStore.svg" alt="AppStore" />
              <img src="public/images/PlayStore.svg" alt="PlayStore" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content Section 2 */}
      <FooterLinks />
    </div>
  );
};

export default FooterContentSection;
