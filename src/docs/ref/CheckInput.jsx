import React, { useRef } from 'react';
import Form from './Form';

const CheckInput = () => {

  const style = {
    display : "flex",
    flexDirection : "column",
    width : "200px"
  }

  // inputRef를 전달
  const inputRef = useRef([]);
  // formRef를 전달
  const formRef = useRef();

  // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 제작 후 전달
  const onClickToCheck = () => {
    for(let input of inputRef.current){
      if(!input.value){
        alert(`${input.name}를 입력하세요`)
        return;
      }
    }
    formRef.current.submit();
  }


  return (
    <Form onClickToCheck={onClickToCheck} formRef={formRef} style={style} inputRef={inputRef}/>
  );
};

export default CheckInput;