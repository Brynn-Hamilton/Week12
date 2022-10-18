function printTime(){
    console.log(new Date())
}

console.log('Interval Practice 1');
setInterval(printTime, 5000);

console.log();
console.log();

console.log('Interval Practice 2');
setInterval(
    () => {
        console.log(new Date());
    }, 5000
);

console.log();
console.log();

console.log('Timeout Practice 1');
let Hello = () => {
    console.log('Hello!');
}

setTimeout(Hello, 3000);

console.log();
console.log();

console.log('forEach Practice 1');
let names: string[] = ["Al", "Brynn", "Feras", "Jeff", "Jesse", "Lindsey", "Lonnie"];

names.forEach(
    (x: string) => {
        console.log(`Welcome ${x}!`);
    }
);

console.log();
console.log();

console.log('forEach Practice 2');
let nums: number[] = [3,7,12,99,42];

let sum:number=0;

nums.forEach(
    (x: number) => {
        sum += (x);
    }
)

console.log(sum);