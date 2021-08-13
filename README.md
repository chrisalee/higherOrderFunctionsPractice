# higherOrderFunctionsPractice
very powerful higher order functions and working with arrays. We will look at forEach, map, filter, reduce and sort.

The forEach() method calls a function once for each element in an array, in order.
function(currentValue, index, arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
currentValue	Required. The value of the current element
index	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to

The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
map() does not execute the function for empty elements.
map() does not change the original array.
function(currentValue, index, arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
currentValue	Required. The value of the current element
index	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to

The filter() method creates an array filled with all array elements that pass a test (provided by a function).
function(currentValue, index,arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
currentValue	Required. The value of the current element
index	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to

The reduce() method executes a reducer function for each value of an array.
reduce() returns a single value which is the function's accumulated result.
function(total,currentValue, index,arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
total	Required. The initialValue, or the previously returned value of the function
currentValue	Required. The value of the current element
currentIndex	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to

The sort() method sorts an array alphabetically or numerically
function(a, b){return a - b}
