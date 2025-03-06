// 짝수인지 홀수인지 판별하는 함수
let a = 1;
let b = 2;
console.log(`a=${a}, b=${b}`);

// 1. 함수 선언문 방식
function isEven(x) {
    if (x%2 === 0) return "짝수";
    else return "홀수";
};
console.log(`1. 함수 선언문: a는 ${isEven(a)}, b는 ${isEven(b)}.`);

// 2. 함수 표현식
const isEven2 = function(x) {
    // if (x%2 === 0) return "짝수";
    // else return "홀수";
    return x % 2 ? "홀수" : "짝수";
};
console.log(`2. 함수 표현식: a는 ${isEven2(a)}, b는 ${isEven2(b)}.`);

// 3. 화살표함수
const isEven3 = (x)=>{
    if (x%2 === 0) return "짝수";
    else return "홀수";
};
console.log(`3. 화살표 함수: a는 ${isEven3(a)}, b는 ${isEven3(b)}.`);

