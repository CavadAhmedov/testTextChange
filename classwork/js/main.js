var birinci = document.getElementById("first");
var ikinci = document.getElementById("second");
var ucuncu = document.getElementById("third");
var dord = document.getElementById("fourth");
var bes = document.getElementById("fifth");
var text = document.querySelector(".txt");


birinci.onclick = function change (){
	text.innerHTML = " Salam qa ";
}
ikinci.onclick = function change (){
	text.innerHTML = " necesen?";
}
ucuncu.onclick = function change (){
	text.innerHTML = " ne var ne yo?";
}
dord.onclick = function change (){
	text.innerHTML = " salamatciliqdi?";
}
bes.onclick = function change (){
	text.innerHTML = " Sora daniwariq";
}
