const $now = document.querySelector("input[name='now']");
const $goal = document.querySelector("input[name='goal']");
const $week = document.querySelector("input[name='week']");
const $btn = document.querySelector("input[type='button']");

function renderWeeklyDeposit() {
    let total;
    let weekcnt = 1;
    let depositHTML = "";

    // 1. 입력된 수 가져오기
    const inputNow = parseInt(document.querySelector("input[name='now']").value);
    const inputGoal = parseInt(document.querySelector("input[name='goal']").value);
    const inputWeek = parseInt(document.querySelector("input[name='week']").value);
    
    // 2. 목표저금액까지 저금 반복 & 출력 반복
    total = inputNow;
    while (total < inputGoal) {
        total += inputWeek;

        // 출력
        depositHTML += `
        <li>
            <div class="weeks">${weekcnt}주차 저금액:</div>
            <div class="now-saving">${total.toLocaleString()}원</div>
        </li>`
        document.querySelector("#simulation").innerHTML = depositHTML;

        weekcnt += 1;

    }
}

// 버튼을 눌렀을 때 이벤트 핸들러 등록
$btn.addEventListener("click", renderWeeklyDeposit);

// 숫자입력창에서 엔터키를 눌렀을 때 이벤트 핸들러 등록
$input.addEventListener("keyup", (e) => {
    if(e.key === "Enter") renderWeeklyDeposit();
    });
console.log($btn);