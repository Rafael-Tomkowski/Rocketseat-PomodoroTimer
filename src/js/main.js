const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const setButton = document.querySelector('.set');
const sound_on = document.querySelector('.sound-on');
const sound_off = document.querySelector('.sound-off');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;


function resetControls(){
    stopButton.classList.add('hide');
    setButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer(){
    updateTimerDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
}

function countDown(){
    timerTimeOut = setTimeout(function() {

    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    
    if (minutes <= 0) {
        resetControls();
        return;
        
    }
    
    if (seconds <= 0) {
        seconds = 60;
        --minutes;
    } 
    
    updateTimerDisplay(minutes, String(seconds - 1));

    countDown();
    }, 1000);

}



playButton.addEventListener('click', function() {
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
    setButton.classList.add('hide');
    stopButton.classList.remove('hide');
    
    countDown();

});

pauseButton.addEventListener('click', function() {
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
    clearTimeout(timerTimeOut);
});

stopButton.addEventListener('click', function (){
    resetTimer();
    resetControls();
});

sound_on.addEventListener('click', function(){
    sound_on.classList.add('hide');
    sound_off.classList.remove('hide');
});

sound_off.addEventListener('click', function(){
    sound_off.classList.add('hide');
    sound_on.classList.remove('hide');
});

setButton.addEventListener('click', function(){
    let newMinutes = prompt('Quantos minutos');
    if(!newMinutes) {
        resetTimer();
        return;
    }
    minutes = newMinutes;
    updateTimerDisplay(minutes, 0);
});
