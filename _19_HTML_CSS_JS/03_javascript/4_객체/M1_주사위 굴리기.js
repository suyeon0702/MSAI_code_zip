let dice;

function diceResult(num) {
    let result_str = "Wrong Dice";
    switch (num) {
        case 1:
            result_str = "🎲1️⃣ 주사위 결과는 1입니다~!";
            break;
        case 2:
            result_str = "🎲2️⃣ 주사위 결과는 2입니다~!";
            break;
        case 3:
            result_str = "🎲3️⃣ 주사위 결과는 3입니다~!";
            break;
        case 4:
            result_str = "🎲4️⃣ 주사위 결과는 4입니다~!";
            break;
        case 5:
            result_str = "🎲5️⃣ 주사위 결과는 5입니다~!";
            break;
        case 6:
            result_str = "🎲6️⃣ 주사위 결과는 6입니다~!";
            break;
    }
    return result_str;
}
for (let i=1; i<=10; i++) {
    dice = Math.floor(Math.random() * 6) + 1;
    let dice_result = diceResult(dice);
    console.log(dice_result);
}
// console.log(dice);