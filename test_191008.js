// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//   if (!(i % 3)) {
//     console.log(i);
//   }
// }

// for (var i = 1; i <= 10; i++) {
//   if (!(i % 2) || !(i % 3)) {
//     console.log(i);
//   }
// }

// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (var i = 10; i > 0; i--) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }

// var star = '';

// for (var i = 1; i <= 5; i++) {
//   for(var j = 1; j <= 5; j++) {
//     if (i >= j) {
//       star += '*';
//     }
//   }
//   star += '\n'
// }

// console.log(star);

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    for (var k = 1; k <= 6; k++) {
      if (i + j + k === 6) {
        console.log(`[${i}, ${j}, ${k}]`);
      }
    }
  }
}
