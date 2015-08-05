// *** EXAMPLE OBJECTS *** //

// var car = {
//   milesPerGallon: 20,
//   gallonsInTank: 3
// };
//
// var route = {
//   miles: 200,
//   destination: "Boulder",
//   location: "Fancy Land"
// };

//------- OBJECTS -------//
  // *** CARS *** //
var Car = function(milesPerGallon, gallonsInTank){
  this.milesPerGallon = milesPerGallon;
  this.gallonsInTank = gallonsInTank;
};
var nissan = new Car(24, 8);

var toyota = new Car(20, 6);

var ninja = new Car(64, 4);

  // *** DESTINATIONS *** //
var Route = function(totalMiles, destination, location) {
  this.totalMiles = totalMiles;
  this.destination = destination;
  this.location = location;
};

var cheyeneMountain = new Route(70, 'Cheyene Mountain', 'Colorado Springs, CO');

var grandJunction = new Route(150, 'Grand Junction', 'Grand Junction, CO');

var sun = new Route(9.3e+10, 'Sun', 'Orion Arm, Milky Way Galaxy');
//------- END OF OBJECTS -------//

var expedition = function(car, route) {
  if((car.milesPerGallon * car.gallonsInTank) < route.totalMiles) {
    return "This car can't make this trip with " + car.gallonsInTank + " gallons of gas. Better fuel up!";
  }
  else {
    return "This car can make this trip with its current " + car.gallonsInTank + " gallons of gas. Have fun on your trip to " + route.destination + " in " + route.location + "!";
  }
};

// THESE WORK //
console.log(expedition(nissan, cheyeneMountain));
console.log(expedition(nissan, grandJunction));
console.log(expedition(nissan, sun));

console.log(expedition(toyota, cheyeneMountain));
console.log(expedition(toyota, grandJunction));
console.log(expedition(toyota, sun));

console.log(expedition(ninja, cheyeneMountain));
console.log(expedition(ninja, grandJunction));
console.log(expedition(ninja, sun));
