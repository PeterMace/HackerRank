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