import { useEffect } from "react";

function Step2({ formData, updateFormData, errors }) {

  const handleSwitchChange = (e) => {
    updateFormData({ ...formData, isYearly: e.target.checked });
  };

  const handleSelectionChange = (e) => {
    updateFormData({...formData, selection: e.target.value });
    document.querySelectorAll(".label-option").forEach((label) => {
      label.classList.remove("border-Purple");
    });
    e.target.parentElement.classList.add("border-Purple");
  };

  console.log(formData.selection);

  return (
    <div className="bg-white p-6 roundedflex flex-col h-full">
      <h2 className="tagH2">Select your plan</h2>
      <p className="text-gray-400 text-sm mb-6">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex">
        <div className="flex justify-center items-center gap-6">
          <label className="label-option border-Purple">
            <input
              type="radio"
              className="opacity-0 -z-1 abosulute"
              name="selection"
              value="arcade"
              checked={formData.selection === "arcade"}
              onChange={handleSelectionChange}
            />
            <img
              src="/images/icon-arcade.svg"
              alt="Option Arcade"
              className="size-10"
            />
            <div>
              <h3 className="text-xl font-medium text-gray-700">Arcade</h3>
              <p className="text-sm text-azul/50 ">$9/mo</p>
            </div>
          </label>
          <label className="label-option">
            <input
              type="radio"
              className="opacity-0 -z-1 abosulute"
              name="selection"
              value="advanced"
              checked={formData.selection === "advanced"}
              onChange={handleSelectionChange}
            />
            <img
              src="/images/icon-advanced.svg"
              alt="Option Advanced"
              className="size-10"
            />
            <div>
              <h3 className="text-xl font-medium text-gray-700">Advanced</h3>
              <p className="text-sm text-azul/50 ">$12/mo</p>
            </div>
          </label>
          <label className="label-option">
            <input
              type="radio"
              className="opacity-0 -z-1 abosulute"
              name="selection"
              value="pro"
              checked={formData.selection === "pro"}
              onChange={handleSelectionChange}
            />
            <img
              src="/images/icon-pro.svg"
              alt="Option Pro"
              className="size-10"
            />
            <div>
              <h3 className="text-xl font-medium text-gray-700">Pro</h3>
              <p className="text-sm text-azul/50 ">$15/mo</p>
            </div>
          </label>
        </div>

        {errors.selection && (
          <p className="text-red-500 text-xs italic mt-1">{errors.selection}</p>
        )}
      </div>
      <div className="flex justify-center items-center mt-6 w-full gap-2">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
          Monthly
        </span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only peer cursor-pointer"
            checked={formData.isYearly}
            onChange={handleSwitchChange}
          />
          <div className="relative w-12 h-6 bg-azul rounded-full peer dark:bg-azul peer-checked:after:translate-x-6  after:absolute after:top-[2.5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:size-4.5 after:transition-all dark:border-gray-600"></div>
        </label>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
          Yearly
        </span>
      </div>
      {/* Add more fields for Step 2 */}
    </div>
  );
}

export default Step2;
