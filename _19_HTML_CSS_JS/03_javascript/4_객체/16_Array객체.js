const arr = ["red", "orange", "yellow"];

// 자바스크립트에 배열 타입은 존재하지 않는다.
// 자바스크립트의 배열은 객체다.
console.log(typeof arr); // object

// 배열 인덱싱
console.log(arr.length); // 프로퍼티 length를 통해 배열의 크기를 알 수 있다.
// 배열 요소의 참조: 대괄호 표기법[]
console.log(arr[0]); // red
console.log(arr[1]); // orange
console.log(arr[100]); //  undefined(인덱스의 범위를 벗어남)
console.log(arr[-1]); // undefined (음수 인덱스 없음)


// 요소 추가: 존재하지 않는 인덱스에 값을 할당하면 요소가 추가된다.
arr[3] = "blue"; // 3번 인덱스에 'blue' 추가
console.log(arr); // ['red', 'orange', 'yellow', (NEW!)'blue']
arr[6] = "purple"; // 중간 인덱스 점프하면 생기는 일:
console.log(arr); //[ 'red', 'orange', 'yellow', 'blue', <2 empty items>, 'pruple' ]

// 요소 수정: 존재하는 인덱스에 값을 재할당하면 요소가 수정된다.
arr[3] = "green"; // 3번 인덱스에 'green' 재할당
console.log(arr); // [ 'red', 'orange', 'yellow', 'green', <2 empty items>, 'pruple' ]
arr[4] = "aqua";
console.log(arr); // [ 'red', 'orange', 'yellow', 'green', 'aqua', <1 empty items>, 'purple' ]
arr[5] = "pink";
console.log(arr); // ['red', 'orange', 'yellow', 'green', 'aqua', 'pink', 'purple']

// 요소 삭제: delete 연산자 사용
delete arr[6];
console.log(arr);

// 슬라이스
const arr2 = arr.slice(0, 4);
console.log("arr2:", arr2);

// 배열의 끝에 요소 추가
arr2.push("blue");
console.log("arr2:", arr2);

// 배열의 마지막 요소 리턴 후 삭제
console.log(arr2.pop());
console.log("arr2:", arr2);

// 배열에 특정 요소가 있는지 확인
console.log(arr2.includes("green"));
console.log(arr2.includes("blue"));

// 배열의 특정 요소의 인덱스 확인
console.log(arr2.indexOf("green"));
console.log(arr2.indexOf("blue"));

// 배열 연결
const arr3 = arr2.concat(["blue", "navy", "purple"]);
console.log(arr3);

// 배열 요소를 문자열로 연결
console.log(arr3.join(", "));

// 정렬(원본이 정렬됨)
const sorted_arr3 = arr3.slice();
const reversed_arr3 = arr3.slice();
sorted_arr3.sort();
reversed_arr3.reverse();
console.log(arr3);
console.log(sorted_arr3);
console.log(reversed_arr3);

// 배열로 반복
for (let idx in arr3) {
    console.log(idx);
    console.log(arr3[idx]);
}
for (let value of arr3) {
    console.log(value);
}
// forEach도 배열의 값만 순회하기 때문에 같은 결과가 나온다.
arr3.forEach(value => console.log(value));

// forEach(콜백함수)
// 배열의 요소를 순회하면서 콜백함수를 반복 호출한다.
// 콜백함수 forEach 메서드를 호출한 배열의 요소값, 인덱스, 배열 자체(this)를 순차적으로 전달받을 수 있다.
const arr4 = [1, 2, 3];
arr4.forEach(() => {
    console.log("hello");
});
arr4.forEach((item, idx, arr) => {
    console.log(item, idx, arr);
});


// 각 요소에 1을 더한 새로운 배열 arr6 만들기
const arr5 = [1, 2, 3];
const arr6 = []; // const로 해도 편집 가능하다(내부요소는 변경이 가능하기 때문) (단, 재할당은 안 된다)
arr5.forEach((item, idx, arr) => {
    console.log(item+1);
    // arr6[idx] = item+1;
    arr6.push(item+1);
});
console.log("arr5:", arr5);
console.log("arr6:", arr6);

// map()
console.log("\nmap():");
const arr8 = [1, 2, 3, 4, 5];
console.log("arr8 map(*100):", arr8.map((item) => item * 100));
console.log("arr8:", arr8);

// filter()
console.log("\nfilter():");
console.log("even in arr8:", arr8.filter((item) => item%2 == 0));