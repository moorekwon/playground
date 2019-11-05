// 4. 문자열 내 p와 y의 개수

function numPY(s) {
    const string = s ? s.toLowerCase() : '';

    let pCount = 0;
    let yCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'p') pCount++;
        if (string[i] === 'y') yCount++;
    }
    return pCount === yCount;
}

console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());