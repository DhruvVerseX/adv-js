console.log("hello1");

Promise.resolve(function () {
  console.log("hello");
});
setTimeout(function () {
  console.log("hello2");
}, 4000);

console.log("hello3");
