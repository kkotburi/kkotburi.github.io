import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Project from '../pages/Project';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
