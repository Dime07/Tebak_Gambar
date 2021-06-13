const warna = document.getElementById('warna');
const hapus = document.getElementById('hapus');
const input = document.getElementById('jawab');
const canvas = document.querySelector('#draw');

const ukuran1 = document.getElementById('ukuran-1');
const ukuran2 = document.getElementById('ukuran-2');
const ukuran3 = document.getElementById('ukuran-3');

const ctx= canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// untuk mendapatkan color picker
warna.addEventListener('change', () => {
    return ctx.strokeStyle = warna.value;
});
warna.addEventListener('mousemove', () => {
    return ctx.strokeStyle = warna.value;
});

function draw(e){
    if(!isDrawing) return; //berhenti pas gak gerak
    console.log(e)

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    }

// teken enter baru bisa masukin data
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    if(input.value === "kelinci"){
        alert("selamat jawaban anda benar");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        input.value = "";
    }       
    }
});

// tombol hapus
hapus.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing=true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mouseup', ()=> isDrawing =false);
canvas.addEventListener('mouseout', ()=> isDrawing =false);

// ukuran dari brush
ukuran1.addEventListener('click', ()=>{
    return ctx.lineWidth = 10;

});

ukuran2.addEventListener('click', ()=>{
    return ctx.lineWidth = 30;

});

ukuran3.addEventListener('click', ()=>{
    return ctx.lineWidth = 50;

});

    
    

