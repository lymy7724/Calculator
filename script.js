const display = document.getElementById("display");
let lastKind = ""; // stores if last button was an operator or a number
let lastNumber = ""; // stores the actual character that you press 

function calculator(num, kind) {
    console.log(kind)
    // prevents user from using operators first 
    if (display.value == "" && kind == 'operator') {
        return;
    }
    // prevents user from using 2 operators consecutively 
    if (lastKind == 'operator' && kind == 'operator') {
        return;
    }
    // prevents user from using periods consecutively
    if (lastNumber == '.' && num == ".") {
        return;
    }

    display.value = display.value + num;
    lastKind = kind;
    lastNumber = num;
    return;
}
// prevents user from dividing by 0
function answer() {
    if (display.value.includes("/0")) {
        display.value = "Cannot divide by 0";
        return;
    }
    display.value = eval(display.value); //
    return;
}
// clears the display 
function clear1() {
    document.getElementById("display").value = ""
    return;
}


// allows user to perform calculations from keyboard
document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    // allows user to type any number and . on the keyboard (48-57 are keycodes for the numbers 0-9)
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.key == '.') {
        calculator(e.key, 'number');
    }
    // allows user to type the operators from the keyboard
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        calculator(e.key, 'operator');
    }
    // allows user to press enter/return on the keyboard to get the values 
    if (e.key == '=' || e.key == 'Enter') {
        answer();
    }
    // if you press c on the keyboard, it will clear the display
    if (e.keyCode == 99) {
        clear1();
        // display.value = display.value.substring(0, display.value.length - 1)
    }
};

