import React, { useState } from 'react';

const Sound = () => {
  // 강아지 버튼과 고양이 버튼을 만들고
  // 버튼을 눌렀을 때 각각 울음 소리가 나오도록 구현하기
  // 강아지는 멍멍, 고양이는 야옹

  const [sound, setSound] = useState();
  const dog = "멍멍";
  const cat = "야옹";

  const soundDog = () => {
    console.log(dog);
    setSound(dog);
  }
  const soundCat = () => {
    console.log(cat);
    setSound(cat);
  }

  return (
    <div>
      <p>{sound}</p> 
      <button onClick={soundDog}>강아지 버튼</button>   
      <button onClick={soundCat}>고양이 버튼</button>   
    </div>
  );
};

export default Sound;