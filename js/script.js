const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');

let alerta = alert ("Aperte a tecla space(espaço) para pular e não bater nos obstáculos")

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=> {
    console.log ('loop');
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        
    if (pipePosition <= 70 && pipePosition > 0 && marioPosition < 70 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src ='./images/mario_gameover.png';
        mario.style.width = '80px';

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', jump);