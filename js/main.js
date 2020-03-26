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
            if (selectedTab === 'greet')
            {
                msg.text = "I like to greet people";
            }
            if (selectedTab === 'eat')
            {
                msg.text = "I like to eat";
            }
            if (selectedTab === 'daily')
            {
                msg.text = "I like to do my daily activities";
            }
            if (selectedTab === 'fun')
            {
                msg.text = "I like to have fun";
            }
            if (selectedTab === 'learn')
            {
                msg.text = "I like to learn";
            }
            if (selectedTab === 'people')
            {
                msg.text = "I like to meet people";
            }
            if (selectedTab === 'places')
            {
                msg.text = "I like to visit places";
            }
            if (selectedTab === 'time')
            {
                msg.text = "I like to talk about time and weather";
            }
            if (selectedTab === 'help')
            {
                msg.text = "I like to help";
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
            if (selectedTab === 'greet')
            {
                msg.text = "I don't like to greet people";
            }
            if (selectedTab === 'eat')
            {
                msg.text = "I don't like to eat";
            }
            if (selectedTab === 'daily')
            {
                msg.text = "I don't like to do my daily activities";
            }
            if (selectedTab === 'fun')
            {
                msg.text = "I don't like to have fun";
            }
            if (selectedTab === 'learn')
            {
                msg.text = "I don't like to learn";
            }
            if (selectedTab === 'people')
            {
                msg.text = "I don't like to meet people";
            }
            if (selectedTab === 'places')
            {
                msg.text = "I don't like to visit places";
            }
            if (selectedTab === 'time')
            {
                msg.text = "I don't like to talk about time and weather";
            }
            if (selectedTab === 'help')
            {
                msg.text = "I don't like to help";
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
            if (selectedTab === 'greet')
            {
                msg.text = "I want to greet people";
            }
            if (selectedTab === 'eat')
            {
                msg.text = "I want to eat";
            }
            if (selectedTab === 'daily')
            {
                msg.text = "I want to do my daily activities";
            }
            if (selectedTab === 'fun')
            {
                msg.text = "I want to have fun";
            }
            if (selectedTab === 'learn')
            {
                msg.text = "I want to learn";
            }
            if (selectedTab === 'people')
            {
                msg.text = "I want to meet people";
            }
            if (selectedTab === 'places')
            {
                msg.text = "I want to visit places";
            }
            if (selectedTab === 'time')
            {
                msg.text = "I want to talk about time and weather";
            }
            if (selectedTab === 'help')
            {
                msg.text = "I need help";
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
            if (selectedTab === 'greet')
            {
                msg.text = "I don't want to greet people";
            }
            if (selectedTab === 'eat')
            {
                msg.text = "I don't want to eat";
            }
            if (selectedTab === 'daily')
            {
                msg.text = "I don't want to do my daily activities";
            }
            if (selectedTab === 'fun')
            {
                msg.text = "I don't want to have fun";
            }
            if (selectedTab === 'learn')
            {
                msg.text = "I don't want to learn";
            }
            if (selectedTab === 'people')
            {
                msg.text = "I don't want to meet people";
            }
            if (selectedTab === 'places')
            {
                msg.text = "I don't want to visit places";
            }
            if (selectedTab === 'time')
            {
                msg.text = "I don't want to talk about time and weather";
            }
            if (selectedTab === 'help')
            {
                msg.text = "I don't need help";
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
            if (selectedTab === 'greet')
            {
                msg.text = "I want to greet people some more";
            }
            if (selectedTab === 'eat')
            {
                msg.text = "I want to eat more";
            }
            if (selectedTab === 'daily')
            {
                msg.text = "I want to do my daily activities some more";
            }
            if (selectedTab === 'fun')
            {
                msg.text = "I want to have fun some more";
            }
            if (selectedTab === 'learn')
            {
                msg.text = "I want to learn more";
            }
            if (selectedTab === 'people')
            {
                msg.text = "I want to meet people some more";
            }
            if (selectedTab === 'places')
            {
                msg.text = "I want to visit more places";
            }
            if (selectedTab === 'time')
            {
                msg.text = "I want to talk about time and weather more";
            }
            if (selectedTab === 'help')
            {
                msg.text = "I need more help";
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
            if (selectedTab === 'greet')
            {
                msg.text = "I don't want to greet people anymore";
            }
            if (selectedTab === 'eat')
            {
                msg.text = "I don't want to eat anymore";
            }
            if (selectedTab === 'daily')
            {
                msg.text = "I don't want to do my daily activities anymore";
            }
            if (selectedTab === 'fun')
            {
                msg.text = "I don't want to have fun anymore";
            }
            if (selectedTab === 'learn')
            {
                msg.text = "I don't want to learn anymore";
            }
            if (selectedTab === 'people')
            {
                msg.text = "I don't want to meet people anymore";
            }
            if (selectedTab === 'places')
            {
                msg.text = "I don't want to visit more places";
            }
            if (selectedTab === 'time')
            {
                msg.text = "I don't want to talk about time and weather anymore";
            }
            if (selectedTab === 'help')
            {
                msg.text = "I don't need more help";
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

    $('#greet').click(function() {
        if (itemOneSelected && selectedTab == "greet")
        {
            window.location.href = 'greet.html';
        }
        activityMsg.text = "Greeting";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'greet';
    });
    $('#daily').click(function() {
        if (itemOneSelected && selectedTab == "daily")
        {
            window.location.href = 'daily.html';
        }
        activityMsg.text = "Daily Activities";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'daily';
    });
    $('#eat').click(function() {
        if (itemOneSelected && selectedTab == "eat")
        {
            window.location.href = 'eat.html';
        }
        activityMsg.text = "Eating";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'eat';
    });
    $('#fun').click(function() {
        if (itemOneSelected && selectedTab == "fun")
        {
            window.location.href = 'fun.html';
        }
        activityMsg.text = "Fun Activities";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'fun';
    });
    $('#learn').click(function() {
        if (itemOneSelected && selectedTab == "learn")
        {
            window.location.href = 'learn.html';
        }
        activityMsg.text = "Learn";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'learn';
    });
    $('#people').click(function() {
        if (itemOneSelected && selectedTab == "people")
        {
            window.location.href = 'people.html';
        }
        activityMsg.text = "People";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'people';
    });
    $('#places').click(function() {
        if (itemOneSelected && selectedTab == "places")
        {
            window.location.href = 'places.html';
        }
        activityMsg.text = "Places";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'places';
    });
    $('#time').click(function() {
        if (itemOneSelected && selectedTab == "time")
        {
            window.location.href = 'time.html';
        }
        activityMsg.text = "Time and Weather";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'time';
    });
    $('#help').click(function() {
        if (itemOneSelected && selectedTab == "help")
        {
            window.location.href = 'help.html';
        }
        activityMsg.text = "Help";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'help';
    });

});