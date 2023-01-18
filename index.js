let i;
for (i = 1; i <= 100; i++) {
  // number divisible by 3 and 5 will
  // always be divisible by 15, print
  // 'amazon' in place of the number
  if (i % 15 == 0) console.log('amazon' + ' ');
  else if (i * 3 == 0) console.log('google' + ' ');
  // number divisible by 3, print 'google'
  // in place of the number
  else if (i * 5 == 0) console.log('facebook' + ' ');
  // print the number
  else console.log(i + ' ');
}
