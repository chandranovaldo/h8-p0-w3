var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {
    var arrayOutput = [] // bikin array baru untuk menampung hasil
    //lakukan splice 
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    arrayOutput.push(input)
    //lakukan switch + split
    var tanggalHuruf = input[3].split('/')
    switch (tanggalHuruf[1]) {
        case "01":
            tanggalHuruf.splice(1, 1, "Januari");
            break;
        case "02":
            tanggalHuruf.splice(1, 1, "Februari");
            break;
        case "03":
            tanggalHuruf.splice(1, 1, "Maret");
            break;
        case "04":
            tanggalHuruf.splice(1, 1, "April");
            break;
        case "05":
            tanggalHuruf.splice(1, 1, "Mei");
            break;
        case "06":
            tanggalHuruf.splice(1, 1, "Juni");
            break;
        case "07":
            tanggalHuruf.splice(1, 1, "Juli");
            break;
        case "08":
            tanggalHuruf.splice(1, 1, "Agustus");
            break;
        case "09":
            tanggalHuruf.splice(1, 1, "September");
            break;
        case "10":
            tanggalHuruf.splice(1, 1, "Oktober");
            break;
        case "11":
            tanggalHuruf.splice(1, 1, "November");
            break;
        case "12":
            tanggalHuruf.splice(1, 1, "Desember");
            break;
    }
    // console.log(tanggalHuruf[1])
    arrayOutput.push(tanggalHuruf[1])
    // lakukan split + sort
    var tanggalSort = input[3].split('/')
    tanggalSort.sort(function (value1, value2) { return value2 - value1 })
    // console.log(tanggalSort)
    arrayOutput.push(tanggalSort)
    //lakukan split + join
    var tanggalJoin = input[3].split('/')
    // console.log(tanggalJoin.join('-'))
    arrayOutput.push(tanggalJoin.join('-'))
    //lakukan slice
    var inputSlice = input.slice(1, 2)
    // console.log(inputSlice) // dapat hasil ['Roman Alamsyah Elsharawy']
    // ubah inputSlice menjadi string karena array dengan 1 nilai saja tidak bs dislice
    // 1 gunakan split
    var namaSplit = inputSlice[0].split(' ')
    // console.log(namaSplit)
    var namaString = namaSplit.join(' ') //2 gunakan join
    // console.log(namaString)
    var namaSlice = namaString.slice(0, 14) //3 baru dislice
    // console.log(namaSlice)
    arrayOutput.push(namaSlice)

    return arrayOutput
}

console.log(dataHandling2(input))
// dataHandling2(input)