/**
 * Created by nedwaldie on 11/30/16.
 */


$(document).ready(function() {

            // shows the 10 facts when the a tag is clicked
            $('#answers').click(function () {
                $('dd').fadeToggle(1000);
            });

            // bolds the first of each li
            $('.national-parks').each(function () {
                $(this).children().first().css('font-weight', 'bold');
            });

            // when you click a li it hides all li of that parent
            $('li').click(function () {
                $(this).parent().hide();
            });

            // Shows li items when click 'toggle' button
            $('#toggle').click(function () {
                $('ul').slideDown();
            });

            // when Big Bend is clicked toggles the facts
            $('#big-bend').click(function () {
                $('#big-bend-facts').slideToggle();
            });

            // when Alibates Flint Quarries is clicked toggles the facts
            $('#alibates').click(function () {
                $('#alibates-facts').slideToggle();
            });

            // when San Antonio Missions is clicked toggles the facts
            $('#missions').click(function () {
                $('#missions-facts').slideToggle();
            });

            $('#left').click(function left() {
                $('#move-box').animate({
                    left: '-=50'
                }, 500)
            });

            $('#right').click(function right() {
                $('#move-box').animate({
                    left: '+=50'
                }, 500)
            });

            $('#up').click(function up() {
                $('#move-box').animate({
                    bottom: '+=50'
                }, 500)
            });

            $('#down').click(function down() {
                $('#move-box').animate({
                    bottom: '-=50'
                }, 500)
            });

            $('#reset').click(function () {
                $('#move-box').removeAttr('style');
            });
    });

