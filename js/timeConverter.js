/**
 * Created by nedwaldie on 11/15/16.
 */
'use strict';

(function() {

    var time = 0;
    var userTime;

    function twelveHour() {
        time = document.getElementById('time').value;
        userTime = time.split(':');
        var hour = parseInt(userTime[0]);
        var minute = parseInt(userTime[1]);
        if (document.getElementById('am').checked) {
            if (hour <= 12) {
                var timeArray = [hour, minute];
                var newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            } else {
                hour = hour - 12;
                timeArray = [hour, minute];
                newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            }
        } else if (document.getElementById('pm').checked) {
            if (hour <= 12) {
                var timeArray = [hour, minute];
                var newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            } else {
                hour = hour - 12;
                timeArray = [hour, minute];
                newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            }
        }
    }

    function twentyFourHour() {
        time = document.getElementById('time').value;
        userTime = time.split(':');
        var hour = parseInt(userTime[0]);
        var minute = parseInt(userTime[1]);
        if (document.getElementById('am').checked) {
            if (hour <= 12) {
                var timeArray = [hour, minute];
                var newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            } else {
                hour = hour - 12;
                timeArray = [hour, minute];
                newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            }
        } else if (document.getElementById('pm').checked) {
            if (hour <= 12) {
                hour = hour + 12;
                var timeArray = [hour, minute];
                var newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
            } else {
                timeArray = [hour, minute];
                newTime = timeArray.join(':');
                document.getElementById('time').value = newTime;
        }
        }
    }

    var buttons = {
        twelveHourConverter: document.getElementById('12-hour'),
        twentyFourHourConverter: document.getElementById('24-hour')
    };

    buttons.twelveHourConverter.addEventListener('click', twelveHour);
    buttons.twentyFourHourConverter.addEventListener('click', twentyFourHour);


})();