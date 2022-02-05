describe('Declared Arrays', () => {

  beforeEach(() => {
    this.myArray = ['string', 1405];
    this.emptyArr = [];
  });

  describe('The declared arrays in the document should all have the characteristics of arrays', () => {

    it('all the arrays declare in the array.js document must be arrays', ()=> {
      expect(this.myArray).toEqual(jasmine.arrayContaining(['string', 1405]));
    });

    it('should not have any length when is an empty array', () => {
      expect(this.emptyArr.length).toBe(0);
    });

    it('should return undefined value when the array is empty', () => {
      expect(this.emptyArr.value).toBe(undefined);
    });
  });
});
