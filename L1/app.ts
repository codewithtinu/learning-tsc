function add(num1 : number, num2 : number, printResult : boolean, someText : string){

    if(printResult){
        console.log(`${someText} ${num1 + num2} `);
    } else {

        return num1 + num2;
    }
}
const n1 = 21; // number
const n2 = 28; // number
const printResult = true; // boolean
const someText = "Sum of two number is = "; // string
add(n1,n2, printResult, someText);