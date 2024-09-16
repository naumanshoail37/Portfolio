import React, { useState } from 'react';
import ProjectList from './Component/ProjectList';
import ProjectForm from './Component/ProjectForm';
import ProjectDetail from './Component/ProjectDetail';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCreateProject = (project) => {
    setProjects([...projects, { ...project, id: projects.length + 1, raised: 0 }]);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleContribute = (projectId, amount) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId ? { ...project, raised: project.raised + parseInt(amount) } : project
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Crowdfunding Platform</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectForm onCreateProject={handleCreateProject} />
        <ProjectList projects={projects} onSelectProject={handleSelectProject} />
      </div>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onContribute={handleContribute} />
      )}
    </div>
  );
};

export default App;
