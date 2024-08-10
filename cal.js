const display=document.getElementById("display");

function appendToDisplay(input)
{
    if (display.value === "0") {
        display.value = input;  
    } else {
        display.value += input;  
    }
}

function clearDisplay()
{
    display.value="0";
}

function calculate()
{
    display.value=eval(display.value);
}

function backspace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0"; 
    }
}