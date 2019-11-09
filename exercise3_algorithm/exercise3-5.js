// 5. 이상한 문자 만들기

function toWeirdCase(s) {
    let result = '';
    let blank = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') blank = 0;

        if (blank % 2) result += s[i].toUpperCase();
        else result += s[i];
        blank += 1;
    }
    return result;
}

console.log(toWeirdCase('hello world'));
console.log(toWeirdCase('my name is lee'));