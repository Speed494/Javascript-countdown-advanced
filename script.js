function start(seconds){
var x, time, timer, stbtn, stbtn1, stbtn2, stbtn3, stbtn4;
time = seconds;
timer= document.getElementById("timer");
stbtn=document.getElementById("stbtn");
stbtn1=document.getElementById("stbtn1");
stbtn2=document.getElementById("stbtn2");
stbtn3=document.getElementById("stbtn3");
stbtn4=document.getElementById("stbtn4");
x = setInterval(function(){
time --;
stbtn.style.display="none";
stbtn1.style.display="none";
stbtn2.style.display="none";
stbtn3.style.display="none";
stbtn4.style.display="none";
timer.innerText=time;
console.log(time);
if(time < 0){
clearInterval(x);
stbtn.style.display="block";
stbtn1.style.display="block";
stbtn2.style.display="block";
stbtn3.style.display="block";
stbtn4.style.display="block";
timer.innerText="Done";
console.log("Done");
}
},1000);
}