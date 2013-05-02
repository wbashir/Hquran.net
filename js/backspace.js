// function to possibly override keypress
trapfunction = function (event) {
        var keynum;

        if (window.event) // eg. IE
        {
                keynum = window.event.keyCode;
        } else if (event.which) // eg. Firefox
        {
                keynum = event.which;
        }

        if (keynum == 38) // backspace has code 8 // arrow up changed
        {
        if (!notmysoil) {
                if (backflag) {               
                document.getElementById('sv').value = validsurahverse("surahverse","back");
                document.forms["svsee"].submit();  
                }
                } else {
                backflag=true;

                document.getElementById('sv').value = validsurahverse("surahverse","back");              	
                document.getElementById('currentv').value = document.getElementById('sv').value;
                
	document.getElementById('svnew').value = validsurahverse("surahverse","audio");	
	document.getElementById('sv').focus();	
	recite();	
	imageopen(document.getElementById('thebox'));
		dowin(document.getElementById('thebox'));	
                }
                return false;
                // nullifies the backspace
        }
        
       if (keynum == 40) // arrow down
        {
document.forms["svsee"].submit();
return false;
        }

       if (keynum == 32) // space
        {
recite();
return false;
        }
if (keynum == 17) // ctrl - repeat - error if hold key
        {
playpause();
return false;
        }



return true;
}

document.onkeyup = function (event) {
        // clear the message       
        return true;
}
document.onkeydown = trapfunction; // IE, Firefox, Safari
//document.onkeypress = trapfunction; // only Opera needs the backspace nullifying in onkeypress