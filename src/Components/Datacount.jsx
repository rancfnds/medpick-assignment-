import React from "react";

const steps = [
  { number: "04", description: "Incident reported" },
  { number: "06", description: "Check In" },
  { number: "03 / 05", description: "Services open" },
];

const ProgressSteps = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col p-4 border border-gray-200 rounded-lg bg-white shadow-sm"
        >
          <div className="text-blue-500 text-2xl font-bold">{step.number}</div>
          <div className="flex items-center mt-2">
            <div className="text-gray-700">{step.description}</div>
            {index < steps.length - 1 && (
              <div className="text-gray-500 ml-2 text-lg">{"→"}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
