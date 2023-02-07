var masukkantinggi = document.querySelector(".MasukkanTinggi");
var masukkanberat = document.querySelector(".MasukkanBerat");
var tombolmenghitung = document.querySelector(".Menghitung");
var hasil = document.querySelector(".Hasil");
var pernyataan = document.querySelector(".Pernyataan");
var BMI,tinggi,berat,tinggi2,fixed;

tombolmenghitung.addEventListener("click", ()=>{
    tinggi = masukkantinggi.value;
    berat = masukkanberat.value;
    tinggi2 = tinggi/100;
    BMI = berat/(tinggi2*tinggi2);
    hasil.innerText=BMI.toFixed(2) + " kg/m2";

    if(BMI < 18.5){
        pernyataan.innerText = "Berat badan kurang";
    }else if((BMI > 18.6) && (BMI < 23)){
        pernyataan.innerText = "Berat badan normal";
    }else if((BMI >= 23) && (BMI < 25)){
        pernyataan.innerText = "Berat badan berlebih";
    }else if(BMI >=25){
        pernyataan.innerText = "Berat badan obesitas";
    }

    
});
// Saat pengguna mengklik tombol, scroll ke bagian atas dokumen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}