var randomNumber1=Math.floor(Math.random()*6)+1;
var imgPath="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",imgPath);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imgPath="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imgPath);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins";
}else{
    document.querySelector("h1").textContent="Draw";
}
