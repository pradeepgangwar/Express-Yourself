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
            if (selectedTab === 'brush')
            {
                msg.text = "I like to brush my teeth";
            }
            if (selectedTab === 'bathing')
            {
                msg.text = "I like to have Bath";
            }
            if (selectedTab === 'clothing')
            {
                msg.text = "I like my clothing";
            }
            if (selectedTab === 'getready')
            {
                msg.text = "I like to get ready.";
            }
            if (selectedTab === 'sleep')
            {
                msg.text = "I like to sleep";
            }
            if (selectedTab === 'therapy')
            {
                msg.text = "I like to have my therapy sessions.";
            }
            if (selectedTab === 'toilet')
            {
                msg.text = "I like to go to toilet";
            }
            if (selectedTab === 'morning')
            {
                msg.text = "I like my morning routine";
            }
            if (selectedTab === 'evening')
            {
                msg.text = "I like my evening routine";
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
            if (selectedTab === 'brush')
            {
                msg.text = "I don't like to brush my teeth";
            }
            if (selectedTab === 'bathing')
            {
                msg.text = "I don't like to have Bath";
            }
            if (selectedTab === 'clothing')
            {
                msg.text = "I don't like my clothing";
            }
            if (selectedTab === 'getready')
            {
                msg.text = "I don't like to get ready.";
            }
            if (selectedTab === 'sleep')
            {
                msg.text = "I don't like to sleep";
            }
            if (selectedTab === 'therapy')
            {
                msg.text = "I don't like to have my therapy sessions.";
            }
            if (selectedTab === 'toilet')
            {
                msg.text = "I don't like to go to toilet";
            }
            if (selectedTab === 'morning')
            {
                msg.text = "I don't like my morning routine";
            }
            if (selectedTab === 'evening')
            {
                msg.text = "I don't like my evening routine";
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
            if (selectedTab === 'brush')
            {
                msg.text = "I want to brush my teeth";
            }
            if (selectedTab === 'bathing')
            {
                msg.text = "I want to have Bath";
            }
            if (selectedTab === 'clothing')
            {
                msg.text = "I want my clothing";
            }
            if (selectedTab === 'getready')
            {
                msg.text = "I want to get ready.";
            }
            if (selectedTab === 'sleep')
            {
                msg.text = "I want to sleep";
            }
            if (selectedTab === 'therapy')
            {
                msg.text = "I want to have my therapy sessions.";
            }
            if (selectedTab === 'toilet')
            {
                msg.text = "I want to go to toilet";
            }
            if (selectedTab === 'morning')
            {
                msg.text = "I want to do my morning routine";
            }
            if (selectedTab === 'evening')
            {
                msg.text = "I want to do my evening routine";
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
            if (selectedTab === 'brush')
            {
                msg.text = "I dont' want to brush my teeth";
            }
            if (selectedTab === 'bathing')
            {
                msg.text = "I dont' want to have Bath";
            }
            if (selectedTab === 'clothing')
            {
                msg.text = "I dont' want my clothing";
            }
            if (selectedTab === 'getready')
            {
                msg.text = "I dont' want to get ready.";
            }
            if (selectedTab === 'sleep')
            {
                msg.text = "I dont' want to sleep";
            }
            if (selectedTab === 'therapy')
            {
                msg.text = "I dont' want to have my therapy sessions.";
            }
            if (selectedTab === 'toilet')
            {
                msg.text = "I dont' want to go to toilet";
            }
            if (selectedTab === 'morning')
            {
                msg.text = "I dont' want to do my morning routine";
            }
            if (selectedTab === 'evening')
            {
                msg.text = "I dont' want to do my evening routine";
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
            if (selectedTab === 'brush')
            {
                msg.text = "I want to brush my teeth more";
            }
            if (selectedTab === 'bathing')
            {
                msg.text = "I want to have more Bath ";
            }
            if (selectedTab === 'clothing')
            {
                msg.text = "I want more clothing";
            }
            if (selectedTab === 'getready')
            {
                msg.text = "I want to get more ready";
            }
            if (selectedTab === 'sleep')
            {
                msg.text = "I want to sleep more";
            }
            if (selectedTab === 'therapy')
            {
                msg.text = "I want to have more therapy sessions.";
            }
            if (selectedTab === 'toilet')
            {
                msg.text = "I want to go to toilet more";
            }
            if (selectedTab === 'morning')
            {
                msg.text = "I want to do more of my morning routine";
            }
            if (selectedTab === 'evening')
            {
                msg.text = "I want to do more of my evening routine";
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
            if (selectedTab === 'brush')
            {
                msg.text = "I don't want to brush my teeth anymore";
            }
            if (selectedTab === 'bathing')
            {
                msg.text = "I don't want to have anymore Bath";
            }
            if (selectedTab === 'clothing')
            {
                msg.text = "I don't want anymore clothing";
            }
            if (selectedTab === 'getready')
            {
                msg.text = "I don't want to get ready again";
            }
            if (selectedTab === 'sleep')
            {
                msg.text = "I don't want to sleep anymore";
            }
            if (selectedTab === 'therapy')
            {
                msg.text = "I don't want to have anymore therapy sessions.";
            }
            if (selectedTab === 'toilet')
            {
                msg.text = "I don't want to go to toilet anymore";
            }
            if (selectedTab === 'morning')
            {
                msg.text = "I don't want to do my morning routine anymore";
            }
            if (selectedTab === 'evening')
            {
                msg.text = "I don't want to do my evening routine anymore";
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

    $('#brush').click(function() {
        activityMsg.text = "Brushing";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'brush';
    });
    $('#bathing').click(function() {
        activityMsg.text = "Bathing";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'bathing';
    });
    $('#clothing').click(function() {
        activityMsg.text = "Clothing";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'clothing';
    });
    $('#getready').click(function() {
        activityMsg.text = "Getting ready";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'getready';
    });
    $('#sleep').click(function() {
        activityMsg.text = "Sleep";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'sleep';
    });
    $('#therapy').click(function() {
        activityMsg.text = "Therapy";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'therapy';
    });
    $('#toilet').click(function() {
        activityMsg.text = "Toilet";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'toilet';
    });
    $('#morning').click(function() {
        activityMsg.text = "Morning Routine";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'morning';
    });
    $('#evening').click(function() {
        activityMsg.text = "Evening Routine";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'evening';
    });

});