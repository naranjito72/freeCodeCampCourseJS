// test strings in document
describe('variables declared by the name of', () => {

  beforeEach(() => {
      this.myNoun         = 'cat';
      this.myAdjective    = "big";
      this.myVerb         = " ran ";
      this.myAdverb       = "quickly";
      this.constTwo       = 'I said, "Hey Jude"';
      this.constThree     = "I said, 'Hey Jude'";
      this.constFour      = "I said Hey Jude come here";
      this.character      = this.myNoun.charAt(1);
      this.emptyString    = this.constTwo.charAt(40);
      this.indexSubstring = this.constTwo.indexOf('Jude');
      this.notFoundIndex  = this.constTwo.indexOf('jude');
      this.noString       = '';
      this.arrayModel     = [];
      this.arrayOfLetters = this.myNoun.split('');
      this.arrayOfOneChosenLetter = this.constFour.split('e');
  });
describe('mystrings', function(){
it('describes a function', function(){
  expect(typeof(returnStrings)).toBe('function')
});
});
describe("class Strings", () => {
  let stringsToBeRead;
  let noun = 'dog';
  let verb   = 'jump';
  let adverb   = 'slowly';
  let adjective   = 'small';

  beforeEach (function () {
    stringsToBeRead = new Strings(noun, adjective, verb, adverb );
  });
  
describe("constructor function", () => {
  it("should receive 4 arguments (noun, verb, adverb & adjective)", () => {
    expect(Strings.length).toEqual(4);
  });
  
  describe('methods class setMyNoun() and getMyNoun()', () => {
    it('get getMyNoun() should be public function and return the string settled in class constructor or setMyNoun()', () => {
      expect(typeof(stringsToBeRead.getMyNoun)).toBe('string');
      expect((stringsToBeRead.getMyNoun === 'lion')).toBeFalsy();
      expect((stringsToBeRead.getMyNoun === 'dog')).toBeTruthy();
    });
    it('set setMyNoun() should be a public function and return the string that we introduced as parameter', () => {
      expect((stringsToBeRead.setMyNoun = 'lion')).toEqual('lion');
      expect((stringsToBeRead.getMyNoun === 'lion')).toBeTruthy();
      expect(stringsToBeRead.setMyNoun = noun).toEqual(noun);
    });  
  });

  describe('methods class setMyVerb() and getMyVerb()', () => {
    it('get getMyVerb() should be public function and return the string settled in class constructor or setMyVerb()', () => {
      expect(typeof(stringsToBeRead.getMyVerb)).toBe('string');
      expect((stringsToBeRead.getMyVerb === 'eat')).toBeFalsy();
      expect((stringsToBeRead.getMyVerb === verb)).toBeTruthy();
    });
    it('set setMyVerb() should be a public function and return the string that we introduced as parameter', () => {
      expect((stringsToBeRead.setMyVerb = 'eat')).toEqual('eat');
      expect((stringsToBeRead.getMyVerb === 'eat')).toBeTruthy();
      expect(stringsToBeRead.setMyVerb = verb).toEqual(verb);
    });  
  });

  describe('methods class setMyAdverb() and getMyAdverb()', () => {
    it('get getMyAdverb() should be public function and return the string settled in class constructor or setMyAdverb()', () => {
      expect(typeof(stringsToBeRead.getMyAdverb)).toBe('string');
      expect((stringsToBeRead.getMyAdverb === 'calmly')).toBeFalsy();
      expect((stringsToBeRead.getMyAdverb === adverb)).toBeTruthy();
    });
    it('set setMyAdverb() should be a public function and return the string that we introduced as parameter', () => {
      expect((stringsToBeRead.setMyAdverb = 'luvely')).toEqual('luvely');
      expect((stringsToBeRead.getMyAdverb === 'luvely')).toBeTruthy();
      expect(stringsToBeRead.setMyAdverb = adverb).toEqual(adverb);
    });  
  });

  describe('methods class setMyAdjective() and getMyAdjective()', () => {
    it('get getMyAdjective() should be public function and return the string settled in class constructor or setMyAdjective()', () => {
      expect(typeof(stringsToBeRead.getMyAdjective)).toBe('string');
      expect((stringsToBeRead.getMyAdjective === 'lion')).toBeFalsy();
      expect((stringsToBeRead.getMyAdjective === adjective)).toBeTruthy();
    });
    it('set setMyAdjective() should be a public function and return the string that we introduced as parameter', () => {
      expect((stringsToBeRead.setMyAdjective = 'tall')).toEqual('tall');
      expect((stringsToBeRead.getMyAdjective === 'tall')).toBeTruthy();
      expect(stringsToBeRead.setMyAdjective = adjective).toEqual(adjective);
    });  
  });

  describe('properties class', () => {
    it('should be a string', () => {
      expect(stringsToBeRead.getMyNoun).toEqual(noun);
    });
    it(`should be a string `, () => {
      expect(stringsToBeRead.getMyVerb).toEqual(verb);
    });
    it('should be a string', () => {
      expect(stringsToBeRead.getMyAdverb).toEqual(adverb);
    });
    it('should be a string', () => {
      expect(stringsToBeRead.getMyAdjective).toEqual(adjective);
    });
  })
  describe('constructor parameters', () => {
   
      const ALLSTRINGS = [
        {case: noun, answer: 'dog'},
        {case: verb, answer: 'jump'},
        {case: adverb, answer: 'slowly'},
        {case: adjective, answer: 'small'}
      ];
      ALLSTRINGS.forEach((item, i) => {
        it(`should return all strings parameter constructor. Parameter: ${item.case} return: ${item.answer} `, () => {
          expect(item.case).toEqual(item.answer);
        });
        it(`should return the first letter if we use charAt(1)method param constructor number: ${i+1} return: ${item.answer.charAt(1)}`, ()=>{
          expect(item.case.charAt(1)).toEqual(item.answer.charAt(1));
        });
        it(`should return and empty string if charAt() method is bigger than the word. Param constructor number: ${i+1} return string length: ${item.answer.charAt(50).length}`, () => {
          expect(item.case.charAt(50).length).toEqual(item.answer.charAt(40).length);
          expect(item.case.charAt(25) === '').toBeTruthy();
          expect(item.answer.charAt(25).length == 0).toBeTruthy();
      });
       
  });
});

})
  describe('noun, verb, adverb, adjective', () => {

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
// split from string
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
    // concatenation
    it('should concatenate strings when using the plus(+) sign', () => {
      this.wordBlanks = "The" + " " + this.myAdjective + " " + this.myNoun +  this.myVerb + " " + this.myAdverb + " " + "behind the bushes.";
      expect(this.wordBlanks).toEqual('The big cat ran  quickly behind the bushes.');
    });
    // formating
    it('should get all in upper capital when using toUpperCase()', () => {
      expect(this.myNoun.toUpperCase() === 'CAT').toBeTruthy();
    });

    it('should get all in lower capital when using toLowerCase()', () => {
      expect(this.myNoun.toUpperCase().toLowerCase() === 'cat').toBeTruthy();
    });

    it('should trim white spaces in front when using trim() method', () => {
      expect(this.myVerb.trim() === 'ran').toBeTruthy();
    });

    it('should erase all white spaces when using replace(/\s/g, "")', () => {
      expect(this.myVerb.replace(/\s/g, '') === 'ran').toBeTruthy();
    });

  });

})
});
