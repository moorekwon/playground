// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var i = 10;

while (i >= 0) {
  if (i % 2) {
    console.log(i);
  }
  i--;
}