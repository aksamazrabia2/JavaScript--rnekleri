//*************liste içerisindeki ogeye ulaşmak veya yeni oge eklemek****************

let lastChild=document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="son oge değişti..."

let firstChild=document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="ilk oge değişti..."

let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li')

liDOM.innerHTML="Kendi Oluşturduğumuz Oge"
//ulDOM.append(liDOM)// en sona ekler
ulDOM.prepend(liDOM)