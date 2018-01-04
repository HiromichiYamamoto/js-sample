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
var rank = '
';
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
