import { useMainContext } from "../../context/MainContext";
import LeftComponent from "./LeftComponent";


function DesktopLeftSide() {
    const { currentStep } = useMainContext();
    const steps = [
        { index: 0, title: "your info" },
        { index: 1, title: "select plan" },
        { index: 2, title: "add-ons" },
        { index: 3, title: "summary" },
    ];
    return (
        <div className="col-span-3 rounded-lg"
            style={{ backgroundImage: 'url("/images/bg-sidebar-desktop.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex w-full h-full flex-col mt-4 ml-8 items-center min-h-[600px]">
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