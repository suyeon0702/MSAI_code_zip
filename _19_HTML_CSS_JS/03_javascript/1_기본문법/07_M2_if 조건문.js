// 현재 기온이 30도 이상이면 집에 있기
// 20도 이상이면 공원
// 10도 이상이면 카페
// 10도 미만이면 영화관
let temperature = 25;
if(temperature >= 30){
    console.log("집에 있기");
}else if(temperature >= 20){
    console.log("공원 가기");
}else if(temperature >= 10){
    console.log("카페 가기");
}else{
    console.log("영화관 가기");
}

// 점수가 60점 이상이면 '합격입니다.'
// 점수가 60점 미만이면 '불합격입니다.'
let score = 40;
if(score >= 60){
    console.log("합격입니다.");
}else{
    console.log("불합격입니다.");
}