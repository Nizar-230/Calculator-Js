const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons");
const kalkulasi = document.getElementById("calculation");
const equalis = document.querySelector(".equal");
const removeTeks = document.querySelector(".remove");
const removeTeksAll = document.querySelector(".removeAll")

const symb = ["", "", ""];

let afterNumber = symb[0];
let beforeNumber = symb[1];
let operasiNumber = symb[2];


const displayNumber = () => {
    display.value = afterNumber;
    display.value = `${beforeNumber} ${operasiNumber} ${afterNumber}`;
}

function appendNumber(number) {
    if (afterNumber === "") {
        afterNumber = number;
    } else {
        afterNumber += number;
    }
    displayNumber()
}

function chooseOperation(op) {
    if (beforeNumber || afterNumber) {
        calculate();
    }
    operasiNumber = op;
    beforeNumber = afterNumber;
    afterNumber = "";
    displayNumber();
}

function calculate() {
    let result;
    let before = Number(beforeNumber);
    let after = Number(afterNumber);

    const arg = isNaN(before);
    const bins = isNaN(after);

    if (arg !== bins) {
        return "0";
    }

    if (operasiNumber === "+") {
        result = after + before;
    } else if (operasiNumber === "-") {
        result = before - after;
    } else if (operasiNumber === "*") {
        result = after * before;
    } else if (operasiNumber === "/") {
        result = before / after;
    } else {
        return "0"
    }

    afterNumber = result.toString();
    operasiNumber = "";
    beforeNumber = "";
    displayNumber();

    console.log(afterNumber)
}

function clear() {
    if (display.value.length >= 0) {
        afterNumber = afterNumber.substring(0, afterNumber.length - 1)
    } else {
        return "Text conntent not found"
    }
}

function clearAll() {
    afterNumber = afterNumber.replace(afterNumber, "");
    beforeNumber = beforeNumber.replace(beforeNumber, "");
    operasiNumber = "";
    displayNumber();
}


function containerButton(buts) {
    const value = buts.value;

    function pointButton() {
        buts.addEventListener("click", function () {
            appendNumber(value);
            displayNumber();
        });
    }

    function operasiNumber() {
        buts.addEventListener("click", function () {
            chooseOperation(value);
            displayNumber();
        });
    }


    if (!isNaN(value) || value === ".") {
        pointButton();
    } else {
        operasiNumber();
    }

    displayNumber();
}

const nilai = equalis.textContent;
const nilai2 = removeTeksAll.textContent;
const nilai3 = removeTeks.textContent;

function clearAllButton() {
    removeTeksAll.addEventListener("click", function () {
        clearAll();
        displayNumber();
    });
}

function equalResults() {
    equalis.addEventListener("click", function () {
        calculate();
        displayNumber();
    });
}

function clearButton() {
    removeTeks.addEventListener("click", function () {
        clear();
        displayNumber();
    })
}

if (removeTeksAll) {
    clearAllButton();
}
if (equalis) {
    equalResults();
}

if (removeTeks) {
    clearButton();
}

buttons.forEach(btn => containerButton(btn));

console.log(buttons)
console.log(display.value)

