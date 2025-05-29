
function LeftComponent({ currentStep, index, title }) {
    return (
        <div className="flex w-full items-center">
            <div
                className={` ${currentStep == index+1 ? "bg-white" : "" } flex size-6 items-center justify-center px-6 py-6 border border-Gray2 rounded-full `}
            >
                <p
                    className={` ${currentStep == index + 1 ? "bg-textGray2" : "text-white"} text-xl font-bold `}
                >
                   {index + 1}
                </p>
            </div>
            <div className="flex-col justify-center text-BlueTwo px-6 py-5">
                <p className="text-xs">STEP {index + 1}</p>
                <p className="text-sm font-bold">{title.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default LeftComponent;
