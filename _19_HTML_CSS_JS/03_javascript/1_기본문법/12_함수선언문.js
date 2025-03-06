// 두 수를 더한 값을 리턴하는 함수
function add(x, y) {
    return x + y;
};
// 함수 호출
console.log(add(1, 2));

//  함수 호이스팅: 함수의 선언 위치는 프로그램에 영향을 주지 않는다.
console.log(sub(1, 2)); 
function sub(x, y) {
    return x - y;
};
console.log();

console.log("=========");
// 함수 표현식
const add2 = function(x, y) {
    return x + y;
};
console.log(add2(1, 2));
console.log();

console.log("=========");
// 화살표 함수 // init: ()=>{};
const add3 = (x, y) => {
    return x + y;
};
console.log(add3(1, 2));
