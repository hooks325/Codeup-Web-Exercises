/**
 * Created by nedwaldie on 11/3/16.
 */
'use strict';

var studentsAverage = (70+80+95)/3;

if (studentsAverage > 80) {
    console.log('You\'re Awesome!');
} else {
    console.log('You need to practice more');
}

var ryan = ['Ryan', 250, ''];
var cameron = ['Cameron', 180, ''];
var george = ['George', 320, ''];

// HEB Discount
function discount(name){
    if (name[1] >= 200) {
        name[2] = name[1] * 0.9;
        console.log('Name: ' + name[0] + ' Original Price: ' +name[1] + ' Price after discount: ' +name[2]);
    } else {
        console.log('Name: ' + name[0] + ' Original Price: ' +name[1]);
    }
}

discount(ryan);
discount(cameron);
discount(george);
// End HEB Discount

var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin == 1) {
    console.log('Buy a house');
} else  {
    console.log('Buy a car');
}