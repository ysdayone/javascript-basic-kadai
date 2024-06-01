//btnというidをもつHTML要素を取得し、定数に代入する
const changeBtn = document.getElementById('btn');

//ボタンがクリックされたらイベント処理を実行する
changeBtn.addEventListener('click', () => {
  //textというIdをもつHTML要素を取得し、定数に代入する
  const reText = document.getElementById('text');
  //2秒後にtextの文字を「ボタンをクリックしました」に変更する
  setTimeout(() => {
    reText.textContent = 'ボタンをクリックしました';
  },2000);
});