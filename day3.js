const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Go",
  "PHP",
  "Ruby",
  "TypeScript",
];

console.log(languages[0]);
console.log(languages[languages.length - 1]);
console.log(languages[3]);
console.log(languages.length);

languages[1] = "Python 3";
languages.push("Rust");
languages.pop();
console.log(languages);

console.log(languages[20]);

const scores = [78, 92, 65, 88, 54, 71, 96, 83];
const PASS_MARK = 60; 

function analyzeScores(scores) {
  if (scores.length === 0) {
    return "No scores to analyze";
  }

  let total = 0;
  let highest = scores[0];
  let lowest = scores[0];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];

    if (scores[i] > highest) {
      highest = scores[i];
    }
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
    if (scores[i] >= PASS_MARK) {
      passed++;
    } else {
      failed++;
    }
  }

  return {
    total: total,
    average: total / scores.length,
    highest: highest,
    lowest: lowest,
    passed: passed,
    failed: failed,
  };
}

console.log(analyzeScores(scores));
console.log(analyzeScores([100, 40])); 
console.log(analyzeScores([])); 

const cart = [
  { name: "Laptop", price: 350000, quantity: 1 },
  { name: "Mouse", price: 8000, quantity: 2 },
  { name: "Keyboard", price: 15000, quantity: 1 },
  { name: "Headphones", price: 20000, quantity: 3 },
  { name: "Phone Case", price: 3000, quantity: 4 },
];

function analyzeCart(cart) {
  let total = 0;
  let mostExpensive = cart[0];
  let cheapest = cart[0];

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;

    if (cart[i].price > mostExpensive.price) {
      mostExpensive = cart[i];
    }
    if (cart[i].price < cheapest.price) {
      cheapest = cart[i];
    }
  }

  return {
    numberOfProducts: cart.length,
    total: total,
    mostExpensive: mostExpensive.name,
    cheapest: cheapest.name,
  };
}

console.log("Task 3");
console.log(analyzeCart(cart));

const users = [
  { name: "Amaka", email: "amaka@mail.com", role: "admin" },
  { name: "Tunde", email: "tunde@mail.com", role: "user" },
  { name: "Zainab", email: "zainab@mail.com", role: "admin" },
  { name: "Chidi", email: "chidi@mail.com", role: "editor" },
];

function findUserByEmail(email) {
  const user = users.find(function (u) {
    return u.email === email;
  });
  if (user === undefined) {
    return null;
  }
  return user;
}

function findUsersByRole(role) {
  return users.filter(function (u) {
    return u.role === role;
  });
}

function findAdmins() {
  return findUsersByRole("admin");
}

function userExists(email) {
  return findUserByEmail(email) !== null;
}

console.log(findUserByEmail("tunde@mail.com"));
console.log(findUserByEmail("nobody@mail.com"));
console.log(findAdmins());
console.log(userExists("chidi@mail.com"));
console.log(userExists("nobody@mail.com"));
console.log(findUsersByRole("editor"));
console.log(findUsersByRole("manager"));

const prices = [1000, 2500, 5000, 7500, 10000];

const discounted = prices.map(function (price) {
  return price - price * 0.1;
});

const above5000 = prices.filter(function (price) {
  return price > 5000;
});
const below5000 = prices.filter(function (price) {
  return price < 5000;
});

const sorted = [...prices].sort(function (a, b) {
  return a - b;
});

console.log(discounted);
console.log(above5000);
console.log(below5000);
console.log(sorted);

const discountedSimple = [];
for (let i = 0; i < prices.length; i++) {
  discountedSimple.push(prices[i] - prices[i] * 0.1);
}

function applyDiscount(prices, percent) {
  return prices.map(function (price) {
    return price - (price * percent) / 100;
  });
}

console.log(discountedSimple);
console.log(applyDiscount(prices, 10));
console.log(applyDiscount(prices, 50));
