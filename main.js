//🚀 Day 25 Challenge: Start Coding! 🚀
/*Question 73: Assigning and Updating Variables:
Create a function where you declare a variable using let and assign an initial value.
Then, update its value within the same function and log both the initial and updated values.*/
function updateVariable() {
    var initialValue = 5; // Declaring a variable 'initialValue' and assigning an initial value of 5
    console.log("Initial Value:", initialValue); // Logging the initial value
    initialValue = 10; // Updating the value of 'initialValue' to 10
    console.log("Updated Value:", initialValue); // Logging the updated value
}
// Calling the function to see the result
updateVariable();
/* Question 74: Swapping Variables: Demonstrate how to swap the values of two variables.
Start with variables a = 5 and b = 10,
then swap their values so that a becomes 10 and b becomes 5.*/
// This function swaps the values of two variables
function swapValues() {
    var a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);
    var temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp
    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}
swapValues(); // We use a temporary variable to hold one value while we swap them, like a magic trick!
/* Question 75:   Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
 Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division)
 on x using compound operators.*/
var x = 4; // Initializing x with value 4
// Using compound assignment operators to perform arithmetic operations
x += 2; // Equivalent to: x = x + 2 (Addition)
console.log("After addition:", x);
x -= 1; // Equivalent to: x = x - 1 (Subtraction)
console.log("After subtraction:", x);
x *= 3; // Equivalent to: x = x * 3 (Multiplication)
console.log("After multiplication:", x);
x /= 2; // Equivalent to: x = x / 2 (Division)
console.log("After division:", x);
