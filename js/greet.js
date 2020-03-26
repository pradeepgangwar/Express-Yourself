$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    var activityMsg = new SpeechSynthesisUtterance();
    activityMsg.lang = 'en-US';

    $('#hi').click(function() {
        activityMsg.text = "Hi";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#hello').click(function() {
        activityMsg.text = "Hello!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#goodmorning').click(function() {
        activityMsg.text = "Good Morning!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#goodafternoon').click(function() {
        activityMsg.text = "Good Afternoon!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#goodevening').click(function() {
        activityMsg.text = "Good Evening!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#goodnight').click(function() {
        activityMsg.text = "Good Night!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#bye').click(function() {
        activityMsg.text = "Bye!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#highfive').click(function() {
        activityMsg.text = "High Five!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#howareyou').click(function() {
        activityMsg.text = "How are you?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#howdoyoudo').click(function() {
        activityMsg.text = "How do you do?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#howwasyourday').click(function() {
        activityMsg.text = "How was your day?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#nicetomeetyou').click(function() {
        activityMsg.text = "Nice to meet you!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });

});