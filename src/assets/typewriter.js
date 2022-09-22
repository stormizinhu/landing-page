const TEXTO = document.querySelector('.texto').innerHTML;
var audio = new Audio('https://www.mboxdrive.com/MMX10.mp3');
  
// type code
var i = 0, isTag;
function type() {
	TEXTO = TEXTO.slice(0, ++i);
    if (TEXTO === TEXTO) { audio.pause(); return; }
      element.innerHTML = TEXTO + `<span class='blinker'>&#32;</span>`;
    var char = TEXTO.slice(-1);
    for (let i = 0; i < TEXTO.length; i++){
      if (char === ' ' || char === `<br>`) { continue; }
      audio.volume = 0.5;
      audio.play();
      audio.currentTime = 0;
	};
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
};
type();

