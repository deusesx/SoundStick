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
}
function makeDiv(sticker_id){
    myDiv = document.createElement('div');
    myDiv.style.height='100px';
    myDiv.style.width='100px';
    myDiv.style.backgroundImage = "url(" + stickerDB[sticker_id]['imageURL'] +")";
    myDiv.style.backgroundSize = "cover";
    myDiv.className = sticker_id
    myDiv.onclick = playSound;
    return myDiv;
}

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/:soundstick01:/g , 'Ты недооцениваешь мою мощь!');

            if (replacedText !== text) {
                element.replaceChild(makeDiv('soundstick01'), node);
            }
        }
    }
}

function key_phrase_processing(){
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/:soundstick01:/g , 'Ты недооцениваешь мою мощь!');

            if (replacedText !== text) {
                element.replaceChild(makeDiv('soundstick01'), node);
            }
        }
    }
}
}

