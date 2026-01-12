/**
 * Convert a given string to kebab-case format.
 * @param {string} str - The input string to convert.
 * @returns {string} The converted kebab-case string.
 * @throws {Error} If input is not a string or is empty.
 * @example toKebabCase("User Profile 2024"); // "user-profile-2024"
 */
function toKebabCase(str) {
    if (typeof str !== 'string') throw new Error("Input must be a string.");
    if (!str.trim()) throw new Error("Input cannot be empty.");

    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-_]+/g, '')
        .replace(/[-_\s]+/g, '-')
        .replace(/^-+|-+$/g, '');
}