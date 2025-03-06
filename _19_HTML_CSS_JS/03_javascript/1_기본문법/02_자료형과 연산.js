console.log(typeof 1);
console.log(typeof 1.0);

console.log(1 == 1.0);
console.log(1 === 1.0);
console.log("1" == 1); // true
console.log("1" === 1); // false
console.log(1 === 1.0); // true

// 숫자 데이터의 증감 연산
let x = 1;
let result;
result = x++; // 연산 후 증가
console.log(result, x);

let y = 1;
let result2;
result2 = ++y; // 증가 후 연산
console.log(result2, y);