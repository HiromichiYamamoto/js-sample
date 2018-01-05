function getTriangle1(base, height) {
  return base * height / 2;
}
console.log('三角形の面積：' + getTriangle1(5,2));

var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param,formula);
console.log('菱形の面積：' + diamond(5,2));

// 関数リテラル
var getTriangle2 = function(base, height) {
  return base * height / 2;
};
console.log('三角形の面積' + getTriangle2(5,2));

// アロー関数
let getTriangle3 = (base,height) => {
  return base * height / 2;
};
console.log('三角形の面積' + getTriangle3(5,2));

var value = 10;
function decrementValue(value) {
  value--;
  return value;
}
console.log(decrementValue(100));
console.log(value);
// ブロックスコープはjsは存在しない
if (true) {
  var i = 5;
}
console.log(i);

// 引数のデフォルト
function getTriangle4(base = 1, height = 1) {
  return base * height / 2;
}
console.log(getTriangle4(5));


