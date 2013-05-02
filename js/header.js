//-------------------------------------------------------------------
// Intial Scripts required for fast loading
//-------------------------------------------------------------------
//-------------------------------------------------------------------
// Get URL Params
//-------------------------------------------------------------------

function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");

	for (i = 0; i < gy.length; i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1]
		}
	}
}


// ERROR CHECK on page load
function errorgo(mode){

if (!notmysoil) {
	var old = querySt("sv");
	var s = old.split("%3A");
	var newsurah = s[0];
	var newverse = s[1];
}
else {
var old = document.getElementById('currentv').value;
	var s = old.split(":");
	var newsurah = s[0];
	var newverse = s[1];
	
}


	if ((isNaN(parseInt(newsurah))) || (parseInt(newsurah) == 0) || (parseInt(newsurah) < 1)  || (parseInt(newsurah) > 114)) {
		newsurah = 1;reloadflag = true;
	}
	if ((isNaN(parseInt(newverse))) || (parseInt(newverse) < 0) || ((parseInt(newsurah) == 1) && (parseInt(newverse) == 1))  ) {
		newverse = 1;reloadflag = true;
	} 

if (mode == "next") {newverse=parseInt(newverse)+1;};


var thevalue = newsurah+":"+newverse;
if (reloadflag)	{reloadflag=false;return [newsurah, newverse, true];}

// Error check for boundry and reload page.
if ((ayahCount[newsurah-1] < parseInt(newverse))) {
newsurah=parseInt(newsurah)+1;
newverse=1;
reloadflag = true;
}

if ((parseInt(newverse) == 0)) {
newsurah=parseInt(newsurah)-1;
newverse=parseInt(ayahCount[newsurah-1]);
reloadflag = true;
}

if ((parseInt(newverse) == 1) && (mode == "back") && (parseInt(newsurah) > 1)) {
newsurah=parseInt(newsurah)-1;
newverse=parseInt(ayahCount[newsurah-1]);
reloadflag = true;
} else if ((mode == "back")) {
newverse=parseInt(newverse)-1;
}

var thevalue = newsurah+":"+newverse;

//if (reloadflag)	{createFormAndSubmit(thevalue,"","","","Alafasy_64kbps")}
if (reloadflag)	{reloadflag=false;return [newsurah, newverse, true];}
return [newsurah, newverse, false];
}


 function btoggle(){
                if (document.getElementById('np').value == "n") {document.getElementById('np').value = "p";}
                else if (document.getElementById('np').value == "p") {document.getElementById('np').value = "n";}
                else {document.getElementById('np').value = "p";}
                document.getElementById('sv').value = validsurahverse("surahverse", "default");document.forms["svsee"].submit();
                }

//-------------------------------------------------------------------
// Buffer next and previous 3 Images after everything is loaded
// Silently in hidden 'buffer' div
// Only if checkmarked for using font is NOT checked.
//-------------------------------------------------------------------

function buffer() {
	if (document.getElementById('chk1').checked == 0) { // if checked "use font" don't buffer
		
		var newsurah = validsurahverse("surah","none");
		var newverse = validsurahverse("verse","none");

		// First next ones.
		newverse = parseInt(newverse) + 1;
		var checkpoint = newverse;

		for (i = 0; i < thebuffer; i++) {
			var surahv = newsurah + "_" + newverse;
			var imageurl = 'http://www.everyayah.com/data/images_png/' + surahv + '.png';
			document.getElementById('buffer').innerHTML += '<img src="' + imageurl + '" />';
			//<img src="' + imageurl + '" />
			newverse = parseInt(newverse) + 1;
		}

		// Then previous ones.
		newverse = checkpoint - 2;
		for (i = 0; i < thebuffer; i++) {
			var surahv = newsurah + "_" + newverse;
			var imageurl = 'http://www.everyayah.com/data/images_png/' + surahv + '.png';
			document.getElementById('buffer').innerHTML += '<img src="' + imageurl + '" />';
			//<img src="' + imageurl + '" />
			newverse = parseInt(newverse) - 1;
		}
	}
}

// LOAD XML FILES
if (querySt("chk2") == "on") {
	var xmlDoc = loadXMLDoc("en.yusufali.xml");
}

if (querySt("chk1") == "on") {
	var xmlDoc2 = loadXMLDoc("quran-uthmani.xml");
}

if (querySt("chk3") == "on") {
	var xmlDoc3 = loadXMLDoc("en.transliteration.xml");
}

function imageopen(thebox){
	var newsurah = validsurahverse("surah", "none");
	var newverse = validsurahverse("verse", "none");
	var finals = "http://www.quran.com/"+newsurah+"/"+newverse;
	document.getElementById('qlink').onclick = function(){
window.open(""+finals+"",'versewindow');return false;
}
}
function dowin(thebox){
	var newsurah = validsurahverse("surah", "none");
	var newverse = validsurahverse("verse", "none");
	var finals = "http://www.quran.com/"+newsurah+"/"+newverse;
	if (thebox.checked){
window.open(""+finals+"",'versewindow');	return false;
	}
}