import React from 'react';
import  S from '../style';

// const StyledDiv = styled.div`
//   width: 100px;
//   height: 100px;
//   border: solid 1px #333;
// `;

const Styled01 = () => {

  return (
    <S.StyledDiv>
      스타일된 컴포넌트
      <S.Input color={"pink"} />
      {/* <S.TestComponent>일반 컴포넌트</S.TestComponent> */}
      <S.StyledButton backgroundColor={"blue"}>스타일된 버튼</S.StyledButton>
    </S.StyledDiv>
  );
};

export default Styled01;