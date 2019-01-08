window.onload = function() {
	start();
}
function start(){
	var crowdTickBox = document.getElementById("crowdBox");
	var crowdImage = document.getElementById("crowdImage");
	if(localStorage.getItem("crowd") == "inline")
	{
		crowdTickBox.checked = true;
		crowdImage.style.display = "inline";
		console.log('local storage means crowd should be shown from start');
	}
	else
	{
		crowdTickBox.checked = false;
		crowdImage.style.display = "none";
		console.log('local storage means crowd should be hidden from start');
	}
	crowdTickBox.addEventListener("change", displayCrowd);
	
	if(localStorage.getItem("thomInstrument") == "Microphone")
	{
		document.getElementById('thom').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
		console.log('local storage means thom starts with a microphone');
	}
	else if(localStorage.getItem("thomInstrument") == "Guitar")
	{
		document.getElementById('thom').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
		console.log('local storage means thom starts with a guitar');
	}
	else
	{
		document.getElementById('thom').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
		console.log('local storage means thom starts with drums');
	}
	
	if(localStorage.getItem("jonnyInstrument") == "Microphone")
	{
		document.getElementById('jonny').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
		console.log('local storage means jonny starts with a microphone');
	}
	else if(localStorage.getItem("jonnyInstrument") == "Guitar")
	{
		document.getElementById('jonny').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
		console.log('local storage means jonny starts with a guitar');
	}
	else
	{
		document.getElementById('jonny').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
		console.log('local storage means jonny starts with drums');
	}
	
	if(localStorage.getItem("edInstrument") == "Microphone")
	{
		document.getElementById('ed').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
		console.log('local storage means ed starts with a microphone');
	}
	else if(localStorage.getItem("jonnyInstrument") == "Guitar")
	{
		document.getElementById('ed').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
		console.log('local storage means ed starts with a guitar');
	}
	else
	{
		document.getElementById('ed').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
		console.log('local storage means ed starts with drums');
	}
	
	if(localStorage.getItem("philipInstrument") == "Microphone")
	{
		document.getElementById('philip').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
		console.log('local storage means philip starts with a microphone');
	}
	else if(localStorage.getItem("philipInstrument") == "Guitar")
	{
		document.getElementById('philip').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
		console.log('local storage means jonny starts with a guitar');
	}
	else
	{
		document.getElementById('philip').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
		console.log('local storage means philip starts with drums');
	}
	
	if(localStorage.getItem("colinInstrument") == "Microphone")
	{
		document.getElementById('colin').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
		console.log('local storage means colin starts with a microphone');
	}
	else if(localStorage.getItem("colinInstrument") == "Guitar")
	{
		document.getElementById('colin').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
		console.log('local storage means colin starts with a guitar');
	}
	else
	{
		document.getElementById('colin').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
		console.log('local storage means colin starts with drums');
	}
	
	document.getElementById('thomMic').addEventListener("click", thomUpdateMic);
	document.getElementById('thomGuitar').addEventListener("click", thomUpdateGuitar);
	document.getElementById('thomDrums').addEventListener("click", thomUpdateDrums);
	document.getElementById('jonnyMic').addEventListener("click", jonnyUpdateMic);
	document.getElementById('jonnyGuitar').addEventListener("click", jonnyUpdateGuitar);
	document.getElementById('jonnyDrums').addEventListener("click", jonnyUpdateDrums);
	document.getElementById('edMic').addEventListener("click", edUpdateMic);
	document.getElementById('edGuitar').addEventListener("click", edUpdateGuitar);
	document.getElementById('edDrums').addEventListener("click", edUpdateDrums);
	document.getElementById('philipMic').addEventListener("click", philipUpdateMic);
	document.getElementById('philipGuitar').addEventListener("click", philipUpdateGuitar);
	document.getElementById('philipDrums').addEventListener("click", philipUpdateDrums);
	document.getElementById('colinMic').addEventListener("click", colinUpdateMic);
	document.getElementById('colinGuitar').addEventListener("click", colinUpdateGuitar);
	document.getElementById('colinDrums').addEventListener("click", colinUpdateDrums);
}

function thomUpdateMic(){
	document.getElementById('thom').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
	localStorage.setItem("thomInstrument", "Microphone");
}
function thomUpdateGuitar(){
	document.getElementById('thom').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
	localStorage.setItem("thomInstrument", "Guitar");
}
function thomUpdateDrums(){
	document.getElementById('thom').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
	localStorage.setItem("thomInstrument", "Drums");
}
function jonnyUpdateMic(){
	document.getElementById('jonny').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
	localStorage.setItem("jonnyInstrument", "Microphone");
}
function jonnyUpdateGuitar(){
	document.getElementById('jonny').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
	localStorage.setItem("jonnyInstrument", "Guitar");
}
function jonnyUpdateDrums(){
	document.getElementById('jonny').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
	localStorage.setItem("jonnyInstrument", "Drums");
}
function edUpdateMic(){
	document.getElementById('ed').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
	localStorage.setItem("edInstrument", "Microphone");
}
function edUpdateGuitar(){
	document.getElementById('ed').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
	localStorage.setItem("edInstrument", "Guitar");
}
function edUpdateDrums(){
	document.getElementById('ed').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
	localStorage.setItem("edInstrument", "Drums");
}
function philipUpdateMic(){
	document.getElementById('philip').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
	localStorage.setItem("philipInstrument", "Microphone");
}
function philipUpdateGuitar(){
	document.getElementById('philip').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
	localStorage.setItem("philipInstrument", "Guitar");
}
function philipUpdateDrums(){
	document.getElementById('philip').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
	localStorage.setItem("philipInstrument", "Drums");
}
function colinUpdateMic(){
	document.getElementById('colin').style.backgroundImage = "url('assets/stageImages/imageOptions/mic.png')";
	localStorage.setItem("colinInstrument", "Microphone");
}
function colinUpdateGuitar(){
	document.getElementById('colin').style.backgroundImage = "url('assets/stageImages/imageOptions/guitar.png')";
	localStorage.setItem("colinInstrument", "Guitar");
}
function colinUpdateDrums(){
	document.getElementById('colin').style.backgroundImage = "url('assets/stageImages/imageOptions/drums.png')";
	localStorage.setItem("colinInstrument", "Drums");
}

function displayCrowd(){
	if(this.checked){
		crowdImage.style.display = "inline";
		console.log('crowd displayed');
		localStorage.setItem("crowd", "inline");
	}
	else{
		crowdImage.style.display = "none";
		console.log('crowd hidden');
		localStorage.setItem("crowd", "none");
	}	
}


function displayCrowdMobile(){
	if(document.getElementById('crowdBoxMobile').checked){
		crowdImage.style.display = "inline";
		console.log('crowd displayed');
		localStorage.setItem("crowd", "inline");
	}
	else{
		crowdImage.style.display = "none";
		console.log('crowd hidden');
		localStorage.setItem("crowd", "none");
	}	
}