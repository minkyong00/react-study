import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  //자식변수
  state = {
    number : 0,
    color : null
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  colorRef = null;

  constructor(props){
    super(props)
    console.log(props)
  }

  //버츄얼돔 prevState(현재 들어가있는 null) , nextProps(부모가 물려준 값) 다르기 때문에 일치하면 값 추가
  static getDeriveStateFromProps(nextProps, prevState){
    if(nextProps.color !== prevState.color){
      return { color : nextProps.color }
    }
    return null;
  }

  componentDidMount(){
    console.log("랜더링 이후 componentDidMount 실행")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState)
    return nextState.number % 5 !== 0;
  }

  //이전 값을 가지고만 있음
  getSnapshotBeforeUpdate( prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    if(prevProps.color !== this.state.color){
      return this.colorRef.style.backgroundColor;
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState){
      console.log(`업데이트 직전 state : ${prevState}` )
    }
    if(snapshot){
      console.log(`업데이트 직전 color : ${snapshot}` )
    }
  }

  render() {
    return (
      <div style={{
        width : "110px",
        height : "100px",
        backgroundColor : this.state.color,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        color : "white"
      }}>
        <div>
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.onClickToIncrease}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;