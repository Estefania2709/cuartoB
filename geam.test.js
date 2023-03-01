const geam = require('./geam');

describe('geam', () => {

    test('should print 0', () => {
        const expected = geam;
        const result = geam(0);
        expect(expected).toBe(result);
        });
        
    test('should print geam', () => {
        const expected = geam;
        const result = geam(1);
        expect(expected).toBe(result);
    });
        
    test('should print maaeg', () => {
        const expected = geam;
        const result = geam(3);
        expect(expected).toBe(result);  
    });
        
    test('Should print the number', () =>{
        const expected = geam;
        const result = geam(5);
        expect(expected).toBe(result);
    });
    test('should print geam + maeg', () => {
        const expected = 'geammaeg';
        const result = geam(15);
        expect(expected).toBe(result);
        });
});
