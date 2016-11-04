/**
 * Created by nedwaldie on 11/4/16.
 */
'use scrict';

var luckyNumber = Math.floor(Math.random()* 6);
var receipt = 60;

switch (luckyNumber) {
    case 0:
        var discountPrice = receipt * 1;
        console.log('Your price is ' +discountPrice);
        break;
    case 1:
        var discountPrice = receipt * .9;
        console.log('Your price is ' +discountPrice);
        break;
    case 2:
        var discountPrice = receipt * .75;
        console.log('Your price is ' +discountPrice);
        break;
    case 4:
        var discountPrice = receipt * .50;
        console.log('Your price is ' +discountPrice);
        break;
    case 5:
        console.log('You get it FREE!');
        break;
    default:
        console.log('I have no clue!!!');
}