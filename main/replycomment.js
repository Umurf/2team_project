const commentBtn = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment-list");
const total = document.querySelector("h4 > span");
const list = [];

function Comment(content) {
  this.userid = "바보바보";
  this.content = content;
  this.date = "2022-11-15";
}

function createRow(userid, content, date) {
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute("class", "comment-row");
  li1.setAttribute("class", "comment-id");
  li2.setAttribute("class", "comment-content");
  li3.setAttribute("class", "comment-date");

  li1.innerHTML = userid;
  li2.innerHTML = content;
  li3.innerHTML = date;

  return ul;
}

function drawing() {
  commentList.innerHTML = "";
  for (let i = list.length - 1; i >= 0; i--) {
    const row = createRow(list[i].userid, list[i].content, list[i].date);
    commentList.append(row);
  }
}

function totalRecord() {
  total.innerHTML = `(${list.length})`;
}

function commentBtnHandler(e) {
  e.preventDefault();
  const input = e.target.content;
  if (input.value === "") {
    alert("내용을 넣고 등록 버튼을 눌러주세요.");
    return;
  }
  const commentObj = new Comment(input.value);
  list.push(commentObj);
  totalRecord();

  drawing();
  e.target.reset();
}

totalRecord();
commentBtn.addEventListener("submit", commentBtnHandler);
/*
Event.preventDefault()
이벤트 흐름의 어떤 단계에서도 preventDefault()를 호출하면 기본 동작을 취소할 수 있다.
예를 들면 a 태그나 submit 태그는 누르면 href를 통해 이동하거나 창이 새로고침 되어 실행이 된다.
preventDefault()를 이용해 이 동작을 막아줄 수 있다.

submit 버튼을 누르면 input을 통해 입력받은 값들을 
key=value 형태로 서버에 전송해 준다고 한다. 
전송되고 나면 창이 새로고침 되는데 이렇게 되면 input에 입력한 값을 javascript에서 사용하기 어렵다.
preventDefault()를 이용해서 submit 버튼의 기본 동작을 막아주자! 그리고 이벤트도 등록해 주자!

추가로 버튼을 클릭해 input에 값을 입력하면 어디에 값이 들어가는지도 찾아보자!

input에 값을 넣고 submit을 누르면 이벤트 객체가 생성되는데 
이 객체안에객체 안에 무수한 객체들이 존재한다. 
내가 원하는 input에 입력한 값을 찾아보았는데 
위와 같은 객체 안에 value값으로 값이 존재하고 있었다. 
이 부분은 조금 더 공부를 해봐야 알 것 같다. 
나는 일단 마지막에 적은 e.target.content의 value를 사용할 예정이다.
*/
