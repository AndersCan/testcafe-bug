// Including this file in the HTML will kill testcafe with JS errors
// console.logs are added to show http://localhost:7777/index-with-poison.html
// works fine in non-testcafe controlled browser

new Promise(() => {
  console.log('start Promise')
  var s = [1];
  for (var i of (console.log(s), s)) {
  console.log('first for-loop')
  }
  for (var a of s) {
  console.log('second for-loop')
    var d = 'hello';
    this[d];
  }
  console.log('end Promise')
});
