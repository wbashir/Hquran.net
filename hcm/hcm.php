<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Huffadh Companion Mini</title>
<style>
BODY {margin-left:2px;margin-right:0px;margin-top:0px;padding-top:1px;margin-bottom:0px;
font-family: Arial;
font-size: 11px;
color: black;
}
.tinybox {
vertical-align: middle;
width:58px;
height:13px;
padding:1px;
font-size:10px;
font-family:verdana;
border:1px solid green;
vertical-align: middle;
}
.tinysel {
vertical-align: middle;
width:38px;
height:17px;
padding:1px;
font-size:10px;
font-family:verdana;
border:1px solid green;
vertical-align: middle;
}
.tinyboxbutton {
vertical-align: middle;
font-size:8px;
font-family:arial;
}
</style>
<script type="text/javascript" src="../js/cookie.js"></script>
<script type="text/javascript" src="../js/saveFormValues.js"></script>
<script type="text/javascript" src="../js/global.js"></script>
<script type="text/javascript" src="../js/header.js"></script>
<script type="text/javascript" src="../js/validate.js"></script>
<script type="text/javascript" src="../js/backspace.js"></script>
<script type="text/javascript" src="../js/playerapi.js"></script>
<script type="text/javascript" src="../js/swfobject.js"></script>
<script type="text/javascript">
notmysoil = true;

function alertinfo(){
alert("BETA\nHuffadh Companion Mini\nwww.quranbar.com\nEnter - Forward, Backspace - Back\n\n1) Saood bin Ibraaheem Ash-Shuraym_128kbps\n2) AbdulSamad_64kbps_QuranExplorer.Com\n3) Abdul_Basit_Mujawwad_128kbps\n4) Abdul_Basit_Murattal_192kbps\n5) Abdul_Basit_Murattal_64kbps\n6) Abdullah_Basfar_192kbps\n7) Abdullah_Basfar_32kbps\n8) Abdullah_Basfar_64kbps\n9) Abdurrahmaan_As-Sudais_192kbps\n10) Abdurrahmaan_As-Sudais_64kbps\n11) Abu Bakr Ash-Shaatree_128kbps\n12) Abu_Bakr_Ash-Shaatree_64kbps\n13) Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com\n14) Alafasy_128kbps\n15) Alafasy_64kbps\n16) English/Ibrahim_Walk_192kbps_TEST\n17) Ghamadi_40kbps\n18) Hani_Rifai_192kbps\n19) Hani_Rifai_64kbps\n20) Hudhaify_128kbps\n21) Hudhaify_32kbps\n22) Hudhaify_64kbps\n23) Husary_128kbps\n24) Husary_128kbps_Mujawwad\n25) Husary_64kbps\n26) Husary_Mujawwad_64kbps\n27) Ibrahim_Akhdar_32kbps\n28) Maher_AlMuaiqly_64kbps\n29) Menshawi_16kbps\n30) Menshawi_32kbps\n31) Minshawy_Mujawwad_192kbps\n32) Minshawy_Mujawwad_64kbps\n33) Minshawy_Murattal_128kbps\n34) Mohammad_al_Tablaway_128kbps\n35) Mohammad_al_Tablaway_64kbps\n36) Muhammad_Ayyoub_128kbps\n37) Muhammad_Ayyoub_32kbps\n38) Muhammad_Ayyoud_64kbps\n39) Muhammad_Jibreel_128kbps\n40) Muhammad_Jibreel_64kbps\n41) MultiLanguage/Basfar_Walk_192kbps\n42) Mustafa_Ismail_48kbps_INCOMPLETE");
}

function onloadevents() {
	
initAudioPlayer('player', 1, 1, 'mediaPlayer');
	recoverInputs(document.forms["svsee"],retrieveCookie('inpVal'),true);
	document.getElementById('sv').value = validsurahverse("surahverse","next");
	document.getElementById('svnew').value = validsurahverse("surahverse","audio");
	document.getElementById('sv').focus();
	backflag = false;
	imageopen(document.getElementById('thebox'));	


}
function laterevents() {	

if (backflag) {
resync();backflag=false;
document.getElementById('sv').value = validsurahverse("surahverse","next");
};

document.getElementById('currentv').value = document.getElementById('sv').value;
document.getElementById('sv').value = validsurahverse("surahverse","next");
document.getElementById('svnew').value = validsurahverse("surahverse","audio");



recite();

imageopen(document.getElementById('thebox'));		
	dowin(document.getElementById('thebox'));	
	
}
function resync(){
document.getElementById('currentv').value = document.getElementById('sv').value;
}
window.setInterval('setCookie(\'inpVal\',getFormString(document.forms[\'svsee\'],true));',5000);

