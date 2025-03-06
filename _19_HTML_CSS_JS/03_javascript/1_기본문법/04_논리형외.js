// boolean
console.log(typeof true);
console.log(typeof false);

// 비교연산 ==, !=, ====, !==
// ==, != 연산자는 타입을 변환 후 비교
console.log("== 비교 >>>>>>>>");
console.log(1 == "1"); // "1"을 숫자로 변환 후 비교
console.log(1 == "1.0"); // "1.0"을 숫자로 변환 후 비교
console.log(1 == true); // true를 숫자로 변환 후 비교
console.log("1" == true); // 1과 true를 숫자로 변환 후 비교
console.log(null == undefined); // null과 undefined는 동등하게 취급
console.log([1] == "1"); // [1]을 문자열로 변환 후 비교
// ==, != 비교 연산자는 예측하기 어려운 결과를 만들어내므로 사용하지 않는 편이 좋다.
// ===, !== 연산자를 사용하는 것을 권장한다.
console.log()

//  ===, !== 연산자는 타입 변환하지 않고 그대로 비교
console.log("=== 비교 >>>>>>>>");
console.log(1 === "1"); 
console.log(1 === "1.0"); 
console.log(1 === true); 
console.log("1" === true); 
console.log(null === undefined); 
// console.log([1] === "1"); // JavaScript는 값이 아닌 참조로 개체를 비교하므로 이 조건은 항상 'false'을(를) 반환
console.log()

/*
*자바스크립트의 암묵적 형변환:
-> 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 타입이 변환되는 것
코드의 가독성 측면에서 좋을 수는 있으나, 다만 코드의 결과를 예측할 수 있어야 한다.
*/

// undefined
console.log(typeof undefined);
console.log(typeof null);