// var shoes = 100;
// var stateTax = 1.2;
// function totalPrice(shoes, tax){
//     return shoes * tax;
// }
// var toPay = totalPrice(shoes,stateTax);
// console.log(toPay)

var purchase1 = {
shoes: 100,
statusTax:1.2,
totalPrice: function(){
    var calculation = purchase1.shoes * purchase1.statusTax
    console.log("total price =", calculation)
}
}
var purchase2 = {
    shoes: 50,
    statusTax: 1.2,
    totalPrice: function () {
        var calculation = purchase2.shoes * purchase2.statusTax
        console.log("total price =", calculation)
    }
}
purchase1.totalPrice()
purchase2.totalPrice()
