import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Summary from './components/Summary';
import './index.css'; // Import Tailwind CSS

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
      {renderStep()}
      <div className="flex justify-between mt-4">
        {currentStep > 1 && currentStep < 3 && ( // Only show "Previous" on steps > 1 and < 3
          <button
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring"
          >
            Previous
          </button>
        )}
        {currentStep < 3 && ( // Only show "Next" on steps < 3
          <button
            onClick={nextStep}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring ml-auto" // Use ml-auto to push to the right
          >
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button
            onClick={() => alert('Order Confirmed!')} // Replace with actual confirmation logic
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
