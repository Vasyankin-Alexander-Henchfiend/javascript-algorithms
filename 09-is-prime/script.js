function isPrime(n) {
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return n > 1;
}

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true
