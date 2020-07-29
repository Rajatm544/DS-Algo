// Finding the nth fibonacci number in the sequence using dynamic programming

// Non dynamic programming solution, using recursion
function fibonacci(n) {
    // base case
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// This implementation has a time complexity of O(2 power n), which is worse than O(n square)
// One way to improve this will be memoization

// Solved using dynamic programming, by using memoization
function memoFib(n, memo = []) {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    const res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
    memo[n] = res;
    return res;
}

// Solved using tabulation method (dynamic programming)
function tableFib(n) {
    const table = [0, 1, 1];
    if (n <= 2) return 1;
    // We use a table (an array) to store tha values we have computes
    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
}
