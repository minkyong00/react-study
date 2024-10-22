// 실습
// name과 message를 넣어서 랜더링하기
// name : 이름, messgae : 환영합니다.

const Jsx03 = () => {
  const name = "김민경";
  const messgae = "환영합니다";

  return (
    <>
      {/* name : {name}, messgae : {messgae} */}
      저의 이름은 {name} <br />
      <p style={{color: "blue"}}>{messgae}</p>
    </>
  )
}

export default Jsx03;