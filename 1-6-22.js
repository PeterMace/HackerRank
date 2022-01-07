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

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    const visited = [];
    for (let element of a){
        if(visited.includes(element)){
            visited.splice(visited.indexOf(element), 1);
        }else{
            visited.push(element)
        }
    }
    return visited;
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let posDiagonal = 0;
    let negDiagonal = 0;
    //diagonals
    for(let i = 0; i < arr.length; i++){
        posDiagonal += arr[i][i]
        negDiagonal += arr[i][arr.length - 1 - i]
    }
    return Math.abs(posDiagonal - negDiagonal)
}