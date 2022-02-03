// functions js
function helloMe() {
    const hello = 'Hello World';
    console.log(hello);
    return hello;
}
const hello = () => console.log('Hello World');
// functions with params
const sum = (num1, num2) => num1 + num2;
console.log(sum(895, 7589));
const timesFive = (num) => num * 5;
console.log(timesFive(5));
// scopes
const GLOBAL = 10;
let globalOne = 10;
function scopeAll() {
    // allScope = 5;
    // error in typescript
}
