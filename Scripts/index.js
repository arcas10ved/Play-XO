



const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');


// game constants
const xSymbol = '×';
const oSymbol = '○';

// game variables
let gameIsLive = true;
let xIsNext = true;
let currentPlayer = 0;



//Random generated
function getInputValue() {
  document.getElementById("formInput").style.display="none";
  document.getElementById("container").style.display = "inline";
  let player1Input = document.getElementById("player1Input").value;
  let player2Input = document.getElementById("player2Input").value;


  currentPlayer = 1;

  var random = Math.random() * 100;
  if (random <= 60) {
    currentPlayer = 1;
    statusDiv.innerHTML = player1Input + " turn";
    statusDiv.style.color= "blue";

     }
  else {
    currentPlayer = 2;
    statusDiv.innerHTML = player2Input + " turn";
    statusDiv.style.color= "red";
    


  }
}
//  statusDiv.style.filter= "green";


//functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (currentPlayer === 1) {
    statusDiv.innerHTML = player1Input.value + " has won!";
    statusDiv.style.color= "blue";

  } else {
    statusDiv.innerHTML = player2Input.value + " has won!";
    statusDiv.style.color= "red";
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];


  

  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {

    xIsNext = !xIsNext;

    if (currentPlayer === 2) {
      statusDiv.innerHTML = player1Input.value + ` turn`;
      statusDiv.style.color= "blue";
      currentPlayer = 1;


    } else {
      currentPlayer = 2;
      statusDiv.style.color= "red";
      statusDiv.innerHTML = player2Input.value + ` turn`;


    }
  }
};


// event Handlers
const handleReset = () => {
  document.getElementById("formInput").style.display="inline";
  document.getElementById("container").style.display="none";
  
  xIsNext = true;
  statusDiv.innerHTML = `Press Start Game`;
  for (const cellDiv of cellDivs) {
    
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
    document.location.reload()
    
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
    
  }

  if (currentPlayer === 1){
    classList.add('playerOneColour');
  }else{
    classList.add('playerTwoColour');
  }

  if (xIsNext) {
    
    classList.add("x");

  } else {

    classList.add('o');
    
  }
  
 
  checkGameStatus();
};



// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {

  cellDiv.addEventListener('click', handleCellClick);
  cellDiv.addEventListener('click', handleCellSelection);
}


//Matrix Builder
var counter=0;
var matrix=[];
for(var i=0;i<3;i++){
  matrix[i]=[];
  
  for(var j=0;j<3;j++){
    matrix[i][j]=[];
     matrix[i][j]=counter;
     ++counter;
  }

}
console.log(matrix);

0,1,2,3,4,5,6,7,8
0,1,2,0,1,2,0,1,2

function handleCellSelection(e){
  
let htmlElement=e.target;
let cellType=htmlElement.getAttribute("data-cell");
console.log(cellType);
let reuseltNTI=numberToIndexes(cellType);
console.log(reuseltNTI);

if(currentPlayer===2){
  reuseltNTI.splice(0,2)
  reuseltNTI.push("x");
}else{reuseltNTI.splice(0,2);
  reuseltNTI.push("O");}
console.log(reuseltNTI);
}

function numberToIndexes(number) {
  let row = Math.floor(number / 3);
  let column = number % 3;
   return [row, column];
}

function isPlayerWinner(reuseltNTI, currentPlayer) {
  for (var i = 0; i < reuseltNTI.length; i++) {
    for (var j = 0; j < reuseltNTI[i].length; j++) {
      if (reuseltNTI[i] === reuseltNTI[j]) {
      } else if (reuseltNTI[i] + reuseltNTI[j] - 1) {

      }
    }
  }
}