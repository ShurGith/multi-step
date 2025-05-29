import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Summary from "./components/Summary";
import "./index.css";
import DesktopLeftSide from "./components/partials/DesktopLeftSide";
import { useMainContext } from "./context/MainContext.jsx";
import Finished from "./components/Finished.jsx";

function App() {
  const { currentStep, setCurrentStep } = useMainContext();
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step5Data: {},
  });
  const [errors, setErrors] = useState({});

  const updateFormData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
      setErrors({});
    }
    //console.log("Form data:", formData);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setErrors({});
  };

  const validateStep = (step) => {
    let currentErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.step1Data.name) {
        currentErrors.name = "Name is required";
        isValid = false;
      } else if (formData.step1Data.name.length < 4) {
        currentErrors.name = "Minimum 4 characters required";
        isValid = false;
      }
      if (!formData.step1Data.phone) {
        currentErrors.phone = "Number Phome is required";
        isValid = false;
      } else if (formData.step1Data.phone.length < 9) {
        currentErrors.phone = "Minimum 9 characters required";
        isValid = false;
      }
      if (!formData.step1Data.email) {
        currentErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.step1Data.email)) {
        currentErrors.email = "Invalid email format";
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.step2Data.selection) {
        currentErrors.selection = "Please make a selection";
        isValid = false;
      }
    }

    setErrors(currentErrors);
    return isValid;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData.step1Data}
            updateFormData={(data) => updateFormData("step1Data", data)}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData.step2Data}
            updateFormData={(data) => updateFormData("step2Data", data)}
            errors={errors}
          />
        );
      case 3:
        return (
          <Step3
            isYearly={formData.step2Data.isYearly}
            formData={formData.step3Data}
            updateFormData={(data) => updateFormData("step3Data", data)}
            errors={errors}
          />
        );
      case 4:
        return <Summary formData={formData} />;
      case 5:
        return <Finished formData={formData} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="w-full min-h-screen flex lg:justify-center lg:items-center bg-gray-200">
      <div className="w-full grid lg:grid-cols-12 relative lg:w-2/3 bg-BlueTwo lg:bg-white lg:rounded-lg lg:p-4">
        <DesktopLeftSide />
        <div className=" bg-white w-11/12 rounded-xl transform  mx-auto lg:w-full lg:col-start-5 lg:col-span-8 lg:p-8"> {/* DIV DATOS */  }
          {renderStep()}
          <div className="flex justify-between mt-4 absolute bottom-10 left-0 right-20">
            {currentStep > 1 && currentStep < 4 && (
              <button onClick={prevStep} className="btnBack">
                Go back
              </button>
            )}
            {currentStep < 4 && (
              <button onClick={nextStep} className="btnStep">
                Next Step
              </button>
            )}
            {currentStep === 4 && (
              <button onClick={nextStep} className="btnStep bg-Purple">
                Confirm Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
