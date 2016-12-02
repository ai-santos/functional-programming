// Challenge 1

// Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."


// Sentences with Functions
function maybeAddString(string) {return string ? ' ' + string : '.'}

function Adam(string) {return 'Adam' + maybeAddString(string)}
function has(string) {return 'has' + maybeAddString(string)}
function a(string) {return 'a' + maybeAddString(string)}
function dog(string) {return 'dog' + maybeAddString(string)}
function The(string) {return 'The' + maybeAddString(string)}
function name(string) {return 'name' + maybeAddString(string)}
function of(string) {return 'of' + maybeAddString(string)}
function the(string) {return 'the' + maybeAddString(string)}
function is(string) {return 'is' + maybeAddString(string)}
function also(string) {return 'also' + maybeAddString(string)}




// Challenge 2

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Flatten and sort an array

function flattenAndSort(arrays) {
  // Good luck, brave code warrior!
  var result = []
  arrays.forEach(function(array) {
    array.forEach(function(element) {
      result.push(element)
    })
  })
  
  return result.sort(function(a,b) {
    return a - b
  });
}

// Challenge 3

// A colleague asked if you can help him fixing his function. It seems it doesn't always parse Integers correctly.

// Parse integers in array

var parseNumbers = function(intStrs) {
  var results = [];
  for (var i = 0; i < intStrs.length; i++) {
    results.push(parseInt(intStrs[i]));
  } 
  return results;
}

  