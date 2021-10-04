// const amount = 12;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log("hey it's my first app");

// console.log(__dirname);
// console.log(__filename);
// console.log(process);
// console.log(module);
// console.log(require);

//REDUCE
const cart = [
  {
    name: "Prod1",
    price: 100,
    amount: 2,
  },
  {
    name: "Prod2",
    price: 200,
    amount: 1,
  },
  {
    name: "Prod3",
    price: 1000,
    amount: 3,
  },
  {
    name: "Prod4",
    price: 10,
    amount: 5,
  },
];

let total = cart.reduce(
  (total, item) => {
    const { price, amount } = item;
    total.totalPrice += price * amount;
    total.totalAmount += amount;
    return total;
  },
  {
    totalAmount: 0,
    totalPrice: 0,
  }
);
console.log(total);
