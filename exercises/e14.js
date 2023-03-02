
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let arrayAccts = [];
  for (let i=0; i < array.length; i++)
  {
    let balance = 0;
    let deposits = [];
    deposits = array[i].deposits;
    for (let j=0; deposits != undefined && j < deposits.length; j++)
    {
      balance += deposits[j];
    }
    let withdrawals = [];
    withdrawals = array[i].withdrawals;
    for (let j=0; withdrawals != undefined && j < withdrawals.length; j++)
    {
      balance -= withdrawals[j];
    }
    if (balance != array[i].balance)
    {
      arrayAccts.push(array[i]);
    }
  }
  return arrayAccts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
