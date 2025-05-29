import { useMainContext } from "../../context/MainContext";
import LeftComponent from "./LeftComponent";


function DesktopLeftSide() {
    const { currentStep, steps,useWindowSize } = useMainContext();
    const BackgroundChanger = () => {
        const [width] = useWindowSize(); 

        const bgMobile = '/images/bg-sidebar-mobile.svg';
        const bgDesktop = '/images/bg-sidebar-desktop.svg'; 
      return  width < 768 ? bgMobile : bgDesktop;;
        
    }
    return (
        <div className="w-full col-span-3 rounded-lg"
            style={{ backgroundImage: `url(${BackgroundChanger()})`, backgroundRepeat: 'no-repeat', backgroundSize: 'fill', backgroundPosition: 'center' }}>
            <div className="flex items-center justify-center pt-6 pb-24 pl-6 w-full lg:h-full lg:flex-col lg:mt-4 lg:ml-8 lg:min-h-[600px]">
               {
               steps.map((step) => {
                return <LeftComponent key={step.index} currentStep={currentStep} index={step.index} title={step.title} />
                })
               }
            </div>
        </div>
    )
}

export default DesktopLeftSide