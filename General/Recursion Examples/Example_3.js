// Factorial of a number

// Iterative approach
function fact(num) {
    let factorial = 1;
    for (let i = num; i > 1; i--) {
        factorial *= num;
    }
    return factorial;
}

// Recursive approach
function fact(num) {
    if (num === 0) {
        return 1;
    }
    return num * fact(num - 1);
}
