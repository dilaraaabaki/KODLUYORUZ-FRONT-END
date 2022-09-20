let userName = prompt("Lütfen Adınızı Giriniz")
let isim = document.querySelector("#isim")
isim.innerHTML = `Merhaba, <strong>${userName}</strong>`

let Hour = document.getElementById('hour');
let Dots = document.getElementById('dots');
let Minutes = document.getElementById('minute');

let Day = document.getElementById('day');
let Month = document.getElementById('month');
let Year = document.getElementById('year');

setInterval(function() {

    let D = new Date();
    let Saat = D.getHours();
    let Dakika = D.getMinutes();
    console.log(Hour, Minutes)

    let Gun = D.getDate();
    let Ay = D.getMonth();
    let Yil = D.getFullYear();

    Hour.innerHTML = Saat < 10 ? '0' + Saat : Saat;
    Minutes.innerHTML = (Dakika < 10) ? '0' + Dakika : Dakika;
    let Months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    Day.innerHTML = Gun;
    Month.innerHTML = Months[Ay];
    Year.innerHTML = Yil;
    Dots.classList.toggle('color');
}, 1000);
