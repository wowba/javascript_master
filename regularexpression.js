// 정규표현식

// 생성자 방식
// new RegExp('표현', '옵션')
// new RegExp('[a-z]', 'gi')

// 리터럴
// /표현/옵션
// /[a-z]/gi

// g - 모든 문자 일치(global)
// i - 영어 대소문자를 구분하지 않고 확인
// m - 여러 줄 일치, 각각의 줄을 시작과 끝으로 인식.

// 정규식.test(문자열) - 일치 여부 반환


// 문자열.match(정규식) - 일치하는 문지의 배열 반환
const str1 = "the rock, THE ROCK"

const regexp = new RegExp('the', 'gi')
console.log(str1.match(regexp))

const literal = /the/gi
console.log(str1.match(regexp))
console.log(str1.match(/the/gi))

// 문자열.replace(정규식, 대체문자) - 일치하는 문자 대체 
console.log(str1.replace(regexp, 'dog'))
