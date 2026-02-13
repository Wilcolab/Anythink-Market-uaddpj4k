function toCamelCase(text) {
	return text
		.trim()
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.toLowerCase()
		.split(" ")
		.filter(Boolean)
		.map((word, index) => {
			if (index === 0) {
				return word;
			}
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join("");
}

// Examples:
// toCamelCase("first name") -> "firstName"
// toCamelCase("user_id") -> "userId"
// toCamelCase("SCREEN_NAME") -> "screenName"
// toCamelCase("mobile-number") -> "mobileNumber"

const robustPrompt = "Write a JavaScript function named toCamelCase that converts strings to camelCase with strong edge-case handling and clear error behavior. Requirements: (1) Accept only strings; for non-strings, throw a TypeError with a helpful message. (2) Normalize mixed separators (spaces, hyphens, underscores, punctuation) and collapse multiple separators. (3) Preserve alphanumeric characters; drop other symbols. (4) Handle leading/trailing separators. (5) Respect existing camelCase or PascalCase input by normalizing to camelCase. (6) Return an empty string when input is empty or contains no alphanumerics. Provide at least 6 examples covering: empty string, only symbols, multiple separators, already camelCase, SCREAMING_SNAKE, and mixed digits (e.g., 'version 2 update').";
