import { useEffect, useState } from "react";
import BodyContainer from "./components/BodyContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FooterTwo from "./components/FooterTwo";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);

  return (
    <>
      <NavBar />
      <BodyContainer />
      {isMobile ? <FooterTwo /> : <Footer />}
    </>
  );
}

export default App;
