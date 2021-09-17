const buttonKurang = document.querySelector("button.kurang");
const buttonTambah = document.querySelector("button.tambah");
const parentCertif = document.querySelector(".certificate");
const childCertif = document.querySelector(".smallcertif");
const imgJumbo = document.querySelector("img.jumbo");

// let panjang;
// let lebar;
// let n = 0;
// function bacaUkuran() {
//   panjang = imgJumbo.width;
//   lebar = imgJumbo.height;
// }
// function tambahSize() {
//   n++;
//   let widthUp = Math.pow(1.1, n) * panjang;
//   let heightUp = Math.pow(1.1, n) * lebar;

//   imgJumbo.style.width = `${widthUp}px`;
//   imgJumbo.style.height = `${heightUp}px`;
// }
// function kurangSize() {
//   n--;
//   let widthDown = Math.pow(1.1, n) * panjang;
//   let heightDown = Math.pow(1.1, n) * lebar;

//   imgJumbo.style.width = `${widthDown}px`;
//   imgJumbo.style.height = `${heightDown}px`;
// }

// buttonTambah.addEventListener("click", function () {
//   if (imgJumbo.width >= Math.pow(1.1, 2) * imgJumbo.width) {
//     buttonTambah.disabled = true;
//   } else {
//     tambahSize();
//   }
// });

// buttonKurang.addEventListener("click", function () {
//   if (imgJumbo.width == Math.pow(1, 1) * panjang) {
//     buttonKurang.disabled = true;
//   } else {
//     buttonTambah.disabled = false;
//     kurangSize();
//   }
// });

const gambar = Array.from(document.querySelectorAll("img.thumb"));
console.log(gambar);
const wadah = document.querySelector(".slideGambar");
console.log(wadah);

//kelemahan dibawah ini harus buat CreateElement dan createtextNode s
const tambahKelas = function () {
  gambar.forEach((elemen) => {
    let divisi = `<div class="carousel-item">
  <img src="${elemen.getAttribute("src")}" class="d-block w-100" alt="...">
</div>`;
    wadah.append(divisi);
  });
};

parentCertif.addEventListener("click", function (e) {
  if (e.target.className == "kanan") {
    namaGambar.forEach((namaFile) => (e.target.src = `${namaFile}`));
  }
  if (e.target.className == "kiri") {
    console.log(e.target);
  }
});

const gambar2 = document.querySelectorAll("img.sertif");
console.log(gambar2);
