// 正規表現
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
var result = str.match(p);
for (var i = 0,len = result.length; i < len; i++) {
  console.log(result[i]);
}

// test
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
console.log(p.test(str));

var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
document.write(str.replace(p, '<a href="$1">$1</a>'));

// 不変オブジェクト
'use strict';
var pet = {type: ' スノーホワイトハムスター', name: 'キラ'};
// Object.preventExtensions(pet);
// Object.seal(pet);
// Object.freeze(pet);
pet.name = '山田きら';
delete pet.type;
pet.weight = 42;
