// Word Blanks
// const myNoun: string      = "dog";
// const myAdjective: string = "big";
// const myVerb: string      = "ran";
// const myAdverb: string    = "quickly";
// const WORDBLANKS: string = "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " " + "behind the bushes.";
function returnStrings(str) {
}
class Strings {
    // constructor
    constructor(noun, adjective, verb, adverb) {
        // properties
        this.myNoun = "dog";
        this.myAdjective = "big";
        this.myVerb = "ran";
        this.myAdverb = "quickly";
        this.myNoun = noun;
        this.myAdjective = adjective;
        this.myVerb = verb;
        this.myAdverb = adverb;
    }
    // getters 
    get getMyNoun() {
        return this.myNoun;
    }
    ;
    get getMyAdjective() {
        return this.myAdjective;
    }
    ;
    get getMyVerb() {
        return this.myVerb;
    }
    ;
    get getMyAdverb() {
        return this.myAdverb;
    }
    ;
    // setters
    set setMyNoun(noun) {
        this.myNoun = noun;
    }
    ;
    set setMyAdjective(adjective) {
        this.myAdjective = adjective;
    }
    ;
    set setMyVerb(verb) {
        this.myVerb = verb;
    }
    ;
    set setMyAdverb(adverb) {
        this.myAdverb = adverb;
    }
    ;
    // methods
    toString() {
        const WORDBLANKS = "The" + " " + this.myAdjective + " " + this.myNoun + " " + this.myVerb + " " + this.myAdverb + " " + "behind the bushes.";
        console.log(WORDBLANKS);
        return WORDBLANKS;
    }
}
