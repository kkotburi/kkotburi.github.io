import React from 'react';

const Pyeonsik = () => {
  return (
    <div>
      <div>편식</div>
      <button onClick={() => window.open('https://github.com/kkotburi/project-pyeonsik')}>GitHub</button>
      <button onClick={() => window.open('https://pyeonsik.vercel.app')}>서버 주소</button>
      <div>TypeScript</div>
      <div>편의점 음식을 조합하고 공유하는 커뮤니티</div>
      <div>
        게시글 및 댓글 작성/수정/삭제, 좋아요, 북마크
        <br />
        게시글 인용: 인용된 원글 삭제될 경우 삭제 여부 표기
        <br />
        Quill text editor 사용: 사진 파일 업로드 시 크기 제한 유효성 검 사 추가
        <br />
        소셜 공유하기: 카카오톡 메시지 템플릿 커스텀
        <br />
        주변 편의점 안내를 위한 Kakao Maps API 사용
        <br />
        스와이프 라이브러리를 적용한 신상품 리뷰(긍정, 부정, skip)
        <br />
        라이브러리 없이 신상품 리뷰 결과 백분율에 따른 막대 그래프 표현
        <br />
        회원 탈퇴, 회원 정보 삭제
      </div>
    </div>
  );
};

export default Pyeonsik;
