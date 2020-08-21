// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Answer: The nest function can access the variable "internal" because the variable is defined within the same scope as the nested function. The nested fucntion would not be able to access the external variable for the opposite reason, it's been defined outside of the top-level function scope. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(q){
  let counter = 1;
  let results = 0;
  while (q >= counter){
    results += counter;
    counter +=1;
  }
  return results;
}

// summation(5) //=>15