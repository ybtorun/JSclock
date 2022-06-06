//Girdi alınır
let userName = prompt("Adınız Nedir?")

//Alınan girdiyi ekrana yazmak için ilgili konumdaki span ın idsi seçilir ve girdi buna atanır.
let input = document.querySelector("#myName")
input.innerHTML=userName

//tarih bilgisini yazdıracağımız yeri atama
let saniyeEkran =document.querySelector("#myClock")
let saniyeTarih = new Date(); //tarih fonksiyonu tanımlama
/	
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]; //gunler dizisi 
    let gun=gunler[saniyeTarih.getDay()]; //haftanın günü kaçınçı eleman ise onun text karşılığını alma
	let saat=saniyeTarih.getHours(); //saat
	let dakika=saniyeTarih.getMinutes(); //dakika
	let saniye=saniyeTarih.getSeconds();	//saniye
	saniyeEkran.innerHTML=`${saat+":"+dakika+":"+saniye + " " + gun}`

