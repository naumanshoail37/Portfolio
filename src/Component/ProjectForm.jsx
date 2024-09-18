import React, { useState } from 'react';

const ProjectForm = ({ onCreateProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProject({ title, description, goal });
    setTitle('');
    setDescription('');
    setGoal(0);
  };

  return (
    <form className="bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Project Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Enter project title"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Project Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Enter project description"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Funding Goal ($)</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Enter funding goal"
          required
        />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Create Project
      </button>
    </form>
  );
};

export default ProjectForm;
