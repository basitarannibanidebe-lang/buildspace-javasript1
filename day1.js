// 1.
const name = "Basit";
let age = 15;
const country = "Nigeria";
const state = "Lagos";
const isStudent = true;
const favoriteProgrammingLanguage = "HTML";
let monthsOfCoding = 3;
console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`In 5 years, I will be ${age + 5} years old.`);
console.log(`In 10 years, I will be ${age + 10} years old.`);
console.log(`In 20 years, I will be ${age + 20} years old.`);
// I USE CONST FOR VALUE I DID NOT INTEND TO CHANGE OR REASIGN. FOR EXAMPLE: MY NAME IS BASIT AND I USED CONST FOR THE DECLARATION BECAUSE BASIT IS MY NAME AND I DID NOT INTEND TO CHANGE IT NOW OR LATER
// I USE LET FOR A VALUE I WILL CHANGE LATER ON. FOR EXAMPLE: I AM 15 YEARS OLD THIS YEAR BY NEXT YEAR MY AGE WILL CHANGE, SO LET IS USED TO DECLARE MY AGE BECAUSE I CAN REASIGH N IT LATER
// A STRING REPRESENT TEXT WHILE A NUMBER REPRESENT NUMERIC VALUES THAT CAN BE USED IN A CALCULATION
// A BOLEAN IS A DATATYPE THAT ONLY CONSIST OF TWO VALUES WHICH ARE TRUE AND FALSE

const firstNumber = 20;
const secondNumber = 6;
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
if (secondNumber !== 0) {
  console.log("Division:", firstNumber / secondNumber);
} else {
  console.log("Division is not possible because the second number is zero.");
}
if (secondNumber !== 0) {
  console.log("Remainder:", firstNumber % secondNumber);
} else {
  console.log("Remainder is not possible because the second number is zero.");
}

const english = 78;
const mathematics = 85;
const javascript = 92;
const design = 70;
const totalScore = english + mathematics + javascript + design;
const averageScore = totalScore / 4;
function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Invalid score";
  }
}
console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore);
console.log("Grade:", calculateGrade(averageScore));
console.log("59:", calculateGrade(59));
console.log("60:", calculateGrade(60));
console.log("69:", calculateGrade(69));
console.log("70:", calculateGrade(70));
console.log("79:", calculateGrade(79));
console.log("80:", calculateGrade(80));
console.log("89:", calculateGrade(89));
console.log("90:", calculateGrade(90));

const username = "admin";
const password = "12345";
if (username === "admin" && password === "12345") {
  console.log("Login successful");
}

const food = 5000;
const transport = 3000;
const internet = 7000;
const entertainment = 4000;
const income = 100000;
function calculateExpenses(food, transport, internet, entertainment, income) {
  const totalExpenses = food + transport + internet + entertainment;
  const averageExpense = totalExpenses / 4;
  const highestExpense = Math.max(food, transport, internet, entertainment);
  const remainingMoney = income - totalExpenses;
  return {
    totalExpenses,
    averageExpense,
    highestExpense,
    remainingMoney,
  };
}
const results = calculateExpenses(
  food,
  transport,
  internet,
  entertainment,
  income,
);
console.log("Total Expenses:", results.totalExpenses);
console.log("Average Expense:", results.averageExpense);
console.log("Highest Expense:", results.highestExpense);
console.log("Remaining Money:", results.remainingMoney);
