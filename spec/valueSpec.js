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
        it('if numerical string added, should return a numerical value', () => {
           functionAddNumber.addThree('3');
           expect(functionAddNumber.addThreeOperation === 6).toBeTruthy();
        });
        it('if string added, should not return a string value', () => {
           functionAddNumber.addThree('hola');
           expect(functionAddNumber.addThreeOperation === 'hola3').toBeFalsy();
        });
        it('if string added, should return an "undefined" as a value', () => {
           functionAddNumber.addThree('hola');
           expect(functionAddNumber.addThreeOperation === undefined).toBeTruthy();
        });
    });
    describe('adding numerical functions. AddFive()', () => {
        it('should be a function', () => {
            expect(typeof(functionAddNumber.addFive)).toEqual('function');
        });
        it('should return a numerical value', () => {
           functionAddNumber.addFive(5);
           expect(functionAddNumber.addFiveOperation === 10).toBeTruthy();
        });
        it('if string added, should not return a numerical value', () => {
           functionAddNumber.addFive('3');
           expect(functionAddNumber.addFiveOperation === 8).toBeTruthy();
        });
        it('if string added, should not return a numerical value', () => {
           functionAddNumber.addFive('3');
           expect(functionAddNumber.addFiveOperation === '35').toBeFalsy();
        });
        it('if string added, should not return a string value', () => {
           functionAddNumber.addFive('hola');
           expect(functionAddNumber.addFiveOperation === 'hola5').toBeFalsy();
        });
        it('if a numerical string added, should return a numerical value', () => {
           functionAddNumber.addFive('3');
           expect(functionAddNumber.addFiveOperation === undefined).toBeFalsy();
        });
        it('if a string added, should return "undefined" as a value', () => {
           functionAddNumber.addFive('hola');
           expect(functionAddNumber.addFiveOperation === undefined).toBeTruthy();
        });
    });
});