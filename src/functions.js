// Sum of Array
function sumOfArray(arr) {
  if (!Array.isArray(arr)) return "Error: Input must be an array.";
  return arr.reduce((sum, num) => {
    if (typeof num === "number" && !isNaN(num)) {
      return sum + num;
    }
    return sum;
  }, 0);
}

// Reverse String
function reverseString(str) {
  if (typeof str !== "string") return "Error: Input must be a string.";
  return str.split("").reverse().join("");
}

// Is Palindrome
function isPalindrome(str) {
  if (typeof str !== "string") return "Error: Input must be a string.";
  // Normalize string: Remove non-alphanumeric characters and convert to lowercase
  const normalized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}

// Capitalize Words
function capitalizeWords(str) {
  if (typeof str !== "string") return "Error: Input must be a string.";
  return str
    .split(" ")
    .map((word) => {
      if (word.trim() === "") return word; // Preserve extra spaces
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Export functions
module.exports = {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
};
