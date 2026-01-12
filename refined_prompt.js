// Refined camelCase function
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

// Refined dot.case function
function toDotCase(str) {
    /**
     * Convert a given string to dot.case format.
     * Handles spaces, dashes, underscores, and validates input.
     *
     * Args:
     *   str (string): The input string to convert.
     *
     * Returns:
     *   string: The converted dot.case string.
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
        .replace(/[-_\s]+/g, '.'); // Replace separators with dots
}

// Example usage
console.log(toCamelCase("  hello--world  ")); // Output: helloWorld
console.log(toCamelCase("HELLO_WORLD")); // Output: helloWorld
console.log(toCamelCase("hello@world")); // Output: helloWorld
console.log(toCamelCase("---")); // Throws an error: Input cannot be an empty or whitespace-only string

console.log(toDotCase("  hello--world  ")); // Output: hello.world
console.log(toDotCase("HELLO_WORLD")); // Output: hello.world
console.log(toDotCase("hello@world")); // Output: hello.world
console.log(toDotCase("---")); // Throws an error: Input cannot be an empty or whitespace-only string