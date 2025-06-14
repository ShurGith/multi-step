import React from 'react';

function Step1({ formData, updateFormData, errors }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
  };

  return (
   <>
      <h2 className="tagH2"> Personal info</h2>
      <p className='text-gray-400 text-sm mb-6'>Please provide your name, email address, and phone number. </p>
      <div className="mb-4">
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          placeholder='e.g. Stephen King'
          className={`w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-Purple hover:border-BlueOne shadow-sm focus:shadow ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="label">
          Email address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
          placeholder='e.g. stephenking@lorem.com'
          className={`w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-Purple hover:border-BlueOne shadow-sm focus:shadow ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
        )}
      </div>
            <div className="mb-4">
        <label htmlFor="name" className="label">
          Phone Number:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone || ''}
          onChange={handleInputChange}
          placeholder='e.g. +1 234 567 890'
          className={`w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-Purple hover:border-BlueOne shadow-sm focus:shadow ${
            errors.phone ? 'border-red-500' : ''
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>
        )}
      </div>
    </>
  );
}

export default Step1;
