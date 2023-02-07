// DOM (Document Object Model)
//// DOM이란 HTML문서를 객체로 표현한 것으로 JS에서 HTML을 제어할 수 있게 해줌.

// Node vs Element
//// Node : HTML 요소, 텍스트, 주석 등 모든것을 의미
//// Element : HTML 요소를 의미

const parent = document.querySelector('.parent')
// 부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes)
// 부모 요소의 모든 자식 요소 확인
console.log(parent.children)

// id 값으로 가장 먼저 발견된 요소 반환
const el1 = document.getElementById('child2')
console.log(el1)

// CSS 선택자로 검색하여 가장 먼저 찾은 요소를 반환
const el2 = document.querySelector('.child:first-child')
console.log(el2)

// CSS 선택자로 검색한 모든 요소를 NodeList로 반환
// NodeList 는 forEach 사용가능
const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
console.log(Array.from(nodeList)) // 유사 배열을 배열로 타입 변환

// 노드의 부모 요소 반환
const el3 = document.querySelector('.child')
console.log(el3.parentElement)

// 자신을 포함한 조상 요소중 CSS 선택자와 일치하는 가장 가까운 요소 반환.
const el4 = document.querySelector('.child')
console.log(el4.closest('.parent'))

// 노드의 이전 형제 혹은 다음 형제 노드 반환
const el5 = document.querySelector('.child')
console.log(el5.previousSibling)
console.log(el5.nextSibling)

// 요소의 이전 형제 혹은 다음 형제 요소 반환
const el6 = document.querySelector('.child')
console.log(el6.previousElementSibling)
console.log(el6.nextElementSibling)

// 요소의 모든 자식 요소 반환
const el7 = document.querySelector('.parent')
console.log(el7.children)
console.log(Array.from(el7.children)) // 유사 배열을 배열로 변환

// 요소의 첫 번째 혹은 마지막 요소 반환
const el8 = document.querySelector('.parent')
console.log(el8.firstElementChild)
console.log(el8.lastElementChild)

// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환
const divEl = document.createElement('div')
console.log(divEl)

// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입
const parentEl = document.querySelector('.parent')
divEl.textContent = "hello"
parentEl.prepend(divEl)
parentEl.append("hello")

// 요소 제거
const removeEl = document.querySelector('.child')
removeEl.remove()

// 대상 요소의 지정한 위치에 새로운 요소 삽입
// element.insertAdjacentElement(위치, 새로운 요소)

// 부모 노드의 자식인 참조 노드의 이전 형제로 노드 삽입
// parentNode.insertBefore(Node, childNode)

// 주어진 노드가 노드의 자신을 포함한 후손인지 확인
// node.contains(inputNode)
console.log(el5.contains(el6))

// 노드의 모든 텍스트를 얻거나 변경
// console.log(node.textContent), node.textContent = "string"

// 요소의 모든 HTML내용을 하나의 문자로 반환 혹은 지정
// console.log(element.innerHTML), element.innerHTML = <div>hello</div>

// 요소의 각 data 속성 값을 얻거나 지정함.
parentEl.dataset.hello = "hello"

// 요소의 태그 이름 반환
console.log(parentEl.tagName)

// 요소의 id 속성값을 얻거나 지정
console.log(parentEl.id)

// 요소의 class 속성 값을 얻거나 지정
console.log(parentEl.className)

// 요소의 class 속성 값을 제어
//// classList.add() : 새로운 값 추가
//// classList.remove() : 기존 값 제거
//// classList.toggle() : 값을 토글
//// classList.contains() : 값을 확인

// 요소의 style 속성 값을 얻거나 지정.
//// 인라인 스타일로 적용되기 때문에 최대한 사용하지 않는것이 좋음.
console.log(parentEl.style)

// 요소에 적용된 스타일 객체를 반환
console.log(window.getComputedStyle(parentEl))

// 요소에 특정 속성 값을 얻거나 지정
parentEl.setAttribute('title', 'hello world')
console.log(parentEl.getAttribute('title'))

// 요소의 특정 속성을 확인하거나 제거
console.log(parentEl.hasAttribute('title'))
parentEl.removeAttribute('title')

// 현재 화면의 크기 반환
// window.innerWidth, window.innerHeight

// 페이지의 좌상단 기준 현재 화면의 수평 혹은 수직 스크롤 위치
// window.scrollX, window.scrollY

// 지정된 좌표로 대상을 스크롤
// window.scrollTo(x, y)
// window.scrollTo(top: y, left: x, behavior: 'smooth')

// 테두리 선(border)을 제외한 요소의 크기 반환
// element.clientWidth, element.clientHeight 

// 테두리 선을 포함한 요소의 크기 반환
// element.offsetWidth, element.offsetHeight

// 스크롤 요소의 좌상단 기준 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치 반환
// element.scrollLeft, element.scrollTop

// 페이지의 좌상단 기준 요소의 위치 반환 
// element.offsetLeft, element.offsetTop

// 테두리 선(border) 을 포함한 요소의 크기와 화면에서의 상대 위치 정보 반환
// element.getBoundingClientRect()