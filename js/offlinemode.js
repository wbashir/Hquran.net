// Disable elements onload - until online mode is enabled.
function checkelements(){
if (document.getElementById('offline').value == "offline") {

	document.getElementById('chk1').style.visibility = "hidden";
	document.getElementById('chk6').style.visibility = "hidden";
	document.getElementById('chk7').style.visibility = "hidden";
	document.getElementById('chk8').style.visibility = "hidden";
	document.getElementById('chk9').style.visibility = "hidden";
  document.getElementById('reciter').style.display = "none";
}
}

function checkoffline()
{
document.getElementById('offline').value = "offline"; // set text box to carryover next time.
	
document.getElementById('chk1').checked = 1; // set arabic font.
document.getElementById('chk6').checked = 0; // can not do full screen.

document.getElementById('chk7').checked = 0; // no modes
document.getElementById('chk8').checked = 0; // no modes
document.getElementById('chk9').checked = 0; // no modes
document.getElementById('reciter').value = "offline";

reloadpage();
}


function doonline() {
document.getElementById('offline').value = ''; 
document.getElementById('chk1').checked = 0; // set arabic font.
document.getElementById('reciter').options[0].selected=true;
reloadpage();
}