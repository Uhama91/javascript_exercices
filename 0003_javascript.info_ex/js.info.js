function showPrime(n){
    for (let i = 2; i<n; i++){
        if (!isPrime(i)) continue;

        alert(i);
    }
}
function isPrime(n){
    for(let i = 2; i<n; i++){
        if(n%i==0) return false;
    }
    return true;
}

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
//Using OR || 

//function checkAge(age) {
  //  if (age > 18) {
    //  return true;
   // } else {
    //  return confirm('Did parents allow you?');
   // }
 // }

  const checkAge = (age) => {
    age > 18 ? true : confirm("Did parents allow you?");
  }

//   const checkAge1 = (age) => {
//     (age <= 18 || age > 18) = confirm("Did parents allow you?");
//   } WRONG!!!!

  const checkAge1 = (age) => {
    return age > 18 || confirm("Did parents allow you?");
  }

console.log(checkAge1(19))

//   Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

const min = (a, b) => {
    return a<b? a : b;
}

console.log(min(2, 5))

// Function pow(x,n)
// importance: 4
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.

const pow = (x, n) => {
    let powResult = 1;
    for(let i = 0; i <= n; i++){
        powResult *= x;
    }
    return powResult;
}

console.log(pow(3, 3))