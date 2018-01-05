var n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

// 配列
var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

console.log(ary1.length);
console.log(Array.isArray(ary1));
console.log(ary1.toString());
console.log(ary1.lastIndexOf('Sato'));
console.log(ary1.concat(ary2));

// スタック　後入れ先出し
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data.pop());
console.log(data.pop());
console.log(data.pop());
// キュー　先入れ先出し
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data.shift());
console.log(data.shift());
console.log(data.shift());
// splice
var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
console.log(data.splice(3,2,'Yamada', 'Suzuki'));
console.log(data)
// forEach
var data = [2,3,4,5]
data.forEach(function(value,index,array){
  console.log(value * value);
});
// map
var data = [2,3,4,5];
var result = data.map(function(value,index,array) {
  return value * value;
});
console.log(result);
// some
var data = [4,9,16,25];
var result = data.some(function(value,index,array) {
  return value % 3 === 0;
});
// 見つかればtrueを返す
if (result) {
  console.log('３の倍数が見つかりました');
} else {
  console.log('３の倍数が見つかりませんでした');
}
// filter
var data = [4,9,16,25];
var result = data.filter(function(value,index,array) {
  return value % 2 === 1;
});
console.log(result);

// map
let m = new Map();
m.set('dog', 'わんわん');
m.set('cat', 'にゃー');
m.set('mouse', 'チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

for (let key of m.keys()) {
  console.log(key);
}
for (let value of m.values()) {
  console.log(value);
}

// set
let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
console.log(s.has(10));
console.log(s.size);

for (let val of s.values()) {
  console.log(val);
}
s.delete(100);
console.log(s.size);

var dat = new Date(2018,1,1,11,40);
console.log(dat.toLocaleString());
