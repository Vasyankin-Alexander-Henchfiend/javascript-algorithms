function fibonacci(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        const numOne = result[i - 1];
        const numTwo = result[i - 2];
        result.push(numOne + numTwo);
    }
    return result[n - 1]
}

console.log(fibonacci(15));