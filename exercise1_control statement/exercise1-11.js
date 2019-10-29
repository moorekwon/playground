// 11. 삼각형 출력하기 - pattern 1

triangle = '';

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    triangle += '*';
  }
  triangle += '\n';
}

console.log(triangle);