//***********Kosullarla Calismak************


let username=prompt("Kullanici adini giriniz:")
//eğer kullanıcı bilgisi varsa ekrana ismini yazdır
//eger(username.length>0) {console.log(username)} değilse {console.log("bilgi yok")}
//if (username.length>0) {console.log(username)} else {console.log("bilgi yok")}

if(username.length>0){// if kısmı her zaman true ise çalışır
    console.log(`Kullanici Bilginiz ${username}`)
}else{
    console.log("bilgi yok")
}