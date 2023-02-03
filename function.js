
// 함수 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상 의미.

//// 함수 선언식 // 호이스팅 발생
function hello1() {
    console.log("hello")
}
//// 함수 표현식 // 호이스팅 미발생
const hello2 = function () {}

// 함수의 종료 및 반환
function ex1() {
    // return 키워드는 함수 종료 및 데이터를 반환한다.
    // 아무것도 return하지 않을시 undefined 출력.
    return "return"
}

// 매개변수 패턴
function sum(a, b) {
    return a + b
}
console.log(sum(1, 2))
//// 객체 매개변수 구조분해할당
const user = {
    name: "lee",
    age: 12
}
function getName({ name }) {
    return name
}
function getEmail({ email = "이메일 존재하지 않음" }) {
    return email
}
console.log(getName(user))
console.log(getEmail(user))
//// 배열 매개변수 구조분해할당
const fruits = ['apple', 'banana', 'tomato']
function getSecondItem([, b]) {
    return b
}
console.log(getSecondItem(fruits))
//// 나머지 매개변수
function sum(...rest) {
    console.log(rest)
    return rest.reduce(function (acc, cur) {
        return acc + cur
    }, 0)
}
console.log(sum(1,2,3,4))

// 화살표 함수 - ES6 최신 문법. function을 생략할 수 있다.
const arrow = () => {}
//// 매개변수가 하나라면 소괄호 생략 가능
const oneParam = a => {return a}
//// return 키워드가 함수 내용의 최우선이라면 중괄호 및 return 생략 가능
const noReturn = a => a
//// 객체 데이터를 리턴할 경우, 소괄호로 둘러싸야 함
const returnObject = () => ({a: 1})

// 즉시실행함수 (IIFE)
//// 함수를 선언하자마자 바로 호출하는 방법
//// (function {}))()
;(function(){console.log("IIFE")})()
//// (function (){}())
;(function(){console.log("IIFE")}())

// 즉시실행 화살표 함수
//// 두번째 소괄호에 인자를 넣을 수 있다. 코드의 난독화 가능.
;(() => {console.log("arrow IIFE")})()
;((a, b) => {
    console.log(a)
    console.log(b)
})(1, 2)

// 콜백
// 함수가 실행될 때 인수로 들어가는 다른 함수를 콜백함수라고 한다.
const a = callback => {
    console.log("A")
    callback()
}
const b = () => {console.log("B")}
a(b)
const c = (c) => {
    setTimeout(() => {
        c("this is value") 
    }, 1000)
}
c(value => {console.log(value)})

// 재귀, 함수 내부에서 자기 자신을 다시 호출
let j = 0;
const recursive = () => {
  console.log("hello")
  j += 1
  if(j < 4) {
    recursive()
  }
}
recursive()

// 호출 스케쥴링
const hello = () => {
    console.log("hello")
}
const timeout = setTimeout(hello, 2000)
const interval = setInterval(hello, 2000)
const h1E1 = document.querySelector('h1')
h1E1.addEventListener('click', () => {
    clearTimeout(timeout) // clearTimeout을 이용해 타이머 제거
    clearInterval(interval) // clearIvterval을 이용해 인터벌 제거
})

// this
//// 일반 함수의 this는 호출 위치에서 정의
//// 화살표 함수의 this는 자신이 선언된 함수 범위에서 정의
function thisUser () {
    this.firstName = "lee" // arrow
    this.lastName = "park" // arrow
    return {
        firstName: "kim", // function
        lastName: "yang", // function
        age: 12,
        getArrowName: () => {
            return `${this.firstName} ${this.lastName}`
        },
        getFunctionName: function () { // ": function" 은 생략 가능하다
            return `${this.firstName} ${this.lastName}`
        }
    }
}
const u = thisUser()
console.log(u.getArrowName())
console.log(u.getFunctionName())