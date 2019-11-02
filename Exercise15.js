function groupAnimals(animals) {
    // you can only write your code here!
    var cekAnimals = []
    var kategoriAnimals = []

    for (var i = 0; i < animals.length; i++) {
        var counter = -1
        for (var j = 0; j < kategoriAnimals.length; j++) {
            if (animals[i][0] === kategoriAnimals[j]) {
                counter = j
            }
        }
        if (counter === -1) {
            kategoriAnimals.push(animals[i][0])
            cekAnimals.push([animals[i]])
        } else {
            cekAnimals[counter].push(animals[i])
        }
    }
    return cekAnimals.sort(function (a, b) { return a > b })
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]