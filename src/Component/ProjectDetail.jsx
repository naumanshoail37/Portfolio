import React, { useState } from 'react';
import PaymentComponent from './PaymentComponent';
import ProjectUpdates from './ProjectUpdates';

const ProjectDetail = ({ project, onContribute }) => {
  const [amount, setAmount] = useState(0);
  const [contributed, setContributed] = useState(false);

  const handleContribution = () => {
    onContribute(project.id, amount);
    setAmount(0);
    setContributed(true); 
    setTimeout(() => setContributed(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="font-semibold text-gray-900">Goal: ${project.goal}</p>
        <p className="font-semibold text-green-600">Raised: ${project.raised}</p>

        <div className="mt-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Contribution Amount"
            className="p-2 border border-gray-300 rounded w-full"
          />
          <button
            onClick={handleContribution}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Contribute
          </button>
        </div>
      </div>

      
      <div className="bg-gray-100 shadow-md rounded-lg p-6">
        {contributed && (
          <p className="text-green-700 font-semibold mb-4">
            Thank you for contributing ${amount}!
          </p>
        )}
        <PaymentComponent amount={amount} />
        <ProjectUpdates projectId={project.id} />
      </div>
    </div>
  );
};

export default ProjectDetail;
