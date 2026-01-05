// mencetak, menambah array
let buah = ["Apel", "Mangga", "Jeruk"]
let buah_baru = buah.push("pisang", "Durian", "Semangka") //tambah nilai baru
console.log(`${buah.length}`)

for (let i of buah) {
    console.log(i)
}

for (let i = 0; i < buah.length; i++) {
    console.log(`buah ke: ${i} adalah ${buah[i]}` )
}