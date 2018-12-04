const Car = function(numWheels, manufacturer, make) {
  this.numWheels = numWheels;
  this.manufacturer = manufacturer;
  this.make = make;
};

Car.prototype = (function() {
  const go = function() {
    console.log("pressGasPedal:", "Rotate Wheels");
  };

  const stop = function() {
    console.log("pressBrakePedal:", "Apply Break Pads");
  };

  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  };
})();

console.log("\n*** Revealing Prototype Pattern ***");

const nascar = new Car(8, "Nascar", "93 Porlap");

console.log("New Nascar: ", nascar);
nascar.pressGasPedal();
nascar.pressBrakePedal();
