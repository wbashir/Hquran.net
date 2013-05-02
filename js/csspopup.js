function toggle() {
	var ele = document.getElementById("toggleText");
	
	var ele2 = document.getElementById("toggleText2");
	var ele3 = document.getElementById("toggleText3");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    		ele.style.display = "none";ele2.style.display = "none";ele3.style.display = "none";
		text.innerHTML = "Options / Save";
  	}
	else {
		ele.style.display = "block";ele2.style.display = "block";ele3.style.display = "block";
		text.innerHTML = "Hide Options";
	}
} 

function togglemode(text) {
	var ele = document.getElementById("toggleTextqurra");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		ele.innerHTML = text;
  	}
	else {
		ele.style.display = "block";
		ele.innerHTML = text;
	}
} 

function toggleMAIN() {
var text = document.getElementById("displayTextMAIN");
var eleMAIN = document.getElementById("toggleTextMAIN");

if(eleMAIN.style.display == "block") {
    		eleMAIN.style.display = "none";
		text.innerHTML = "Show";
  	}
	else {
		eleMAIN.style.display = "block";
		text.innerHTML = "Hide";
	}



}