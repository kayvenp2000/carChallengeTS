export interface newCar{
    incomingColor: any,
    incomingDoors: any,
    incomingMpg: any,
    incomingcarSpecies: string,
}
export class Car {
    color: any;
    doors: any;
    mpg: any;
    carSpecies: string;

    constructor(labelledObj: newCar) {
        this.color = labelledObj.incomingColor;
        this.doors = labelledObj.incomingDoors;
        this.mpg = labelledObj.incomingMpg;
        this.carSpecies = labelledObj.incomingcarSpecies;
     }
  }