// More ways to write a number

{
  let billion = 1000000000;
}
{
  // syntatic sugar _
  let billion = 1_000_000_000;
}
{
  let billion = 1e9;
  let num = 5.6e9; // 5.6 * 1_000_000_000
  console.log(num);
}
{
  let mcs = 0.000001; // 6 zeroes
}
{
  let mcs = 1e-6; // five zeroes to the left from 1
  // 1 / 1_000_000
}
{
  let mcs = 1.23e-6; // 1.23 * 1_000_000 === 0.00000123
}
// Hex, Binary, Octal,
{
  // ob or 0B - binary
  // 0o or 0O - octal
  // 0x or 0X - hex
  let binary = 0b0101;
  let octal = 0o17;
  let hex = 0x1f1f1f;
  console.log(binary, octal, hex);
}
// toString(base)
{
  console.log((23).toString(2)); // with parenthesis
  console.log((255).toString(2));

  // console.log(23..toString(2));
  // console.log(255..toString(2));
}

// Rounding
{
  // Math.floor - rounds down
  let x = 1.9;
  console.log(Math.floor(x)); // 1

  // Math.ceil - rounds up
  let = 1.1;
  console.log(Math.ceil(x)); // 2

  // Math.round - roundeds to the nearest
  console.log(Math.round(3.4)); // 3
  console.log(Math.round(3.5)); // 4
  console.log(Math.round(3.6)); // 4

  // Math.trunc - removes anything after the decimal part.
  console.log(Math.floor(3.4)); // 3
  console.log(Math.floor(3.5)); // 3
  console.log(Math.floor(3.6)); // 3
  console.log(Math.floor(-1.4)); // -1
}

// Round the number to the nth digit
// First method - multiply and divide
{
  let num = 1.23456;
  console.timeLog(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
}
// Second method - toFixed -> returns string
{
  let num = 12.34;
  console.log(num.toFixed(5)); // "12.34000"
}

// Imprecise calculations
// A number is represented in 64-bit format IEEE-754
// there are exactly 64 bits to store a number
// 52 of them are used to store the digits
// 11 of them store the the position of the decimal point
// 1 bit is used for the sign

// if a number is really huge. it may overflow the 64-bit storage
// and become Infinity
{
  console.log(1e500); // Infinity
}

{
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log((0.1).toFixed(20)); // "0.10000000000000000555"
  console.log((0.2).toFixed(20)); // "0.10000000000000001110"

  // Not only in JavaScript
  // PHP, Java, C, Perl, Ruby

  // Solution -> use toFixed
  // multiply/divide approach reduces the error, but doesn’t remove it totally. (do not use!)
  let sum = 0.1 + 0.2;
  console.log(sum.toFixed(2)); // "0.30"
}

{
  const big = 10_000_000_000_000_000;
  const num = 9_999_999_999_999_999; // 16 digits
  console.log(num); // shows 10_000_000_000_000_000
  console.log(big);
  const binary = num.toString(2);
  const binary2 = big.toString(2);
  console.log(binary);
  console.log(binary2);
  console.log(binary.length); // 54
  console.log(binary2.length);
}

{
  // In javascript, there are two types of zero
  // 0 and -0
  console.log(0 == -0);
}

{
  // parseInt
  console.log(parseInt("100px")); // 100
  console.log(parseFloat("12.5em")); // 12.5

  console.log(parseInt("12.3")); // 12, only the integer part is returned
  console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading
  console.log(parseInt("10000", 2)); // 16
}

{
  // Math.random()
  // returns a random number from 0 to 1 (not including 1)
}
