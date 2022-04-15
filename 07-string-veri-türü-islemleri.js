// ***********String Veri Türü İşlemleri**************


let email="aksamazrabia@gmail.com"
let firstName="rabia"
let lastName="AKSAMAZ"

//string karakter sayısı->length
console.log(email.length)

//İlk Karakteri Bulmak-> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf /kucuk harf :
firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)
//String içinde İstediğimiz bilgiyi aramak ve yerini bulmak ->search:
console.log(email.search("@"))
console.log(email[12])

console.log(email.search('olmaya'))//-1 değeri getirir

//belli bir yere kadar al ->slice:(domain bilgisi)
let DOMAIN=email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf('.'))//sadece gmail kısmını aldık
)

//bilgiyi degistir->replace:
email=email.replace('gmail.com','aksamazrabia')
console.log(email)

//istediğim bilgi var mı ? -> includes:
console.log(email.includes('dgdgdgd'))//false
console.log(email.includes('@'))//true

//istediğim bilgiyle başladı mı?bitti mi?-> startsWidth,endsWith:
console.log(
    email.endsWith('aksamazrabia')
)
//ilk harflerini büyük yapmak
firstName="FIRST"
lastName="LAST"
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`

console.log(fullName)
