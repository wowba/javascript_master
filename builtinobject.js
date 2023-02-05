// 문자
const str = `hello world`
console.log(str.length) // 문자열 길이
console.log(str.includes('hello', 0)) // 특정 문자열 포함 여부 boolean 데이터 반환, 인덱스 입력시 해당 문자열 위치 부터 확인.
console.log(str.indexOf(`hello`)) // 주어진 문자와 일치하는 첫 번째 인덱스 반환. 없다면 -1 반환
console.log(str.padEnd(15, '0')) // 대상 문자열이 입력한 길이보다 작으면 모자란 길이만큼 두번째 문자열을 뒤에 추가
console.log(str.padStart(15, '0')) // 대상 문자열이 입력한 길이보다 작으면 모자란 길이만큼 두번째 문자열을 앞에 추가
console.log(str.replace("hello", "h1")) // 해당 문자열 교체한 새로운 문자열을 반환. 기존 문자열에는 변화 없음.
console.log(str.slice(0,5)) // 지정한 범위만큼 문자열을 잘라서 새로운 반환. 기존 문자열에는 변화 없음.
console.log(str.split(' ')) // 대상 문자열을 구분자로 나눠 배열로 반환
console.log(str.toLowerCase()) // 대상 문자열을 모두 소문자로 바꾼 새로운 문자열 반환. 기존 문자열 변화 없음.
console.log(str.toUpperCase()) // 대상 문자열을 모두 대문자로 바꾼 새로운 문자열 반환. 기존 문자열 변화 없음.

const spaceStr = "    world    "
console.log(spaceStr.trim()) // 대상 문자의 앞뒤 공백 문자를 제거한 새로운 문자 반환. 기존 문자열 변화 없음.

// 슷자
const num1 = 3.1454356546
console.log(num1.toFixed(2)) // 숫자를 고정 소수점까지 표현하는 문자열로 반환
console.log(parseFloat(num1.toFixed(2))) // 문자를 다시 숫자로 변환

const num2 = 10000
console.log(num2.toLocaleString()) // 사용자가 보기 편하게 문자열로 변환

//// Number 클래스
console.log(Number.isInteger(num1)) // 정수인지 판단 후 boolean 데이터 반환
console.log(Number.isNaN(NaN)) // 주어진 값이 NaN 인지 확인 
console.log(Number.parseInt(num1, 10)) // 주어진 값을 파싱해 특정 진수의 정수로 반환
console.log(Number.parseFloat(num1)) // 주어진 값을 파싱해 부동소수점 실수로 반환

// 수학
console.log(Math.abs(-2)) // 주어진 숫자의 절댓값을 반환.
console.log(Math.ceil(3.5)) // 주어진 숫자를 올림해 정수 반환.
console.log(Math.floor(3.5)) // 주어진 숫자를 내림해 정수 반환.
console.log(Math.max(1,2,3,100)) // 주어진 숫자 중 가장 큰 숫자 반환.
console.log(Math.min(1, 10)) // 주어진 숫자 중 가장 작은 숫자 반환.
console.log(Math.pow(5, 3)) // 주어진 숫자의 거듭제곱한 값을 반환
console.log(Math.random()) // 숫자를 0 이상 1 미만의 난수 반환
console.log(Math.round(3.23)) // 반올림

// 날짜
const date = new Date()
console.log(date) // 타임스탬프
const d1 = new Date(2022, 11, 16, 12, 57, 30) // 년 월 일 시 분 초
console.log(d1)
const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)')

d2.setFullYear(2025) // 날짜 인스턴스의 연도 지정
console.log(d2.getFullYear()) // 날짜 인스턴스의 연도 반환
d2.setMonth(5); // 날짜 인스턴스의 월 지정
console.log(d2.getMonth()); // 날짜 인스턴스의 월 반환
d2.setDate(11) // 날짜 인스턴스의 일 지정
console.log(d2.getDate()) // 날짜 인스턴스의 일 반환
d2.setHours(5) // 날짜 인스턴스의 시간 지정
console.log(d2.getHours()) // 날짜 인스턴스의 시간 반환
d2.setMinutes(5) // 날짜 인스턴스의 분 지정
console.log(d2.getMinutes()) // 날짜 인스턴스의 분 반환
d2.setSeconds(5) // 날짜 인스턴스의 초 지정
console.log(d2.getSeconds()) // 날짜 인스턴스의 초 반환
console.log(d2.getDay()) // 날짜 인스턴스의 요일 반환 - 0 ~ 6 월화수목금토일
d2.setTime(1999999000000) // 1970-01-01 00:00:00 (유닉스타임) 부터 경과한 날짜 인스턴스의 밀리초를 지정  
console.log(d2)
console.log(d2.getTime()) // 1970-01-01 00:00:00부터 경과한 날짜 인스턴스의 밀리초를 반환  
console.log(Date.now()) // 1970-01-01 00:00:00부터 메소드가 호출될 때 까지 경과한 시간 반환

