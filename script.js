const display = document.getElementById("display");
let lastButton = "";

function calculator(num) {

    display.value = display.value + num;
    lastButton = num;
    return;
}

function answer() {
    display.value = eval(display.value); //
    return;
}

function clear1() {
    document.getElementById("display").value = ""
    return;
}

function validateOperator(operator) {
    console.log(display.value);
    if (display.value.includes(operator)) {
        return;
    }
    display.value = display.value + operator;
}

// change eval - use different functions for each operator 
// maybe create function using regex 
