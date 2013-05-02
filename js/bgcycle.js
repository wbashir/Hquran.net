// Cycle BG colors when clicked on

function invertme() {	
	document.bgColor = myc[cycle];
	var old = document.bgColor;
	old = old.replace("#", "");
	document.getElementById('au').value = old;
	cycle = cycle + 1
	if (cycle > myc.length-1) cycle = 0;
}

function setc() {
	var old = querySt("au");
	if ((old === undefined) || (old == "undefined") || (old == "")) {
		old = defaultc;
		document.bgColor = "#" + defaultc + "";
		document.getElementById('au').value = defaultc;
	} else {
		document.bgColor = "#" + old + "";
		document.getElementById('au').value = old;
	}
}