function amazon(num) {
  console.log(num);
    for (var i = 0; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0 ) {
        console.log('amazon');
      } else if (i % 5 === 0) {
        console.log('facebook');
      } else if (i % 3 === 0) {
        console.log('google');
      } else {
        console.log(i);
      }
    }
  }

console.log(amazon(100));