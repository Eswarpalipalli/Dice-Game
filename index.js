var n1= Math.floor(6*Math.random())+1;
var res="images/dice"+n1+".png";
document.querySelector(".img1").setAttribute("src",res);
var n2=Math.floor(6*Math.random())+1;
var res1="images/dice"+n2+".png";
document.querySelector(".img2").setAttribute("src",res1);
if(n1>n2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(n2>n1)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}