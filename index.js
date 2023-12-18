console.clear();
console.log();
// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD !== receivedPassword) {
  console.log("Acces denied!");
} else {
  Console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 8;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 2000000;

if (numberOfHotdogs <= 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs > 5 && numberOfHotdogs <= 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs > 100 && numberOfHotdogs <= 100000) {
  console.log("1 euro per hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("10 Cent per hotdog");
} else {
  console.log("nothing");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
