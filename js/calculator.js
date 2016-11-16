/**
 * Created by nedwaldie on 11/16/16.
 */
'use strict';

(function() {
    var operator;


    function one(){
        // when number one is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '1';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '1';
        }
    }
    function two(){
        // when number two is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '2';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '2';
        }
    }
    function three(){
        // when number three is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '3';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '3';
        }
    }
    function four(){
        // when number four is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '4';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '4';
        }
    }
    function five(){
        // when number five is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '5';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '5';
        }
    }
    function six(){
        // when number six is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '6';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '6';
        }
    }
    function seven(){
        // when number seven is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '7';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '7';
        }
    }
    function eight(){
        // when number eight is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '8';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '8';
        }
    }
    function nine(){
        // when number nine is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '9';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '9';
        }
    }
    function zero(){
        // when number zero is pushed
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += '0';
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += '0';
        }
    }
    function add(){
        //  call this function when the add operator is called
        operator = '+';
        document.getElementById('operator').value = '+';
    }
    function subtract(){
        //  call this function when the subtract operator is called
        operator = '-';
        document.getElementById('operator').value = '-';
    }
    function divide(){
        //  call this function when the divide operator is called
        operator = '/';
        document.getElementById('operator').value = '/';
    }
    function multiply(){
        //  call this function when the multiply operator is called
        operator = '*';
        document.getElementById('operator').value = '*';
    }
    function clear(){
        //  call this function when the clear operator is called
        document.getElementById('operator').value = '';
        document.getElementById('firstNumber').value = '';
        document.getElementById('secondNumber').value = '';
    }
    function equals(){
        //  call this function when the equals operator is called
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
    }

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
    buttons.plus.addEventListener('click', add);
    buttons.minus.addEventListener('click', subtract);
    buttons.divide.addEventListener('click', divide);
    buttons.multiply.addEventListener('click', multiply);
    buttons.clear.addEventListener('click', clear);
    buttons.equals.addEventListener('click', equals);
    buttons.one.addEventListener('click', one);
    buttons.two.addEventListener('click', two);
    buttons.three.addEventListener('click', three);
    buttons.four.addEventListener('click', four);
    buttons.five.addEventListener('click', five);
    buttons.six.addEventListener('click', six);
    buttons.seven.addEventListener('click', seven);
    buttons.eight.addEventListener('click', eight);
    buttons.nine.addEventListener('click', nine);
    buttons.zero.addEventListener('click', zero);

})();