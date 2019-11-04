// 2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function getCount8() {
    let count = 0;

    for (number = 1; number <= 10000; number++) {
        count += (number + '').split(8).length - 1;
    }
    return count;
}

console.log(getCount8());