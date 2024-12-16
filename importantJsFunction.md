JavaScript has a wide variety of built-in functions that are categorized based on the environment and use cases. Below is a structured list of every function in JavaScript, covering global, array-related, string-related, object-related, math, and other specialized functions.

# 1. Global Functions

These are functions available globally without needing to import anything.

General:
eval() - Executes JavaScript code represented as a string.
isFinite() - Checks if a value is a finite number.
isNaN() - Checks if a value is NaN.
parseFloat() - Parses a string and returns a floating-point number.
parseInt() - Parses a string and returns an integer.
encodeURI() / encodeURIComponent() - Encodes a URI.
decodeURI() / decodeURIComponent() - Decodes a URI. 2. Array Functions
Functions related to array manipulation.

# Array Prototype Methods:

Array.isArray() - Checks if a value is an array.
Array.from() - Creates an array from an iterable object.
Array.of() - Creates an array from a set of arguments.

# Array Instance Methods:

push() - Adds elements to the end.
pop() - Removes the last element.
shift() - Removes the first element.
unshift() - Adds elements to the beginning.
slice() - Returns a shallow copy of a portion of an array.
splice() - Adds/removes/replaces elements.
map() - Creates a new array by applying a function to each element.
filter() - Creates a new array with elements that satisfy a condition.
reduce() / reduceRight() - Reduces the array to a single value.
find() - Finds the first element satisfying a condition.
findIndex() - Finds the index of the first element satisfying a condition.
forEach() - Iterates over an array.
every() - Tests if all elements satisfy a condition.
some() - Tests if at least one element satisfies a condition.
join() - Joins array elements into a string.
reverse() - Reverses the array.
sort() - Sorts the array.
flat() - Flattens nested arrays.
flatMap() - Maps and flattens results into a new array.
includes() - Checks if the array includes a value.
indexOf() / lastIndexOf() - Finds the index of an element. 3. String Functions
Functions to manipulate strings.

# String Prototype Methods:

charAt() - Returns a character at a specific index.
charCodeAt() - Returns the Unicode of a character.
concat() - Concatenates strings.
includes() - Checks if a string contains a substring.
endsWith() - Checks if a string ends with a substring.
startsWith() - Checks if a string starts with a substring.
indexOf() / lastIndexOf() - Finds the position of a substring.
slice() - Extracts a portion of a string.
split() - Splits a string into an array.
substr() / substring() - Extracts parts of a string.
trim() / trimStart() / trimEnd() - Removes whitespace.
toLowerCase() / toUpperCase() - Changes string case.
replace() / replaceAll() - Replaces parts of a string.
padStart() / padEnd() - Pads a string to a specified length.
repeat() - Repeats a string. 4. Object Functions
Functions to manipulate objects.

# Object Static Methods:

Object.keys() - Returns an array of object keys.
Object.values() - Returns an array of object values.
Object.entries() - Returns an array of key-value pairs.
Object.fromEntries() - Converts key-value pairs into an object.
Object.assign() - Copies properties from one or more objects.
Object.create() - Creates a new object with a prototype.
Object.defineProperty() / Object.defineProperties() - Defines properties.
Object.freeze() / Object.isFrozen() - Freezes an object.
Object.seal() / Object.isSealed() - Seals an object.
Object.getPrototypeOf() / Object.setPrototypeOf() - Gets/Sets the prototype.
Object.hasOwnProperty() - Checks if an object has a property.
Object.is() - Compares two values. 5. Math Functions
Mathematical operations.

# Math Static Methods:

Math.abs() - Returns the absolute value.
Math.ceil() / Math.floor() - Rounds a number up/down.
Math.round() - Rounds to the nearest integer.
Math.trunc() - Removes the decimal part.
Math.min() / Math.max() - Finds the minimum/maximum value.
Math.pow() - Returns the power of a number.
Math.sqrt() - Returns the square root.
Math.cbrt() - Returns the cube root.
Math.random() - Returns a random number.
Math.sign() - Returns the sign of a number.
Math.sin() / Math.cos() / Math.tan() - Trigonometric functions.
Math.log() / Math.exp() - Logarithmic and exponential functions. 6. Date Functions
Functions to manipulate dates.

# Date Instance Methods:

getDate() / setDate() - Gets/Sets the day of the month.
getDay() - Gets the day of the week.
getFullYear() / setFullYear() - Gets/Sets the year.
getMonth() / setMonth() - Gets/Sets the month.
getHours() / setHours() - Gets/Sets the hours.
getMinutes() / setMinutes() - Gets/Sets the minutes.
getSeconds() / setSeconds() - Gets/Sets the seconds.
getMilliseconds() / setMilliseconds() - Gets/Sets milliseconds.
toDateString() - Converts to a human-readable date.
toISOString() - Converts to an ISO date string.
toLocaleDateString() - Converts to a locale-specific date string. 7. Regular Expression Functions
Functions for pattern matching.

# RegExp Methods:

test() - Tests if a pattern exists in a string.
exec() - Executes a search for a match.
String Integration:

match() / matchAll() - Matches a pattern.
search() - Searches for a pattern.
replace() - Replaces a pattern.
split() - Splits by a pattern. 8. JSON Functions
Functions for handling JSON.

# Static Methods:

JSON.stringify() - Converts an object to a JSON string.
JSON.parse() - Parses a JSON string into an object. 9. Utility Functions
Other common functions.

# Set:

add() - Adds an element.
delete() - Removes an element.
has() - Checks if an element exists.
Map:

set() - Sets a key-value pair.
get() - Gets a value by key.
delete() - Deletes a key-value pair.
has() - Checks if a key exists.
