function pasanganTerbesar(num) {
      // you can only write your code here!
      var temp = ''    
      var num = num + ''
      var nilaiBanding = num[0] + num[1] // nilaiBanding awal harus diberi nilai pembanding dan di luar loop
      for (var i = 1; i < num.length; i++) {
          temp = num[i] + num[i + 1]
          if (nilaiBanding < temp) {
              nilaiBanding = temp
          }
      }
      return Number(nilaiBanding)
      }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99