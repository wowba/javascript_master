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
console.clear()

// Cookie
// 도메인 단위로 저장, 사이트당 최대 20개 및 4KB 로 제한
// 영구 저장 불가

// domain : 유효 도메인 설정
// path : 유효 경로 설정
// expires : 만료 날짜(UTC Date) 설정
// max-age : 만료 타이머 설정

document.cookie = `a=1; expires=${new Date(2023,11,15)}`
console.log(document.cookie)

// Storage
// 도메인 단위로 저장
// 5MB 저장, 문자 데이터 저장.
// 세션 혹은 영구 저장 가능

// SessionStorage : 브라우저 세션이 유지되는 동안에만 데이터 저장
// localStorage : 따로 제거하지 않으면 영구적으로 데이터 저장

// .getItem() : 데이터 조회
// .setItem() : 데이터 추가
// .removeItem() : 데이터 제거
// .clear() : 스토리지 초기화

localStorage.setItem(`a`, `hello world`)
console.log(localStorage.getItem(`a`))

// Location
// 현제 페이지 정보를 반환하거나 제어함.

// .href: 전체 URL 주소
// .protocol : 프로토콜
// .hostname : 도메인 이름
// .pathname : 도메인 이후 경로
// .host : 포트 번호를 포함한 도메인 이름
// .port : 포트 번호
// .hash : 해시 정보

// .assign(주소) : 해당 주소로 페이지 이동
// .replace(주소) : 해당 주소로 페이지 이동, 현제 페이지 히스토리 제거
// .reload(강력) : 페이지 새로고침, true 인수는 강력 새로고침.

console.log(location)

// History
// 브라우저 히스토리 정보를 반환하거나 제어

// .length : 등록된 히스토리 개수
// .scrollRestoration : 히스토리 탐색시 스크롤 위치 복원 여부 롹인 및 지정
// .state : 현재 히스토리에 등록된 데이터

// .back() : 뒤로 가기
// .forward() : 앞으로 가기
// .go(위치) : 현재 페이지 기준 특정 히스토리 위치로 이동

// .pushState(상태, 제목, 주소) : 히스토리에 상태 및 주소를 추가
// .replaceState(상태, 제목, 주소) : 현재 히스토리의 상태 및 주소를 교체
// > 모든 브라우저는 제목 옵션을 무시함.

console.log(history)