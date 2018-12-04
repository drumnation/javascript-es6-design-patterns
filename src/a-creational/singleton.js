const printer = (function() {
  let printerInstance;

  function create() {
    function print() {
      console.log("print:", "printing");
    }

    function turnOn() {
      console.log("turnOn:", "warming up...");
      console.log("turnOn:", "checking for paper...");
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };
})();

/* The create method is private because we do not want the client to access this, however, notice that the getInstance method is public. Each officer worker can generate a printer instance by interacting with the getInstance method, like so: */

console.log("\n*** Singleton Pattern ***");

var officePrinter = printer.getInstance();

console.log("officePrinter:", officePrinter);
officePrinter.turnOn();
officePrinter.print();
