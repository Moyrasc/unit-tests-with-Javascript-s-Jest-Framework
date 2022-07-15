

const fromDollarToYen = function (Yen){
    let valueInYen = Yen * 127.9;
    return valueInYen;

}


const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromYanToPound = (yan) => {
    let valueInYan = yan*0.8;
    return valueInYan

}

module.exports = {fromEuroToDollar, fromYanToPound, fromDollarToYen }