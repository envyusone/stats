/**
 * YOUR CORE FUNCTIONS
 */
function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function getMean(numbers) {
  if (numbers.length === 0) return 0;
  return getSum(numbers) / getLength(numbers);
}

function getMin(numbers) {
  if (numbers.length === 0) return 0;
  return Math.min(...numbers);
}

function getMax(numbers) {
  if (numbers.length === 0) return 0;
  return Math.max(...numbers);
}

function getRange(numbers) {
  if (numbers.length === 0) return 0;
  return getMax(numbers) - getMin(numbers);
}

function getEvens(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

function getOdds(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}

/**
 * CONNECTING TO THE HTML
 */
document.getElementById('calcBtn').addEventListener('click', () => {
    const inputString = document.getElementById('userInput').value;
    

    const numbers = inputString.split(',')
                               .map(n => n.trim())
                               .filter(n => n !== "")
                               .map(Number)
                               .filter(n => !isNaN(n));

    if (numbers.length === 0) {
        alert("Please enter some numbers separated by commas.");
        return;
    }

    document.getElementById('res-length').innerText = getLength(numbers);
    document.getElementById('res-sum').innerText    = getSum(numbers);
    document.getElementById('res-mean').innerText   = getMean(numbers).toFixed(2);
    document.getElementById('res-min').innerText    = getMin(numbers);
    document.getElementById('res-max').innerText    = getMax(numbers);
    document.getElementById('res-range').innerText  = getRange(numbers);
    document.getElementById('res-evens').innerText  = getEvens(numbers).join(', ') || "None";
    document.getElementById('res-odds').innerText   = getOdds(numbers).join(', ') || "None";
});


// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
