import { useContext, useState } from "react";
import PlanInput from "./partials/PlanInput";
import { MainContext } from "../context/MainContext";

function Step2({ formData, updateFormData, errors }) {
  const [isYearly, setIsYearly] = useState(formData.isYearly || false); 
  const { plansData } = useContext(MainContext);
  const handleSwitchChange = (e) => {
    setIsYearly(e.target.checked);
    updateFormData({ ...formData, isYearly: e.target.checked });
  };

  return (
    <div className="bg-white p-6 roundedflex flex-col h-full">
      <h2 className="tagH2">Select your plan</h2>
      <p className="text-gray-400 text-sm mb-6">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex justify-start w-full">
        <div className="flex items-center gap-6 w-full">
          {plansData.map((plan, index) => (
            <PlanInput
              key={plan.id}
              image={plan.image}
              isYearly={isYearly}
              formData={formData}
              updateFormData={updateFormData}
              number={index}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 w-full gap-6 bg-BlueTwo/10 rounded-lg py-3 text-sm font-medium dark:text-gray-300 ">
        <span className={`${!isYearly ? 'text-azul' : 'text-azul/30'}`}>
          Monthly
        </span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only peer cursor-pointer"
            checked={isYearly}
            onChange={handleSwitchChange}
          />
          <div className="relative w-12 h-6 bg-azul rounded-full peer dark:bg-azul peer-checked:after:translate-x-6  after:absolute after:top-[2.5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:size-4.5 after:transition-all dark:border-gray-600"></div>
        </label>
        <span className={`${isYearly ? 'text-azul' : 'text-azul/30'}`}>
          Yearly
        </span>
      </div>

        {errors.selection && (
          <div className="flex items-center gap-2">
          <p className="text-white/80 text-xl w-full border italic text-center mt-12 rounded-lg bg-Red">{errors.selection}</p>
          </div>
        )}
    </div>
  );
}

export default Step2;