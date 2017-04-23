// global variables
var stickerDB = {
    "soundstick01": {
        'imageURL' : 'https://s2.postimg.org/72k498e7t/Meme_Icon.png',
        'soundURL' : 'http://s0.vocaroo.com/media/download_temp/Vocaroo_s0jhzYofqUDc.mp3'
    },
    "soundstick02": {//petrosyan
        'imageURL' : 'https://s11.postimg.org/yp7ikoj03/1492872027707.jpg',
        'soundURL' : 'http://s0.vocaroo.com/media/download_temp/Vocaroo_s0GbCxnUhGCs.mp3'
    },  
    "soundstick03": {//badumtss
        'imageURL' : 'https://s11.postimg.org/lp0tld2r7/1439807786183043944.png',
        'soundURL' : 'http://s0.vocaroo.com/media/download_temp/Vocaroo_s0P9ehjxwni9.mp3'
    },
    "soundstick04": {//zayavlenye
        'imageURL' : 'https://s11.postimg.org/oulfbkldf/146003929413766113.jpg',
        'soundURL' : 'http://s0.vocaroo.com/media/download_temp/Vocaroo_s0mDXYAiLl1f.mp3'
    },
    "soundstick05": {//udivleniye
        'imageURL' : 'https://s11.postimg.org/junz3mfqr/1492872615646.jpg',
        'soundURL' : 'http://s1.vocaroo.com/media/download_temp/Vocaroo_s1VCAn0FSB6D.mp3'
    }
};


var sound = new Audio();

// main functions
function playSound(){
    sound.currentTime = 0;
    sound.src = stickerDB[this.className]['soundURL'];
    if(sound.paused)
    {
    	sound.play();
    }
    else
    {
    	sound.pause();
    }
};

function makeDiv(sticker_id){
    myDiv = document.createElement('div');
    myDiv.style.height='100px';
    myDiv.style.width='100px';
    myDiv.style.backgroundImage = "url(" + stickerDB[sticker_id]['imageURL'] +")";
    myDiv.style.backgroundSize = "cover";
    myDiv.classList.add(sticker_id);
    myDiv.onclick = playSound;
    return myDiv;
};

function message_processing(summaries){
    var messageChanges = summaries[0];
    messageChanges.added.forEach(function(element){
        var newMessage = element.childNodes[0];
        var text = newMessage.textContent || newMessage.innerText;;
        var ss01 = text.replace(/:soundstick01:/g , 'Ты недооцениваешь мою мощь!');
        var ss02 = text.replace(/:soundstick02:/g , 'Ты недооцениваешь мою мощь!');
        var ss03 = text.replace(/:soundstick03:/g , 'Ты недооцениваешь мою мощь!');
        var ss04 = text.replace(/:soundstick04:/g , 'Ты недооцениваешь мою мощь!');
        var ss05 = text.replace(/:soundstick05:/g , 'Ты недооцениваешь мою мощь!');

        if (ss01 !== text) {
                element.replaceChild(makeDiv('soundstick01'), newMessage);
        }

        if (ss02 !== text) {
                element.replaceChild(makeDiv('soundstick02'), newMessage);
        }

        if (ss03 !== text) {
                element.replaceChild(makeDiv('soundstick03'), newMessage);
        }

        if (ss04 !== text) {
                element.replaceChild(makeDiv('soundstick04'), newMessage);
        }

        if (ss05 !== text) {
                element.replaceChild(makeDiv('soundstick05'), newMessage);
        }


    });
};

var observer = new MutationSummary({
    callback: message_processing,
    //queries: [{ element: 'div.im_msg_text' }]
    queries: [{ element: 'div.im-mess--text.wall_module._im_log_body' }]
});