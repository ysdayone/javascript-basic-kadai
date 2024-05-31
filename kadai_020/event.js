//btnというidを持つHTML要素を取得し、定数に代入する
const changeBtn = document.getElementById('btn');

//ボタンがクリックされたときにイベント処理を実行する
changeBtn.addEventListener('click', () => {
    //textというidを持つHTML要素を取得し、定数に代入する
  const reText = document.getElementById('text');
  //テキストの文字が「ボタンをクリックしました」に変更する
  reText.textContent = 'ボタンをクリックしました';
})