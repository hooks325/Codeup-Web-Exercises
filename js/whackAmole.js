/**
 * Created by nedwaldie on 12/19/16.
 */
/**
 * Created by nedwaldie on 12/14/16.
 */
(function () {
    'use strict';
    var players = $('.players');
    var randomPlayer;
    var score = 0;
    var count = 6;
    var counter;
    var playerInterval;

    //--------------------------------- Generate a random number -----------------------------------------------------//
    var getRandomPlayer = function () {
        return players[Math.floor((Math.random() * 9))];
    };

    //--------------------------------- Display player ---------------------------------------------------------------//
    var displayPlayer = function() {
        randomPlayer = getRandomPlayer();
        console.log(randomPlayer);
        $(randomPlayer).removeClass("invisible");
        setTimeout(function () {
            $(randomPlayer).addClass("invisible");
        }, 750);
    };

    // Interval to run displayPlayer function
    var displayInterval = function () {
        playerInterval = setInterval(displayPlayer, 1500);
    };


    //--------------------------------- User turn to click on image --------------------------------------------------//
    $('.mavs').on('click', function () {
        score += 1;
        $('#score').html('Score: ' + score);
        resetBoard();
    });

    $('.spurs').on('click', function () {
        score -= 1;
        $('#score').html('Score: ' + score);
        resetBoard();
    });

    //--------------------------------- Reset board ------------------------------------------------------------------//
    var resetBoard = function () {
        $(randomPlayer).addClass('invisible');
    };

    //--------------------------------- Game over --------------------------------------------------------------------//
    var gameOver = function () {
        $('#game-board').addClass('invisible');
        $('#loserMessage').removeClass('invisible');
        $('#userScore').text('Your score is ' + score);
        score = 0;
        setTimeout(function () {
            $('#game-board').removeClass('invisible');
            $('#loserMessage').addClass('invisible');
        }, 2000);
        $('#timer').text('30');
    };

    //--------------------------------- checking to see if player has been clicked -----------------------------------//
    var checking = function () {

    };

    //--------------------------------- Flashing text ----------------------------------------------------------------//
    var flashingText = function () {
        $('#spurs-fans').addClass('color');
        setTimeout(function () {
            $('#spurs-fans').removeClass('color');
        }, 800)
    };

    setInterval(flashingText, 1600);

    //--------------------------------- Start a new game -------------------------------------------------------------//
    $('#new-game').click(function () {
        count = 30;
        interval();
        displayInterval();
        score = 0;
    });

    //--------------------------------- Game countdown ---------------------------------------------------------------/
    var interval =  function () {
        counter = setInterval(timer, 1000);
    };

    var timer = function () {
        count--;
        if (count <= 0) {
            clearInterval(counter);
            clearInterval(playerInterval);
            gameOver();
        }
        $('#timer').text(count);
    }

})();