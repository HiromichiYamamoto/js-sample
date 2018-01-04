'use strict';

var x = 15;
if (x >= 10) {
  console.log('変数は１０以上です');
} else {
  console.log('変数は１０以下です');
}

var x = 30;
if (x >= 20) {
  console.log('変数xは２０以上です');
} else if (x >= 10){
  console.log('変数xは１０以上です');
} else {
  console.log('変数xは１０未満です');
}

var x = 1;
var y = 2;
if(x === 1) {
  if (y === 1){ console.log('変数x、yは共に１です');
  }
}else {
  console.log('変数xは1ではありません');
}

// switch
var rank = '';
switch(rank) {
  case 'A' :
  console.log('Aランクです');
  break;
  case 'B' :
  console.log('Bランクです');
  break;
  default :
  console.log('ランク外です');
  break;
}

// for
for (var x = 8; x < 10; x++) {
  console.log('xの値は' + x);
}
// for in
var data = { apple:150, orange:100, banana:120};
for(var key in data) {
  console.log(key + '=' + data[key]);
}

// for..of
var data = [ 'apple','orange', 'banana' ];
Array.prototype.hoge = function() {}
for (var value of data) {
  console.log(value);
}

// try catch finally
var i = 1;
try{
  i = i * j;
} catch(e) {
  console.log(e.message);
} finally {
  console.log('処理は完了しました');
}
