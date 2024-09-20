import ContainerFive from "./ContainerFive";
import ContainerFour from "./ContainerFour";
import ContainerOne from "./ContainerOne";
import ContainerThree from "./ContainerThree";
import ContainerTwo from "./ContainerTwo";
import { useEffect , useState } from "react";


const BodyContainer = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleResize = () => {
        setIsVisible(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    useEffect(() => {
        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
     <div>
        <ContainerOne/>
        <ContainerTwo isVisible={isVisible} />
        <ContainerThree/>
        <ContainerFour/>
        <ContainerFive/>
     </div>
    )
}

export default BodyContainer;