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
            if (selectedTab === 'father')
            {
                msg.text = "I like my father";
            }
            if (selectedTab === 'mother')
            {
                msg.text = "I like my mother";
            }
            if (selectedTab === 'grandfather')
            {
                msg.text = "I like my grandfather";
            }
            if (selectedTab === 'grandmother')
            {
                msg.text = "I like my grandmother";
            }
            if (selectedTab === 'sister')
            {
                msg.text = "I like to my sister";
            }
            if (selectedTab === 'brother')
            {
                msg.text = "I like to my brother";
            }
            if (selectedTab === 'teacher')
            {
                msg.text = "I like my teacher";
            }
            if (selectedTab === 'friend')
            {
                msg.text = "I like my friend";
            }
            if (selectedTab === 'uncle')
            {
                msg.text = "I like my uncle";
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
            if (selectedTab === 'father')
            {
                msg.text = "I don't like my father";
            }
            if (selectedTab === 'mother')
            {
                msg.text = "I don't like my mother";
            }
            if (selectedTab === 'grandfather')
            {
                msg.text = "I don't like my grandfather";
            }
            if (selectedTab === 'grandmother')
            {
                msg.text = "I don't like my grandmother";
            }
            if (selectedTab === 'sister')
            {
                msg.text = "I don't like to my sister";
            }
            if (selectedTab === 'brother')
            {
                msg.text = "I don't like to my brother";
            }
            if (selectedTab === 'teacher')
            {
                msg.text = "I don't like my teacher";
            }
            if (selectedTab === 'friend')
            {
                msg.text = "I don't like my friend";
            }
            if (selectedTab === 'uncle')
            {
                msg.text = "I don't like my uncle";
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
            if (selectedTab === 'father')
            {
                msg.text = "I need my father";
            }
            if (selectedTab === 'mother')
            {
                msg.text = "I need my mother";
            }
            if (selectedTab === 'grandfather')
            {
                msg.text = "I need my grandfather";
            }
            if (selectedTab === 'grandmother')
            {
                msg.text = "I need my grandmother";
            }
            if (selectedTab === 'sister')
            {
                msg.text = "I need to my sister";
            }
            if (selectedTab === 'brother')
            {
                msg.text = "I need to my brother";
            }
            if (selectedTab === 'teacher')
            {
                msg.text = "I need my teacher";
            }
            if (selectedTab === 'friend')
            {
                msg.text = "I need my friend";
            }
            if (selectedTab === 'uncle')
            {
                msg.text = "I need my uncle";
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
            if (selectedTab === 'father')
            {
                msg.text = "I don't need my father";
            }
            if (selectedTab === 'mother')
            {
                msg.text = "I don't need my mother";
            }
            if (selectedTab === 'grandfather')
            {
                msg.text = "I don't need my grandfather";
            }
            if (selectedTab === 'grandmother')
            {
                msg.text = "I don't need my grandmother";
            }
            if (selectedTab === 'sister')
            {
                msg.text = "I don't need to my sister";
            }
            if (selectedTab === 'brother')
            {
                msg.text = "I don't need to my brother";
            }
            if (selectedTab === 'teacher')
            {
                msg.text = "I don't need my teacher";
            }
            if (selectedTab === 'friend')
            {
                msg.text = "I don't need my friend";
            }
            if (selectedTab === 'uncle')
            {
                msg.text = "I don't need my uncle";
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
            if (selectedTab === 'father')
            {
                msg.text = "I want to talk more to my father";
            }
            if (selectedTab === 'mother')
            {
                msg.text = "I want to talk more to my mother";
            }
            if (selectedTab === 'grandfather')
            {
                msg.text = "I want to talk more to my grandfather";
            }
            if (selectedTab === 'grandmother')
            {
                msg.text = "I want to talk more to my grandmother";
            }
            if (selectedTab === 'sister')
            {
                msg.text = "I want to talk more to my sister";
            }
            if (selectedTab === 'brother')
            {
                msg.text = "I want to talk more to my brother";
            }
            if (selectedTab === 'teacher')
            {
                msg.text = "I want to talk more to my teacher";
            }
            if (selectedTab === 'friend')
            {
                msg.text = "I want to talk more to my friend";
            }
            if (selectedTab === 'uncle')
            {
                msg.text = "I want to talk more to my uncle";
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
            if (selectedTab === 'father')
            {
                msg.text = "I don't want to talk to my father anymore";
            }
            if (selectedTab === 'mother')
            {
                msg.text = "I don't want to talk to my mother anymore";
            }
            if (selectedTab === 'grandfather')
            {
                msg.text = "I don't want to talk to my grandfather anymore";
            }
            if (selectedTab === 'grandmother')
            {
                msg.text = "I don't want to talk to my grandmother anymore";
            }
            if (selectedTab === 'sister')
            {
                msg.text = "I don't want to talk to my sister anymore";
            }
            if (selectedTab === 'brother')
            {
                msg.text = "I don't want to talk to my brother anymore";
            }
            if (selectedTab === 'teacher')
            {
                msg.text = "I don't want to talk to my teacher anymore";
            }
            if (selectedTab === 'friend')
            {
                msg.text = "I don't want to talk to my friend anymore";
            }
            if (selectedTab === 'uncle')
            {
                msg.text = "I don't want to talk to my uncle anymore";
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

    $('#father').click(function() {
        activityMsg.text = "Father";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'father';
    });
    $('#mother').click(function() {
        activityMsg.text = "Mother";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'mother';
    });
    $('#grandfather').click(function() {
        activityMsg.text = "Grand Father";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'grandfather';
    });
    $('#grandmother').click(function() {
        activityMsg.text = "Grand Mother";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'grandmother';
    });
    $('#sister').click(function() {
        activityMsg.text = "Sister";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'sister';
    });
    $('#friend').click(function() {
        activityMsg.text = "friend";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'friend';
    });
    $('#brother').click(function() {
        activityMsg.text = "Brother";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'brother';
    });
    $('#teacher').click(function() {
        activityMsg.text = "Teacher";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'teacher';
    });
    $('#uncle').click(function() {
        activityMsg.text = "Uncle";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'uncle';
    });

});