//DOM İçinden Öge Seçimi

//let th2=document.getElementsByTagName('h2')
let title=document.getElementById('title')
title.innerHTML="Değişen Bilgi"
console.log(title.innerHTML)

let link=document.querySelector('#kodluyoruzlink')
link.innerHTML+=" değişti"
link.style.color="red"
link.classList.add('btn')