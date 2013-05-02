function getFileURI(autos, pload) {
	if (pload) {
		var reciter = validatereciter();
		var bothsv = validsurahverse("surahverse","audio");
	} else {
		var reciter = document.getElementById('reciter').value;
		var bothsv = document.getElementById('svnew').value;
	}
	
if (!notmysoil) {
//if ((document.getElementById('offline').value == "offline")) {
//return '' + reciter + '/' + bothsv + 'c.mp3&autostart=true';
//}
//else {}
}
	if (autos) {
		return 'http://www.everyayah.com/data/' + reciter + '/' + bothsv + '.mp3&autostart=true';
	} else {
		return 'http://www.everyayah.com/data/' + reciter + '/' + bothsv + '.mp3';
	}
}

function recite() {
if (!notmysoil) {
        document.getElementById('player').sendEvent('LOAD', {
                file: getFileURI(false, false),
                image: getImageURI()
        });
 }
 else {
 document.getElementById('player').sendEvent('LOAD', {
                file: getFileURI(false, false)                
        });
 }
}


function playpause() {
        document.getElementById('player').sendEvent('PLAY');
}


//-------------------------------------------------------------------
// Player javascript API
//-------------------------------------------------------------------
var player = null;
var playlist = null;
var isplaying;

function playerReady(obj) {
	player = gid(obj.id);
	addListeners();
};

function addListeners() {
if (!notmysoil) {
	if (player.id == "player") {
		player.addModelListener('STATE', 'stateMonitor');
	}
	if (player.id == "player") {
		player.addModelListener('LOADED', 'bm');
	}
}
};

function bm(obj) {
	currentLoaded = obj.loaded;
	currentRemain = obj.total - currentLoaded;
	if ((obj.total > 0) && (currentRemain == 0) && (isplaying)) {
		buffer();
	}
};

function stateMonitor(obj) {
	if (obj.newstate == 'PLAYING') {
		isplaying = true;
	}
	if (obj.newstate == 'STOPPED') {
		isplaying = false;
	}
	if (obj.newstate == 'PAUSED') {
		isplaying = false;
	}
	if (obj.newstate == 'COMPLETED') {
		isplaying = false;
		if (!notmysoil) {
		// if continious is not checked.. check if any modes are checked.
		if (document.getElementById("chk7").checked) cyclequrra("muj");
		else if (document.getElementById("chk8").checked) cyclequrra("mur");
		else if (document.getElementById("chk9").checked) cyclequrra("allcycle");
		else if (document.getElementById('chk5').checked == 1) {
			document.forms["svsee"].submit();}
		
		// Continue to next verse if setting is on AND recitation is finished.		
		if ((cycleq > totalqurra) && (document.getElementById('chk5').checked == 1)) {
			document.forms["svsee"].submit();
		};
		//alert("Total: "+totalqurra+"\n\nCurrent cycle: "+cycleq);
		}
		
	}
};

function gid(name) {
	return document.getElementById(name);
};

function initAudioPlayer(playerID, width, height, container) {
if (!notmysoil) {
	if (document.getElementById('chk6').checked == 1) {
		var height = document.body.clientHeight - 50;
		var width = document.body.clientWidth - 30;
		var container = "mediaPlayer2";
	}
}
	var flashvars = {};
	flashvars.autostart = "true";
	flashvars.width = width;
	flashvars.height = height;
	flashvars.javascriptid = playerID;
	flashvars.enablejs = "true";
	if (!notmysoil) {
	flashvars.file = getFileURI(true, true);
	}
	else {flashvars.file = getFileURI(false, false);}
if (!notmysoil) {
	if (document.getElementById('chk6').checked == 1) {
		flashvars.stretching = "uniform";
		flashvars.screencolor = "FFFFFF";
		flashvars.image = getImageURI();
	}

	if (document.getElementById('chk4').checked == 1) {
		flashvars.repeat = "always";
	};
}
	var params = {};
	params.allowscriptaccess = "always";
	params.allowfullscreen = "true";

	var attributes = {};
	attributes.id = playerID;
	attributes.name = playerID;

	swfobject.embedSWF("mediaplayer.swf", container, width, height, "9.0.0", false, flashvars, params, attributes);

}