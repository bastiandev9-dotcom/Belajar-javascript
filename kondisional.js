function cekPositif(angka) {
    if (angka > 0) {
        return "Positif";
    } else {
       return "Bukan positif";
    }
}
console.log(cekPositif(5));
console.log("-------------------------------------");

let kategoriUmur = function(umur) {
    if (umur < 13) {
        return "Anak-anak";
    } else if (umur <20) {
        return "Remaja";
    } else if (umur >= 20) {
        return "Dewasa";
    } else {
        return "Umur tidak valid";
    }
}
console.log(kategoriUmur(15));
console.log("-------------------------------------");

const cekHari = (namaHari) => {
    switch(namaHari) {
        case "Senin":
            return "Awal minggu";
        case "Sabtu" || "Minggu":
            return "Akhir pekan";
        default:
            return "Hari biasa";
    }  
}
console.log(cekHari("Sabtu"));
console.log("-------------------------------------------");

let username = "Bastian"
let password = "1234"
function login(user, pass) {
    if (user === username && pass === password) {
        return "Login sukses";
    } else {
        return "Login gagal";
    }
}
console.log(login("Bastian", "1234"));
console.log("---------------------------------------");

let hitungDiskon = function(totalBelanja) {
    if (totalBelanja >= 100000) {
        diskon = 0.2 * totalBelanja;
        total = totalBelanja - diskon;
        return `Total harga setelah diskon: ${total}`;
    } else if (totalBelanja >= 50000) {
        diskon = 0.1 * totalBelanja;
        total = totalBelanja - diskon;
        return `Total harga setelah diskon: ${total}`;
    } else {
        return `Total harga: ${totalBelanja}`;
    }
}
console.log(hitungDiskon(64937));
console.log("-------------------------------------");