var x = 1;
var y = x;
x = 2;
console.log(y);

var data1 = [0,1,2];
var data2 = data1;
data1[0] = 5;
console.log(data2);

// 配列の分割代入
let data = [56,49,23,50,13,23,45,90];
let [x0,x1,x2,...other] = data
console.log(x0);
console.log(other);

// デフォルトでなしを設定
let book = {title: 'Javaポケットリファレンス', publish: '技術評論社', price: 2000};
let {price, title,memo = 'なし'} = book;
console.log(title);
console.log(price);
console.log(memo);

// 条件演算子
var x = 60;
console.log((x >= 70) ? '合格' : '不合格');

// ショートカット演算子
var x = 1;
if(x === 1) { console.log('こんにちわ0'); }
x === 1 && console.log('こんにちわ1');
x === 1 || console.log('こんにちわ2');

var msg = '';
msg = msg || 'こんにちわ、世界！';
console.log(msg);

var ary = ['java', 'ruby', 'python'];
console.log(delete ary[0]);
console.log(ary);
