/**
 * Created by nedwaldie on 11/15/16.
 */
'use strict';

(function(){

    // Start the timer
    function startTimer() {
        stopwatchInterval = setInterval(function() {
            // Update the inner html of the display by 1.
            seconds += .1 ;
            display.innerHTML = seconds.toFixed(1);
        }, interval)
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(stopwatchInterval);
    }

    // Reset the timer
    function resetTimer() {
        display.innerHTML = 0;
        seconds = 0;
    }

    var seconds = 0;
    var stopwatchInterval;
    var interval = 100;

    // Three Buttons
    var buttons = {
        start: document.getElementById('start'),
        stop: document.getElementById('stop'),
        reset: document.getElementById('reset')
    };

    var display = document.getElementById('display');

    // Add event listeners
    buttons.start.addEventListener('click', startTimer);
    buttons.stop.addEventListener('click', stopTimer);
    buttons.reset.addEventListener('click', resetTimer);



})();