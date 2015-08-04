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

var firstPerson = {
  height: 4,
  name: "George",
  age: 5
};

var secondPerson = {
  height: 2,
  name: "Cathy",
  age: 2
};

var thirdPerson = {
  height: 6,
  name: "Jordan",
  age: 18
};

var fourthPerson = {
  height: 5.7,
  name: "Alex",
  age: 23
};

  // *** RIDES *** //
var superman = {
  minHeight: 5,
  maxHeight: 7
};

var galleon = {
  minHeight: 4,
  maxHeight: 8
};

var babyRacer = {
  minHeight: 2,
  maxHeight: 5
};
//------- END OF OBJECTS -------//
//------- FUNCTION -------//
// compares height to determine if people can ride
var measure = function(person, ride) {
  if ((person.height < ride.minHeight) || (person.height > ride.maxHeight)) {
    return false;
  }
  else {
    return true;
  }
};

// THESE WORK
// console.log(measure(firstPerson, superman));
// console.log(measure(secondPerson, superman));
// console.log(measure(thirdPerson, superman));
// console.log(measure(firstPerson, babyRacer));
// console.log(measure(thirdPerson, babyRacer));
