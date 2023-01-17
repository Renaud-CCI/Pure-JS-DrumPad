let audios = document.querySelectorAll('audio');
let keyDivs = document.querySelectorAll('.key');

document.addEventListener('keydown', function (e) {
    let keyNbr = e.key.toUpperCase().charCodeAt();
//joue le son
    audios.forEach(function (audio){
        if(audio.dataset.key == keyNbr){
            audio.currentTime=0; 
            audio.play();
        }
    });
// modifie la div
    keyDivs.forEach(function(keyDiv){
        if(keyDiv.dataset.key == keyNbr){
            keyDiv.classList.add('playing');
        }
    });

})

// reinitialise la div
document.addEventListener('keyup', function (e) {
    let keyNbr = e.key.toUpperCase().charCodeAt();
    keyDivs.forEach(function(keyDiv){
        if(keyDiv.dataset.key == keyNbr){
            keyDiv.classList.remove('playing');
        }
    });

});
    