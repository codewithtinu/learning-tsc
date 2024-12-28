function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2, " "));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 21; // number
var n2 = 28; // number
var printResult = true; // boolean
var someText = "Sum of two number is = "; // string
add(n1, n2, printResult, someText);
