// 형 변환
let x;
// String()
x = String(1);
console.log(x, typeof x);
// toString()
y = 1;
console.log(typeof y.toString());
console.log(typeof (1).toString());
console.log(typeof (1.5).toString());
console.log()

// Number()
x = Number("1.5");
console.log(x, typeof x);
console.log(parseInt(x), typeof parseInt(x));
console.log(parseFloat(x), typeof parseFloat(x));
console.log()

// Boolean()
x = Boolean(1);
console.log(x, typeof x);

// false로 반환되는 값
// cf) javascript falsy values
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log()

// 암묵적 형변환
console.log("10" + 5);
console.log(typeof ("10"+5));
console.log("---------");
// + 연산자를 문자열과 함께 사용할 때 -> 문자열 타입으로 변환
console.log("10" + 5); // (string) 105
console.log("10" + undefined); // 10undefined
console.log("10" + null); // 10null
console.log("10" + true); // 10true
console.log("---------");
// + 이외의 산술연산자를 문자열과 함께 사용할 때 -> 숫자 타입으로 변환
console.log("10" * 5); // 50
console.log("10" * "5"); // 50
console.log("10" * undefined); // undefined는 NaN으로 변환
console.log("10" * "a"); // NaN
console.log("a" * "a"); // NaN
console.log("---------");
// NaN (Not a Number. 숫자로 변환할 수 없는 값을 처리할 때 발생하는 특별한 값)
console.log("10" * null); // 0 (null은 0으로 변환)
console.log("10" * true); // 10 (true는 1로 변환)

/*
*자바스크립트의 암묵적 형변환:
-> 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 타입이 변환되는 것
코드의 가독성 측면에서 좋을 수는 있으나, 다만 코드의 결과를 예측할 수 있어야 한다.
*/