// 모듈이란 특정 데이터들의 집합
// 모듈 가저오기 - import / 모듈 내보니기 - export
// 가져오기 선언은 모듈의 최상위 부분에서만 선언해야 한다.

// export default 불러오기
import number from './module-export.js'

// export 불러오기
// as 키워드를 사용해서 이름 변경 가능
import { str as hi, arr, hello } from './module-export.js'

// * 를 사용하여 한번에 모든 데이터 가져올 수 있음
import * as all from './module-export.js'

console.log(number)
console.log(hi)
console.log(arr)
console.log(hello)
console.log(all)

// import() 함수를 이용하여 최상위 부분 외에서도 모듈 호출 가능
import('./module-export.js').then(abc => {
  console.log(abc)
})

// 다른 모듈 가져오자마자 내보내기
// 아래와 같이 선언할 경우 다른 모듈에서 아래 데이터를 호출할 수 있다.
export * as all from './module-export.js'