// 요일 이름 변환하기 (0: Sun ~ 6: Sat)
let week = 0;
let weekName;
switch (week) {
    case 0:
        weekName = "Sun";
        break; // break 해야 case문을 빠져나올 수 있다. (아니면 다음 case들도 실행됨)
    case 1:
        weekName = "Mon";
        break;
    case 2:
        weekName = "Tue";
        break;
    case 3:
        weekName = "Wed";
        break;
    case 4:
        weekName = "Thu";
        break;
    case 5:
        weekName = "Fri";
        break;
    case 6:
        weekName = "Sat";
        break;
    default: // (생략가능)
        weekName = "Invalid Week";
}

console.log(weekName);

/**
 * if 문의 조건식은 Boolean 값으로 평가되어야 하지만
 * switch문의 표현식은 문자열이나 숫자인 경우가 많다.
 */
