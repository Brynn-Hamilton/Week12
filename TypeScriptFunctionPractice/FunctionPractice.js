function printTime() {
    console.log(new Date());
}
setInterval(printTime, 5000);
setInterval(function () {
    console.log(new Date());
}, 5000);
var Hello = function () {
    console.log('Hello!');
};
setTimeout(Hello, 3000);
var names = ["Al", "Brynn", "Feras", "Jeff", "Jesse", "Lindsey", "Lonnie"];
names.forEach(function (x) {
    console.log("Welcome ".concat(x, "!"));
});
var nums = [3, 7, 12, 99, 42];
var sum = 0;
nums.forEach(function (x) {
    sum += (x);
});
console.log(sum);
