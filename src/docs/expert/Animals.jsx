import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal';

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물 버튼 추가 (컨텍스트 메서드 insert 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제 (context 메서드를 remove 사용)
const Animals = () => {
  
  //consumer대신 사용
  const {state, actions} = useContext(AnimalsContext);
  console.log(actions)
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const onKeyDownAddAnimal = (e) => {
    if(e.key === 'Enter'){
      actions.insert(inputValue)
    }
  }

  // Animal로 state와 actoin을 넘겨서 리스트로 화면에 출력하기
  return (
    <>
      <ul>
        <input type="text" onChange={onChangeInputValue} onKeyDown={onKeyDownAddAnimal}/>
        <Animal state={state} actions={actions} />
      </ul>
    </>
  );
};

export default Animals;