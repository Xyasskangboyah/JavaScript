var nilaiUjian = 92;
var Kehadiran = 10;
var TotalPertemuan = 25;
var lulus = (Kehadiran / TotalPertemuan) * 100;

if (nilaiUjian > 85) {
  console.log("Kategori A");
  if (lulus >= 75) {
    console.log("anda lulus!");
  } else {
    console.log("anda gagal!");
  }
} else if (nilaiUjian > 70 && nilaiUjian <= 85) {
  console.log("Kategori B");
  if (lulus >= 75) {
    console.log("anda lulus!");
  } else {
    console.log("anda gagal!");
  }
} else if (nilaiUjian > 50 && nilaiUjian <= 70) {
  console.log("kategori C");
  if (lulus >= 75) {
    console.log("anda lulus");
  } else {
    console.log("anda gagal!");
  }
} else if (nilaiUjian < 50) {
  console.log("Tidak lulus");
}


var pendaftaran = false;
var pembayaran = false;

if (pendaftaran === true) {
  if (pembayaran === true) {
    console.log("Dapat mengikuti Kursus");
  } else {
    console.log("Tidak dapat mengikuti Kursus");
  }  
} else {
  console.log("Tidak dapat mengikuti Kursus");
}

for (let i = 1;1<= 10 ; 1++ ) {
  console.log(1); 1,2,3,4,5,6,7,8,9,10
}