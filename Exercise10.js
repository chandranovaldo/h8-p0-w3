function perkalianUnik(arr) {
    // you can only write your code here!

    hasil = [arr.length];

    arrCopy1 = [arr.length];
    arrCopy2 = [arr.length];

    arrCopy1[0]=1;
    arrCopy2[arr.length-1]=1;

    //scan dari kiri ke kanan
    for (i=0; i<arr.length-1;i++){
        arrCopy1[i+1] = arr[i] * arrCopy1[i];
    }

    //scan dari kanan ke kiri
    for (i=arr.length-1;i>0;i--){
        arrCopy2[i-1] = arrCopy2[i] * arr[i];
    }

    //multiply
    for (i=0;i<arr.length;i++)
    {
        hasil[i] = arrCopy1[i] * arrCopy2[i];
    }

    return hasil;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]