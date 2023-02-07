// 동기와 비동기
// 동기 - 순차적으로 코드 실행
// 비동기 - 순차적으로 코드 실행 x

// 콜백 지옥
//// 실행 순서는 보장할 수 있지만, 비동기 패턴에서 콜백을 계속 사용하려면 코드가 난잡해진다.
const a = callback => {
  setTimeout(() => {
    console.log("a")
    callback()
  }, 1000)
}
const b = callback => {
  setTimeout(() => {
    console.log("b")
    callback()
  }, 1000)
}
const c = () => {
  setTimeout(() => {
    console.log("c")
  }, 1000)
}

// a(b()) 에러 발생
// a(() => {
//   b(() => {
//     c()
//   })
// })

// Promise
//// 콜백지옥 패턴에 비해서 훨씬 더 간단하게 코드를 작성할 수 있다.
const d = () => {
  return new Promise(resolve => { // resolve는 함수의 인자로 들어오는 함수 데이터를 의미한다.
    setTimeout(() => {
      console.log("d")
      resolve()
    }, 1000)  
  })
}
const e = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("e")
      resolve()
    }, 1000)  
  })
}
const f = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("f")
      resolve()
    }, 1000)  
  })
}

// 기존과 동일한 패턴
// d().then(() => {
//   e().then(() => {
//     f()
//   })
// })

// return 키워드로 resolve 에 들어갈 콜백 함수를 작성한다면 체이닝이 가능하다.
// 화살표 함수 문법까지 함께 이용한다면 훨씬 가독성이 좋은 코드를 작성할 수 있다. (return이 첫 줄에 올 경우 생략 가능)
d()
  .then(() => e())
  .then(() => f())
// resolve에 함수 데이터를 입력하는 방법도 동일한 결과를 가져온다.
// d()
// .then(e)
// .then(f)

// Async, Await
//// Promise 인스턴스를 반환하는 함수 앞에만 await을 사용해야 한다.
const wrap = async () => {
  await d() // await 키워드는 뒤의 비동기 함수의 동작 완료를 기다린다.
  await e()
  await f()
}
wrap()

// resolve, reject, 에러핸들링
//// resolve reject 중 둘 중 하나가 먼저 동작한 경우 나머지 하나는 동작하지 않는다.
const delayAdd = index => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없습니다.`) 
        return
      }
      console.log(index)
      resolve(index + 1)
    }, 1000)
  })
}

delayAdd(9)
  .then(res => console.log(res)) // resolve에 들어감
  .catch(err => console.error(err)) // reject에 들어감
  .finally(() => {console.log("done")})

// async await에서는 try catch 구문을 이용하여 에러핸들링이 가능하다.
//// await 키워드 뒤의 함수는 promise 인스턴스를 반환하기에 에러발생시 바로 catch 구문으로 넘어간다.
const delayAddWrap = async () => {
  try {
    const res = await delayAdd(12)
    console.log(res)
  } catch (err) {
    console.error(err)
  } finally {
    console.log("done")
  }
}
delayAddWrap()