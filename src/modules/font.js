import { createAction, handleActions } from "redux-actions";


// type 생성
const INCREASE = "font/INCREASE";
const DECREASE = "font/DECREASE";
const INPUT = "font/INPUT";

// action 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const input = createAction(INPUT);

// initialState 초기값 생성
const initialState = {
  font : "재미있는 리덕스 수업!",
  fontSize : "1rem",
  inputFontSize : "1rem"
}

// reducer 생성
const font = handleActions({
  [INCREASE] : (state, action) => ({ ...state, fontSize : "5rem" }),
  [DECREASE] : (state, action) => ({ ...state, fontSize : "2rem" }),
  [INPUT] : (state, action) => ({...state, inputFontSize : action.payload})
}, initialState)

// 내보내기
export default font;
