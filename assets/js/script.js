var temporal = 0;
var operation = '';
var calculatorInput = document.getElementById('inputID');
let memory = 0;


function add(num) {
  if (num == 0) {
    if (calculatorInput.value[calculatorInput.value.length - 1] != '0' || calculatorInput.value.length > 1) {
      calculatorInput.value = calculatorInput.value + num;
    }


  } else if (num == '.') {
    if (calculatorInput.value[calculatorInput.value.length - 1] != '.' && calculatorInput.value != '') {
      calculatorInput.value = calculatorInput.value + num;
    }
  } else {
    calculatorInput.value = calculatorInput.value + num;
  }
}

function opFunction(operator) {
  operation = operator;
  temporal = calculatorInput.value;
  calculatorInput.value = '';
}

function equal() {
  if (operation != '') {
    calculatorInput.value = eval(temporal + operation + calculatorInput.value);
  }
}

function reverse() {
  calculatorInput.value = calculatorInput.value * -1;
}

function percent() {
  calculatorInput.value = calculatorInput.value / 100;
}

function square() {
  calculatorInput.value = calculatorInput.value ** 2;
}

function cube() {
  calculatorInput.value = calculatorInput.value ** 3;
}

function root() {
  calculatorInput.value = calculatorInput.value ** 0.5;
}

function pi() {
  calculatorInput.value = 3.14596;
}

function clearInput() {
  if (calculatorInput.value != '') {
    calculatorInput.value = '';
  } else {
    temporal = 0;
    operation = '';
  }
}

// -------------- Mem Buttons ------------------------

function memSum() {
  memory += parseFloat(calculatorInput.value)
}

function memMin() {
  memory -= parseFloat(calculatorInput.value)
}

function memDel() {
  memory = 0;
}

function memTotal() {
  calculatorInput.value = memory;
}

