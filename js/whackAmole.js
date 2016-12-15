/**
 * Created by nedwaldie on 12/14/16.
 */
(function () {
    'use strict';
    var players = $('.players');
    var randomPlayerArray = [];
    var score = 0;
    var playerClicked = false;

    //--------------------------------- Generate a random number -----------------------------------------------------//
    var getRandomPlayer = function () {
        return players[Math.floor((Math.random() * 5))];
    };

    //--------------------------------- Function to assign random player to an Array ---------------------------------//
    var playerToArray = function () {
        randomPlayerArray.push(getRandomPlayer());
        return randomPlayerArray;
    };

    //--------------------------------- Display player ---------------------------------------------------------------//
    var displayPlayer = function() {
        // playerToArray();
        console.log(randomPlayerArray);
        $(randomPlayerArray[0]).removeClass("invisible");
        setTimeout(function () {
            $(randomPlayerArray[0]).addClass("invisible")
        }, 1000);
    };

    //--------------------------------- User turn to click on image --------------------------------------------------//
    $('.players').on('click', function () {
        score += 1;
        console.log(score);
        $('#score').html('Score: ' + score);
        resetBoard();
        randomPlayerArray.pop();
        playerClicked = true;
        checking();
    });

    //--------------------------------- Reset board ------------------------------------------------------------------//
    var resetBoard = function () {
        var selectedPlayer = randomPlayerArray[0];
        console.log(selectedPlayer);
        $(selectedPlayer).addClass('invisible');
    };

    //--------------------------------- Reset Player clicked ---------------------------------------------------------//
    var resetPlayerClicked = function () {
        playerClicked = false;
    };

    //--------------------------------- Game over --------------------------------------------------------------------//
    var gameOver = function () {
        score = 0;
        $('#game-board').addClass('invisible');
        $('#loserMessage').removeClass('invisible');
        setTimeout(function () {
            $('#game-board').removeClass('invisible');
            $('#loserMessage').addClass('invisible');
        }, 1000);
        console.log('Game Over');
    };


    //--------------------------------- computer turn ----------------------------------------------------------------//
    var computer = function () {
        playerToArray();
        displayPlayer();
        console.log(score);
    };

    //--------------------------------- checking to see if player has been clicked -----------------------------------//
    var checking = function () {
        if (playerClicked == true) {
            resetPlayerClicked();
            setTimeout(function () {
                computer();
            }, 750)
        } else {
            gameOver();
        }
    };

    var flashingText = function () {
        $('#spurs-fans').addClass('color');
        setTimeout(function () {
            $('#spurs-fans').removeClass('color');
        }, 750)
    };

    setInterval(flashingText, 1500);

    $('#new-game').click(function () {
        score = 0;
        computer();
    })

})();