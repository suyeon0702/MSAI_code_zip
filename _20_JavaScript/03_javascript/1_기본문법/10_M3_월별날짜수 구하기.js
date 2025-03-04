// 월별 날짜 수 구하기
// 1, 3, 5, 7, 8, 10, 12 --> 31일
// 4, 6, 9, 11 --> 30일
// 2월(윤년) --> 29일
// 2월(윤년 아님) --> 28일
// 윤년 조건
//    1. 연도가 4로 나누어지는 해는 윤년이다.
//    2. 연도가 4로 나누어지더라도 연도가 100으로 나누어 떨어지는 해(2000, 2100, 2200, ...)는 평년이다.
//    3. 연도가 400으로 나누어 떨어지는 해(2000, 2400, 2800, ...)은 윤년이다.


"use strict"; // use strict 모드에서는 변수를 선언하지 않고 사용하면 오류가 발생한다. + 그외 더 엄격한 코드 규칙 

let year = 2024;
let month = 2;
let days, cond1, cond2, cond3;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        cond1 = year % 4 === 0;
        cond2 = year % 100 === 0;
        cond3 = year % 400 === 0;
        days = cond1 && !cond2 || cond3 ? 29 : 28;
        break;
    default:
        days = `${month} is Invalid Month`;
}

console.log(`
    year : ${year}
    month : ${month}
    days : ${days}
    `);