// 1. 짝수와 홀수

// if문
function evenOrOdd(num) {
    if (!(num % 2)) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));


// 3항 연산자
function evenOrOdd(num) {
    return !(num % 2) ? 'Even' : 'Odd'
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));