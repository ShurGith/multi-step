import { useMainContext } from "../../context/MainContext";
import LeftComponent from "./LeftComponent";


function DesktopLeftSide() {
    const { currentStep, steps,useWindowSize } = useMainContext();
    const BackgroundChanger = () => {
        const [width] = useWindowSize(); 
        const bgMobile = '/images/bg-sidebar-mobile.svg';
        const bgDesktop = '/images/bg-sidebar-desktop.svg'; 
        return width < 768 ? bgMobile : bgDesktop;
    }
    return (
            <div className="flex md:flex-col min-h-[180px] md:w-2/5 items-start justify-center md:justify-start pt-6 md:pt-4 md:pl-6 gap-4 md:gap-10 md:rounded-xl "
            style={{ backgroundImage: `url(${BackgroundChanger()})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
               {
               steps.map((step) => {
                return <LeftComponent key={step.index} currentStep={currentStep} index={step.index} title={step.title} />
                })
               }
            </div>
    )
}

export default DesktopLeftSide