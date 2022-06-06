//Girdi alınır
let userName = prompt("Adınız Nedir?")

//Alınan girdiyi ekrana yazmak için ilgili konumdaki span ın idsi seçilir ve girdi buna atanır.
let input = document.querySelector("#myName")
input.innerHTML=userName


 let saniyeEkran =document.querySelector("#myClock")


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);

    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]; 
    let d =gunler[today.getDay()]
    saniyeEkran.innerHTML =  h + ":" + m + ":" + s + "  " + d;
    
    setTimeout(showTime, 1000);  
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()
  
