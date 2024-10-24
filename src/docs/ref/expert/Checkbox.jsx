import React, { useState } from 'react';

const Checkbox = () => {

  const [message, setMessage] = useState([]);

  const onClickToCheck = (e) => {
    const value = e.target.value;
    if(e.target.checked){
      setMessage(message.concat(value)) //리랜더링, 배열을 새로 만들어줌
      // setMessage([...message, value]) //스프레드(깊은 복사, 주소값이 바뀜)
    } else{
      setMessage(message.filter((m) => m !== value))
    }

    // setMessage(message.push(e.target.value)) //message에서 주소값이 안바뀜
  }

  return (
    <div>
      <div>
        <span>front-end</span>
        <input type="checkbox" value="front-end" onClick={onClickToCheck} />
        </div>
      <div>
        <span>back-end</span>
        <input type="checkbox" value="back-end" onClick={onClickToCheck} />
        </div>
      <div>
        <span>AI</span>
        <input type="checkbox" value="AI" onClick={onClickToCheck} />
      </div>
      <div>
        <h1>{message.map((m, i) => <p key={i}>{m}</p>)}</h1>
      </div>
    </div>
  );
};

export default Checkbox;