function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    display.value = "I MISS YOU!";
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
