//-------------------------------------------------------------------
// One function for all current,next,previous verses + errorcheck
//-------------------------------------------------------------------

function validsurahverse(surahverse, form) {

var validateme = errorgo(form);
 newsurah = validateme[0];
 newverse = validateme[1];
var defaultsv = newsurah+":"+newverse;

if (validateme[2])	{
//document.getElementById("sv").style.visibility='hidden';
//document.getElementById("sv").value = defaultsv;
//alert(document.getElementById("svnew").value );
//document.forms["svsee"].submit();
}


// Simply return surah or verse
	if ((surahverse == "surah") && (form == "none")) return newsurah;
	if ((surahverse == "verse") && (form == "none")) return newverse;
	
// Return Surah and verse + 000 for audio file - replace q2
	if ((surahverse == "surahverse") && (form == "audio")) {	
	var temp1 = '000' + newsurah;
	var temp2 = '000' + newverse;
	var finalsurah = temp1.substr(temp1.length - 3);
	var finalverse = temp2.substr(temp2.length - 3);
	return finalsurah + finalverse;	
	}
	
// Return Surah and verse + _ for text file - replace getsv
	if ((surahverse == "surahverse") && (form == "text")) {	
	var newstring = newsurah + "_" + newverse;
	return newstring;	
	}

// Return Surah and verse with ":" for text box - replace currentv
	if ((surahverse == "surahverse") && (form == "default")) {	
	var newstring = newsurah + ":" + newverse;
	return newstring;
	}

// Return Surah and verse with positive balue for text box - replace nextv
	if ((surahverse == "surahverse") && (form == "next")) {	
	if (document.getElementById('np')) {
	if (document.getElementById('np').value == "n") {var validatenext = errorgo("next");document.getElementById('np').value = "n";}
	else if (document.getElementById('np').value == "p") {var validatenext = errorgo("back");document.getElementById('np').value = "p";}
	else {var validatenext = errorgo("next");document.getElementById('np').value = "n";}
	} else {var validatenext = errorgo("next");}
	
 newsurah = validatenext[0];
 newverse = validatenext[1];

	var newstring = newsurah + ":" + newverse;
	return newstring;
	}

// Return Surah and verse with negative value for text box - replace vneg
	if ((surahverse == "surahverse") && (form == "back")) {	
	var validateback = errorgo("back");

 newsurah = validateback[0];
 newverse = validateback[1];

	var newstring = newsurah + ":" + newverse;
	return newstring;
	}
	
// Return XML Stuff
	if ((surahverse == "surahverse") || (form == "trans") || (form == "transtext") || (form == "lit")) {	
  newsurah = parseInt(newsurah) - 1;
	newverse = parseInt(newverse) - 1;
	
	if (form == "trans") {
		x = xmlDoc.getElementsByTagName("sura")[newsurah];
	}
	if (form == "transtext") {
		x = xmlDoc2.getElementsByTagName("sura")[newsurah];
	}
	if (form == "lit") {
		x = xmlDoc3.getElementsByTagName("sura")[newsurah];
	}

	var finalstring = x.getElementsByTagName("aya")[newverse].attributes.getNamedItem("text").nodeValue;
	return finalstring;
	}
	
}

//-------------------------------------------------------------------
// Validate Reciter - clean url string and give output
//-------------------------------------------------------------------

function validatereciter() {
	var old = querySt("reciter");
	var cool = old.replace("%2F", "\/");
	cool = cool.replace("+", ' ');
	cool = cool.replace(/[^0-9A-Za-z_.\/-]/g, ' ');
	return cool;
}