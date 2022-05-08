//**********Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geri Dönüş Almak*************

//Temel Kurallar:
//1:Bir Fonksiyon Bir veya Birden Fazla Paramatre Alabilir veya Hiç Almayabilir
//2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
//3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName="Lorem"

function greetings(firstName="",lastName=""){//default parametre alıyor..
   // console.log(`Merhaba ${firstName ? firstName : ""}`) //Varsa firstname göster yoksa boş göster
   console.log(`Merhaba ${firstName }`)
   console.log(`Merhaba ${firstName } ${lastName }`)

}
console.log(firstName)//değişken bilgisi
greetings()//fonksiyona parametre göndermedik
greetings("Parametre")

function greetings2(firstName,lastName){
    let info=`Merhaba ${firstName } ${lastName }`
    return info
}
let greetingsInfo= greetings2("Ad","Soyad")
//let info="deneme" //??
console.log(greetingsInfo)


function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info
}

let htmlInfo=`<span style="color:red">COLOR RED</span>`
domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('info',greetings2("Lorem","Ipsum"))