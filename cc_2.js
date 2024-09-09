// Task 1: Calculate the Tip
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Task 2: Output Details
let bill = 275;
let totalBill = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalBill}`);

// Task 3: Create a Function
function calculateTip(bill) { return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20};
console.log(`Tip for a $100 bill: $${calculateTip(100)}`);

// Task 4: Utilize Arrays
let bills = [275, 40, 430];
let tips = bills.map(calculateTip);
let totals = bills.map((bill, index) => bill + tips);

let bills2 = [125, 555, 44];
let tips2 = bills2.map(calculateTip);
let totals2 = bills2.map((bill, index) => bill + tips2);

console.log(`Bill: $${bill}, Tip: $${tips}, Total: $${totals}`);
console.log(`Bill: $${bill}, Tip: $${tips2}, Total: $${totals2}`);
