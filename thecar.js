"use strict"
exports._edModule = true;
var car = /** @class */ (function () {
    function Car (labelledObj) {
        this.color = labelledObj.incomingColors;
        this.doors = labelledObj.incomingDoors;
        this.mpg = labelledObj.incomingMpg;
        this.carSpecies = labelledObj.incoming.carSpecies;

    }

    return car;
}());

exports.car = car;