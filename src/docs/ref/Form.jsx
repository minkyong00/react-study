import React from 'react';

const Form = ({style, formRef, onClickToCheck, inputRef}) => {
  //CheckInput에서 Props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
  return (
      <div style={style}>
        <form ref={formRef} >
          <div>
            <span>이메일</span>
            <input type="text" name='email' ref={(element) => {inputRef.current[0] = element}}/>
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" name='password' ref={(element) => {inputRef.current[1] = element}} />
          </div>
          <div>
            <span>이름</span>
            <input type="text" name='name' ref={(element) => {inputRef.current[2] = element}} />
          </div>
          <div>
            <span>나이</span>
            <input type="text" name='age' ref={(element) => {inputRef.current[3] = element}} />
          </div>
          <button type='button' onClick={onClickToCheck}>입력 완료</button>
        </form>
      </div>
  );
};

export default Form;