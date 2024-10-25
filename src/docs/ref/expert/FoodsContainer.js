import React, { useRef, useState } from 'react';

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const inputRef = useRef([]);
  const checkRef = useRef([]);

  const foodList = foods.map(({kor, eng}, i) => {
    return (
      <li key={i}>
          <input type='checkbox' ref={(el) => checkRef.current[i] = el}/>
          {`${kor}(${eng})`}
      </li>
    )
  })

  const onClickToAddFood = () => {
    setFoods(foods.concat(
      {
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value,
      }
    ))
  }

  const onClickToRemoveFood = () => {
    setFoods(foods.filter((f, i) => !checkRef.current[i].checked))
  }

  return (
    <div>
      <div>
        <input ref={(el) => inputRef.current[0] = el} type='text' placeholder='한국 음식 이름'/>
        <input ref={(el) => inputRef.current[1] = el} type='text' placeholder='영어 음식 이름'/>
      </div>
      <div>
        <button type='button' onClick={onClickToAddFood}>추가</button>
        <button type='button' onClick={onClickToRemoveFood}>삭제</button>
      </div>
      <div>
        {foodList}
      </div>
    </div>
  );
};

export default Foods;