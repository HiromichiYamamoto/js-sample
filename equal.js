// 基本型と参照型による代入の違い
var x = 1;
var y = x;
x = 2;
console.log(y);

var data1 = [0,1,2];
var data2 = data1;
data1[0] = 5;
console.log(data2);
