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

document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        display.value = display.value + e.key;
    }
    console.log(e)
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '.') {
        display.value = display.value + e.key;
    }
    if (e.key == '=' || e.key == 'Enter') {
        answer();
    }
};