// 배열
const arr = [1,2,3]

console.log(arr.length) // 배열의 길이 반환
console.log(arr.at(0), arr[0]) // 대상 배열 인덱싱
console.log(arr.concat([4,5,6])) // 대상 배열과 병합
console.log(arr.every(item => item < 5)) // 대상 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인
console.log(arr.filter(item => item < 3)) // 콜백 테스트를 통과한 모든 대상을 새로운 배열로 반환
console.log(arr.find(item => item === 1)) // 콜백 테스트를 통과한 첫번째 아이템 반환
console.log(arr.findIndex(item => item === 1)) // 콜백 테스트를 통과한 첫번째 아이템의 인덱스 반환
console.log(arr.flat()) // 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열 반환
arr.forEach(item => console.log(item)) // 대상 배열의 길이만큼 주어진 콜백 실행
console.log(arr.includes(1)) // 대상 배열이 특정 요소를 포함하고 있는지 확인
console.log(arr.join(".")) // 대상 배열의 모든 요소를 구분자로 연결한 몬자를 반환
console.log(arr.map(item => item + 1)) // 대상 배열의 길이만큼 콜백을 실행한 후 반환값의 배열을 새로 반환
console.log(arr.pop()) // 대상 배열의 마지막 요소를 제거 후 그 요소 반환
console.log(arr.push(3)) // 대상 배열의 마지막에 하나 이상의 요소를 추가하고 길이를 반환
const sum = arr.reduce((acc, cur) => { // 대상 배열의 길이만큼 주어진 콜백을 실행하고 마지막에 호출되는 콜백의 반환 값 반환
  return acc + cur              // 각 콜백의 반환 값은 다음 콜백으로 전달
}, 0) // 첫번째 인자의 값으로 들어감.
console.log(sum)
console.log(arr.reverse().reverse()) // 대상 배열의 순서를 반전. 원본이 변경됨.
console.log(arr.shift()) // 대상 배열의 첫번째 요소 제거, 제거된 요소를 반환. 원본 변경
console.log(arr.slice(0,2)) // 대상 배열의 일부를 추출해 새로운 배열 반환.
console.log(arr.some(item => item < 3)) // 대상 배열의 *어떤 요소*라도 콜백 테스트를 통과하는지 확인
console.log(arr.sort((a,b) => b - a)) // 정렬한 배열 반환, 원본 변경
arr.splice(2, 0, 9) // 대상 배열에 요소를 추가,삭제 혹은 교체. .spice(지정 인덱스, 삭제하고자 하는 원소 개수, 넣고자 하는 데이터)
console.log(arr)
console.log(arr.unshift(2)) // 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이 반환
console.log(arr)

// 객체
const target = {a: 1, b: 2}
const source1 = {b: 3, c: 4}
console.log(Object.assign(target, source1)) // 대상 객체(첫번째 인수)에 속성을 복사하고 대상 객체를 반환함.
console.log(Object.keys(target)) // 주어진 객체의 키를 나열한 배열을 반환.
console.log(Object.values(target)) // 주어진 객체의 밸류를 나열한 배열을 반환 
console.log(Object.entries(target)) // 객체 데이터의 키, 밸류를 하나로 묶은 2차원 배열을 반환한다.

// JSON (JavaScript Object Notation)
// 데이터 전달을 위한 표준 포맷
// .json 확장자 사용
// 문자 숫자 불린 null 객체 배열 사용
// 문자는 큰 따옴표만 사용

// JSON.stringfy() - 데이터를 JSON 문자로 변환
// JSON.parse() - JSON 문자를 분석해 데이터로 변환