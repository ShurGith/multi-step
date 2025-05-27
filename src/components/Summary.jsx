import React from 'react';

function Summary({ formData }) {
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
        <p>
          <strong>Selected Option:</strong> {formData.step2Data.selection}
        </p>
        {/* Display other Step 2 data */}
      </div>
      {/* Display summary for other steps */}
      <p className="text-lg font-bold mt-4">
        Review your selections before confirming.
      </p>
    </div>
  );
}

export default Summary;
