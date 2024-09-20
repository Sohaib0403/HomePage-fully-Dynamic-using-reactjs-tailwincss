import SocialMediaIcons from "./SocialMediaIcons";
import FooterContentSection from "./FooterContentSection";

import FooterLowerSection from "./FooterLowerSection";

const Footer = () => {
  return (
    <div className="h-[700px] w-full bg-black">
      {/* Footer Social Media */}
      <SocialMediaIcons />

      {/* Footer Content */}
      <FooterContentSection />

      {/* Footer Lower Section */}
      <FooterLowerSection />
    </div>
  );
};

export default Footer;
