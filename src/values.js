function AddNumbers() {
}
;
AddNumbers.prototype.addThree = function (num) {
    this.checkMe = AddNumbers.prototype.checkIfNumber(num);
    (this.checkMe != undefined) ? this.addThreeOperation = num + 3 :
        this.addThreeOperation = undefined;
};
AddNumbers.prototype.addFive = function (num) {
    this.checkMe = AddNumbers.prototype.checkIfNumber(num);
    (this.checkMe != undefined) ? this.addFiveOperation = num + 5 :
        this.addFiveOperation = undefined;
};
AddNumbers.prototype.checkIfNumber = function (item) {
    let result;
    this.checkItem = isNaN(item);
    (!this.checkItem) ? result = item : result = undefined;
    return result;
};
