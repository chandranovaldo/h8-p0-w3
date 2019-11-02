var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

var jenis2 = [["Nomor ID"], ["Nama Lengkap"], ["TTL"], ["Hobi"]]

function dataHandling(n) {
    var dataInput = ''
    var ttl = [] //untuk menggabungkan tempat dan tanggal lahir
    ttl.push(input[n][2])
    ttl.push(input[n][3])
    var ttlTest = ttl.join(" ")
    // console.log(ttlTest)
    input[n].splice(2, 2, ttlTest)
    for (i = 0; i < input[n].length; i++) {
        //dataInput = dataInput + input[n][i] + '\n'       
        for (j = 0; j < jenis2.length; j++) {
            if (i === j) {
                dataInput = dataInput + jenis2[j] + ' : ' + input[n][i] + '\n'
            }
        }
    }
    return dataInput
}
// console.log(input[2])
console.log(dataHandling(0))
console.log(dataHandling(1))
console.log(dataHandling(2))
console.log(dataHandling(3))