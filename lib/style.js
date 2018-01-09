document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('elem');

  // マウスポインターが乗ったタイミングで背景色を変更
  elem.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'Yellow';
  }, false);

  // マウスが外れたタイミングで背景色を戻す
  elem.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  }, false);
}, false);

window.onload = function() {
  var btn = document.getElementById('btn');
//イベントハンドラー登録
  btn.onclick = function() {
    window.alert("こんにちわ、世界！");
  };
//イベントハンドラーを破棄
  // btn.onclick = null;
};
