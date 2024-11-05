const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            display.value = '';
        } else if (button.textContent === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += button.textContent;
        }
    });
});

function calculateTrigonometric(operator, value) {
    switch (operator) {
      case 'sin':
        return Math.sin(value);
      case 'cos':
        return Math.cos(value);
      case 'tan':
        return Math.tan(value);
      case 'asin':
        return Math.asin(value);
      case 'acos':
        return Math.acos(value);
      case 'atan':
        return Math.atan(value);
      default:
        return 'Invalid operator';
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'sin' || button.textContent === 'cos' || button.textContent === 'tan' || button.textContent === 'log' || button.textContent === 'ln') {
            // Handle trigonometric and logarithmic functions
            const operator = button.textContent;
            const value = parseFloat(display.value);
            const result = calculateTrigonometric(operator, value);
            display.value = result;
        } else if (button.textContent === 'AC') {
            // ...
        } else if (button.textContent === 'DEL') {
            // ...
        } else if (button.textContent === '=') {
            // ...
        } else {
            // ...
        }
    });
});