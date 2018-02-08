(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    var Vehicle = require ("./carClass");
    document.getElementById("mycar").onclick = function () { newCar(); };
    function newCar() {
        var color = document.getElementById("color").value;
        var doors = document.getElementById("doors").value;
        var mpg = document.getElementById("mpg").value;
        var carSpecies = document.getElementById("carSpecies").value;
        var carObject = {
            incomingColor: color,
            incomingDoors: door,
            incomingMpg: mpg,
            incomingcarSpecies: carSpecies,
    };
    
    },{"./carClass":2}],2:[function(require,module,exports){
    "use strict";
    exports.__esModule = true;
    var Car = /** @class */ (function () {
        function Car(labelledObj) {
            this.color = labelledObj.incomingColor;
            this.doors = labelledObj.incomingDoors;
            this.mpg = labelledObj.incomingMpg;
            this.carSpecies = labelledObj.incomingcarSpecies;
        }
        return Car;
    }());
    exports.Car = Car;
    
    },{}]},{},[1,2]);