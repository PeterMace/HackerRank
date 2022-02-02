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
