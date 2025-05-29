import { useMainContext } from "../../context/MainContext";

function LeftComponent({ currentStep, index, title }) {
    const isActive = currentStep === index + 1;
    const {steps} = useMainContext();    
    const isHidden = index === steps.length - 1 &&  currentStep != steps.length ;
    return (
        <div className={`flex w-full items-center ${isHidden ? 'hidden' : ''}`}>
            <div className={` ${isActive ? "bg-white" : "" } flex size-6 items-center justify-center px-6 py-6 border border-Gray2 rounded-full `}>
                <p className={` ${isActive ? "bg-textGray2" : "text-white"} text-xl font-bold `}>
                   {index + 1}
                </p>
            </div>
            <div className={`hidden lg:flex lg:flex-col justify-center text-BlueTwo px-6 py-5  `}>
                <p className="text-xs text-white/50">STEP {index + 1}</p>
                <p className="text-sm font-bold">{title.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default LeftComponent;
