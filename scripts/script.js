"use strict";
$(function () {
    console.log("document is ready!");
    $("#doge-meme-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function () {
            calculateWow();
        }
    });
    $(document).ready(function () {
        //id = #, class = .
        // $("#userNameSubmit").click(greetUser());
        $("#userNameSubmit").click(function () {
            // grab what the user entered
            var userName = $("#userName").val();
            console.log("hi there " + userName + " !");
            $("#userGreetingArea").html("Your name has " + userName.length + " characters in it. You are awesome!");
        });
    });
    function calculateWow() {
        var x = $("#doge-meme-pic").position();
        var wow = x.top + x.left;
        if (wow < 500) {
            console.log('not much wow (' + wow + ')');
            $('#wow-output').html('<h2>not much wow (' + wow + ')</h2>');
        }
        else {
            console.log('so much wow (' + wow + ')!!!!');
            $('#wow-output').text('so much wow (' + wow + ')!!');
        }
    }
});