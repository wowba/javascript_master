// addEventListener()
// 대상에 이벤트를 등록한 뒤, 이벤트 발생시 콜백함수 호출
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

const handler = () => {
  console.log('click')
}

// 이벤트 캡처
// 버블링이 일어나는 도중 캡쳐가 true인 이벤트 먼저 동작한다
parentEl.addEventListener('click', handler, {capture: true})
// once 옵션 추가시 한번만 실행
childEl.addEventListener('click', handler, {once: true})

// 버블링 방지
//// 버블링 : 하위 요소의 이벤트가 상위 요소의 이벤트에서 발생하는것
childEl.addEventListener('click', event => {
  event.stopPropagation()
})

// removeEventListener()
// 대상에 등록했던 이벤트 제거
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있음.
// parentEl.removeEventListener('click', handler)
// childEl.removeEventListener('click', handler)

// 이벤트 객체
// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있음.
parentEl.addEventListener('click', event => {
  console.log(event.target, event.currentTarget)
  console.log(event) // 사용할 수 있는 요소 확인 가능
})

// 기본 동작 방지
//// 마우스 스크롤 동작 방지
// parentEl.addEventListener('wheel', event => {
//   event.preventDefault()
// })
//// a 태그 페이지 이동 방지
const archorEl = document.querySelector('a')
archorEl.addEventListener('click', event => {
  event.preventDefault()
}) 

// 기본 동작과 핸들러 실행 분리
// 성능과 상관없이 화면을 더욱 부드럽게 만들 수 있음.
parentEl.addEventListener('wheel', () => {
  for (let i = 0; i < 1000; i += 1) {
    console.log(i)
  }
}, { passive: true })

// CJK 문자
// 중국어 일본어 한국어는 브라우저에서 처리하기 위해 한단계를 더 거친다.
// event.isComposing 값이 true 인 경우 내용이 처리되고 있음.
// 즉 키보드 이벤트를 다룰때 꼭 event.isComposing 을 다루는 로직이 필요하다.

// 커스텀 이벤트와 디스패치
parentEl.addEventListener('click' , event => {
  // 강제로 이벤트 실행
  parentEl.dispatchEvent(new Event('keydown'))
  parentEl.dispatchEvent(new CustomEvent('hello-world', {detail: 123}))
})
parentEl.addEventListener('keydown', event => {
  console.log("parent keydown")
  console.log(event.detail)
})
// 커스텀 이벤트 생성
parentEl.addEventListener('hello-world', event => {
  console.log("custom event")
})