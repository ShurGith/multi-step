import { useMainContext } from "../context/MainContext";

function DesktopLeftSide() {
    const { currentStep } = useMainContext();
    return (
        <div className="col-span-3 rounded-lg"
            style={{ backgroundImage: 'url("/images/bg-sidebar-desktop.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex w-full h-full flex-col mt-4 ml-8 items-center gap-2 min-h-[500px]">
                <div className="flex w-full items-center">
                    <div className ={` ${(currentStep == 1)  ? 'bg-white': "" } flex size-6 items-center justify-center px-6 py-6 border border-Gray2 rounded-full `}>
                        <p className ={` ${(currentStep ==1 )  ? 'bg-textGray2': "text-white" } text-xl font-bold `}>1</p>
                    </div>
                    <div className = "flex-col justify-center text-BlueTwo px-6 py-6">
                        <p className="text-xs">STEP 1</p>
                        <p className="text-sm font-bold">YOUR INFO</p>
                    </div>
                </div>
                <div className="flex w-full items-center">
                     <div className ={` ${(currentStep == 2)  ? 'bg-white': "" } flex size-6 items-center justify-center px-6 py-6 border border-Gray2 rounded-full `}>
                       <p className ={` ${(currentStep ==2 )  ? 'bg-textGray2': "text-white" } text-xl font-bold `}>2</p>
                    </div>
                    <div className="flex flex-col justify-center text-BlueTwo px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 2</p>
                        <p className="text-sm font-bold">SELECT PLAN</p>
                    </div>
                </div>
                <div className="flex w-full items-center">
                    <div className ={` ${(currentStep == 3)  ? 'bg-white': "" } flex size-6 items-center justify-center px-6 py-6 border border-Gray2 rounded-full `}>
                        <p className ={` ${(currentStep ==3 )  ? 'bg-textGray2': "text-white" } text-xl font-bold `}>3</p>
                    </div>
                    <div className="flex flex-col justify-center text-BlueTwo px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 3</p>
                        <p className="text-sm font-bold">ADD-ONS</p>
                    </div>
                </div>
                <div className="flex w-full items-center">
                     <div className ={` ${(currentStep == 4)  ? 'bg-white': "" } flex size-6 items-center justify-center px-6 py-6 border border-Gray2 rounded-full `}>
                        <p className ={` ${(currentStep == 4 )  ? 'bg-textGray2': "text-white" } text-xl font-bold `}>4</p>
                    </div>
                    <div className="flex flex-col justify-center text-BlueTwo px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 4</p>
                        <p className="text-sm font-bold">SUMMARY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopLeftSide