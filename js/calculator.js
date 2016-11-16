/**
 * Created by nedwaldie on 11/16/16.
 */
'use strict';

(function() {
    var operator;

    // When a number is pressed
    var btnPressed = function() {
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += this.innerHTML;
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += this.innerHTML;
        }
    };

    // When an operator is pressed
    var operatorPressed = function() {
        document.getElementById('operator').value = this.innerHTML;
    };

    // When clear is selected
    var clear = function() {
        document.getElementById('operator').value = '';
        document.getElementById('firstNumber').value = '';
        document.getElementById('secondNumber').value = '';
    };

    var equals = function() {
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '+') {
            firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
        } else if (document.getElementById('operator').value == '-') {
            firstNumber = parseInt(firstNumber) - parseInt(secondNumber);
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
        } else if (document.getElementById('operator').value == '/' && secondNumber == 0) {
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
            document.getElementById('zeroDiv').style.display = 'block';
        } else if (document.getElementById('operator').value == '/') {
            firstNumber = parseInt(firstNumber) / parseInt(secondNumber);
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
            document.getElementById('zeroDiv').style.display = 'none';
        } else if (document.getElementById('operator').value == '*') {
            firstNumber = parseInt(firstNumber) * parseInt(secondNumber);
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
        }
    };

    // Adding my buttons
    var buttons = {
        plus: document.getElementById('plus'),
        minus: document.getElementById('minus'),
        divide: document.getElementById('divide'),
        multiply: document.getElementById('multiply'),
        clear: document.getElementById('clear'),
        equals: document.getElementById('equals'),
        one: document.getElementById('one'),
        two: document.getElementById('two'),
        three: document.getElementById('three'),
        four: document.getElementById('four'),
        five: document.getElementById('five'),
        six: document.getElementById('six'),
        seven: document.getElementById('seven'),
        eight: document.getElementById('eight'),
        nine: document.getElementById('nine'),
        zero: document.getElementById('zero')
    };

    // Adding my event listeners
    buttons.plus.addEventListener('click', operatorPressed);
    buttons.minus.addEventListener('click', operatorPressed);
    buttons.divide.addEventListener('click', operatorPressed);
    buttons.multiply.addEventListener('click', operatorPressed);
    buttons.clear.addEventListener('click', clear);
    buttons.equals.addEventListener('click', equals);
    buttons.one.addEventListener('click', btnPressed);
    buttons.two.addEventListener('click', btnPressed);
    buttons.three.addEventListener('click', btnPressed);
    buttons.four.addEventListener('click', btnPressed);
    buttons.five.addEventListener('click', btnPressed);
    buttons.six.addEventListener('click', btnPressed);
    buttons.seven.addEventListener('click', btnPressed);
    buttons.eight.addEventListener('click', btnPressed);
    buttons.nine.addEventListener('click', btnPressed);
    buttons.zero.addEventListener('click', btnPressed);

})();