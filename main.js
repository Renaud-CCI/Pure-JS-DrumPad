//----------Selectors---------

let audios = document.querySelectorAll('audio');
let keyDivs = document.querySelectorAll('.key');
let buttons = document.querySelectorAll('button');


//----------Functions---------

let keypressFunc = function(e){
    let keyNbr = e.key.toUpperCase().charCodeAt();
    //play sound
    audios.forEach(function (audio){
        if(audio.dataset.key == keyNbr){
            audio.currentTime=0; 
            audio.play();
        }
    });
    // modify CSS
    keyDivs.forEach(function(keyDiv){
        if(keyDiv.dataset.key == keyNbr){
            keyDiv.classList.add('playing');
            setTimeout(function(){
                keyDiv.classList.remove("playing");
              }, 100);
        }
    });
}


let simulateKey = function(e){
    const event1 = new KeyboardEvent("keypress", {key: e, isTrusted:true});
    document.dispatchEvent(event1);
}


let playBeat = function (keyCode, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(simulateKey(keyCode));
        }, time);
    });
}


let beatBox = function(buttonID){
    switch(buttonID){
        case 'queen' :
            playBeat("e", 0) 
            .then(() => {return playBeat("e", 350)})
            .then(() => {return playBeat("a", 350)})
            .then(() => {return playBeat("e", 700)})
            .then(() => {return playBeat("e", 350)})
            .then(() => {return playBeat("a", 350)})
            .then(() => {return playBeat("e", 700)})
            .then(() => {return playBeat("e", 350)})
            .then(() => {return playBeat("a", 350)})
            .then(() => {return playBeat("e", 700)})
            .then(() => {return playBeat("e", 350)})
            .then(() => {return playBeat("a", 350)})
            break;
        case 'rap' :
            playBeat("e", 0)
            .then(() => {return playBeat("s", 0)})
            .then(() => {return playBeat("z", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("a", 0)})
            .then(() => {return playBeat("w", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("s", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("s", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("a", 0)})
            .then(() => {return playBeat("w", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("a", 0)})
            .then(() => {return playBeat("w", 0)})
            break;
        case 'random' :
            playBeat("e", 0)
            .then(() => {return playBeat("q", 0)})
            .then(() => {return playBeat("x", 0)})
            .then(() => {return playBeat("c", 250)})
            .then(() => {return playBeat("a", 250)})
            .then(() => {return playBeat("a", 250)})
            .then(() => {return playBeat("w", 250)})
            .then(() => {return playBeat("q", 0)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("x", 250)})
            .then(() => {return playBeat("x", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("a", 250)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("s", 0)})
            .then(() => {return playBeat("x", 250)})
            .then(() => {return playBeat("c", 250)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("s", 0)})
            .then(() => {return playBeat("d", 250)})
            .then(() => {return playBeat("a", 0)})
            .then(() => {return playBeat("w", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("a", 250)})
            .then(() => {return playBeat("a", 0)})
            .then(() => {return playBeat("c", 0)})
            .then(() => {return playBeat("w", 250)})
            .then(() => {return playBeat("z", 0)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("c", 100)})
            .then(() => {return playBeat("a", 250)})
            .then(() => {return playBeat("z", 300)})
            .then(() => {return playBeat("a", 100)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("e", 0)})
            .then(() => {return playBeat("c", 0)})
            .then(() => {return playBeat("x", 250)})
            .then(() => {return playBeat("c", 400)})
            .then(() => {return playBeat("z", 0)})
            .then(() => {return playBeat("s", 0)})
            .then(() => {return playBeat("c", 100)})
            .then(() => {return playBeat("a", 0)})
            .then(() => {return playBeat("w", 0)})
            .then(() => {return playBeat("z", 250)})
            .then(() => {return playBeat("c", 250)})
            .then(() => {return playBeat("a", 0)})
            break;
    } 
}




//---------EventListeners--------------

document.addEventListener('keypress', (e) => keypressFunc(e))

keyDivs.forEach(function(keyDiv){
    keyDiv.addEventListener('click', function() {
        simulateKey(keyDiv.dataset.name)
    })
})

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        beatBox(button.id)
    })
})