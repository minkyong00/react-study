import React, { createContext, useState } from 'react';

// 컨텍스 생성 및 초기화
// Provider 생성
// useContext를 사용하므로 consumer는 필요 없다.
// animals 리스트 초기화 ["누렁이", "야옹이, "점박이"]
// 버튼을 눌렀을 때 삭제하는 remove라는 메서드 생성
// 화면에서 동물을 입력 받았을 때 추가하는 insert라는 메서드 생성

const AnimalsContext = createContext({
  state : { animals : [] },
  actions : { insert : () => {}, remove : () => {} }
})

const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(["누렁이", "야옹이", "점박이"])

  const insert = (animal) => { setAnimals(animals.concat(animal)) };
  const remove = (i) => { setAnimals(animals.filter((animal, index) => i != index)) };

  const value = {
    state : { animals : animals},
    actions : { insert : insert, remove : remove }
  }

  return(
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}

export { AnimalsContext, AnimalsProvider }