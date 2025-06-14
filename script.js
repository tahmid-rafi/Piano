document.addEventListener('keydown', (e) => {
     const Keypress = e.key
     const tune = new Audio(`sounds/${Keypress}.mp3`)
     tune.play();
     const clickedButton = document.querySelector(`[data-key="${Keypress}"]`);
     if(clickedButton) {
         clickedButton.classList.add('active');
         setTimeout(() => {
             clickedButton.classList.remove('active');
         }, 100);
     }
})
