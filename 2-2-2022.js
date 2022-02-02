function isPrime(n) {
    console.log(n)
    let last = 1;
    for(let i = n - 1; i > 1; i--){
        if(n % i == 0){
            last = i;
        }
    }
    if(last > 1){
        return last;
    }else{
        return 1;
    }
}


 * Complete the 'getMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getMin(s) {
    const queue = [];
    let added = 0;
    for(let char of s){
        if(char == "("){
            queue.push(char);    
        }else{
            //If there is a paranthesis closing, remove one from queue
            if(queue.length > 0){
                queue.pop();
            //else there is a paranthesis to add
            }else{
                added++;
            }
        }
        
    }
    return added + queue.length;
}
