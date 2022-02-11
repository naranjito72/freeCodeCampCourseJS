function AddNumbers() {
}
;
AddNumbers.prototype.addThree = function (num) {
    this.addThreeOperation = num + 3;
};
AddNumbers.prototype.addFive = (num) => {
    this.addFiveOperation = num + 5;
};
AddNumbers.prototype.returnUndefined = () => undefined;
