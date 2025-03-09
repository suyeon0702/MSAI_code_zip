const $inputNum = document.getElementById("userInput");
const $btn = document.querySelector("button");

const answerNum = Math.floor(Math.random() * 100) + 1;
function renderUpDown() {
    let resultHTML = "";

    // 입력된 수 가져오기
    const userNum = parseInt($inputNum.value);
    
    // 숫자 비교하기
    console.log("html 랜더링");
    let $p = document.getElementById("result");
    $p.innerHTML = "";
    let $span, $resultText;
    $span = document.createElement("span");
    if (userNum > answerNum) {
        $resultText = document.createTextNode("Down");
        $span.setAttribute("class", "incorrectDown");
    } else if (userNum < answerNum) {
        $resultText = document.createTextNode("Up");
        $span.setAttribute("class", "incorrectUp");
    } else {
        $resultText = document.createTextNode(`정답입니다~ 정답: ${answerNum}`);
        $span.setAttribute("class", "correct");
    };
    $p.appendChild($span);
    $span.appendChild($resultText);
};

$inputNum.addEventListener("keyup", (e) => {
    if(e.key === "Enter") renderUpDown();
});

$btn.addEventListener("click", renderUpDown);
