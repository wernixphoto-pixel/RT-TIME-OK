const speed = 0.6;

const ticker = document.getElementById("ticker");

let pos = 0;
let currentText = "";

async function loadText() {

    try {

        const response = await fetch("text.txt?t=" + Date.now());

        const newText = await response.text();

        if (newText.trim() !== currentText.trim()) {

            currentText = newText.trim();

            ticker.innerHTML = currentText;

            pos = ticker.parentElement.offsetWidth;

        }

    } catch (err) {

        console.log(err);

    }

}

function jalan(){

    pos -= speed;

    ticker.style.left = pos + "px";

    if(pos < -ticker.offsetWidth){

        pos = ticker.parentElement.offsetWidth;

    }

    requestAnimationFrame(jalan);

}

loadText();

setInterval(loadText,2000);

setTimeout(()=>{

    pos = ticker.parentElement.offsetWidth;

    jalan();

},100);


/* ================= JAM ================= */

function updateClock(){

    const now = new Date();

    const jam = String(now.getHours()).padStart(2,"0");
    const menit = String(now.getMinutes()).padStart(2,"0");

    document.getElementById("clock").textContent =
    `${jam}:${menit}`;

    const tanggal =
    String(now.getDate()).padStart(2,"0");

    const bulan =
    String(now.getMonth()+1).padStart(2,"0");

    const tahun =
    now.getFullYear();

    document.getElementById("date").textContent =
    `${tanggal}-${bulan}-${tahun}`;

}

updateClock();

setInterval(updateClock,1000);