import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Summary from './components/Summary';
import './index.css'; // Import Tailwind CSS
import DesktopLeftSide from './components/DesktopLeftSide';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
    step4Data: {},
    // Add more steps as needed
  });
  const [errors, setErrors] = useState({});

  const updateFormData = (step, data) => {
    setFormData(prevData => ({
      ...prevData,
      [step]: data,
    }));
  };

  const nextStep = () => {
    // Implement validation here before advancing
    if (validateStep(currentStep)) {
      setCurrentStep(prevStep => prevStep + 1);
      setErrors({}); // Clear errors on successful step completion
    }
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
    setErrors({}); // Clear errors when going back
  };

  const validateStep = (step) => {
    let currentErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.step1Data.name) {
        currentErrors.name = 'Name is required';
        isValid = false;
      }
      if ( formData.step1Data.name.length < 8) {
        currentErrors.name = 'Minimum 8 characters required';
        isValid = false;
      }
      if (!formData.step1Data.phome) {
        currentErrors.phone = 'Number Phome is required';
        isValid = false;
      }
      if ( formData.step1Data.phone.length < 9) {
        currentErrors.phone = 'Minimum 9 characters required';
        isValid = false;
      }
        isValid = false;
      if (!formData.step1Data.email) {
        currentErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.step1Data.email)) {
        currentErrors.email = 'Invalid email format';
        isValid = false;
      }
      // Add validation for other fields in Step 1
    } else if (step === 2) {
      // Add validation for Step 2
      if (!formData.step2Data.selection) {
        currentErrors.selection = 'Please make a selection';
        isValid = false;
      }
    }
    // Add validation for other steps

    setErrors(currentErrors);
    return isValid;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData.step1Data}
            updateFormData={data => updateFormData('step1Data', data)}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData.step2Data}
            updateFormData={data => updateFormData('step2Data', data)}
            errors={errors}
          />
        );
      case 3:
        return <Summary formData={formData} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
    <div className="lg:grid lg:grid-cols-12 relative w-2/3 bg-white rounded-lg p-4">
      <DesktopLeftSide />
      <div className="col-span-1 bg-white"></div>
      <div className="col-span-7">
        {renderStep()}
        <div className="flex justify-between mt-4 absolute bottom-10 left-0 right-20">
          {currentStep > 1 && currentStep < 3 && ( // Only show "Previous" on steps > 1 and < 3
            <button
              onClick={prevStep}
              className="btnStep"
            >
              Previous
            </button>
          )}
          {currentStep < 3 && ( // Only show "Next" on steps < 3
            <button
              onClick={nextStep}
              className="btnStep" // Use ml-auto to push to the right
            >
              Next Step
            </button>
          )}
          {currentStep === 3 && (
            <button
              onClick={() => alert('Order Confirmed!')} // Replace with actual confirmation logic
              className="btnStep"
            >
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
