/**
 * Created by nedwaldie on 11/4/16.
 */
'use strict';
//
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= allCones) {
        allCones = allCones - cones;
        console.log(cones + ' Cones sold.');
        console.log('I have ' + allCones + ' Left');
    } else {
        console.log('I can\'t sell you ' + cones + ' I only have ' + allCones + ' left.');
    }
} while (allCones > 0);
console.log('Yay i sold them all.');


// Bonus


do {
    var random = Math.floor(Math.random() * 20 + 1);
} while (random % 2 == 1);

console.log(random);
