// test strings in document
describe('variables declared by the name of', () => {

  beforeEach(() => {
    this.myNoun = 'cat';
      this.constTwo = 'I said, "Hey Jude"';
      this.constThree = "I said, 'Hey Jude'";
      this.constFour = "I said Hey Jude come here";
      this.character = this.myNoun.charAt(1);
      this.emptyString = this.constTwo.charAt(40);
      this.indexSubstring = this.constTwo.indexOf('Jude');
      this.notFoundIndex = this.constTwo.indexOf('jude');
      this.noString = '';
      this.arrayModel = [];
      this.arrayOfLetters = this.myNoun.split('');
      this.arrayOfOneChosenLetter = this.constFour.split('e');
  });

  describe('myNoun, myVerb, myAdverb, myAdjective', () => {

    it('its value should be a string', () => {
      expect(this.myNoun).toBe('cat');
    });

    it('can be a string with either single or double quotes', () => {
    expect(this.constTwo).toEqual(this.constTwo);
    });

    it('should use single quotes to contain double quotes', () => {
		expect(this.constTwo).toEqual('I said, "Hey Jude"');
	});

  it('should use double quotes to contain single quotes', () => {
    expect("I said, 'Hey Jude'").toEqual(this.constThree);
  });

    it("should NOT be a number", () => {
      expect(this.constTwo === 2).toBeFalsy();
    });

    // character and access to strings
    it('should use charAt() to access a character from string', () => {
      expect(this.character).toEqual('a');
    });

    it('should return an empty string if index is larger than the length of the string', () => {
      expect(this.emptyString === '').toBeTruthy();
    });

    it('should use indexOf() to find the index of the "write your word, letter from the sting" substring', () => {
      expect(this.indexSubstring).toEqual(13);
    });

    it("should return -1 if isn't a substring to be found by indexOf()", () => {
      expect(this.notFoundIndex === -1).toBeTruthy();
    });
// array from string
    it('should return an array length > 0 if there is a string when using split("") method', () => {
      expect(this.arrayOfLetters.length !== this.arrayModel.length).toBeTruthy();
    });

    it('should return an array length = 0 if there is an empty string when using split("") method', () => {
      expect(this.noString.length == this.arrayModel.length).toBeTruthy();
    });

    it('should return an array with the same letters than the string when using split("") method', () => {
      expect(this.arrayOfLetters).toEqual(jasmine.arrayContaining(['c', 'a', 't']));
    });

    it("shouldn't create an array with letters that aren't in the string when using split('') method", () => {
      expect(this.arrayOfLetters).not.toEqual(jasmine.arrayContaining(['d', 'o', 'g']));
    });

    it('should erase the character choosen in the split("character of your choice") method', () => {
      expect(this.arrayOfOneChosenLetter.includes('e')).toBeFalsy();
    });
  });



});
