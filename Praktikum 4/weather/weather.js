// Daftar kota kotanya
const weatherData = {
  "Jakarta": { temperature: 30, condition: "Cerah" },
  "Bandung": { temperature: 25, condition: "Hujan Ringan" },
  "Surabaya": { temperature: 33, condition: "Panas Terik" },
  "Samarinda": { temperature: 28, condition: "Mendung" },
  "Denpasar": { temperature: 29, condition: "Cerah Berawan" },
  "Balikpapan": { temperature: 27, condition: "Gerimis" },
  "Tenggarong": { temperature: 26, condition: "Berawan" }
};

// Fungsi menampilkan cuaca di console log
function showWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weather = weatherData[city];

  if (weather) {
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${weather.temperature}°C`);
    console.log(`Kondisi: ${weather.condition}`);
  } else {
    console.log(`Data cuaca untuk kota "${city}" tidak ditemukan.`);
  }
}

// tombol nya
document.getElementById("showWeatherBtn").addEventListener("click", showWeather);