/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const socks = [];
    for (let sock of ar){
        socks[sock] ? socks[sock] += 1 : socks[sock] = 1; 
    }
    let pairs = 0;
    for (let number of Object.values(socks)){
        pairs += Math.floor(number / 2);
    }
    return pairs;
}

