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
var Car = function(milesPerGallon, gallonsInTank, name){
  this.milesPerGallon = milesPerGallon;
  this.gallonsInTank = gallonsInTank;
  this.name = name;
};
var nissan = new Car(24, 8, 'nissan');

var toyota = new Car(20, 6, 'toyota');

var ninja = new Car(64, 4, 'ninja');

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
    return "The " + car.name + " can't make the trip to " + route.destination + " with " + car.gallonsInTank + " gallons of gas. Better fuel up!";
  }
  else {
    return "The " + car.name + " can make this trip to " + route.destination + " with its current " + car.gallonsInTank + " gallons of gas. Have fun on your trip to " + route.destination + " in " + route.location + "!";
  }
};

$('#miles').append('<ul></ul>');
$('#miles').children().append(expedition(nissan, cheyeneMountain), '<br><br>');
$('#miles').children().append(expedition(nissan, grandJunction), '<br><br>');
$('#miles').children().append(expedition(nissan, sun), '<br><br>');

$('#miles').children().append(expedition(toyota, cheyeneMountain), '<br><br>');
$('#miles').children().append(expedition(toyota, grandJunction), '<br><br>');
$('#miles').children().append(expedition(toyota, sun), '<br><br>');

$('#miles').children().append(expedition(ninja, cheyeneMountain), '<br><br>');
$('#miles').children().append(expedition(ninja, grandJunction), '<br><br>');
$('#miles').children().append(expedition(ninja, sun));

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
