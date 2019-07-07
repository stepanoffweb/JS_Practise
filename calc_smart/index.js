class Calculator {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();
    }

    clear() {
        this.prevOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return;
        if(this.prevOperand != '') {
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.prevOperand),
            current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '&#x00F7;':
                computation = prev / current;
                break;
            default: return;
        }
        this.currentOperand = computation;
                console.log('this.currentOperand '+ this.currentOperand);
        this.operation = undefined;
        this.prevOperand = '';
    }

    getDisplayNumber(number) {
        const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) return '';
        return floatNumber.toLocaleString('en');
    }

    updateDisplay() {
        this.currentTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null) {
            this.previousTextElement.innerText = `${this.getDisplayNumber(this.currentOperand)} ${this.operation}`;

        }
    }
}
const numberBtns = document.querySelectorAll('[data-number]'),
    operationBtns = document.querySelectorAll('[data-operation]'),
    equalsBtn = document.querySelector('[data-equals]'),
    deleteBtn = document.querySelector('[data-delete]'),
    allClearBtn = document.querySelector('[data-all-clear]'),
    previousTextElement = document.querySelector('[data-previous]'),
    currentTextElement = document.querySelector('[data-current]');

let calculator = new Calculator(previousTextElement, currentTextElement);

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});
