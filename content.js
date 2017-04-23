// global variables
var stickerDB = {
    "soundstick01": {
        'imageURL' : 'https://s2.postimg.org/72k498e7t/Meme_Icon.png',
        'soundURL' : 'http://s0.vocaroo.com/media/download_temp/Vocaroo_s0jhzYofqUDc.mp3'
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
        var replacedText = text.replace(/:soundstick01:/g , 'Ты недооцениваешь мою мощь!');
        if (replacedText !== text) {
                element.replaceChild(makeDiv('soundstick01'), newMessage);
        }
    });
};

var observer = new MutationSummary({
    callback: message_processing,
    //queries: [{ element: 'div.im_msg_text' }]
    queries: [{ element: 'div.im-mess--text.wall_module._im_log_body' }]
});