import React, { useState } from 'react';
import PaymentComponent from './PaymentComponent';
import ProjectUpdates from './ProjectUpdates';

const ProjectDetail = ({ project, onContribute }) => {
  const [amount, setAmount] = useState(0);

  const handleContribution = () => {
    onContribute(project.id, amount);
    setAmount(0);
  };

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Goal: ${project.goal}</p>
      <p>Raised: ${project.raised}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Contribution Amount"
      />
      <button onClick={handleContribution}>Contribute</button>
      <PaymentComponent amount={amount} />
      <ProjectUpdates projectId={project.id} />
    </div>
  );
};

export default ProjectDetail;
