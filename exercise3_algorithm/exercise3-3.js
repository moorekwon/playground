// 3. 문자열 다루기

function alphaString46(s) {
    if (s === undefined || s.length < 4 || s.length > 6) return false;
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) return false;
    }
    return true;
}

console.log(alphaString46('1234'));
console.log(alphaString46('9014'));
console.log(alphaString46('723'));
console.log(alphaString46('a234'));
console.log(alphaString46(''));
console.log(alphaString46());