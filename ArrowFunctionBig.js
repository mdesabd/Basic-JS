//Arrow Function Big-----------------------------------------

//Arrow Function double parameter------
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

//Arrow Function triple parameter------
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);


//Arrow Function single parameter------
const tenTimes = (num) => num * 10;
const output = tenTimes(17);


// we dont use a braket when parameter is single.
const fiveTimes = num => num * 5;
const value = fiveTimes(17);


// when no any parameter--------------
const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);



//multiline function hole avabe korte hoy-----------------------
//akhane retun dite hobe----- single line function a retun no used.
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);
