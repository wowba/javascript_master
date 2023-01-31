// 원시 데이터 string
const string1 = "hello"
const string2 = "hello"
const string3 = `hello ${string2}` // 템플릿 리터럴, 기호를 통해 데이터 만들기

console.log(string3)

// 원시 데이터 number
const number = 123;
const pi = .14

console.log(number + 1) // 정수
console.log(pi) // 부동소수점
console.log(number + undefined) // NaN, Not a Number 표시
console.log(typeof (number + undefined)) // number 표시, 타입은 숫자지만 표시만 불가능.

console.log(0.1 + 0.2) // 부동소수점 에러 발생.
console.log(Number((0.1 + 0.2).toFixed(1))) // toFixed는 문자데이터로 변환, Number로 다시 변환

// 원시 데이터 Boolean Null Undefined
const a = true
const b = false

// Null, Undefined는 잠시 후 값을 할당할 때 사용한다.

let age = null // null 을 할당하지 않으면 undefined로 할당이 된다. (명시적 할당)
age = 85 // 이후 할당 가능

let what // undefined 할당 (암시적 할당)
console.log(what) // undefined

// 참조형 Array (배열), 배열의 요소 순서는 0부터 시작한다.
const fruits = new Array('Apple', 'Banana', 'Cherry')
const fruites = ['Apple', 'Banana', 'Cherry']
console.log(fruits[1])

// 참조형 객체 데이터, Object
const user1 = new Object()
user1.name = "lee"
user1.age = 27
console.log(user1)

// 생성자 함수로 객체데이터 생성
function User() {
    this.name = "kim"
    this.age = 14
}
const user2 = new User()
console.log(user2)

// 리터럴 방식으로 객체데이터 생성
const user3 = {
    name: "park",
    age: 23,
    parent: user1 // 객체 데이터 내부에 객체 데이터 입력 가능
}
console.log(user3)

// 참조형 function
// 자바스크립트에서 함수는 하나의 데이터로 취급된다.
// 즉 함수를 호출하는 것과 함수 데이터를 가지고 있는것은 완전히 다르다.
function hello() {
    console.log('hello')
    return 123 // 리턴하는 값이 없으면 로그에서 undefined 나옴.
}
console.log(hello) // 호출되지 않은 함수 데이터
hello(); // 함수 데이터를 호출

// 동등, 일치 연산자
const numnum = 1
const strnum = '1'
// 동등 연산자의 경우 각 데이터의 타입을 바꿔가면서 비교한다.
console.log(numnum == strnum) // true
// 일치 연산자의 경우 각 데이터의 타입을 바꾸면서 비교하지 않는다.
console.log(numnum === strnum) // false