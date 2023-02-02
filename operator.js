// 챕터 변경 - 연산자와 구문 

// 비교 연산
console.log(true && false)
console.log(false || true)
// &&는 바로 true 값이 나올때 리턴,
// ||는 가장 마지막 값을 리턴한다.

// Nullish 병합 연산. null 혹은 undefined를 제외한 가장 마지막 값 리턴.
console.log(null ?? undefined ?? "not null")

// 삼항연산자. 앞의 조건에 따라 뒤의 갑이 출력
// 조건 ? 참 : 거짓
console.log(1<2 ? true : false)

// 전개연산자 (Spread Operator)
// 배열 전개
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
console.log(array1)
console.log(...array1) 
const array3 = array1.concat(array2)
const array4 = [...array1, ...array2]
console.log(array3, array4)
// 객체 전개
const object1 = {x: 1, y: 2}
const object2 = {y: 3, z: 4}
const object3 = Object.assign({},object1,object2)
const object4 = {...object1, ...object2}
console.log(object3, object4)

// 구조분해할당
// 배열 혹은 객체 데이터의 구조를 분해하여 변수에 할당하는 방법.
// 배열 구조분해할당
const arr = [1, 2, 3]
const [el1, el2, el3] = arr
console.log(el1, el2, el3)
const [el4, ...rest] = arr
console.log(el4, rest)
// 객체 구조분해할당
const object = {el5:1, el6:2, el7:3}
const {el5, el6} = object
console.log(el5, el6)
const {el7, ...els} = object
console.log(els)

// 선택적 체이닝
const unknown = undefined
// console.log(unknown.name) // error
console.log(unknown?.name) //undefined

// switch 문
function setPrice(fruit) {
    switch(fruit) {
        case "apple":
            return 1000
        case "banana":
            return 2000
        default:
            return 0
    }
}
console.log(setPrice("banana"))

// for of 반복문
const animals = ["lion", "tiger", "bird"]
for (const animal of animals) {
    console.log(animal)
}
// for in 반복문
const lee = {
    name: "lee",
    age: 12,
    sex: "male"
}
for (const key in lee) {
    console.log(key)
    console.log(lee[key])
}

// while 반복문
let i = 0;
while (i < 5) {
    console.log(i)
    i++
}

// do while 반복문 
// 조건이 거짓이여도 최초 1회 실행한다.
let n = 0
do {
    console.log(n)
    n += 1
} while (n < 4)