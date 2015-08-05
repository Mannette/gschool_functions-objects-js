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
var Ride = function(minHeight, maxHeight, name) {
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
  this.name = name;
};

var superman = new Ride(5, 7, 'Superman');

var galleon = new Ride(4, 8, 'Galleon');

var babyRacer = new Ride(2, 5, 'Baby Racer');
//------- END OF OBJECTS -------//
//------- FUNCTION -------//
// compares height to determine if people can ride
var measure = function(person, ride) {
  if ((person.height < ride.minHeight) || (person.height > ride.maxHeight)) {
    return person.name + " can ride the " + ride.name;
  }
  else {
    return person.name + " can't ride the " + ride.name;
  }
};

// Ride.prototype.tallEnough = function() {
//   return this.minHeight;
// };
$('#rides').append('<ul></ul>');
$('ul').append(measure(george, superman), '<br><br>');
$('ul').append(measure(cathy, babyRacer), '<br><br>');
$('ul').append(measure(jordan, galleon), '<br><br>');
$('ul').append(measure(alex, babyRacer), '<br><br>');

// console.log(superman.tallEnough());

// THESE WORK
console.log(measure(george, superman));
console.log(measure(cathy, babyRacer));
console.log(measure(jordan, galleon));
console.log(measure(alex, babyRacer));
