const $input = document.querySelector("input[type='number']");
const $btn = document.querySelector("input[type='button']");

function renderSeat() {
    const maxSeat = 100; // 최대 수용 가능한 인원
    let message = ""; // 경고메세지
    let seatHTML = ""; // 자리 HTML

    // 기존 선택된 좌석 정보를 저장
    const selectedSeats = new Set(
        [...document.querySelectorAll(".seat.selected")].map(seat => seat.textContent)
    );
    // 1. 입력된 수 가져오기
    const inputNumber = document.querySelector("input[type='number']").value;
    console.log(inputNumber);
    // 2. 입력된 수가 100보다 크면 경고메세지
    if(maxSeat < inputNumber) {
        // console.log("경고메세지");
        message = `최대 수용 가능한 인원은 ${maxSeat}명입니다.`;
        document.querySelector(".message").textContent = message;
    } else { // 3. 아니면 자리배치도 그리기
        document.querySelector(".message").textContent = message;
        // console.log("자리배치도 그리기");
        // 기존 선택 여부를 유지하며 자리 배치
        for(let i=1; i<=inputNumber; i++){
            const isSelected = selectedSeats.has(String(i)) ? "selected" : "";
            seatHTML += `<div class="seat ${isSelected}">${i}</div>`;
        }
        document.querySelector("#seat-container").innerHTML = seatHTML;
    }
    
}

// 버튼을 눌렀을 때 이벤트 핸들러 등록
$btn.addEventListener("click", renderSeat);

// 숫자입력창에서 엔터키를 눌렀을 때 이벤트 핸들러 등록
$input.addEventListener("keyup", (e) => {
    if(e.key === "Enter") renderSeat();
    });
console.log($btn);

// 부모 요소에 이벤트 위임 (새로운 좌석에도 이벤트 적용 가능)
document.querySelector("#seat-container").addEventListener("click", function(e) {
    if (e.target.classList.contains("seat")) { // 클릭한 대상이 "seat" 클래스인지 확인
        if (e.target.classList.contains("selected")) {
            alert(`${e.target.textContent}은 이미 선택된 좌석입니다.`);
        } else {
            e.target.classList.add("selected");
        }
    }
});
