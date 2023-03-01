var musik = "ultah.mp3";

if (musik == "") { 
    // musik = "https://dekatutorial.github.io/Selamat%20Ulang%20Tahun%20[Jamrud].mp3"; 
} 
var audio = new Audio(musik); 
audio.loop = true; 
audio.autoplay = true; 
function mulai() { 
    audio.play(); 
    document.querySelector(".open").style = "opacity: 0;"; 
    document.querySelector(".body").style = "overflow-y: scroll;"; 
    setTimeout(function () { document.querySelector(".open").style.display = "none"; }, 1000); 
} 
function wa(isi) { 
    window.open("https://api.whatsapp.com/send?text=Akutuuu pengin " + isi); 
} 
async function tanya() { 
    var { 
        value: kado 
    } 
    = await swal.fire({ 
        title: "Pengin apa nih pas ultah?", 
        input: "text", showCancelButton: false, }); 
        if (kado) { 
            await swal.fire("Kirim ke wa aku ya"); 
            wa(kado); 
        } else { 
            await swal.fire("Jangan dikosongin dong :("); 
            tanya(); 
        } 
    } 