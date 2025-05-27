import React from 'react';

function Step1({ formData, updateFormData, errors }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 1: Personal Information</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
        )}
      </div>
      {/* Add more fields for Step 1 */}
    </div>
  );
}

export default Step1;
