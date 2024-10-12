import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pyeonsik from '../components/Project/Pyeonsik';

const Project = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <div>Project</div>
      <Pyeonsik />
      <div>
        <div>Todolist</div>
        <div>Next.js</div>
      </div>
    </div>
  );
};

export default Project;
