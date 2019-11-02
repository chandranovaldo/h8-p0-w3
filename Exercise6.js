function angkaPalindrome(num) {
      var temp = 0
      while (temp != num) {
          num = Number(num) + 1
          num = num + '' 
          var temp = ''
          for (var i = num.length - 1; i >= 0; i--) {
              temp = temp + num[i]
          }
      }
      return Number(temp)
  
  }

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

//   Untuk membuat bilangan palindrom, kita hanya melakukan hal sederhana. Jumlahkan sebuah bilangan dengan bilangan tersebut jika ditulis dari belakang. Sebagaui contoh, sebarang bilangan 13. Yang kita lakukan hanyalah menjumlahkan seperti ini, 13+31=44. Didapatlah sebuah palindrom.
// 1. Ambil sembarang x
// 2. Balik digit-digit bilangan tersebut untuk memperoleh bilangan baru y lalu jumlahkan bilangan baru ini dengan bilangan semula x
// 3. Jika hasilnya bukan Palindrome, ulangi langkah 2
// Contoh:
// 4 –> 4+4=8
// 7 –> 7+7=14, 14+41=55
// 56 –> 56+65 = 121.
// 57 –> 57+75 = 132, 132+231 = 363.
// 983 –> 983+389=1372, 1372+2731=4103, 4103+3014=7117
// 10911 –> setelah 55 langkah diperoleh bilangan palindrome 46687315966842248669513786