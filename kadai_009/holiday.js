//配列の宣言と代入を行う
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

console.log('ここからはfor文')
//for文を使って全ての配列を出力する
for (let i = 0; i <= 15; i++){
  console.log(holidays[i]);
}

console.log('ここからはwhile文');
//while文を使ってすべての配列を出力する
let num = 0;
while (num <= 15){
  console.log(holidays[num]);
  num++;
}
