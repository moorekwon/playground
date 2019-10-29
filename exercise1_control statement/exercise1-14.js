// 14. 삼각형 출력하기 - pattern 4

triangle = '';

for (var i = 1; i <= 5; i++) {
  for (var j = 5; j > i; j--) {
    triangle += ' ';
  }
  for (var k = 1; k <= i; k++) {
    triangle += '*';
  }
  triangle += '\n';
}

console.log(triangle);