describe('addNumbers', () => {
    let functionAddNumber;
    let num = 0;

    beforeEach(() => {
        functionAddNumber = new AddNumbers();
    });
    // is a function
    describe('addNumbers ', () => {
        it('should be a function', () => {
            expect(typeof(AddNumbers)).toBe('function')
        });
    });
    // test the returns
    describe('Values or undefined returned by the function', () => {
        it('returnUndefined() should return an "undefined" value in return', () => {
            expect(functionAddNumber.undefinedValueReturn).toEqual(undefined);
        });
        it('retunUndefined() should NOT return any value whatsoever but undefined', () => {
            expect(functionAddNumber.undefinedValueReturn).not.toEqual(5)
        });
    });
    // function with returns
    describe('adding numerical functions. AddThree()', () => {
        it('should be a function', () => {
            expect(typeof(functionAddNumber.addThree)).toEqual('function');
        });
        it('should return a numerical value', () => {
           functionAddNumber.addThree(5);
           expect(functionAddNumber.addThreeOperation === 8).toBeTruthy();
        });
        it('if string added, should not return a numerical value', () => {
           functionAddNumber.addThree('hola');
           expect(functionAddNumber.addThreeOperation === 8).toBeFalsy()
           expect(functionAddNumber.addThreeOperation === 'hola3').toBeFalsy()
           expect(functionAddNumber.addThreeOperation === undefined).toBeTruthy()
        });
    });
});