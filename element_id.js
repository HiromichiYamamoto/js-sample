var s = document.getElementById('food');
var opts = s.childNodes;

for (var i = 0, ken = opts.length; i < len; i++) {
  var opt = opts.item(i);
  if (opts.nodeType === 1) {
    console.log(opt.value);
  }
}
