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
            if (selectedTab === 'dancing')
            {
                msg.text = "I like to dance";
            }
            if (selectedTab === 'indoor_games')
            {
                msg.text = "I like to play Indoor games";
            }
            if (selectedTab === 'music')
            {
                msg.text = "I like music";
            }
            if (selectedTab === 'outdoor_games')
            {
                msg.text = "I like to play outdoor games";
            }
            if (selectedTab === 'read_activities')
            {
                msg.text = "I like to read";
            }
            if (selectedTab === 'sports')
            {
                msg.text = "I like to play sports";
            }
            if (selectedTab === 'tv')
            {
                msg.text = "I like to watch tv";
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
            if (selectedTab === 'dancing')
            {
                msg.text = "I don't like to dance";
            }
            if (selectedTab === 'indoor_games')
            {
                msg.text = "I don't like to play Indoor games";
            }
            if (selectedTab === 'music')
            {
                msg.text = "I don't like music";
            }
            if (selectedTab === 'outdoor_games')
            {
                msg.text = "I don't like to play outdoor games";
            }
            if (selectedTab === 'read_activities')
            {
                msg.text = "I don't like to read";
            }
            if (selectedTab === 'sports')
            {
                msg.text = "I don't like to play sports";
            }
            if (selectedTab === 'tv')
            {
                msg.text = "I don't like to watch tv";
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
            if (selectedTab === 'dancing')
            {
                msg.text = "I want to dance";
            }
            if (selectedTab === 'indoor_games')
            {
                msg.text = "I want to play Indoor games";
            }
            if (selectedTab === 'music')
            {
                msg.text = "I want music";
            }
            if (selectedTab === 'outdoor_games')
            {
                msg.text = "I want to play outdoor games";
            }
            if (selectedTab === 'read_activities')
            {
                msg.text = "I want to read";
            }
            if (selectedTab === 'sports')
            {
                msg.text = "I want to play sports";
            }
            if (selectedTab === 'tv')
            {
                msg.text = "I want to watch tv";
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
            if (selectedTab === 'dancing')
            {
                msg.text = "I don't want to dance";
            }
            if (selectedTab === 'indoor_games')
            {
                msg.text = "I don't want to play Indoor games";
            }
            if (selectedTab === 'music')
            {
                msg.text = "I don't want music";
            }
            if (selectedTab === 'outdoor_games')
            {
                msg.text = "I don't want to play outdoor games";
            }
            if (selectedTab === 'read_activities')
            {
                msg.text = "I don't want to read";
            }
            if (selectedTab === 'sports')
            {
                msg.text = "I don't want to play sports";
            }
            if (selectedTab === 'tv')
            {
                msg.text = "I don't want to watch tv";
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
            if (selectedTab === 'dancing')
            {
                msg.text = "I want to dance more";
            }
            if (selectedTab === 'indoor_games')
            {
                msg.text = "I want to play more Indoor games";
            }
            if (selectedTab === 'music')
            {
                msg.text = "I want more music";
            }
            if (selectedTab === 'outdoor_games')
            {
                msg.text = "I want to play more outdoor games";
            }
            if (selectedTab === 'read_activities')
            {
                msg.text = "I want to read more";
            }
            if (selectedTab === 'sports')
            {
                msg.text = "I want to play more sports";
            }
            if (selectedTab === 'tv')
            {
                msg.text = "I want to watch more tv";
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
            if (selectedTab === 'dancing')
            {
                msg.text = "I don't want to dance anymore";
            }
            if (selectedTab === 'indoor_games')
            {
                msg.text = "I don't want to play anymore Indoor games";
            }
            if (selectedTab === 'music')
            {
                msg.text = "I don't want anymore music";
            }
            if (selectedTab === 'outdoor_games')
            {
                msg.text = "I don't want to play anymore outdoor games";
            }
            if (selectedTab === 'read_activities')
            {
                msg.text = "I don't want to read anymore";
            }
            if (selectedTab === 'sports')
            {
                msg.text = "I don't want to play anymore sports";
            }
            if (selectedTab === 'tv')
            {
                msg.text = "I don't want to watch anymore tv";
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

    $('#dancing').click(function() {
        activityMsg.text = "Dancing";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'dancing';
    });
    $('#indoor_games').click(function() {
        activityMsg.text = "indoor games";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'indoor_games';
    });
    $('#music').click(function() {
        activityMsg.text = "Music";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'music';
    });
    $('#outdoor_games').click(function() {
        activityMsg.text = "Outdoor games";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'outdoor_games';
    });
    $('#read_activities').click(function() {
        activityMsg.text = "Reading";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'read_activities';
    });
    $('#sports').click(function() {
        activityMsg.text = "Sports";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'sports';
    });
    $('#tv').click(function() {
        activityMsg.text = "TV";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'tv';
    });

});