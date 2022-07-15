

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})
test("One Yan is 153.48", function(){
    // importo la funcion desde app.js
    const { fromYanToPound  } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYanToPound (10)).toBe(8); 
})
test("One Yen 127.9", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen  } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen (10)).toBe(1279); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})