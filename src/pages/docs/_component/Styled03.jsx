import React from 'react';
import S from '../style';
import BasicButton from '../../../components/button/BasicButton';

const Styled03 = () => {
  return (
      <S.Wrap>
        <form action="">
          <S.Wrap>
            <span>이메일</span>
            <input type="text" />
          </S.Wrap>
          <S.Wrap>
            <span>비밀번호</span>
            <input type="password" />
          </S.Wrap>
          <S.Wrap>
            <span>비밀번호 확인</span>
            <input type="password" />
          </S.Wrap>
          <BasicButton 
            type='button' 
            variant={"primary"} 
            size={"large"} 
            shape={"small"}
            >로그인</BasicButton>
          
          {/* 회원가입을 버튼을 사용해보기 */}
          <BasicButton 
          type='button'
          variant={"sub"}
          size={"large"}
          shape={"small"}
          
          >회원가입</BasicButton>
        </form>
      </S.Wrap>
  );
};

export default Styled03;