//1
function celsiusToFahrenheit(c) {
  if (typeof c !== "number" || isNaN(c)) {
    return "Invalid input";
  }
  return (c * 9) / 5 + 32;
}
 
function fahrenheitToCelsius(f) {
  if (typeof f !== "number" || isNaN(f)) {
    return "Invalid input";
  }
  return ((f - 32) * 5) / 9;
}
 
console.log(celsiusToFahrenheit(30)); 
console.log(fahrenheitToCelsius(86)); 
console.log(celsiusToFahrenheit("abc")); 
 
function calculateAge(birthYear, currentYear) {
  if (birthYear > currentYear) {
    return "Invalid: birth year is in the future";
  }
  return currentYear - birthYear;
}
 
function canVote(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
 
console.log(calculateAge(2005, 2026)); 
console.log(calculateAge(2030, 2026)); 
console.log(canVote(21)); 
console.log(canVote(15)); 
 
function checkPassword(password) {
  let missing = [];
 
  if (password.length < 8) {
    missing.push("at least 8 characters");
  }
  if (!/[0-9]/.test(password)) {
    missing.push("a number");
  }
  if (!/[A-Z]/.test(password)) {
    missing.push("an uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    missing.push("a lowercase letter");
  }
 
  let strength;
  if (missing.length === 0) {
    strength = "Strong";
  } else if (missing.length <= 2) {
    strength = "Medium";
  } else {
    strength = "Weak";
  }
 
  return { strength: strength, missing: missing };
}
 
console.log(checkPassword("Abcdef12")); 
console.log(checkPassword("abcdefgh1"));
console.log(checkPassword("abc")); 
 
function calculateSubtotal(p1, p2, p3) {
  return p1 + p2 + p3;
}
 
function calculateDiscount(subtotal) {
  if (subtotal <= 20000) {
    return 0;
  } else if (subtotal <= 50000) {
    return subtotal * 0.05;
  } else {
    return subtotal * 0.1;
  }
}
 
function calculateFinalTotal(p1, p2, p3) {
  const subtotal = calculateSubtotal(p1, p2, p3);
  const discount = calculateDiscount(subtotal);
  return subtotal - discount;
}
 
const product1 = 15000;
const product2 = 25000;
const product3 = 10000;
 
console.log(calculateSubtotal(product1, product2, product3)); 
console.log(calculateDiscount(50000)); 
console.log(calculateFinalTotal(product1, product2, product3));
console.log(calculateFinalTotal(5000, 5000, 5000)); 
console.log(calculateFinalTotal(30000, 30000, 30000)); 
 

function analyzeNumber(number) {
  let sign;
  if (number > 0) {
    sign = "Positive";
  } else if (number < 0) {
    sign = "Negative";
  } else {
    sign = "Zero";
  }
 
  let evenOdd;
  if (!Number.isInteger(number)) {
    evenOdd = "N/A";
  } else if (number % 2 === 0) {
    evenOdd = "Even";
  } else {
    evenOdd = "Odd";
  }
 
  let type;
  if (Number.isInteger(number)) {
    type = "Integer";
  } else {
    type = "Decimal";
  }
 
  return sign + " / " + evenOdd + " / " + type;
}
 
const testNumbers = [25, -8, 0, 3.14, -7, 100, 1, -0.5, 2, 999];
for (let i = 0; i < testNumbers.length; i++) {
  console.log(testNumbers[i] + " -> " + analyzeNumber(testNumbers[i]));
}