// Task 1: Calculate the Tip
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Task 2: Output Details
let bill = 275;
let totalBill = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalBill}`);

// Task 3: Create a Function
function calculateTip(bill) { return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20};
console.log(`Tip for a $100 bill: $${calculateTip(100)}`);

