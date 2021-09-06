// Calculate the number at the nth Fibonacci sequence
// Two implementations present
// Comment the implementation not being used

// HTML input text field element and pre element with output class
var n = document.querySelector("input");
var output = document.querySelector(".output");

// Listen for changes to the input text field, assign pre with the output
n.addEventListener("input", function() {
    var val = n.value ? n.value : 1;
    output.textContent = fib(val);
})


function fib(num) {
    // Using the mathematical, recursive approach
    // O(x^n)

    // Base case
    if (num <= 1) {
        return 1;
    }

    // Recursive case
    return fib(num-1) + fib(num-2);
}

function fib(num) {
    // From devlucky
    // March 3, 2016
    // https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

    // Time complexity O(n)
    // Much faster

    // Instead of adding by recursion, just start with the base case,
    // and add our way up through num iterations
    let a = 1, b = 0, temp;

    // Loop through and decrement the number while adding and
    // moving values around in a most ingenious way
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
