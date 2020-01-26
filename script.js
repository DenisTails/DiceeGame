var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
dice1.setAttribute("src","images/dice6.png");
dice2.setAttribute("src","images/dice6.png");
var randomnum1 = Math.floor(Math.random()*6+1);
dice1.setAttribute("src","images/dice"+randomnum1+".png");
var randomnum2 = Math.floor(Math.random()*6+1);
dice2.setAttribute("src","images/dice"+randomnum2+".png");
var h1 = document.querySelector("h1");
if (randomnum1<randomnum2){h1.textContent = "Игрок 2 победил!😊"}
if (randomnum1>randomnum2){h1.textContent = "😊Игрок 1 победил!"}
if (randomnum1===randomnum2){h1.textContent = "Ничья!"}