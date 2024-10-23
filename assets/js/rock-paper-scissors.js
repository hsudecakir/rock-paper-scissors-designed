
let compMove = ["Taş", "Kağıt", "Makas"].at(Math.floor(Math.random() *3));

function writeCompMove(){
  compPaperBtn.innerText = compMove;
  compRockBtnBg.style.display = 'none';
  compBtnBg.style.display = 'block';
  if(compMove === 'Taş'){
    compRockBtnBg.style.display = 'block';
    compBtnBg.style.display = 'none';
    compRockBtn.innerText = compMove;
  }
}

function newRound(){
  compRockBtn.innerText = '';
  compPaperBtn.innerText = '';
  compMove = ["Taş", "Kağıt", "Makas"].at(Math.floor(Math.random() *3));
}

let userCounter = 0;
let compCounter = 0;

function choosedRock(){
  newRound();
  writeCompMove();
  if(compMove === 'Makas'){
    userCounter++;
    userScore.innerText = `Oyuncu: ${userCounter}`;
  } else if(compMove === 'Kağıt'){
    compCounter++;
    compScore.innerText = `Bilgisayar: ${compCounter}`;
  }
}

function choosedPaper(){
  newRound();
  writeCompMove();
  if(compMove === 'Taş'){
    userCounter++;
    userScore.innerText = `Oyuncu: ${userCounter}`;
  } else if(compMove === 'Makas'){
    compCounter++;
    compScore.innerText = `Bilgisayar: ${compCounter}`;
  }
}

function choosedScissors(){
  newRound();
  writeCompMove();
  if(compMove === 'Kağıt'){
    userCounter++;
    userScore.innerText = `Oyuncu: ${userCounter}`;
  } else if(compMove === 'Taş'){
    compCounter++;
    compScore.innerText = `Bilgisayar: ${compCounter}`;
  }
}

function exitWinnerBoard(){
  opacityBg.style.display = 'none';
  winnerAlert.style.display = 'none';
}

function winner(){
  newRound();
  if(userCounter === 0 && compCounter === 0){
    alert('Henüz skor alınmadı.');
  }
  if(userCounter > compCounter){
    opacityBg.style.display = 'block';
    winnerAlert.style.display = 'flex';
    winnerTxt.innerText = 'Oyuncu';
    winnerCounter.innerText = `Kazanılan raund sayısı: ${userCounter}`;
  }
  if(compCounter > userCounter){
    opacityBg.style.display = 'block';
    winnerAlert.style.display = 'flex';
    winnerTxt.innerText = 'Bilgisayar';
    winnerCounter.innerText = '';
  }
  if(compCounter === userCounter && compCounter !== 0){
    opacityBg.style.display = 'block';
    winnerAlert.style.display = 'flex';
    winnerTxt.innerText = 'Berabere';
    winnerCounter.innerText = '';
  }
}

function resetScores(){
  newRound();
  userCounter = 0;
  compCounter = 0;
  userScore.innerText = `Oyuncu: ${userCounter}`;
  compScore.innerText = `Bilgisayar: ${compCounter}`;
}

rockBtn.addEventListener('click', choosedRock);
paperBtn.addEventListener('click', choosedPaper);
scissorsBtn.addEventListener('click', choosedScissors);
exitIcon.addEventListener('click', exitWinnerBoard);
winnerBtn.addEventListener('click', winner);
resetBtn.addEventListener('click', resetScores);
