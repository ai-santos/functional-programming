require('../../support');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value
// inside a functor.

var Container = function(x) {
  this.__value = x;
}

Container.of = function(x) { return new Container(x); };

var ex1 = map(add(1))



// Exercise 2
// ==========
// Use _.head to get the first element of the list.
var Identity = Container

var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

var ex2 = _.map(_.head)(xs);

ex2

// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user.
var Maybe = Container

var safeProp = _.curry(function(x, o) {
  return Maybe.of(o[x]);
});

var user = {
  id: 2,
  name: 'Albert',
};

var ex3 = _.compose(_.map(_.head), safeProp('name'))(user);


// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement.

Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};

// var ex4 = function(n) {
//   if (n) {
//     return parseInt(n);
//   }
// };

var ex4 = function(n) {
  return Maybe.of(n).map(parseInt);
}


// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title.

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function(i) {
  return new Task(function(rej, res) {
    setTimeout(function() {
      res({
        id: i,
        title: 'Love them futures',
      });
    }, 300);
  });
};

var ex5 = undefined;



// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error.

var showWelcome = _.compose(_.concat( "Welcome "), _.prop('name'));

var checkActive = function(user) {
  return user.active ? Right.of(user) : Left.of('Your account is not active');
};

var ex6 = undefined;



// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise.

var ex7 = function(x) {
  return undefined; // <--- write me. (don't be pointfree)
};



// Exercise 8
// ==========
// Use ex7 above and Either as a functor to save the user if they are valid or
// return the error message string. Remember either's two arguments must return
// the same type.

var save = function(x) {
  return new IO(function() {
    console.log('SAVED USER!');
    return x + '-saved';
  });
};

var ex8 = undefined;
