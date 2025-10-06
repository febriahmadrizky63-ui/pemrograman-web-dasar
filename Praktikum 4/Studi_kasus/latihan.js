console.log("Script Penilaian Dijalanakan :)");

// Ambil elemen dari HTML
const elNama = document.getElementById("nama-mhs");
const elNilai = document.getElementById("nilai-mhs");
const elStatus = document.getElementById("status-kelulusan");

const inputNama = document.getElementById("input-nama");
const inputNilai = document.getElementById("input-nilai");
const btnSubmit = document.getElementById("submit-btn");

// Event klik tombol submit
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  let namaMahasiswa = inputNama.value;
  let nilai = parseInt(inputNilai.value);

  // Menampilkan Nama dan Nilai
  elNama.textContent = namaMahasiswa;
  elNilai.textContent = nilai;

  // Logika Kelulusan
  let pesanStatus = "";
  let lulus = false;

  if (nilai >= 75) {
    pesanStatus = "Selamat, Anda Dinyatakan LULUS!";
    lulus = true;
  } else {
    pesanStatus = "Tetap Semangat, Anda HARUS Mengulang.";
    lulus = false;
  }

  // Menampilkan Status Kelulusan
  elStatus.textContent = pesanStatus;

  // Mengubah gaya berdasarkan status kelulusan
  if (lulus === true) {
    elStatus.style.color = "green";
    elStatus.style.fontWeight = "bold";
  } else {
    elStatus.style.color = "red";
    elStatus.style.fontWeight = "bold";
  }
});