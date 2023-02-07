// console
// .log() .warn() .error() .dir()

// log 일반 메세지
// warn 경고 메세지
// error 에러 메세지
// dir 속성을 볼 수 있는 객체 출력
console.log(document.body)
console.warn(document.body)
console.error(document.body)
console.dir(document.body)

// .count() .countReset()
// 콘솔에 메소드 호출의 누적 횟수 출력 및 초기화
console.count("a")
console.count("a")
console.countReset("a")
console.count("a")

// .time() .timeEnd()
// 콘솔에 타이먹 ㅏ시작해서 종료되기까지 시간 출력
console.time('반복문')
for (let i = 0; i < 10000; i ++) {
  console.log(i)
}
console.timeEnd('반복문')

// .trace()
// 메소드 호출 스택을 추적해 출력
const a = () => {
  const b = () => {
    const c = () => {
      console.log("log")
      console.trace('Trace')
    }
    c()
  }
  b()
}
a();

// .clear()
// 콘솔창 클리어
// console.clear()