// 요소 취득
const $inputTodo = document.getElementById("input-todo");
const $btnAdd = document.getElementById("btn-add");
const $btnDelete = document.querySelector(".delete_btn");

let todoArray = [];

function addTodo() {
    let todoHTML = "";
    alert("할 일 추가");

    // 1. 입력된 할 일 가져오기
    // +) 입력된 값이 없을 때는 함수를 빠져나온다. // or 비어있는 칸이 생겨버림
    const todoText = $inputTodo.value;
    if (todoText.trim() === "") return; // trim(): 문자열 좌우에서 공백을 제거
    console.log(todoText);

    // 2. 할 일 배열에 데이터를 추가한다.
    todoArray.push({
        id: Date.now(), // 날짜로 id 정하기(일단...)
        todoText: todoText,
        isComplete: false,
    });
    console.log(todoArray);

    // 3. html에 랜더링
    renderTodos();

    // 4. 웹스토리지에 배열을 업데이트한다.
    saveWebstorage();

    // 5. 입력창의 값을 지운다.
    $inputTodo.value = ""; // (내부 property는 변형 가능)
};

function renderTodos() {
    console.log("html 랜더링");
    let $ol = document.getElementById("todo-list");
    $ol.innerHTML = "";
    let $li, $input, $span, $button, $spanText, $buttonText;
    for (idx in todoArray) {
        // 요소노드
        $li = document.createElement("li");
        $input = document.createElement("input");
        $span = document.createElement("span");
        $button = document.createElement("button");

        // 요소 속성
        $li.setAttribute("class", "todo-item");
        $input.setAttribute("type", "checkbox");
        $button.setAttribute("class", "delete-btn");
        $button.setAttribute("onclick", `deleteTodo(${todoArray[idx].id})`) // 삭제버튼에 이벤트 추가하기
        $input.setAttribute("onchange", `toggleComplete(${todoArray[idx].id})`); // 체크박스 완료시 이벤트

        // 완료 여부를 렌더링에 적용
        if (todoArray[idx].isComplete === true) {
            $input.setAttribute("checked", "checked"); //?
            $span.setAttribute("class", "completed");
        };

        // 텍스트노드
        $spanText = document.createTextNode(`${todoArray[idx].todoText}`);
        $buttonText = document.createTextNode("삭제");

        // 노드 구성
        $ol.appendChild($li);
        $li.appendChild($input);
        $li.appendChild($span);
        $li.appendChild($button);
        $span.appendChild($spanText);
        $button.appendChild($buttonText);
    }
};

function saveWebstorage() {
    localStorage.setItem("todos", JSON.stringify(todoArray));
};

// 페이지가 로드될 때 웹 스토리지에서 데이터를 불러와 렌더링
function loadTodos() {
    todoArray = localStorage.getItem("todos");
    todoArray = JSON.parse(todoArray);
    console.log(todoArray);
    renderTodos();
};
loadTodos();

// 할 일 삭제 함수
function deleteTodo(id) {
    // 할 일 목록 배열 업데이트
    todoArray = todoArray.filter((todo) => todo.id !== id);
    // 렌더링
    renderTodos();
    // 웹스토리지 업데이트
    saveWebstorage();
};

// 완료여부 업데이트
function toggleComplete(todoId) {
    for (let idx in todoArray) {
        if (todoArray[idx].id === todoId) {
            todoArray[idx].isComplete = !todoArray[idx].isComplete;
            break;
        }
    }
    renderTodos();
    saveWebstorage();
};

// 완료여부 토글
function toggleTodo(id) {
    // 배열 업데이트
    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].id === id) {
            todoArray[i].isComplete = !todoArray[i].isComplete;
            break;
        };
        saveWebstorage();
        renderTodos();
    };
};

$inputTodo.addEventListener("keyup", (e) => {
    if(e.key === "Enter") addTodo();
});

$btnAdd.addEventListener("click", addTodo);