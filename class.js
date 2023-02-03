// prototype
//// 자바스크립트는 프로토타입 기반 언어이다.

const nums = [1,2,3]
//// 배열에서 사용할 수 있는 메서드 생성
Array.prototype.lee = function () {
  console.log(this)
}
nums.lee()
 
//// 객체 프로토타입 사용
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
const lee = new User("YeongUk", "Lee")
console.log(lee, lee.getFullName())

// ES6 Class
//// Class 는 prototype을 내장하고 있는 좀 더 개선된 문법이다.
class ClassUser {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  //// 프로토타입 메소드.
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  //// getter
  //// 속성 값을 가져을 때 사용한다.
  get fullname() {
    return `${this.firstName} ${this.lastName}`
  }
  //// setter
  //// 속성에 값을 정의할 때 사용한다.
  set fullName(value) {
    console.log(value)
    ;[this.firstName, this.lastName] = value.split(' ')
  }
  //// 정적 메소드 - 클래스에서 바로 호출할 수 있는 메소드
  //// 인스턴스에서는 호출 불가.
  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true
    } else {
      return false
    }
  }
}

const yang = new ClassUser('yang', 'yang')
console.log(yang, yang.getFullName(), yang.fullname)
yang.fullName = "lee lee"
console.log(yang)
console.log(ClassUser.isUser(yang))
console.log(yang instanceof ClassUser)

// 상속
class A {
  constructor() {}
}
class B extends A {
  constructor() {
    super() 
  }
}
class C extends B {
  constructor() {
    super()
  }
}

const c  = new C()

console.log(c.constructor === C)