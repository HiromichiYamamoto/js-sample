function btn_click() {
  window.alert('クリックされました')
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    window.alert('ボタンがクリックされました１');
  }, false);
},false);
