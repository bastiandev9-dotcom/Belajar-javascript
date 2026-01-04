const prompt = require('prompt-sync')()
// -->mengganti, menghapus array
let hewan = ["Kucing", "Anjing", "Kelinci", "Burung"]
hewan[1] = "Harimau"
hewan.pop() 
hewan.splice(0, 1)
console.log(hewan)
console.log(`=============================================================`)
console.log()

let angka = [1, 2, 3, 4]
angka.shift()
console.log(angka)
angka.unshift(10)
console.log(angka)
console.log(`=============================================================`)
console.log()

//-->array method
//--->method concat
let number1 = [1, 2] //concat(gabung)
let number2 = [3, 4]
let numbers = number1.concat(number2)
console.log(numbers)

let binatang = ["Kucing"]
let burung = ["Merpati"]
let ikan = ["Gurame"]
let animal = binatang.concat(burung, ikan)
console.log(animal)
console.log(`Hasil gabung: ${[...numbers, ...animal]}`) //spread operator, lebih simpel

function GabungkanSemua(...array) { //Menggunakan function
    let hasil = []
    for (let arr of array) {
        hasil = hasil.concat(arr)
    }
    return hasil
}

let hasil1 = GabungkanSemua(numbers, animal)
console.log(`hasil Menggunakan Function: ${hasil1}`)
console.log("================================================================================")

//--->method Includes
let color = ["Merah", "Hijau", "Biru"]
console.log(`${color.includes("Kuning")}`)

let color1 = ["Merah", "Hijau", "Biru"]
function cekKeberadaan(item, keranjang) {
    return keranjang.includes(item) ? `ditemukan` : `tidak ditemukan` //ternary operator
}
let cekWarna = cekKeberadaan("Hijau", color1)
console.log(cekWarna)

//warna berdasarkan jenis menggunakan includes method
const warnaDasar = ["merah", "kuning", "biru"]
const warnaSekunder = ["oranye", "hijau", "ungu"]
const warnaNetral = ["putih", "hitam", "abu-abu"]
const warnaMetal = ["silver", "gold"]

function kategoriWarna(namaWarna) {
    const warna = namaWarna.toLowerCase()
    return warnaDasar.includes(warna) ? `${input}, Warna Dasar` 
    : warnaSekunder.includes(warna) ? `${input}, Warna sekunder`
    : warnaNetral.includes(warna) ? `${input}, Warna netral`
    : warnaMetal.includes(warna) ? `${input}, Warna metal`
    :`${input} Warna tidak dikenal`
}

let input = prompt("Cari warna: ")
let cekWarna2 = kategoriWarna(input)
console.log(cekWarna2)
console.log('========================================================')
console.log()


