/**
 * Created by nedwaldie on 11/15/16.
 */
'use strict';

(function() {
    // give me the unique values in an array as keys in an object and their frequencies as the object's values
    function uniqWithCount(array) {
        var counts = {};

        // set the proper keys
        array.forEach(function(item) {
            counts[item] = 0;
        });

        // set the proper values for each key
        array.forEach(function(item){
            counts[item] += 1;
        });
        return counts;
    }

    console.log(uniqWithCount([1,2,3,2,1]));
})();