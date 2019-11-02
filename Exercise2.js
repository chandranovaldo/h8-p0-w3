function balikString(kata) {
    
    var kataBalik ='';
  
    for (i=kata.length -1; i>=0; i--)
    {
      kataBalik = kataBalik + kata[i];
    }
    return kataBalik;
  }
  
  // TEST CASES
  console.log(balikString('hello world!')); 