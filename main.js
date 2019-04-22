
function audioA(){
    document.getElementById('audio_a').play();
}
function audioS(){
    document.getElementById('audio_s').play();
}
function audioD(){
    document.getElementById('audio_d').play();
}
function audioF(){
    document.getElementById('audio_f').play();
}
function audioG(){
    document.getElementById('audio_g').play();
}
function audioH(){
    document.getElementById('audio_h').play();
}
function audioJ(){
    document.getElementById('audio_j').play();
}
function audioK(){
    document.getElementById('audio_k').play();
}

let buttonA = document.getElementById('button_A').addEventListener('click', audioA);
let buttonS = document.getElementById('button_S').addEventListener('click', audioS);
let buttonD = document.getElementById('button_D').addEventListener('click', audioD);
let buttonF = document.getElementById('button_F').addEventListener('click', audioF);
let buttonG = document.getElementById('button_G').addEventListener('click', audioG);
let buttonH = document.getElementById('button_H').addEventListener('click', audioH);
let buttonJ = document.getElementById('button_J').addEventListener('click', audioJ);
let buttonK = document.getElementById('button_K').addEventListener('click', audioK);

document.addEventListener('keyup', function(e){
	switch (e.keyCode){
		case 65:
			document.getElementById('audio_a').play();
			break;
		case 83:
			document.getElementById('audio_s').play();
			break;
		case 68:
			document.getElementById('audio_d').play();
			break;
		case 70:
			document.getElementById('audio_f').play();
			break;
		case 71:
			document.getElementById('audio_g').play();
			break;
		case 72:
			document.getElementById('audio_h').play();
			break;
		case 74:
			document.getElementById('audio_j').play();
			break;
		case 75:
			document.getElementById('audio_k').play();
			break;
	}
});