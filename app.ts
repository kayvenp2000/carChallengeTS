import * as Vehicle from ("./carClass");
(<HTMLInputElement>document.getElementById("mycar")).onclick = function() {mycar()};

function mycar(){

    let color = (<HTMLInputElement>document.getElementById("color")).value;
    let doors = (<HTMLInputElement>document.getElementById("doors")).value;
    let mpg = (<HTMLInputElement>document.getElementById("mpg")).value;
    let carSpecies = (<HTMLInputElement>document.getElementById("carSpecies")).value;

    let carObject = {
        incomingColor: color,
        incomingDoors: doors,
        incomingMpg: mpg,
        incomingcarSpecies: carSpecies
}

    let personsCar = new Vehicle.car(carObject);
    console.log(mycar);
}