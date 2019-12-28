const contoh = require('../example');

describe('contoh',()=>{
    test('should return positif if parameter positive',()=>{
        const  result = contoh.contoh(1);
        expect(result).toBe(1);
    });

    test('should return positif if parameter negatif',()=>{
        const  result = contoh.contoh(-1);
        expect(result).toBe(1);
    });

    test('should return 0 if parameter 0',()=>{
        const  result = contoh.contoh(0);
        expect(result).toBe(0);
    });
});


describe('find location',  () =>{
    it('should return location',  ()=> {
        const  actual = contoh.getCustomer();
        //too spesific
        expect(actual).toEqual({
            id:1,
            username:"dedy"
        })
    });

    it('should return locations',  ()=> {
        const  actual = contoh.getCustomer();
        //too spesific
        expect(actual).toMatchObject({
            id:1,
            username:"dedy"
        })
    });
});
