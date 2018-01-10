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
//イベントリスナー
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn1');
  var listener = function() {
    window.alert('こんにちわ、世界！！');
  };
//登録
  btn.addEventListener('click', listener, false);
//破棄
  btn.removeEventListener('click', listener, false);
}, false);
