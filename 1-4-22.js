/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
    const period = s.slice(-2);
    const hour = parseInt(s.substring(0,2));
    if(period == "AM"){
        if(hour == 12){
            return "00" + s.slice(2, -2) 
        }
        else{
            return s.slice(0, -2) 
        }
    }
    if(period == "PM"){
        if(hour == 12){
            return hour + s.slice(2, -2) 
        }
        else{
            return (hour + 12) + s.slice(2, -2)  
        }
        
    }
}


/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    arr = arr.sort( (a,b) => {return a - b})
    const reducer = (previous, next) => { return previous + next};
    const minArr = arr.slice(0, 4);
    const maxArr = arr.slice(-4);
    const min = minArr.reduce(reducer);
    const max = maxArr.reduce(reducer);
    console.log(min , max)
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

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    const countArr = [];
    for(let qry of queries){
        let count = 0;
        let strIdx = strings.indexOf(qry);
        while(strIdx > -1){
            count++;
            strings.splice(strIdx, 1);
            strIdx = strings.indexOf(qry);
        }
        countArr.push(count);
    }
    return countArr;
}
