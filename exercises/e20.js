
// EXERCISE 20
// Return an array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(arrayIn) {
  let arrayA = [];
  let arrayNoA = [];
  let arrayResult = [arrayA, arrayNoA];
  for (let i=0; i < arrayIn.length; i++)
  {
    let name = arrayIn[i];
    name = name.toUpperCase();
    let gotA = false;
    for (let j=0; j < name.length; j++)
    {
      if (name[j] === 'A')
      {
	gotA = true;
	break;
      }
    }
    if (gotA == true)
    {
      arrayA.push(arrayIn[i]);
    }
    else
    {
      arrayNoA.push(arrayIn[i]);
    }
  }
  return arrayResult;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
