import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div>
        4개월간 1162시간을 공부한 개발자, 이혜영입니다.
        <br />
        깔끔하게 코드 짜는데 즉 협업을 위함이고, <br />
        코딩대로 좋지만 아자아자하는 거 행복함 <br />
        = 부리더도 했지만 좋은 팀원의 자세가 됨 <br />
        정확 <br />
        수학적인 사고 <br />
        비효율 지양 <br />
        클린 코드 <br />
        '성실하게 맡은 바에 최선을 다하는' <br />
        부리더 - 강한 책임감 <br />
        원칙을 잘 따름 <br />
        문제 발생 시 근복적인 원인 이해가 필요 <br />
        빈틈을 놓치지 않고 파악하기 위해 노력 <br />
        까다로움으로 실사용자의 입장에서 꼼꼼히 체크 <br />
        개발에 진심이야!! 적성에도 맞고 하고 싶어 붐 꺼죵 <br />
        <br />
        *답을 찾아나가는 개발자 (문제 해결) <br />
        커뮤니테이션을 중요시하는 개발자 (부리더 소통) <br />
        *꾸준히 성장하는 개발자 (1일 1커밋) <br />
        까탈스러운 개발자 (유효성 검사, 유저 피드백 + 꼼꼼 놓치지 않음) <br />
        ex 끊임없이 사용자의 불편함을 해소하고자 노력하는 개발자 <br />
        사용자가 느낀 불편함 - 어떻게 해결함 <br />
        <br />
        목차 - 구조 - <br />
        <br />
        간결하고 쉽게 알아볼 수 있는 코드를 추구 (효율, 정리) <br />
        지속가능한 코드 <br />
        팀원에게 더 좋은 코드를 선물 <br />
        동료들과의 좋은 협업을 위해 어떤 코드를 짤지 (규칙 중시, 배려) <br />
        진행 상황 공유하고 소통하기 <br />
        <br />
        좋아요 방식에 대한 고민
      </div>
    </div>
  );
};

export default Main;
