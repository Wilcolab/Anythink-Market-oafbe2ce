/*
Create a JavaScript function called toKebabCase that converts strings to kebab-case. Follow these sequential steps:

Step 1: Start by creating the basic function structure that validates the input type. If the input is not a string, throw an error with the message 'Input must be a string'.

Step 2: Then, implement the conversion logic that handles multiple delimiters (spaces, underscores, camelCase transitions). Convert all characters to lowercase and join them with hyphens. Handle consecutive delimiters by treating them as a single delimiter.

Step 3: Next, add edge case handling for empty strings (return empty string), strings with leading/trailing delimiters (trim them), and preserve numbers in the output.

Step 4: Finally, add comprehensive JSDoc documentation that includes @param, @returns, @throws, and @example tags with at least 3 different example cases showing the transformation.

Examples of expected output:
- toKebabCase('firstName') → 'first-name'
- toKebabCase('user_id') → 'user-id'
- toKebabCase('SCREEN NAME') → 'screen-name'
- toKebabCase('mobile__number') → 'mobile-number'
- toKebabCase('  hello-world  ') → 'hello-world'
*/
