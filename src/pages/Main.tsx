import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>Home</div>
        <button onClick={() => navigate('/project')}>Project</button>
      </div>
      <div>Profile</div>
      <div>이혜영</div>
      <div>Frond-end Developer</div>
      <button onClick={() => window.open('https://github.com/kkotburi')}>GitHub</button>
      <div>Blog</div>
      <div>꾸준히 자기 개발을 위해 1D1C(1 day 1 commit)을 실천하고 있습니다.</div>
      <div>내일배움캠프 수료</div>
    </div>
  );
};

export default Main;
