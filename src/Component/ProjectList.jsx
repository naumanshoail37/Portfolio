import React from 'react';

const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl transition"
          onClick={() => onSelectProject(project)}
        >
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p className="text-green-500 font-bold">Goal: ${project.goal}</p>
          <p className="text-blue-500 font-bold">Raised: ${project.raised}</p>
        </div>
      ))}
      
      {projects.length === 0 && (
        <p className="text-center text-gray-500 col-span-3">No projects available. Please create one!</p>
      )}
    </div>
  );
};

export default ProjectList;
