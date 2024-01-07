import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import TasksPage from './pages/Tasks.js';
import ProjectsPage from './pages/Projects.js';
import ProjectProgressPage from './pages/Project_progress.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/tasks" element={<TasksPage />} />
         
      <Route path="/projects" element={<ProjectsPage />} />
         
      <Route path="/projectprogress" element={<ProjectProgressPage />} />
    </Routes>
  );
}

export default App;
