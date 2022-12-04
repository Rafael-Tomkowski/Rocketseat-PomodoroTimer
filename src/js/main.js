const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const setButton = document.querySelector('.set');
const sound_on = document.querySelector('.sound-on')
const sound_off = document.querySelector('.sound-off')

//clock
let minutes
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
//Event-Driven
//Callback

function countDown(){
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        if( seconds <= 0) {
            seconds = 60

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0") 

        if(minutes <= 0) {
            return
        }



        countDown()
    }, 1000)
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
});

stopButton.addEventListener('click', function (){
    stopButton.classList.add('hide');
    setButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
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
    minutes = prompt('Quantos minutos');
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
});