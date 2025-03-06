/*
for (제어변수 선언/할당 ; 조건식 ; 증감식) {
    조건이 참인 동안 반복 실행할 문
}
*/

// 1부터 5까지 출력하기
for (let i=1; i<=5; i++) {
    console.log(i);
}
console.log()

// 5부터 1까지 출력하기
for (let i=5; i>=1; i--) {
    console.log(i);
}

console.log();

// n1부터 n2까지 더하기
let n1 = 1;
let n2 = 100;
let total = 0;
for (let i=n1; i<=n2; i++) {
    total += i;
}
console.log(`${n1}부터 ${n2}까지 더한 결과는 ${total}`);

console.log();

console.log("while>>>>>>>>>>>>>>>>>>>");
// 1부터 5까지 출력하기 
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log();
// 1부터 5까지 출력하기 // break 사용
i = 1;
while (true) {
    if (i>5)
        break;
    console.log(i);
    i++;
}
console.log();
// 1부터 100까지 3의 배수 출력 // continue 사용
i = 0;
while (i <= 100) {
    i+=3;
    if (i>100)
        continue;
    console.log(i);
}
// i = 0; // 정석
// while (i<=100) {
//     i++;
//     if (i%3 !== 0) continue;
//     console.log(i);
// }

console.log("=========");
// do wihle 문
// 코드 블록을 먼저 실행하고 조건을 평가. 코드블록은 무조건 한 번 이상 실행된다.
i = 0;
do{
    console.log(i);
}while(i !== 0);