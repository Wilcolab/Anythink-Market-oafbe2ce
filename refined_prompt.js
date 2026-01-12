/*
Write a JavaScript function toCamelCase that converts strings to camelCase with robust error handling and edge case management.

Requirements:
- Handle various delimiters: spaces, underscores, hyphens, and mixed case
- Validate input: throw a descriptive error if input is not a string
- Handle edge cases: empty strings, null, undefined, strings with multiple consecutive delimiters
- Preserve numbers in the string
- Handle strings that are already in camelCase

Examples:
- toCamelCase('first name') should return 'firstName'
- toCamelCase('user_id') should return 'userId'
- toCamelCase('SCREEN_NAME') should return 'screenName'
- toCamelCase('mobile-number') should return 'mobileNumber'
- toCamelCase('hello  world') should return 'helloWorld' (multiple spaces)
- toCamelCase('user123name') should return 'user123name' (preserve numbers)
- toCamelCase('') should return ''
- toCamelCase(null) should throw an error: 'Input must be a string'
- toCamelCase(123) should throw an error: 'Input must be a string'

Implement the function with proper error handling and comprehensive edge case coverage.
*/

// Create a function that converts strings to dot.case format

// Generate detailed JSDoc documentation for our string case conversion functions
