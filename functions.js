// Create a function called greet that takes name as a parameter and returns greeting
function greet(name){
  return `Hello, ${name}!`;
}

// Create a function called add that takes two numbers as a parameter returns parameters added together.
function add(numOne, numTwo){
  return numOne + numTwo;
}

// Call functions and store results in variables
const name = greet("Ihtishaam Johnson, Nhlakanipho Luthuli");
const total = add(5, 10);

// Display results
console.log(name);
console.log(`The total is: ${total}`);