</script>
</head>

<body id="main_body" onload="onloadevents();" onunload="setCookie('inpVal',getFormString(document.forms['svsee'],true));return false;">
<form id="svsee" name="svsee" method="get" onsubmit="laterevents() ;return false;">
<a href="#" target="_top" id="qlink" name="qlink" style="vertical-align: middle;font-size:10px;text-decoration:none" title="Quran.com Link"/>Q</a>
<input id="thebox" name="thebox" style="vertical-align: middle;font-size:10px;text-decoration:none" title="Sync with Quran.com" type="checkbox"/>
<input class="tinybox" id="sv" name="sv" type="text"  maxlength="7"  value=""/>
<input class="tinybox" id="svnew" name="svnew" type="hidden"  value=""/>
<input class="tinybox" id="currentv" name="currentv" type="hidden"  value=""/>
  <select class="tinysel" style="vertical-align: middle;" id="reciter" name="reciter">
    <option value="Saood bin Ibraaheem Ash-Shuraym_128kbps">
      1
    </option>
    <option value="AbdulSamad_64kbps_QuranExplorer.Com">
      2
    </option>
    <option value="Abdul_Basit_Mujawwad_128kbps">
      3
    </option>
    <option value="Abdul_Basit_Murattal_192kbps">
      4
    </option>
    <option value="Abdul_Basit_Murattal_64kbps">
     5
    </option>
    <option value="Abdullah_Basfar_192kbps">
      6
    </option>
    <option value="Abdullah_Basfar_32kbps">
      7
    </option>
    <option value="Abdullah_Basfar_64kbps">
      8
    </option>
    <option value="Abdurrahmaan_As-Sudais_192kbps">
      9
    </option>
    <option value="Abdurrahmaan_As-Sudais_64kbps">
      10
    </option>
    <option value="Abu Bakr Ash-Shaatree_128kbps">
      11
    </option>
    <option value="Abu_Bakr_Ash-Shaatree_64kbps">
      12
    </option>
    <option value="Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com">
      13
    </option>
    <option value="Alafasy_128kbps">
      14
    </option>
    <option value="Alafasy_64kbps">
      15
    </option>
    <option value="English/Ibrahim_Walk_192kbps_TEST">
      16
    </option>
    <option value="Ghamadi_40kbps">
      17
    </option>
    <option value="Hani_Rifai_192kbps">
      18
    </option>
    <option value="Hani_Rifai_64kbps">
      19
    </option>
    <option value="Hudhaify_128kbps">
     20
    </option>
    <option value="Hudhaify_32kbps">
      21
    </option>
    <option value="Hudhaify_64kbps">
     22
    </option>
    <option value="Husary_128kbps">
      23
    </option>
    <option value="Husary_128kbps_Mujawwad">
      24
    </option>
    <option value="Husary_64kbps">
      25
    </option>
    <option value="Husary_Mujawwad_64kbps">
      26
    </option>
    <option value="Ibrahim_Akhdar_32kbps">
     27
    </option>
    <option value="Maher_AlMuaiqly_64kbps">
      28
    </option>
    <option value="Menshawi_16kbps">
      29
    </option>
    <option value="Menshawi_32kbps">
      30
    </option>
    <option value="Minshawy_Mujawwad_192kbps">
      31
    </option>
    <option value="Minshawy_Mujawwad_64kbps">
      32
    </option>
    <option value="Minshawy_Murattal_128kbps">
     33
    </option>
    <option value="Mohammad_al_Tablaway_128kbps">
     34
    </option>
    <option value="Mohammad_al_Tablaway_64kbps">
      35
    </option>
    <option value="Muhammad_Ayyoub_128kbps">
      36
    </option>
    <option value="Muhammad_Ayyoub_32kbps">
      37
    </option>
    <option value="Muhammad_Ayyoud_64kbps">
      38
    </option>
    <option value="Muhammad_Jibreel_128kbps">
      39
    </option>
    <option value="Muhammad_Jibreel_64kbps">
      40
    </option>
    <option value="MultiLanguage/Basfar_Walk_192kbps">
      41
    </option>
    <option value="Mustafa_Ismail_48kbps_INCOMPLETE">
      42
    </option>
  </select>
<input class="tinyboxbutton" id="playp" name="playp" type="button" onclick="recite();" value="R" title="Reload Audio"/>
<input class="tinyboxbutton" id="play" name="play" type="button" onclick="playpause();" value="P" title="Play and Pause"/>
<a href="#" onclick="javascript: alertinfo();return false">?</a><div id="mediaPlayer"></div>
</form>
</body>
</html>