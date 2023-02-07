var masukkantinggi = document.querySelector(".MasukkanTinggi");
var masukkanberat = document.querySelector(".MasukkanBerat");
var tombolmenghitung = document.querySelector(".Menghitung");
var hasil = document.querySelector(".Hasil");
var pernyataan = document.querySelector(".Pernyataan");
var pernyataan2 = document.querySelector(".Pernyataan2");
var BMI,tinggi,berat,tinggi2,fixed;

tombolmenghitung.addEventListener("click", ()=>{
    tinggi = masukkantinggi.value;
    berat = masukkanberat.value;
    tinggi2 = tinggi/100;
    BMI = berat/(tinggi2*tinggi2);
    hasil.innerText=BMI.toFixed(2) + " kg/m2";

    if(BMI < 18.5){
        pernyataan.innerText = "Berat badan kurang";
        pernyataan2.innerText = "Sebaiknya makan makanan yang bergizi agar tubuh lebih terisi";
    }else if((BMI > 18.6) && (BMI < 23)){
        pernyataan.innerText = "Berat badan normal";
        pernyataan2.innerText = "Tubuh anda sehat, pertahankan";
    }else if((BMI >= 23) && (BMI < 25)){
        pernyataan.innerText = "Berat badan berlebih";
        pernyataan2.innerText = "Sebaiknya kurangilah makanan berkarbohidrat dan rajinlah berolahraga !!";
    }else if(BMI >=25){
        pernyataan.innerText = "Berat badan obesitas";
        pernyataan2.innerText = "kurangilah makanan berkarbohidrat dan rajinlah berolahraga !!";
    }

    
});
// Saat pengguna mengklik tombol, scroll ke bagian atas dokumen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}