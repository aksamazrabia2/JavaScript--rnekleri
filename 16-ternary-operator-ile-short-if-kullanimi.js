//*********ternary operator ile short if kullanimi***********

//eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName=prompt("Kullanıcı Bilginizi Yazınız:")
let info=document.querySelector("#info")

//ternary kullanımı:
//kosul ? dogruysa :yanlıssa

//userName.length > 0 ? userName: "Kullanici adiniz bulunamadi:("
info.innerHTML=`${userName.length>0 ? userName:"Kullanici bilginiz bulunamadi:("}`