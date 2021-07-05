/*
* Conditional, functions, Scope and Loops.
 */
// Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;
let storeAIsLower = storeA < storeB;
// console.log(storeAIsLower);
if (storeAIsLower) {
    console.log("Store A has a lower price.")
}
//else {
    // console.log("store B has a lower price")
//}

else {
    console.log("Their Prices are equals")
}
let storeA = 1.40;
let storeB = 3.40;
function compareStorePrices (storeA, StoreB) {
    let storeAIslower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a Lower price")
    } else {
        console.log("Their prices are equals.")
    }
}

//compareStorePrices(10, 5);
// compareStorePrices(7, 10);

function squareNum (number) {
    let squared = number * number;
    return squared;
}
let squaredNumber = squareNum(4);
console.log(squaredNumber);

// scope

if (x = 10);
function addNumbers (n, m, x) {
    console.log(x);
    return n + m;
}
addNumber (2, 3, 8);
console.log(x);

let x = 10;
function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}
addNumbers(1, 2, 10);
console.log(x);

//Arrays
//               0  1  2  3  4
let ourArrays = [1, 2, 3, 4, ['a', 'b', 'c']];
let newArr  = ourArray[4];
console.log(newArray[3] [0]);

//for (counter i = 0; i<5;i++) {
    //console.log("i is equal to: " + i)
    // console.log(ourArray[i]);


let arrlen = ourArray.length;
for(let i = 0; i<arrlen; i++) {
    console.log(ourArray[i]);
    for(let i= 0; j<10; j++) {
        console.log('j is equal to:' + j)
    }
}

//while loop
 while (true) {
    consoel.log('Ran');
    x = x + 1;
 }