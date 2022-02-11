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
        })
    });
});