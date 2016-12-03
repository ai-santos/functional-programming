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

// Challenge 4

// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// Use reduce() to calculate the sum of the values in an array

function sum(array) {
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
  return array.reduce(function(prev, cur) {
    return prev + cur
  })
}

// Challenge 5

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand


// Calculating with Functions

function zero(func) {
  return func ? func(0) : 0
}
function one(func) {
  return func ? func(1) : 1
}
function two(func) {
  return func ? func(2) : 2
}
function three(func) {
  return func ? func(3) : 3
}
function four(func) {
  return func ? func(4) : 4
}
function five(func) {
  return func ? func(5) : 5
}
function six(func) {
  return func ? func(6) : 6
}
function seven(func) {
  return func ? func(7) : 7
}
function eight(func) {
  return func ? func(8) : 8
}
function nine(func) {
  return func ? func(9) : 9
}

function plus(rightNumber) {
  return function (leftNumber) {
    return leftNumber + rightNumber
  }
}
function minus(rightNumber) {
  return function (leftNumber) {
    return leftNumber - rightNumber
  }
}
function times(rightNumber) {
  return function (leftNumber) {
    return leftNumber * rightNumber
  }
}
function dividedBy(rightNumber) {
  return function (leftNumber) {
    return leftNumber / rightNumber
  }
}

// Challenge 6

// Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:
//
// f3 = compose( f1 f2 )
//    Is equivalent to...
// f3(a) = f1( f2( a ) )
// Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!
//
// compose(f , g)(x)
// => f( g( x ) )
// This kata is not available in haskell; that would be too easy!

// Function Composition

function compose(f,g) {
  // Compose the two functions here!
  return function(...args) {
    return f(g.apply(g, args))
  }
}
