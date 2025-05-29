import { useMainContext } from "../../context/MainContext";

function LeftComponent({ currentStep, index, title }) {
  const isActive = currentStep === index + 1;
  const { steps, useWindowSize } = useMainContext();
  const [width] = useWindowSize();

  const isHidden = index === steps.length - 1 && currentStep != steps.length;
  return (
     <>
     {!isHidden &&  <div className={` ${isActive ? "bg-white" : ""
          } flex size-1 items-center justify-center px-4 py-4 border border-Gray2 rounded-full `}
      >
        <p className={` ${isActive ? "bg-textGray2" : "text-white"} text-sm `}>
          {index + 1}
        </p>
      </div>}
      {width >= 768 && 
        <div className="flex flex-col justify-center text-BlueTwo px-6 py-5">
          <p className="text-xs text-white/50">STEP {index + 1}</p>
          <p className="text-sm font-bold">{title.toUpperCase()}</p>
        </div>
      }
    </>
  );
}

export default LeftComponent;
