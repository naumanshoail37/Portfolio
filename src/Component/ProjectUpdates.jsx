import React, { useState } from 'react';

const ProjectUpdates = ({ projectId }) => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');
  const [updateAdded, setUpdateAdded] = useState(false);

  const handleAddUpdate = () => {
    setUpdates([...updates, newUpdate]);
    setNewUpdate('');
    setUpdateAdded(true); 
    setTimeout(() => setUpdateAdded(false), 3000); 
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4 text-blue-800">Project Updates</h3>
      <ul className="mb-4">
        {updates.map((update, index) => (
          <li key={index} className="text-gray-700 mb-2">{update}</li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={newUpdate}
          onChange={(e) => setNewUpdate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Add an update"
        />
        <button
          onClick={handleAddUpdate}
          className="ml-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Update
        </button>
      </div>
      {updateAdded && (
        <p className="mt-2 text-green-700 font-semibold">
          Update added successfully!
        </p>
      )}
    </div>
  );
};

export default ProjectUpdates;
