"use strict";
$(document).ready(function() {

    $('#Title').click(function() {
        $('#Title').css("background-color", "tan");
    });
    $('p').dblclick(function() {
        $('p').css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    $('#nationPark').click(function(){
        $("#listI").slideUp();
    });



});


