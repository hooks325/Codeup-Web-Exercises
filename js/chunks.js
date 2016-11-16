/**
 * Created by nedwaldie on 11/16/16.
 */
'use strict';
(function() {
    function chunk(array) {
        var chunksOfThree = [];
        for (var i = 0; i <= array.length; i = i + 3) {
            var pieces = array.slice(i,(i+3));
            chunksOfThree.push(pieces);
        }
        return chunksOfThree;
    }

    console.log(chunk([1,2,3,4,5]));

})();