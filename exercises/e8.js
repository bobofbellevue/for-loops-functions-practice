
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(arrayAccts) {
  let acct;
  let array = [];
  let maxPos = -1;
  let maxBalance = 0;
  for (let i=0; i < arrayAccts.length; i++)
  {
    acct = arrayAccts[i];
    if (acct.balance <= 0)
    {
      continue;
    }
    if (maxPos == -1)
    {
      maxPos = i;
      maxBalance = acct.balance;
      continue;
    }
    if (acct.balance > maxBalance)
    {
      maxPos = i;
      maxBalance = acct.balance;
    }
  }
  if (maxPos > -1)
  {
    array.push(arrayAccts[maxPos]);
  }
  return array;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
