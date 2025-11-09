// btnというidを持つHTML要素を取得し、定数を代入する
const btn = document.getElementById('btn');
// parent-listというidを持つHTML要素を取得し、定数を代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
