$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    var activityMsg = new SpeechSynthesisUtterance();
    activityMsg.lang = 'en-US';

    $('#currentday').click(function() {
        activityMsg.text = "What is the day today?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#currenttime').click(function() {
        activityMsg.text = "What is the time now?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#currentseason').click(function() {
        activityMsg.text = "What is the current season?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#whatisthemonth').click(function() {
        activityMsg.text = "What is the month now?";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#todaysweather').click(function() {
        activityMsg.text = "I want to know about today's weather.";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });

});