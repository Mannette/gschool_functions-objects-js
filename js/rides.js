// *** EXAMPLE OBJECTS *** //

// var child = {
//   height: 3,
//   name: "Julian",
//   age: 3
// };
//
// var child2 = {
//   height: 4,
//   name: "Cero",
//   age: 4,
// };
//
// var ride = {
//   minHeight: 3,
//   maxHeight: 7
// };
//
// var ride2 = {
//   minHeight: 4,
//   maxHeight: 7
// };

//------- OBJECTS -------//
  // *** PEOPLE *** //
var Person = function(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};
var george = new Person(4, 'George', 5);

var cathy = new Person(2, 'Cathy', 2);

var jordan = new Person(6, 'Jordan', 18);

var alex = new Person(5.7, 'Alex', 23);

  // *** RIDES *** //
var Ride = function(minHeight, maxHeight) {
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
};

var superman = new Ride(5, 7);

var galleon = new Ride(4, 8);

var babyRacer = new Ride(2, 5);
//------- END OF OBJECTS -------//
//------- FUNCTION -------//
// compares height to determine if people can ride
var measure = function(Person, Ride) {
  if ((Person.height < Ride.minHeight) || (Person.height > Ride.maxHeight)) {
    return false;
  }
  else {
    return true;
  }
};

// THESE WORK
console.log(measure(george, superman));
console.log(measure(cathy, babyRacer));
console.log(measure(jordan, galleon));
console.log(measure(alex, babyRacer));
