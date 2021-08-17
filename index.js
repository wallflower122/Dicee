var randomNumber1=Math.random();
var yo;
randomNumber1=randomNumber1*6;
yo1=Math.floor(randomNumber1)+1;
if(yo1===1)
  document.querySelector("img").setAttribute("src","dice1.png");   else if(yo1===2)
  document.querySelector("img").setAttribute("src","dice2.png");   else if(yo1===3)
  document.querySelector("img").setAttribute("src","dice3.png");   else if(yo1===4)
  document.querySelector("img").setAttribute("src","dice4.png");   else if(yo1===5)
  document.querySelector("img").setAttribute("src","dice5.png");   else if(yo1===6)
  document.querySelector("img").setAttribute("src","dice6.png");
  var randomNumber2=Math.random();
  var yo2;
  randomNumber2=randomNumber2*6;
  yo2=Math.floor(randomNumber2)+1;
  if(yo2===1)
    document.getElementsByClassName("img2")[0].setAttribute("src","dice1.png");  else if(yo2===2)
    document.getElementsByClassName("img2")[0].setAttribute("src","dice2.png");  else if(yo2===3)
    document.getElementsByClassName("img2")[0].setAttribute("src","dice3.png");  else if(yo2===4)
    document.getElementsByClassName("img2")[0].setAttribute("src","dice4.png");  else if(yo2===5)
    document.getElementsByClassName("img2")[0].setAttribute("src","dice5.png");  else if(yo2===6)
    document.getElementsByClassName("img2")[0].setAttribute("src","dice6.png");
if(yo1<yo2)
  document.querySelector("h1").innerHTML = "Player 2 wins 🏆";
else if(yo1>yo2)
  document.querySelector("h1").innerHTML = "🏆 Player 1 wins";
else if(yo1===yo2)
    document.querySelector("h1").innerHTML = "Draw 🏋";
