const playboardBtn1 = document.querySelector('.playboardBtn1');
const playboardBtn2 = document.querySelector('.playboardBtn2');
const playboardBtn3 = document.querySelector('.playboardBtn3');
const playboardBtn4 = document.querySelector('.playboardBtn4');
const playboardBtn5 = document.querySelector('.playboardBtn5');
const playboardBtn6 = document.querySelector('.playboardBtn6');
const playboardBtn7 = document.querySelector('.playboardBtn7');
const playboardBtn8 = document.querySelector('.playboardBtn8');
const playboardBtn9 = document.querySelector('.playboardBtn9');
const resetBtn = document.querySelector('.resetBtn');
const resetScoreBtn = document.querySelector('.resetScoreBtn');
const button = document.querySelectorAll('.button');

let xWinsCounter = document.querySelector('#xWins');
let oWinsCounter = document.querySelector('#oWins');

const buttons = document.querySelector('.buttons');


playboardBtn1.addEventListener('click', onPlayboardBtn1);
playboardBtn2.addEventListener('click', onPlayboardBtn2);
playboardBtn3.addEventListener('click', onPlayboardBtn3);
playboardBtn4.addEventListener('click', onPlayboardBtn4);
playboardBtn5.addEventListener('click', onPlayboardBtn5);
playboardBtn6.addEventListener('click', onPlayboardBtn6);
playboardBtn7.addEventListener('click', onPlayboardBtn7);
playboardBtn8.addEventListener('click', onPlayboardBtn8);
playboardBtn9.addEventListener('click', onPlayboardBtn9);
buttons.addEventListener('click', onClick);
resetBtn.addEventListener('click', onResetBtn);
resetScoreBtn.addEventListener('click', onResetScoreBtn);


let xWins = 0
let oWins = 0
let move = 1
let turn ='X'

function onClick(){
    move += 1
    console.log(move)
    if (move % 2 == 0){
        turn = 'O'
    } else{
        turn = 'X'
    }

    if ( playboardBtn1.textContent == "X" && playboardBtn2.textContent == 'X' && playboardBtn3.textContent == 'X' ||
    playboardBtn4.textContent == "X" && playboardBtn5.textContent == 'X' && playboardBtn6.textContent == 'X' ||
    playboardBtn7.textContent == "X" && playboardBtn8.textContent == 'X' && playboardBtn9.textContent == 'X' ||
    playboardBtn1.textContent == "X" && playboardBtn4.textContent == 'X' && playboardBtn7.textContent == 'X' ||
    playboardBtn2.textContent == "X" && playboardBtn5.textContent == 'X' && playboardBtn8.textContent == 'X' ||
    playboardBtn3.textContent == "X" && playboardBtn6.textContent == 'X' && playboardBtn9.textContent == 'X' ||
    playboardBtn1.textContent == "X" && playboardBtn5.textContent == 'X' && playboardBtn9.textContent == 'X' ||
    playboardBtn3.textContent == "X" && playboardBtn5.textContent == 'X' && playboardBtn7.textContent == 'X')
		return onXWin()
	 if ( playboardBtn1.textContent == "O" && playboardBtn2.textContent == 'O' && playboardBtn3.textContent == 'O' ||
    playboardBtn4.textContent == "O" && playboardBtn5.textContent == 'O' && playboardBtn6.textContent == 'O' ||
    playboardBtn7.textContent == "O" && playboardBtn8.textContent == 'O' && playboardBtn9.textContent == 'O' ||
    playboardBtn1.textContent == "O" && playboardBtn4.textContent == 'O' && playboardBtn7.textContent == 'O' ||
    playboardBtn2.textContent == "O" && playboardBtn5.textContent == 'O' && playboardBtn8.textContent == 'O' ||
    playboardBtn3.textContent == "O" && playboardBtn6.textContent == 'O' && playboardBtn9.textContent == 'O' ||
    playboardBtn1.textContent == "O" && playboardBtn5.textContent == 'O' && playboardBtn9.textContent == 'O' ||
    playboardBtn3.textContent == "O" && playboardBtn5.textContent == 'O' && playboardBtn7.textContent == 'O')
		return onOWin()
}
function onResetBtn(){
 
    playboardBtn1.textContent = '-'
    playboardBtn2.textContent = '-'
    playboardBtn3.textContent = '-'
    playboardBtn4.textContent = '-'
    playboardBtn5.textContent = '-'
    playboardBtn6.textContent = '-'
    playboardBtn7.textContent = '-'
    playboardBtn8.textContent = '-'
    playboardBtn9.textContent = '-'
    move = 1
    turn = 'X'
    document.querySelector('.playboardBtn1').disabled = false;
    document.querySelector('.playboardBtn2').disabled = false;
    document.querySelector('.playboardBtn3').disabled = false;
    document.querySelector('.playboardBtn4').disabled = false;
    document.querySelector('.playboardBtn5').disabled = false;
    document.querySelector('.playboardBtn6').disabled = false;
    document.querySelector('.playboardBtn7').disabled = false;
    document.querySelector('.playboardBtn8').disabled = false;
    document.querySelector('.playboardBtn9').disabled = false;
   
}
function onResetScoreBtn(){
    xWins = 0
    oWins = 0
    xWinsCounter.textContent = 0
    oWinsCounter.textContent = 0
    onResetBtn()
  
}
function onXWin(){
    xWins += 1
    xWinsCounter.textContent = xWins
    window.alert('Хрестики винесли Нуликів!')
    
}
function onOWin(){
    oWins += 1
    oWinsCounter.textContent = oWins
    window.alert('Нулики дали Хрестикам просрацця!')
   
}
function onPlayboardBtn1(){
   
    playboardBtn1.textContent = turn;
    document.querySelector('.playboardBtn1').disabled = true;
   
}
function onPlayboardBtn2(){
  
    playboardBtn2.textContent = turn;
    document.querySelector('.playboardBtn2').disabled = true;
   
}
function onPlayboardBtn3(){
   
    playboardBtn3.textContent = turn; 
    document.querySelector('.playboardBtn3').disabled = true;
   
}
function onPlayboardBtn4(){
    
    playboardBtn4.textContent = turn;
    document.querySelector('.playboardBtn4').disabled = true;
   
}
function onPlayboardBtn5(){
  
    playboardBtn5.textContent = turn;
    document.querySelector('.playboardBtn5').disabled = true;
   
}
function onPlayboardBtn6(){

    playboardBtn6.textContent = turn;
    document.querySelector('.playboardBtn6').disabled = true;
    
}
function onPlayboardBtn7(){
   
    playboardBtn7.textContent = turn;
    document.querySelector('.playboardBtn7').disabled = true;
}
function onPlayboardBtn8(){

    playboardBtn8.textContent = turn;
    document.querySelector('.playboardBtn8').disabled = true;
}
function onPlayboardBtn9(){
 
    playboardBtn9.textContent = turn;
    document.querySelector('.playboardBtn9').disabled = true;
}

