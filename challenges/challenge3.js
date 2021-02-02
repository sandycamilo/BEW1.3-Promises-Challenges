/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type? The async and await keywords enable
 *    asynchronous, promise-based behavior ~ The behavior of async/await is 
 *    similar to combining generators and promises. Async functions always return a promise ~ 
 *    if not, it will be it will be wrapped in a promise. 
 *    If there is an await expression inside the function body, 
 *    however, the async function will always complete asynchronously.
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function? 
 *    Promise { <pending> } is printed on the terminal ~ 
 * 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 *    HELLO THERE, DUCKY - '.then' awaits values in the promise ~ it attaches 
 *    callbacks for the resolution and/or rejection of the Promise.
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
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
      }, 500);
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
        }, 500);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    return uppercasedGreeting
}

function spacer(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === "string") {
        newStr = "";
        for (letter of str) {
          newStr += letter + " ";
        }
        resolve(newStr);
      } else {
        reject("Argument to spacer must be string");
      }
    }, 2000);
  });
}

/* Uncomment me! #1 */
// result = greetAndUppercase('Ducky')
// console.log(result)


/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function (result) {
      return spacer(result);
    })
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })