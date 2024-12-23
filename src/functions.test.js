const {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
} = require("./functions");

// Test sumOfArray
test("sumOfArray returns the sum of numbers in an array", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
  expect(sumOfArray([])).toBe(0);
  expect(sumOfArray([1, "a", 3])).toBe(4);
  expect(sumOfArray("not an array")).toBe("Error: Input must be an array.");
  expect(sumOfArray([1000000, 2000000])).toBe(3000000);
  expect(sumOfArray([true, false])).toBe(0);
  expect(sumOfArray([[1, 2], 3])).toBe(3);
  expect(sumOfArray(["1", 2, 3])).toBe(5);
});

// Test reverseString
test("reverseString reverses the input string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("")).toBe("");
  expect(reverseString(123)).toBe("Error: Input must be a string.");
  expect(reverseString("AbCdE")).toBe("EdCbA");
  expect(reverseString("!@#$%")).toBe("%$#@!");
  expect(reverseString("   ")).toBe("   ");
});

// Test isPalindrome
test("isPalindrome checks if a string is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("")).toBe(true);
  expect(isPalindrome(12321)).toBe("Error: Input must be a string.");
  expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  expect(isPalindrome("No 'x' in Nixon")).toBe(true);
  expect(isPalindrome("@!@!")).toBe(true);
  expect(isPalindrome("RaceCar")).toBe(true);
});

// Test capitalizeWords
test("capitalizeWords capitalizes the first letter of each word", () => {
  expect(capitalizeWords("hello world")).toBe("Hello World");
  expect(capitalizeWords("JAVA script")).toBe("Java Script");
  expect(capitalizeWords("")).toBe("");
  expect(capitalizeWords(123)).toBe("Error: Input must be a string.");
  expect(capitalizeWords("  multiple   spaces  ")).toBe(
    "  Multiple   Spaces  "
  );
  expect(capitalizeWords("special-characters!")).toBe("Special-characters!");
  expect(capitalizeWords("123abc def456")).toBe("123abc Def456");
});
