import React from 'react';

function Step2({ formData, updateFormData, errors }) {
  const handleSelectionChange = (e) => {
    updateFormData({ selection: e.target.value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 2: Select an Option</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Choose one:
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              className="form-radio"
              name="selection"
              value="option1"
              checked={formData.selection === 'option1'}
              onChange={handleSelectionChange}
            />
            <span className="ml-2">Option 1</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="selection"
              value="option2"
              checked={formData.selection === 'option2'}
              onChange={handleSelectionChange}
            />
            <span className="ml-2">Option 2</span>
          </label>
        </div>
        {errors.selection && (
          <p className="text-red-500 text-xs italic mt-1">{errors.selection}</p>
        )}
      </div>
      {/* Add more fields for Step 2 */}
    </div>
  );
}

export default Step2;
