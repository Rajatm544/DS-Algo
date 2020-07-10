// Print nth number in the fibonacci series

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// my solution
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

// Colt's solution
// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
