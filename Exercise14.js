function mengelompokkanAngka(arr) {
    // you can only write your code here!
        // you can only write your code here!
        var arrayGenap = []
        var arrayGanjil = []
        var arrayTiga = []
        var arrayHasil = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 3 == 0) {
                arrayTiga.push(arr[i])
            } else if (arr[i] % 2 == 0) {
                arrayGenap.push(arr[i])
            } else {
                arrayGanjil.push(arr[i])
            }
        }
        arrayHasil.push(arrayGenap)
        arrayHasil.push(arrayGanjil)
        arrayHasil.push(arrayTiga)
    
        return arrayHasil
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]