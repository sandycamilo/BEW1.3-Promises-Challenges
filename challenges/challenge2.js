/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct. 'Hello there, Ducky' and 'MAKE SCHOOL IS AWESOME!!!'
 * 
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run? If we add an int instead of
 *    a string and run greet it will print console.log('Received an error!') since it catches the error. 
 *    It then prints 'Name must be a string!' when the function runs and identifies that name does not equal to a string. 
 *    Uppercase() does not run because it does not print the console log  the greet result. The uppercase() function 
 *    is only executed when the greet() function logs the greeting. 
 * 
 * 
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again. We get this as an output: 
 *     Hello there, Make School is Awesome!!! - We add a string so it returns the greeting + the new string.
       Received an error! - When the function is called it detects the error and logs it.
       Argument to uppercaser must be string - We change string to int and when uppercase() function runs, we get an output stating 'Argument to uppercaser must be string' because 
       'type of str'  does not equal to a string.
 * 
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *******************************************************************************
 */

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

function spacer(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof str === 'string') { 
        newString = ""
        for (letter of str) {
          newString += letter + " "
        }
          resolve(newString);
      } else {
          reject('Name must be a string!');
      }
    }, 1600);
  });
}


name = 'kau'
my_str = 'Make School is Awesome!!!'
spacename = 'flower'


greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(spacename);
    })
    .then((spacerResult) => {
      console.log(spacerResult)
    }).catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });

