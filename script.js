window.addEventListener('keydown', function(e) {
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
    // console.log(key);
    key.classList.add('playing');
})

const keys = document.querySelectorAll('.key');
// console.log(keys);

function removeTransition(e) {
    // console.log(e.propertyName)
    if(e.propertyName !== 'transform') return;
    // console.log(this);
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
