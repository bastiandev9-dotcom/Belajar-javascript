// Function Declaration 
function penjumlahan(angka1, angka2) {
    return angka1 + angka2;
}
let tes = penjumlahan(10, 25);
console.log(tes);
console.log("-------------------------------------------");
// Function Expression
const say = function(nama) {
    return `Hai selamat datang kembali, ${nama}`;
};

console.log(say("Ogi Bastian"));
console.log("--------------------------------------------");

// Arrow function 
const perkalian = (a, b) => {
    let cek = a * b;
    return cek;
}
console.log(perkalian(5, 4));
console.log("---------------------------------------------");

//Funsi tanpa parameter
function time() {
    return `Jam sekarang: ` + new Date().getHours();
}
console.log(time())
console.log("---------------------------------------------");

// // latihan
function sapa(nama) {
    return `Hai, ${nama}`;
}
console.log(sapa("Bastian"));
console.log("----------------------------------");

let tambah = function(x, y) {
    let cek = x + y;
    return cek
}
console.log(tambah(7, 8));
console.log("-------------------------------");

const isGenap = (angka) => {
    if (angka % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isGenap(7));
console.log("-----------------------------------");

function kelilingpersegi(sisi) {
    return 4 * sisi
}
console.log(kelilingpersegi(6));
console.log("---------------------------------------------");

let pesan = "Selamat"
let waktu = "Pagi"
const gabungpesan = (pesan, waktu) => {
    return pesan + " " + waktu;
}
console.log(gabungpesan(pesan, waktu));
console.log("-------------------------------------------");



