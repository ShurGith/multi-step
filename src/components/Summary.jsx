function Summary({ formData }) {

const addOns = formData.step3Data.selectedAddOns || [];
const totalPrice = addOns.reduce((total, addOn) => total + +addOn.price, 0);
console.log(addOns);
console.log(addOns[0].price);

console.log(totalPrice);


  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Summary of Your Selections</h2>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Step 1 Information:</h3>
        <p>
          <strong>Name:</strong> {formData.step1Data.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.step1Data.email}
        </p>
        {/* Display other Step 1 data */}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Step 2 Selection:</h3>
        {/* Display other Step 2 data */}
        <p>
          <strong>Selected Option:</strong> {formData.step2Data.selection}
        </p>
        <p>
          <strong>Addons Selected:</strong> {formData.step3Data.selectedAddOns.map(addon => addon.title).join(', ')}
        </p>
      </div>
      {/* Display summary for other steps */}
      <p className="text-lg font-bold mt-4">
        Review your selections before confirming.
      </p>
    </div>
  );
}

export default Summary;
