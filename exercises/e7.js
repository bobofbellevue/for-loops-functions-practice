// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(acctArray) {
  let acct;
  let array = [];
  let minPos = -1;
  let minBalance = 0;
  for (let i=0; i < acctArray.length; i++)
  {
    acct = acctArray[i];
    if (acct.balance <= 0)
    {
      continue;
    }
    if (minPos == -1)
    {
      minPos = i;
      minBalance = acct.balance;
      continue;
    }
    if (acct.balance < minBalance)
    {
      minPos = i;
      minBalance = acct.balance;
    }
  }
  if (minPos > -1)
  {
    array.push(acctArray[minPos]);
  }
  return array;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
