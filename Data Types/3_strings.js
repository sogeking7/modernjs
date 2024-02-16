{
  let str = `Hello`;

  // the first character
  console.log(str[0]); // H
  console.log(str.at(0)); // H

  // the last character
  console.log(str[str.length - 1]); // o
  console.log(str.at(-1));

  console.log(str[-2]); // undefined
  console.log(str.at(-2)); // l

  for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }
}
// Strings are immutable
// Strings can't be changed in javascript,
// it is impossible change a character.

{
  // indexOf(searchString, position)
  // Searching for a substring

  let str = "Widget with id";

  console.log(str.indexOf("Widget"));
  console.log(str.indexOf("id", 2)); // 12

  str = "As sly as a fox, as strong as an ox";
  let target = "as"; // let's look for it
  {
    // To find all occurrences of a substring

    let pos = 0;
    while (true) {
      let foundPos = str.indexOf(target, pos);
      if (foundPos == -1) break;

      console.log(`Found at ${foundPos}`);
      pos = foundPos + 1; // continue the search from the next position
    }
  }
  {
    // shorter version
    let pos = -1;
    while ((pos = str.indexOf(target, pos + 1)) != -1) {
      console.log(pos);
    }
  }
}

{
  console.log("Widget".includes("id")); // true
  console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
  console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"
}

{
  let str = "";

  for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
  }
  console.log(str);
  // Output:
  // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
  // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
}

// Correct comparison

//   Correct comparisons

// The “right” algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

// So, the browser needs to know the language to compare.

// Luckily, modern browsers support the internationalization standard ECMA-402.

// It provides a special method to compare strings in different languages, following their rules.

// The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:
