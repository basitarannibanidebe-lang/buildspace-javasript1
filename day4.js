function groupBy(array, key) {
  return array.reduce(function (groups, item) {
    const value = item[key];
    if (!groups[value]) {
      groups[value] = [];
    }
    groups[value].push(item);
    return groups;
  }, {});
}
function sumBy(array, key) {
  return array.reduce(function (total, item) {
    return total + item[key];
  }, 0);
}

const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 12000,
  category: "Accessories",
  inStock: true,
};

function formatProduct({ name, price, inStock }) {
  const stockText = inStock ? "In Stock" : "Out of Stock";
  return `${name} — NGN ${price.toLocaleString("en-US")} (${stockText})`;
}

console.log(formatProduct(product)); 

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 12000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 35000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 28000,
    category: "Audio",
    inStock: false,
  },
  { id: 4, name: "Headphones", price: 20000, category: "Audio", inStock: true },
  {
    id: 5,
    name: "USB-C Hub",
    price: 9000,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 15000,
    category: "Furniture",
    inStock: true,
  },
];

function getInStockProducts(products) {
  return products.filter(function (p) {
    return p.inStock === true;
  });
}

function getProductNames(products) {
  return products.map(function (p) {
    return p.name;
  });
}

function findProductById(products, id) {
  return products.find(function (p) {
    return p.id === id;
  });
}

function getTotalCatalogValue(products) {
  return sumBy(products, "price");
}

function groupByCategory(products) {
  return groupBy(products, "category");
}

console.log(getInStockProducts(products));
console.log(getProductNames(products));
console.log(findProductById(products, 4));
console.log(findProductById(products, 99)); 
console.log(getTotalCatalogValue(products)); 
console.log(groupByCategory(products));

const students = [
  { id: 1, name: "Amaka", score: 92, subject: "Math" },
  { id: 2, name: "Tunde", score: 58, subject: "English" },
  { id: 3, name: "Zainab", score: 75, subject: "Math" },
  { id: 4, name: "Chidi", score: 84, subject: "Science" },
  { id: 5, name: "Ngozi", score: 66, subject: "English" },
  { id: 6, name: "Emeka", score: 49, subject: "Science" },
];

function getPassingStudents(students, passMark) {
  return students.filter(function (s) {
    return s.score >= passMark;
  });
}

function getAverageScore(students) {
  if (students.length === 0) {
    return 0;
  }
  return sumBy(students, "score") / students.length;
}

function getTopStudent(students) {
  return students.reduce(function (best, s) {
    return s.score > best.score ? s : best;
  });
}

function assignGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function addGrades(students) {
  return students.map(function (s) {
    return { ...s, grade: assignGrade(s.score) };
  });
}
console.log(getPassingStudents(students, 60));
console.log(getAverageScore(students));
console.log(getTopStudent(students));
console.log(addGrades(students));
console.log(students[0]); 
console.log(groupBy(students, "subject")); 

const transactions = [
  { id: 1, type: "credit", amount: 50000, date: "2026-01-05" },
  { id: 2, type: "debit", amount: 12000, date: "2026-01-12" },
  { id: 3, type: "credit", amount: 30000, date: "2026-01-28" },
  { id: 4, type: "debit", amount: 8000, date: "2026-02-02" },
  { id: 5, type: "credit", amount: 45000, date: "2026-02-14" },
  { id: 6, type: "debit", amount: 15000, date: "2026-02-20" },
  { id: 7, type: "debit", amount: 5000, date: "2026-03-01" },
  { id: 8, type: "credit", amount: 60000, date: "2026-03-10" },
  { id: 9, type: "debit", amount: 20000, date: "2026-03-18" },
  { id: 10, type: "credit", amount: 10000, date: "2026-03-25" },
];

function getTransactionsByType(transactions, type) {
  return transactions.filter(function (t) {
    return t.type === type;
  });
}

function getBalance(transactions) {
  const credits = sumBy(
    getTransactionsByType(transactions, "credit"),
    "amount",
  );
  const debits = sumBy(getTransactionsByType(transactions, "debit"), "amount");
  return credits - debits;
}

function getLargestTransaction(transactions) {
  return transactions.reduce(function (largest, t) {
    return t.amount > largest.amount ? t : largest;
  });
}

function getMonthlyTotals(transactions) {
  const withMonth = transactions.map(function (t) {
    return { ...t, month: t.date.slice(0, 7) };
  });
  const groups = groupBy(withMonth, "month");

  const totals = {};
  for (const month in groups) {
    totals[month] = sumBy(groups[month], "amount");
  }
  return totals;
}

console.log(getBalance(transactions)); 
console.log(getTransactionsByType(transactions, "credit"));
console.log(getTransactionsByType(transactions, "debit"));
console.log(getLargestTransaction(transactions));
console.log(getMonthlyTotals(transactions));
