// string
console.log(typeof "hello");
console.log(typeof `hello`); // `` 벡틱

// 줄바꿈 ("\n")
console.log();
console.log("Hello\nWorld!");

// 벡틱(`)으로 감싸면 여러 줄을 쉽게 표현 가능
d = `Hello
World~`;
console.log(d);

// 문자열 연결
a = "Hello"; // var, let, const같은 키워드 없이 선언된 변수는 암묵적으로 전역 변수로 선언됨.
b = " World!"; // 그러나, 키워드 써주는 것이 좋다. (브라우저에서 속성처리되기도 하는 일이...)
console.log(a + b);

// 벡틱 내에서 ${}안에 표현식 삽입
console.log(`${a}${b}`); // 전역변수로는 안 되는 것 같다. (user strict 모드일 수도 있다)
console.log(`1+1=${1+1}`);

let c = "Halo";
let e = "Welt";
console.log(`${c} ${e}`);

let userName = "김철수";
let age = 21;
console.log(`${userName}님, 내년에는 ${age+1}살이 되시겠네요.`);

const message = "Hello, World!";
console.log(message.length);
console.log(message[0]); // H
console.log(message[-1]); // undefined (마이너스 인덱스 없음)
console.log(message[100]); // undefined (인덱스의 범위를 벗어남)
console.log()

// 특정 문자의 인덱스
console.log(message.indexOf("W"));
console.log(message.indexOf("a")); // -1 없는 문자
console.log()

// 특정 문자 포함 여부
console.log(message.includes("Hello"));
console.log()

// 문자열 슬라이스
console.log(message.substring(0, 5));
console.log(message.substring(5, 0)); // substring은 거꾸로 써도 동작한다
console.log(message.substring(7));
console.log(message.slice(0, 5));
console.log(message.slice(5, 0)); // slice는 거꾸로 안 됨 // 공백이 나온다 
console.log(message.slice(7));
console.log(message.slice(10));
/* 
slice는 음수 인덱싱도 지원해서 아래처럼 사용가능합니다
str.slice(-6, -1) 
*/

console.log()

// 대소문자 변환
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log()

// 문자 치환하기
console.log(message.replace("World!", "Python!"));
console.log()

// 문자 분리하기
console.log(message.split(","));
console.log()

// 특정 문자로 시작하거나 끝나는지 확인
console.log(message.startsWith("He"));
console.log(message.endsWith("?"));
console.log()

// 앞 뒤 공백 없애기
const message2 = "     hello world     ";
console.log(message2.trim());
console.log()

// 문자 반복하기
const message3 = "ha";
console.log(message3.repeat(3));
console.log()