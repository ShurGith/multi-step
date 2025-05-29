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
            <div className="flex h-[180px] w-full items-start justify-center pt-6 gap-4"
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