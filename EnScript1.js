var image1=document.getElementById("check1");
var image2=document.getElementById("check2");
var image3=document.getElementById("check3");

var result1=document.getElementById("demo1");
var result2=document.getElementById("demo2");
var result3=document.getElementById("demo3");

var done1=document.getElementById("is1");
var done2=document.getElementById("are2");
var done3=document.getElementById("is3");


function checktheanswer1(){


if(done1.checked){
image1.src="greenok.png";
result1.innerHTML = "Brilliant!";
document.getElementById("task2").style.display="block";

}
else if(document.getElementById("am1").checked){
image1.src="redcross.png";
result1.innerHTML = "Try another one!";

}
else if(document.getElementById("are1").checked){
image1.src="redcross.png";
result1.innerHTML = "Try another one!";

}

else if(document.getElementById("be1").checked){
image1.src="redcross.png";
result1.innerHTML = "Try another one!";

}
else{

result1.innerHTML = "Choose the answer!";

};

};

function checktheanswer2(){

if(document.getElementById("are2").checked){
image2.src="greenok.png";
result2.innerHTML = "Brilliant!";
document.getElementById("task3").style.display="block";
}
else if(document.getElementById("am1").checked){
image2.src="redcross.png";
result2.innerHTML = "Try another one!";

}
else if(document.getElementById("is2").checked){
image2.src="redcross.png";
result2.innerHTML = "Try another one!";

}
else if(document.getElementById("be2").checked){
image2.src="redcross.png";
result2.innerHTML = "Try another one!";

}
else{

result2.innerHTML = "Choose the answer!";

};

};

function checktheanswer3(){


if(document.getElementById("is3").checked){
image3.src="greenok.png";
result3.innerHTML = "Brilliant!";
document.getElementById("done").style.display="block";

}
else if(document.getElementById("am3").checked){
image3.src="redcross.png";
result3.innerHTML = "Try another one!";

}
else if(document.getElementById("are3").checked){
image3.src="redcross.png";
result3.innerHTML = "Try another one!";

}

else if(document.getElementById("be3").checked){
image3.src="redcross.png";
result3.innerHTML = "Try another one!";

}
else{

result3.innerHTML = "Choose the answer!";

};

};

function done(){
if(done1.checked && done2.checked && done3.checked){
document.getElementById("congrat").src="congrats.png";

}else{

document.getElementById("congrat").src="mistakes.png";
}
}

