//***** let ve comst ile Değişken Tanımlama******

//var ile değişken tanımlamak:
//var serverName="kodluyoruz.org"
//console.log(serverName)

//let ile değişken boş tanımlamak:
let serverName;
console.log(serverName)

//let ile değişkene bilgi atamak:
serverName="http://kodluyoruz.org"
console.log(serverName)
//let ile değişkene bilgi atayarak tanımlamak:
let password="1234"
console.log(password)

//değişken ataması yapmadan önce kullanmaya çalışmak:
/*HATALI KULLANIM:
console.log(fullName)
fullName="Rabia Aksamaz";
*/
fullName="Rabia Aksamaz";

//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
fullName="Lorem Ipsum Dolar"
console.log(fullName)

//birleştirme veya ekleme işlemi
fullName+"Yeni Eklenen Bilgi"//acaba ekledi mi??
console.log(fullName+" Test Bilgisi")//Ekle ve Göster ama  Değişkene Eklemedik

fullName=fullName+" Yeni Bilgi"
fullName="2. Bilgi: "+fullName

fullName="Sıfırlandı"
fullName+=" ve Yeni Bilgi Eklendi"
console.log(fullName)

//const ile değişkeni boş tanımlamaya çalışmak:(:
//const serverPassword;//sadece değişken tanımlandı ama içi boş

//const ile değişken tanımlamak:
const SERVER_PASSWORD="sfdgdfgdf56454456"
//console.log(SERVER_PASSWORD)
//SERVER_PASSWORD="1234"
