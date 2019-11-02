function palindrome(kata) {
    // you can only write your code here!

    var balikKata = kata.split('').reverse().join('');


    return balikKata === kata;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false