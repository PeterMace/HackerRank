//Min, Max array
function miniMaxSum(arr) {
    arr = arr.sort( (a,b) => {return a - b})
    const reducer = (previous, next) => { return previous + next};
    const minArr = arr.slice(0, 4);
    const maxArr = arr.slice(-4);
    const min = minArr.reduce(reducer);
    const max = maxArr.reduce(reducer);
    console.log(min , max)
}



'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive = 0;
    let zeros = 0; 
    let negative = 0;
    for (let item of arr){
        if(item > 0){
            positive++;
        }else if(item < 0){
            negative++;
        }else{
            zeros++
        }
    }
    const arrSize = arr.length;
    const numbers = [positive, negative, zeros]
    for (let num of numbers){
        console.log((num / arrSize).toFixed(6));
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


