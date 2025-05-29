import { useEffect, useState } from "react";

function Summary({ formData }) {
  const addOns = formData.step3Data.selectedAddOns || [];
  
  const isYearly = formData.step2Data.isYearly;

  const theAddonPrice = isYearly ? addOns.reduce((total, addOn) => total + +addOn.price, 0)
    : addOns.reduce((total, addOn) => total + +addOn.priceMonthly, 0)

  const thePlanPrice = isYearly ? formData.step2Data.price : formData.step2Data.priceMonthly



 //const thePlanPrice = isYearly ? setPlanPrice(formData.step2Data.price):''

  const theAmount = thePlanPrice + theAddonPrice
  const monthlyYearly = isYearly ? "/yr" : "/mo"
console.log(thePlanPrice, theAddonPrice, theAmount, isYearly);

  return (
    <div className="bg-white p-6 roundedflex flex-col h-full">
      <h2 className="tagH2">Finishing up</h2>
      <p className="text-gray-400 text-sm mb-6">
        Double-check everything looks ok before confirming.
      </p>

      <div className="mb-4 bg-Gray3 py-4 px-8 rounded-lg mt-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-azul font-bold mb-1">{formData.step2Data.title} {formData.step2Data.isYearly ? ' (Yearly)' : ''}</h4>
            <p>Change</p>
          </div>
          <p className="text-azul font-bold">${ isYearly ? formData.step2Data.price : formData.step2Data.priceMonthly}{monthlyYearly}</p>
        </div>
        <div className="w-full h-[1px] bg-Gray2 my-4"></div>
        {addOns.map((addOn, index) => (
          <div key={index} className="flex justify-between items-center mt-2 gap-8">
            <p className="text-gray-400 mt-4">{addOn.title}</p>
            <p className="text-gray-400 ">+${formData.step2Data.isYearly ? addOn.price : addOn.priceMonthly}{monthlyYearly}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 px-8">
        <p className="text-gray-400">Total ({formData.step2Data.isYearly ? 'per year' : 'per month'}) </p>
        <p className="text-azul font-bold">${theAmount}{monthlyYearly}</p>
      </div>
    </div>
  );
}

export default Summary;
