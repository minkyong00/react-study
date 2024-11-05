import React from 'react';

const Amount = ({
  divtStyle,
  pStyle,
  buttonStyle,
  props,
  onClickToAddAmount,
  onClickToSubtractAmount,
  onClickToAddCoupon,
  onClickToSubtractCoupon
}) => {
  console.log("자식(Amount) 랜더링")
  const {amount, coupon} = props;

  return (
    <div style={divtStyle}>
      <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>
      <p style={pStyle}>수량 : {amount}</p>
      <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
      <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
      <p style={pStyle}>쿠폰 : {coupon}</p>
      <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
    </div>
  );
};

export default Amount;