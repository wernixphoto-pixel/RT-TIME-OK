const bulan = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
];

const hari = [
    "Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"
];

function update(){

    const now = new Date();

    const jam = String(now.getHours()).padStart(2,"0");
    const menit = String(now.getMinutes()).padStart(2,"0");
    const detik = String(now.getSeconds()).padStart(2,"0");

    document.getElementById("clock").textContent =
        `${jam}:${menit}:${detik}`;

    document.getElementById("date").textContent =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;
}

update();
setInterval(update,1000);