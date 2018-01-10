document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fm').addEventListener('submit', function(e) {
    if(!window.confirm('ページを送信しても良いですか？')) {
    }
  }, false)
},false);
console.time('MyTimer');
// タイマー
document.addEventListener('DOMContentLoaded', function () {
  //タイマー設置
  var timer = window.setInterval(
    function() {
      var dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 5000);
  window.alert('確認してください');
  document.getElementById('btn').addEventListener('click', function() {
    window.clearInterval(timer);
  }, false);
}, false);
console.timeEnd('MyTimer');

var storage = sessionStorage;
storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
storage['fruit3'] = 'ぶどう';
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);

for (var i = 0, len = storage.length; i < len; i++) {
  var k = storage.key(i);
  var v = storage[k];
  console.log(k + ':' + v);
}
