// nomor 1
var usiaPengunjung = 5;

if (usiaPengunjung > 5) {
  console.log("Pengunjung harus membayar tiket penuh.");
} else if (usiaPengunjung >= 2 && usiaPengunjung <= 5) {
  console.log("Pengunjung harus membayar setengah harga tiket.");
} else {
  console.log("Pengunjung di bawah 2 tahun tidak boleh masuk.");
}

// nomor 2
const usia = 28

if (usia >= 17) {
    console.log("Anda mendapatkan sim");
} else  {
    console.log("anda belum dapat sim");
}

// nomor 3
const bilangan = 19
if (bilangan >0) {
    console.log("positif");
} else if (bilangan <0){
    console.log("negatif");
} else {
    console.log("netral");
}

// nomer 4

const x = -6;
const y = 5;

if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}

// nomer 5
const totalBelanja = 100;

let diskon = 0;

if (totalBelanja >= 200) {
  diskon = 0.15;
} else if (totalBelanja >= 100 && totalBelanja <= 199) {
  diskon = 0.1;
}

const totalBayar = totalBelanja - totalBelanja * diskon;

console.log(`Total yang harus dibayar adalah Rp ${totalBayar}.`);
