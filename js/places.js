$(document).ready(function () {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    var itemOneSelected = false;
    var selectedTab = '';
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'en-US';

    $('#like').click(function(){
        if (itemOneSelected)
        {
            if (selectedTab === 'clinic')
            {
                msg.text = "I like to go to clinic";
            }
            if (selectedTab === 'park')
            {
                msg.text = "I like to go to park";
            }
            if (selectedTab === 'hospital')
            {
                msg.text = "I like to go to hospital";
            }
            if (selectedTab === 'restaurant')
            {
                msg.text = "I like to go to restaurant";
            }
            if (selectedTab === 'p-home')
            {
                msg.text = "I like to go to my home";
            }
            if (selectedTab === 'library')
            {
                msg.text = "I like to go to library";
            }
            if (selectedTab === 'school')
            {
                msg.text = "I like to go to school";
            }
            if (selectedTab === 'store')
            {
                msg.text = "I like to go to store";
            }
        }
        else
        {
            msg.text = "Like";            
        }
        speechSynthesis.speak(msg);
    });
    $('#dontlike').click(function(){
        if (itemOneSelected)
        {
            if (selectedTab === 'clinic')
            {
                msg.text = "I don't like to go to clinic";
            }
            if (selectedTab === 'park')
            {
                msg.text = "I don't like to go to park";
            }
            if (selectedTab === 'hospital')
            {
                msg.text = "I don't like to go to hospital";
            }
            if (selectedTab === 'restaurant')
            {
                msg.text = "I don't like to go to restaurant";
            }
            if (selectedTab === 'p-home')
            {
                msg.text = "I don't like to go to my home";
            }
            if (selectedTab === 'library')
            {
                msg.text = "I don't like to go to library";
            }
            if (selectedTab === 'school')
            {
                msg.text = "I don't like to go to school";
            }
            if (selectedTab === 'store')
            {
                msg.text = "I don't like to go to store";
            }
        }
        else
        {
            msg.text = "Don't Like";            
        }
        speechSynthesis.speak(msg);
    });
    $('#yes').click(function(){
        if (itemOneSelected)
        {
            if (selectedTab === 'clinic')
            {
                msg.text = "I want to go to clinic";
            }
            if (selectedTab === 'park')
            {
                msg.text = "I want to go to park";
            }
            if (selectedTab === 'hospital')
            {
                msg.text = "I want to go to hospital";
            }
            if (selectedTab === 'restaurant')
            {
                msg.text = "I want to go to restaurant";
            }
            if (selectedTab === 'p-home')
            {
                msg.text = "I want to go to my home";
            }
            if (selectedTab === 'library')
            {
                msg.text = "I want to go to library";
            }
            if (selectedTab === 'school')
            {
                msg.text = "I want to go to school";
            }
            if (selectedTab === 'store')
            {
                msg.text = "I want to go to store";
            }
        }
        else
        {
            msg.text = "Yes";            
        }
        speechSynthesis.speak(msg);
    });
    $('#no').click(function(){
        if (itemOneSelected)
        {
            if (selectedTab === 'clinic')
            {
                msg.text = "I don't want to go to clinic";
            }
            if (selectedTab === 'park')
            {
                msg.text = "I don't want to go to park";
            }
            if (selectedTab === 'hospital')
            {
                msg.text = "I don't want to go to hospital";
            }
            if (selectedTab === 'restaurant')
            {
                msg.text = "I don't want to go to restaurant";
            }
            if (selectedTab === 'p-home')
            {
                msg.text = "I don't want to go to my home";
            }
            if (selectedTab === 'library')
            {
                msg.text = "I don't want to go to library";
            }
            if (selectedTab === 'school')
            {
                msg.text = "I don't want to go to school";
            }
            if (selectedTab === 'store')
            {
                msg.text = "I don't want to go to store";
            }
        }
        else
        {
            msg.text = "No";            
        }
        speechSynthesis.speak(msg);
    });
    $('#more').click(function(){
        if (itemOneSelected)
        {
            if (selectedTab === 'clinic')
            {
                msg.text = "I want to go to clinic again";
            }
            if (selectedTab === 'park')
            {
                msg.text = "I want to go to park again";
            }
            if (selectedTab === 'hospital')
            {
                msg.text = "I want to go to hospital again";
            }
            if (selectedTab === 'restaurant')
            {
                msg.text = "I want to go to restaurant again";
            }
            if (selectedTab === 'p-home')
            {
                msg.text = "I want to go to my home again";
            }
            if (selectedTab === 'library')
            {
                msg.text = "I want to go to library again";
            }
            if (selectedTab === 'school')
            {
                msg.text = "I want to go to school again";
            }
            if (selectedTab === 'store')
            {
                msg.text = "I want to go to store again";
            }
        }
        else
        {
            msg.text = "More";            
        }
        speechSynthesis.speak(msg);
    });
    $('#less').click(function(){
        if (itemOneSelected)
        {
            if (selectedTab === 'clinic')
            {
                msg.text = "I don't want to go to clinic again";
            }
            if (selectedTab === 'park')
            {
                msg.text = "I don't want to go to park again";
            }
            if (selectedTab === 'hospital')
            {
                msg.text = "I don't want to go to hospital again";
            }
            if (selectedTab === 'restaurant')
            {
                msg.text = "I don't want to go to restaurant again";
            }
            if (selectedTab === 'p-home')
            {
                msg.text = "I don't want to go to my home again";
            }
            if (selectedTab === 'library')
            {
                msg.text = "I don't want to go to library again";
            }
            if (selectedTab === 'school')
            {
                msg.text = "I don't want to go to school again";
            }
            if (selectedTab === 'store')
            {
                msg.text = "I don't want to go to store again";
            }
        }
        else
        {
            msg.text = "Less";            
        }
        speechSynthesis.speak(msg);
    });

    var activityMsg = new SpeechSynthesisUtterance();
    activityMsg.lang = 'en-US';

    $('#clinic').click(function() {
        activityMsg.text = "Clinic";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'clinic';
    });
    $('#park').click(function() {
        activityMsg.text = "Park";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'park';
    });
    $('#hospital').click(function() {
        activityMsg.text = "Hospital";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'hospital';
    });
    $('#p-home').click(function() {
        activityMsg.text = "My Home";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'p-home';
    });
    $('#restaurant').click(function() {
        activityMsg.text = "Restaurant";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'restaurant';
    });
    $('#school').click(function() {
        activityMsg.text = "School";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'school';
    });
    $('#store').click(function() {
        activityMsg.text = "Store";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'store';
    });
    $('#library').click(function() {
        activityMsg.text = "Library";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'library';
    });

});