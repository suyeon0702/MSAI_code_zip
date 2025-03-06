var v1; // 변수 선언
v1 = 1; // 값의 할당
console.log('v1:', v1);

console.log("v2:", v2);
console.log("v3:", v3);
var v2 = 2;
var v3 = 3;

// let
let l1;
console.log("l1:", l1);
// let은 선언하기 전에 참조할 수 없다.
let l2;
console.log("l2:", l2);
l2 = 3;
console.log("l2:", l2); // 선언과 할당을 분리할 수 있다.
l2 = 4;
console.log("l2:", l2); // let 변수는 값을 재할당할 수 있다.

// const

// const 변수는 선언과 동시에 할당을 해줘야 한다.
// const c2; // error

// const 또한 선언하기 전에 참조할 수 없다.
// console.log(c1); //reference error
const c1 = 1; 

// c1 = 2; // const는 값을 재할당 할 수 없다. // type error
// const c1 = 2; // 값을 재선언 할 수도 없다. // syntax error

/* 1)
// 변수를 선언하기 전에 참조하면 undefined & var 변수는 재선언이 가능
console.log("v2:", v2);
console.log("v3:", v3);
var v2 = 2;
var v3 = 3;

*변수 호이스팅(variable hoisting):
-> 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 것.
자바스크립트는 코드를 실행하기 전에 변수 선언 부분을 먼저 처리한다.
즉, 실행 전 v1, v2는 undefined로 초기화 된 상태가 된다.

// 그러나, let은 선언하기 전에 참조할 수 없다. 선언 전 참조할 시 에러가 난다.
console.log("l2:", l2);
let l2 = 2;
console.log("l2:", l2);
=> ERROR!
*/

/* 2) var 변수는 웬만하면 사용하지 않는 걸 권장하고 있다. */