function fibonacci(a) {
    let sequence = [0,1,1];
    let num = Number(a);
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num == 1) return 1;
    if (num == 2) return 1;
    let nextNum = 0

    for (let i = 3; i <= num; i++) {
        nextNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNum)
    }
    return sequence[sequence.length-1];
    
};

// Do not edit below this line
module.exports = fibonacci;
