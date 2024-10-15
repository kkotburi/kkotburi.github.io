import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/project')}>Project</button>
      </div>
      <div>Profile</div>
      <div>이혜영</div>
      <div>Frond-end Developer</div>
      <div>꾸준히 자기 개발을 위해 1D1C(1 day 1 commit)을 실천하고 있습니다.</div>
      <div>Skills</div>
      <div>Education</div>
      <div>
        2023.05.15 - 2023.09.19 실무형 프론트엔드 엔지니어 양성 과정 팀스파르타 내일배움캠프
        <br />
        2023.03.16 - 2023.04.09 비개발자를 위한, 웹개발 종합반(프로그래밍 실무, 풀 스택) 팀스파르타
        <br />
        2016.03 - 2021.08 안동대학교 화학(전공), 의류학(부전공)
      </div>
      <div>내일배움캠프 수료</div>
      <button onClick={() => window.open('https://github.com/kkotburi')}>GitHub</button>
      <button onClick={() => window.open('https://velog.io/@kkotburi/posts')}>Blog</button>
    </div>
  );
};

export default Main;
