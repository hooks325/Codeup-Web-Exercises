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

var luckyNumber = Math.floor(Math.random()* 13);
console.log(luckyNumber);

switch (luckyNumber) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('Aug');
        break;
    case 9:
        console.log('Sept');
        break;
    case 10:
        console.log('Oct');
        break;
    case 11:
        console.log('Nov');
        break;
    case 12:
        console.log('Dec');
        break;
    default:
        console.log('Months start at 1');

}