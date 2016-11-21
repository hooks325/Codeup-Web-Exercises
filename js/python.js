/**
 * Created by nedwaldie on 11/16/16.
 */
'use strict';
(function() {
    function range(start, stop, count) {
        var rangeOfNumbers = [];
        var count = (typeof count !== 'undefined') ?  count : 1;

        if (start < stop) {
            for (start; start < stop; start = start + count) {
                rangeOfNumbers.push(start);
            }
            rangeOfNumbers.push(stop);
            return rangeOfNumbers;
        } else if (start > stop) {
            for (start; start > stop; start = start - count) {
                rangeOfNumbers.push(start);
            }
            rangeOfNumbers.push(stop);
            return rangeOfNumbers;
        }

    }
    console.log(range(5, 1));
})();
