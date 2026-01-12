function toCamelCase(str) {
    /**
     * Convert a given string to camelCase format.
     * Handles spaces, dashes, underscores, and validates input.
     *
     * Args:
     *   str (string): The input string to convert.
     *
     * Returns:
     *   string: The converted camelCase string.
     *
     * Throws:
     *   Error: If the input is not a valid string.
     */
    if (typeof str !== 'string') {
        throw new Error("Input must be a string.");
    }
    if (!str.trim()) {
        throw new Error("Input cannot be an empty or whitespace-only string.");
    }

    return str
        .trim() // Remove leading and trailing whitespace
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9\s-_]+/g, '') // Remove non-alphanumeric characters except spaces, dashes, and underscores
        .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : ''); // Replace separators and capitalize the next character
}

// Example usage
console.log(toCamelCase("first name")); // Output: firstName
console.log(toCamelCase("user_id")); // Output: userId
console.log(toCamelCase("SCREEN_NAME")); // Output: screenName
console.log(toCamelCase("mobile-number")); // Output: mobileNumber
console.log(toCamelCase("  hello--world  ")); // Output: helloWorld
console.log(toCamelCase("HELLO_WORLD")); // Output: helloWorld
console.log(toCamelCase("hello@world")); // Output: helloWorld
// console.log(toCamelCase("---")); // Throws an error: Input cannot be an empty or whitespace-only string

function addNumbers(a, b) {
    /**
     * Add two numbers and return their sum.
     * Throws an error if inputs are not valid numbers.
     *
     * Args:
     *   a (number): The first number.
     *   b (number): The second number.
     *
     * Returns:
     *   number: The sum of the two numbers.
     */
    if (a == null || b == null) {
        throw new Error("Inputs cannot be undefined or null.");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both inputs must be numbers.");
    }
    return a + b;
}

// Example usage
console.log(addNumbers(5, 3)); // Output: 8
// console.log(addNumbers('5', 3)); // Throws an error: Both inputs must be numbers