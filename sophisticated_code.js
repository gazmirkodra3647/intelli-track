/** 
 * Filename: sophisticated_code.js
 * 
 * Description:
 * This code demonstrates a complex and sophisticated algorithm for finding prime numbers
 * within a given range using the Sieve of Eratosthenes method. It includes helper functions
 * and extensive logic to optimize the algorithm as much as possible.
 */

// Generate an array of prime numbers within a given range using the Sieve of Eratosthenes.
function findPrimes(rangeStart, rangeEnd) {
  // Create an array of boolean values to represent whether a number is prime or not.
  const isPrime = new Array(rangeEnd + 1).fill(true);
  
  // 0 and 1 are not prime, so mark them as false.
  isPrime[0] = isPrime[1] = false;

  // Mark multiples of prime numbers as false, starting from 2.
  for (let i = 2; i * i <= rangeEnd; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= rangeEnd; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Filter and return the resulting array of prime numbers within the specified range.
  return isPrime
    .map((value, index) => value && index >= rangeStart ? index : null)
    .filter(Number.isInteger);
}

// Find the sum of all prime numbers within a given range.
function sumPrimes(rangeStart, rangeEnd) {
  const primes = findPrimes(rangeStart, rangeEnd);
  const sum = primes.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Test the algorithm by finding the sum of primes within the range [1, 1000].
const rangeStart = 1;
const rangeEnd = 1000;
const sum = sumPrimes(rangeStart, rangeEnd);

console.log(`The sum of prime numbers between ${rangeStart} and ${rangeEnd} is: ${sum}`);