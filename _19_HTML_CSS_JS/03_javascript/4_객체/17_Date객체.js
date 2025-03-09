// 현재 날짜와 시간 생성
const now = new Date();
console.log(now); // node 환경: UTC기준, 브라우저 환경: 로컬시간 기준
console.log(typeof now); // object

// 로컬날짜, 시간 문자열 형태로 변환
console.log("로컬시간 기준:", now.toString());
console.log("로컬시간 기준 날짜만:", now.toDateString());
console.log("로컬시간 기준 시간만:", now.toTimeString());
console.log(typeof now.toString); // string

// 특정 날짜와 시간 생성
const christMas = new Date("2025-12-25");
console.log(christMas);

const lastDay = new Date(2025, 11, 31, 23, 59, 59); // 월: 0~11
console.log(lastDay);

// 날짜에서 정보 가져오기
console.log(lastDay.getFullYear());
console.log(lastDay.getMonth()); // (0:1월, 11:12월)
console.log(lastDay.getDate());
console.log(lastDay.getDay()); // 요일(0:일요일)
console.log(lastDay.getHours());
console.log(lastDay.getMinutes());
console.log(lastDay.getSeconds());
console.log(lastDay.getMilliseconds());