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

// 특수 데이터 타입 비교
console.log([].constructor === Array)
console.log({}.constructor === Object)
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

// 심볼(symbol)
//// 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용 가능
//// 심볼 데이터를 가진 변수를 사용하지 않으면 확인할 수 없다.

// Symbol(`설명`)
//// 설명은 단순 디버깅을 위한 용도이며 심볼 값과는 관계 없음
const sKey = Symbol('hello')
const sUser = {
    key: `일반 정보`,
    sKey: `비밀 정보`
}
console.log(sUser.key)
console.log(sUser.sKey)
console.log(sKey)

// 빅인트 BigInt
//// 빅인트는 길이 제한이 없는 정수. 숫자 데이터를 안정적으로 표현 가능.
//// 정수 뒤에 n을 붙이거나 BigInt()를 호출해 생성

// 불변성과 가변성
//// 불변성 : 생성된 데이터가 메모리에서 변경되지 않는것
//// 가변성 : 생성된 데이터가 메모리에서 변경될 수 있음을 의미
//// 자바스크립트의 원시형 데이터는 불변성, 참조형은 가변성을 지님.

// 얕은 복사와 깊은 복사
//// 참조형은 가변성으로 인해 데이터 복사시 주의가 필요
//// 얕은 복사 - 참조형의 1차원 데이터만 복사
//// 깊은 복사 - 참조형의 모든 차원 데이터를 복사
//// 깊은 복사를 하려면 lodash 라이브러리의 cloneDeep 메서드 사용