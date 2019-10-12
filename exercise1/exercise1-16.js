// 16. 역정삼각형 출력하기

triangle = '';

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j < i; j++) {
    triangle += ' ';
  }
  for (var k = 10; k >= (i * 2); k--) {
    triangle += '*';
  }
  triangle += '\n';
}

console.log(triangle);