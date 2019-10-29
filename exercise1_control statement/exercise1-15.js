// 15. 정삼각형 출력하기

triangle = '';

for (var i = 1; i <= 5; i++) {
  for (var j = 5; j > i; j--) {
    triangle += ' ';
  }
  for (var k = 1; k < (i * 2); k++) {
    triangle += '*';
  }
  triangle += '\n';
}

console.log(triangle);