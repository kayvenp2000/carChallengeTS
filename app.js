"use strict";
exports._esModule = true;
var Vehicle = require("./carClass");
document.getElementById("mycar").onclick = function () { newCar(); };
function newCar() {

    var color = document.getElementById("color").value;
    var doors = document.getElementById("doors").value;
    var mpg = documment.getElementById("mpg").value;
    var carSpecies = document.getElementById("carSpecies").value;
    var carObject = {
        incomingColor: color,
        incomingDoors: door,
        incomingMpg: mpg,
        incomingcarSpecies: carSpecies,
    };

    var personsCar = new Vehicle.car(carObject);
    console.log(mycar);

}