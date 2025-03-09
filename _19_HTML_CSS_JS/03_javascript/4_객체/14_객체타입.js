let user = {
    userName: "홍길동",
    userAge: 20,
    nextAge: function () { // 메서드: 프로퍼티 값이 함수일 경우 (JS에서 함수는 일급 객체이므로 프로퍼티 값이 될 수 있다.)
        this.userAge++;
        return this.userAge;
    },
};

console.log(user);
console.log(user["userName"]);
console.log(user.userName);
user.userName = "김철수";
console.log(user.userName);

// 메소드 호출하여 속성 변경
console.log(user.nextAge());
console.log(user);

// 객체의 프로퍼티 추가/수정
user.height = 170.5; // 존재하지 않는 프로퍼티 키에 값을 할당하면 프로퍼티 생성
console.log(user);