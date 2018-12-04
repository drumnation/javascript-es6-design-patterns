var Car = function(numWheels, manufacturer, make) {
  this.numWheels = numWheels;
  this.manufacturer = manufacturer;
  this.make = make;
};

Car.prototype = {
  go: function() {
    console.log("go:", "Rotate Wheels");
  },
  stop: function() {
    console.log("stop:", "Apply Break Pads");
  }
};

console.log("\n*** Prototype Pattern ***");

const truck = new Car(6, "Ford", "89 Pickup");

console.log("New Truck: ", truck);
truck.go();
truck.stop();
