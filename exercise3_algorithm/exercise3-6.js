// 6. 핸드폰번호 가리기

function hideNumbers(str) {
    let phoneNum = str.split('');

    for (let i = 0; i < phoneNum.length - 4; i++) {
        phoneNum[i] = '*';
    }
    return phoneNum.join('');
}

console.log(hideNumbers('01033334444'));
console.log(hideNumbers('027778888'));