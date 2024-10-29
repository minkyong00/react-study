import React, { useRef, useState } from 'react';

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [checked, setChecked] = useState([]);

  const inputRef = useRef([]);

  const foodList = foods.map(({kor, eng}, i) => {
    return (
      <li key={i}>
          <input type='checkbox' checked={checked[i]}  onChange={() => onChangeCheckBox(i)}/>
          {`${kor}(${eng})`}
      </li>
    )
  })

  const onClickToAddFood = () => {
    setFoods(
      foods.concat({
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value,
      }))
      setChecked(checked.concat(fasle)); //초기값 false 추가
    }

    const onChangeCheckBox = (i) => {
      checked.splice(i, 1, !checked[i])
      setChecked(checked.concat()); //리랜더링됨
    }
    
    const onClickToRemoveFood = () => {
      setFoods(foods.filter((food, i) => !checked[i])) //false인 check를 남겨야 하므로 true값을 앲앰
      setChecked(new Array(foods.length).fill(false)); //input 개수에 맞춰서 새로운 배열에 false로 채움 
    }
    

  return (
    <div>
      <div>
        <input ref={(el) => inputRef.current[0] = el} type='text' placeholder='한국 음식 이름'/>
        <input ref={(el) => inputRef.current[1] = el} type='text' placeholder='영어 음식 이름'/>
      </div>
      <div>
        <button type='button' onClick={onClickToAddFood}>추가</button>
        <button type='button'onClick={onClickToRemoveFood}>삭제</button>
      </div>
      <div>
        {foodList}
      </div>
    </div>
  );
};

export default Foods;