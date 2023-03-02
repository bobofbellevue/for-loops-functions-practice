
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(arrayIn) {
  let arrayOut = [];
  for (let i=0; i < arrayIn.length; i++)
  {
    let element = arrayIn[i];
    if (typeof element == 'object')
    {
      for (let j=0; j < element.length; j++)
      {
	arrayOut.push(element[j]);
      }
    }
    else
    {
      arrayOut.push(element);
    }
  }
  return arrayOut;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
