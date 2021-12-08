// Task 1
function isEmpty(object) {
    for (let prop in object) {
        return false;
    }

    return true;
}

// Task 2
function multiplyNumeric(object) {
    for (let prop in object) {
        if (typeof (object[prop]) === 'number') {
            object[prop] *= 2;
        }
    }
}

// Task 3
function getReadNumber() {
    let number;

    do {
        number = prompt('Введите число');
    } while (isNaN(+number) && number !== null);

    if (number !== null) {
        number = number.trim() === '' ? null : +number;
    }

    return number;
}

// Task 4
function getRandomNumber(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    return Math.random() * Math.abs(max - min) + min;
}

// Task 5
function getRandomInteger(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
}

// Task 6
function toUppercaseFirst(string) {
    let trimString = string.trim();

    if (trimString === '') {
        return trimString;
    }

    return string[0].toUpperCase() + string.slice(1);
}

// Task 7
function checkSpam(string) {
    string = string.toLowerCase();

    if (string.indexOf('viagra') !== -1 || string.indexOf('xxx') !== -1) {
        return true;
    }

    return false;
}

// Task 8
function getTruncateString(string, maxLength) {
    return string.length > maxLength ? string.slice(0, maxLength - 1) + '…' : string;
}

// Task 9
function extractCurrencyValue(string) {
    if (string.trim() === '' || string[1] === undefined) {
        return null;
    }

    let result = +string.slice(1);

    return isNaN(result) ? null : result;
}

// Task 10
function sumInput() {
    let numbers = [];
    let inputValue = prompt('Введите число');
    let number = +inputValue;

    while (!isNaN(number) && inputValue !== null && inputValue.trim() !== '') {
        numbers.push(number);
        inputValue = prompt('Введите число');
        number = +inputValue;
    }

    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Task 11
function getMaxSubSum(array) {
    let maxSum = 0;
    let sum = 0;

    for (let item of array) {
        sum += item;

        if (sum > maxSum) {
            maxSum = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}

// Task 13
function checkAgeUsingTernary(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

// Task 13
function checkAgeUsing(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

// Task 14
function getMin(number1, number2) {
    return number1 > number2 ? number2 : number1;
}

// Task 15
function calcPow(number, power) {
    let result = number;

    while (power > 1) {
        result *= number;
        power--;
    }

    return result;
}

// Task 17
function calcTimeToBuy(monthlyIncome, monthlyExpense, itemPrice) {
    if (
        monthlyIncome < monthlyExpense ||
        monthlyIncome <= 0 ||
        monthlyExpense < 0 ||
        itemPrice <= 0
    ) {
        return 0;
    }

    let amountMonths = 1;
    let netProfit = monthlyIncome - monthlyExpense;

    for (; netProfit < itemPrice; amountMonths++) {
        netProfit += monthlyIncome - monthlyExpense;
    }

    return amountMonths;
}
