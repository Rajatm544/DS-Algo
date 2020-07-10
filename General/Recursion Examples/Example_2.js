function sumRange(num) {
    if (num === 1) return 1; // Base case
    return num + sumRange(num - 1);
}

sumRange(4);
