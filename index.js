var player1 = "O";

var board = [["", "", ""], ["", "", ""], ["", "", ""]]

var x = 0;
var y = 0;
for(x = 0; x < 3; x++){
  for (y = 0; y <3; y++){
    board[x][y] = document.getElementById(`${x + 1}${y + 1}`)
  }
}


function checkCol(col){
  var x = 0;
  for (x=0; x<3; x++){
    if(board[x][col].innerText != player1){
      return false;
    }
  }
  return true;
}

function checkRow(row){
  var x = 0;
  for (x=0; x<3; x++){
    if(board[x][row].innerText != player1){
      return false;
    }
  }
  return true;
}

function checkDiag(){
  var diag1 = board [0][0].innerHTML === player1 && board[1][1].innerHTML === player1 && board [2][2].innerHTML ===player1;
  var diag2 = board [0][2].innerHTML === player1 && board[1][1].innerHTML === player1 && board [2][0].innerHTML ===player1;
  return diag1 || diag2
}

function checkWin(){
  var i = 0
  for(i = 0; i< 3; i++){
    if (checkCol(i) || checkRow(i)){
      return true;
    }
  }
  return checkDiag();
}


function turn(){
  if (event.target.innerText === ""){
    event.target.innerText = player1;
    if (checkWin()){
      document.body.innerHTML = `<center id= "winner">${player1} wins!</center>`;
    }
    else{
      player1 = player1 === "X" ? "O" : "X";
    }
  }
  else{
    alert("You've already clicked this!");
  }
}
