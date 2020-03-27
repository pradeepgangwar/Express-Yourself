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
            if (selectedTab === 'breakfast')
            {
                msg.text = "I like to have my breakfast";
            }
            if (selectedTab === 'lunch')
            {
                msg.text = "I like to have my lunch";
            }
            if (selectedTab === 'fruits')
            {
                msg.text = "I like to eat fruits";
            }
            if (selectedTab === 'beverages')
            {
                msg.text = "I like to have beverages";
            }
            if (selectedTab === 'cutlery')
            {
                msg.text = "I like cutlery";
            }
            if (selectedTab === 'snacks')
            {
                msg.text = "I like to eat snacks";
            }
            if (selectedTab === 'sweets')
            {
                msg.text = "I like to eat sweets";
            }
            if (selectedTab === 'addons')
            {
                msg.text = "I would like to have addons";
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
            if (selectedTab === 'breakfast')
            {
                msg.text = "I don't like to have my breakfast";
            }
            if (selectedTab === 'lunch')
            {
                msg.text = "I don't like to have my lunch";
            }
            if (selectedTab === 'fruits')
            {
                msg.text = "I don't like to eat fruits";
            }
            if (selectedTab === 'beverages')
            {
                msg.text = "I don't like to have beverages";
            }
            if (selectedTab === 'cutlery')
            {
                msg.text = "I don't like cutlery";
            }
            if (selectedTab === 'snacks')
            {
                msg.text = "I don't like to eat snacks";
            }
            if (selectedTab === 'sweets')
            {
                msg.text = "I don't like to eat sweets";
            }
            if (selectedTab === 'addons')
            {
                msg.text = "I don't like to have addons";
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
            if (selectedTab === 'breakfast')
            {
                msg.text = "I want to have my breakfast";
            }
            if (selectedTab === 'lunch')
            {
                msg.text = "I want to have my lunch";
            }
            if (selectedTab === 'fruits')
            {
                msg.text = "I want to eat fruits";
            }
            if (selectedTab === 'beverages')
            {
                msg.text = "I want to have beverages";
            }
            if (selectedTab === 'cutlery')
            {
                msg.text = "I want cutlery";
            }
            if (selectedTab === 'snacks')
            {
                msg.text = "I want to eat snacks";
            }
            if (selectedTab === 'sweets')
            {
                msg.text = "I want to eat sweets";
            }
            if (selectedTab === 'addons')
            {
                msg.text = "I want to have addons";
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
            if (selectedTab === 'breakfast')
            {
                msg.text = "I don't want to have my breakfast";
            }
            if (selectedTab === 'lunch')
            {
                msg.text = "I don't want to have my lunch";
            }
            if (selectedTab === 'fruits')
            {
                msg.text = "I don't want to eat fruits";
            }
            if (selectedTab === 'beverages')
            {
                msg.text = "I don't want to have beverages";
            }
            if (selectedTab === 'cutlery')
            {
                msg.text = "I don't want cutlery";
            }
            if (selectedTab === 'snacks')
            {
                msg.text = "I don't want to eat snacks";
            }
            if (selectedTab === 'sweets')
            {
                msg.text = "I don't want to eat sweets";
            }
            if (selectedTab === 'addons')
            {
                msg.text = "I don't want to have addons";
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
            if (selectedTab === 'breakfast')
            {
                msg.text = "I want to have more breakfast";
            }
            if (selectedTab === 'lunch')
            {
                msg.text = "I want to have more lunch";
            }
            if (selectedTab === 'fruits')
            {
                msg.text = "I want to eat more fruits";
            }
            if (selectedTab === 'beverages')
            {
                msg.text = "I want to have more beverages";
            }
            if (selectedTab === 'cutlery')
            {
                msg.text = "I want more cutlery";
            }
            if (selectedTab === 'snacks')
            {
                msg.text = "I want to eat more snacks";
            }
            if (selectedTab === 'sweets')
            {
                msg.text = "I want to eat more sweets";
            }
            if (selectedTab === 'addons')
            {
                msg.text = "I want more addons";
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
            if (selectedTab === 'breakfast')
            {
                msg.text = "I don't want to have anymore breakfast";
            }
            if (selectedTab === 'lunch')
            {
                msg.text = "I don't want to have anymore lunch";
            }
            if (selectedTab === 'fruits')
            {
                msg.text = "I don't want to eat anymore fruits";
            }
            if (selectedTab === 'beverages')
            {
                msg.text = "I don't want to have anymore beverages";
            }
            if (selectedTab === 'cutlery')
            {
                msg.text = "I don't want anymore cutlery";
            }
            if (selectedTab === 'snacks')
            {
                msg.text = "I don't want to eat anymore snacks";
            }
            if (selectedTab === 'sweets')
            {
                msg.text = "I don't want to eat anymore sweets";
            }
            if (selectedTab === 'addons')
            {
                msg.text = "I don't want anymore addons";
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

    $('#breakfast').click(function() {
        activityMsg.text = "Breakfast";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'breakfast';
    });
    $('#lunch').click(function() {
        activityMsg.text = "Lunch";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'lunch';
    });
    $('#fruits').click(function() {
        activityMsg.text = "Fruits";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'fruits';
    });
    $('#beverages').click(function() {
        activityMsg.text = "Beverages";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'beverages';
    });
    $('#cutlery').click(function() {
        activityMsg.text = "Cutlery";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'cutlery';
    });
    $('#snacks').click(function() {
        activityMsg.text = "Snacks";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'snacks';
    });
    $('#sweets').click(function() {
        activityMsg.text = "Sweets";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'sweets';
    });
    $('#addons').click(function() {
        activityMsg.text = "Add ons";
        speechSynthesis.speak(activityMsg);
        $('.selected_block').removeClass('selected_block');
        $(this).addClass('selected_block');
        itemOneSelected = true;
        selectedTab = 'addons';
    });

});