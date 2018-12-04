// Programmatic Example Taking our security door example from above. Firstly we have the door interface and an implementation of door

/*
Door interface :

open()
close()
*/

class LabDoor {
  open() {
    console.log("Opening lab door");
  }

  close() {
    console.log("Closing the lab door");
  }
}
// Then we have a proxy to secure any doors that we want

class Security {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big no! It ain't possible.");
    }
  }

  authenticate(password) {
    return password === "ecr@t";
  }

  close() {
    this.door.close();
  }
}

console.log("\n*** Proxy Pattern ***");
// And here is how it can be used

const door = new Security(new LabDoor());
door.open("invalid"); // Big no! It ain't possible.

door.open("ecr@t"); // Opening lab door
door.close(); // Closing lab door
