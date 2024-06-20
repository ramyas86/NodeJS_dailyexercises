const argvs = process.argv
const argv = argvs.slice(2) // Ignore the first two elements
const operation = argv[0]
const operator1 = parseFloat(argv[1])
// console.log(operator1)
const operator2 = parseFloat(argv[2])
// console.log(operator2)

if (isNaN(operator1) || isNaN(operator2)){
    console.error("Invalid arguments");
} else {

    switch (operation)
    {
        case "add": 
        console.log(operation + ' is ' + add(operator1, operator2));
        break;

        case "subtract":
        console.log(operation + ' is ' + subtract(operator1, operator2));  
        break;

        case "multiply":
        console.log(operation + ' is ' + multiply(operator1, operator2));
        break;

        case "divide": if(operator2 === 0) {console.error("Number cannot be zero");}
        else
        console.log(operation + ' is ' + divide(operator1, operator2));
        break;

        default: console.error("Invalid operation")
    }

}

function add(operator1, operator2) {
    return (operator1 + operator2)
}

function subtract(operator1, operator2) {
    return (operator1 - operator2)
}

function multiply(operator1, operator2) {
    return (operator1 * operator2)
}

function divide(operator1, operator2) {
    return (operator1 / operator2)
}