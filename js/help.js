$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    var activityMsg = new SpeechSynthesisUtterance();
    activityMsg.lang = 'en-US';

    $('#emergency').click(function() {
        activityMsg.text = "I am in an emergency. Please help!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#danger').click(function() {
        activityMsg.text = "I am in danger. Please help!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#feelsick').click(function() {
        activityMsg.text = "I feel sick!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#medicine').click(function() {
        activityMsg.text = "I need my medicines.";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#feeltired').click(function() {
        activityMsg.text = "I feel tired!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#water').click(function() {
        activityMsg.text = "I need water.";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#badtouch').click(function() {
        activityMsg.text = "Unsafe Touch";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });
    $('#hazards').click(function() {
        activityMsg.text = "Hazard! Please don't touch!";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
    });

});