// Different playing modes
// All modes repeat - no function to turn off! (only repeat if continous is off, otherwise go to next verse.


function cyclequrra(type) {
// Hafiz mode = cycle through mujawaad Qurra -------------------------------------------
if (type == "muj") { 
totalqurra = 7; // total to go loop towards
	if (cycleq == 1) {
		document.getElementById('reciter').value = "Abdullah_Basfar_32kbps";
		recite();
	}
	if (cycleq == 2) {
		document.getElementById('reciter').value = "Hudhaify_128kbps";
		recite();
	}
	if (cycleq == 3) {
		document.getElementById('reciter').value = "Husary_128kbps";
		recite();
	}
	if (cycleq == 4) {
		document.getElementById('reciter').value = "Ibrahim_Akhdar_32kbps";
		recite();
	}
	if (cycleq == 5) {
		document.getElementById('reciter').value = "Minshawy_Murattal_128kbps";
		recite();
	}
	if (cycleq == 6) {
		document.getElementById('reciter').value = "Alafasy_128kbps";
		recite();
	}
	cycleq = cycleq + 1;
}

// Murratal mode = cycle through Murratal Qurra -------------------------------------------
if (type == "mur") { 
totalqurra = 7; // total to go loop towards
	if (cycleq == 1) {
		document.getElementById('reciter').value = "Saood_ash-Shuraym_128kbps";
		recite();
	}
	if (cycleq == 2) {
		document.getElementById('reciter').value = "Abdurrahmaan_As-Sudais_192kbps";
		recite();
	}
	if (cycleq == 3) {
		document.getElementById('reciter').value = "Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com";
		recite();
	}
	if (cycleq == 4) {
		document.getElementById('reciter').value = "Ghamadi_40kbps";
		recite();
	}
	if (cycleq == 5) {
		document.getElementById('reciter').value = "Hani_Rifai_192kbps";
		recite();
	}
	if (cycleq == 6) {
		document.getElementById('reciter').value = "Maher_AlMuaiqly_64kbps";
		recite();
	}
	cycleq = cycleq + 1;
}

// Full Cycle mode = cycle through all Qurra -------------------------------------------
if (type == "allcycle") { 
totalqurra = 40; // total to go loop towards

	if (cycleq == 1) {
		document.getElementById('reciter').value = "Saood_ash-Shuraym_64kbps";
		recite();
	}
	
	if (cycleq == 2) {
		document.getElementById('reciter').value = "Salaah_AbdulRahman_Bukhatir_128kbps";
		recite();
	}
	if (cycleq == 3) {
		document.getElementById('reciter').value = "Salah_Al_Budair_128kbps";
		recite();
	}
	if (cycleq == 4) {
		document.getElementById('reciter').value = "Abdul_Basit_Murattal_64kbps";
		recite();
	}
	if (cycleq == 5) {
		document.getElementById('reciter').value = "Abdul_Basit_Mujawwad_128kbps";
		recite();
	}
	if (cycleq == 6){
		document.getElementById('reciter').value = "Abdullaah_3awwaad_Al-Juhaynee_128kbps";
		recite();
	}
	if (cycleq == 7) {
		document.getElementById('reciter').value = "Abdullah_Basfar_32kbps";
		recite();
	}
	if (cycleq == 8) {
		document.getElementById('reciter').value = "Abdullah_Basfar_64kbps";
		recite();
	}
	if (cycleq == 9) {
		document.getElementById('reciter').value = "Abdullah_Matroud_128kbps";
		recite();
	}
	if (cycleq == 10) {
		document.getElementById('reciter').value = "Abdurrahmaan_As-Sudais_192kbps";
		recite();
	}
	if (cycleq == 11) {
		document.getElementById('reciter').value = "AbdulSamad_64kbps_QuranExplorer.Com";
		recite();
	}
	if (cycleq == 12) {
		document.getElementById('reciter').value = "Abu_Bakr_Ash-Shaatree_64kbps";
		recite();
	}
	if (cycleq == 13) {
		document.getElementById('reciter').value = "Ahmed_Neana_128kbps";
		recite();
	}
	if (cycleq == 14) {
		document.getElementById('reciter').value = "Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com";
		recite();
	}
	if (cycleq == 15) {
		document.getElementById('reciter').value = "Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net";
		recite();
	}
	if (cycleq == 16) {
		document.getElementById('reciter').value = "Alafasy_64kbps";
		recite();
	}
	if (cycleq == 17) {
		document.getElementById('reciter').value = "Ghamadi_40kbps";
		recite();
	}
	if (cycleq == 18) {
		document.getElementById('reciter').value = "Hani_Rifai_64kbps";
		recite();
	}
	if (cycleq == 19) {
		document.getElementById('reciter').value = "Husary_64kbps";
		recite();
	}
	if (cycleq == 20) {
		document.getElementById('reciter').value = "Husary_Muallim_128kbps";
		recite();
	}
	if (cycleq == 21) {
		document.getElementById('reciter').value = "Husary_Mujawwad_64kbps";
		recite();
	}
	if (cycleq == 22) {
		document.getElementById('reciter').value = "Hudhaify_64kbps";
		recite();
	}
	if (cycleq == 23) {
		document.getElementById('reciter').value = "Ibrahim_Akhdar_32kbps";
		recite();
	}
	if (cycleq == 24) {
		document.getElementById('reciter').value = "Karim_Mansoori_40kbps";
		recite();
	}
	if (cycleq == 25) {
		document.getElementById('reciter').value = "khalefa_al_tunaiji_64kbps";
		recite();
	}
	if (cycleq == 26) {
		document.getElementById('reciter').value = "Khaalid_Abdullaah_al-Qahtaanee_192kbps";
		recite();
	}
	if (cycleq == 27) {
		document.getElementById('reciter').value = "Maher_AlMuaiqly_64kbps";
		recite();
	}
	if (cycleq == 28) {
		document.getElementById('reciter').value = "mahmoud_ali_al_banna_32kbps";
		recite();
	}
	if (cycleq == 29) {
		document.getElementById('reciter').value = "Menshawi_16kbps";
		recite();
	}
	if (cycleq == 30) {
		document.getElementById('reciter').value = "Minshawy_Mujawwad_64kbps";
		recite();
	}
	if (cycleq == 31) {
		document.getElementById('reciter').value = "Minshawy_Murattal_128kbps";
		recite();
	}
	if (cycleq == 32) {
		document.getElementById('reciter').value = "Mohammad_al_Tablaway_64kbps";
		recite();
	}
	if (cycleq == 33) {
		document.getElementById('reciter').value = "Muhammad_AbdulKareem_128kbps";
		recite();
	}
	if (cycleq == 34) {
		document.getElementById('reciter').value = "Muhammad_Ayyoub_64kbps";
		recite();
	}
	if (cycleq == 35) {
		document.getElementById('reciter').value = "Muhammad_Jibreel_64kbps";
		recite();
	}
	if (cycleq == 36) {
		document.getElementById('reciter').value = "Muhsin_Al_Qasim_192kbps";
		recite();
	}
	if (cycleq == 37) {
		document.getElementById('reciter').value = "Nasser_Alqatami_128kbps";
		recite();
	}
	if (cycleq == 38) {
		document.getElementById('reciter').value = "Parhizgar_48kbps";
		recite();
	}
	if (cycleq == 39) {
		document.getElementById('reciter').value = "Yasser_Ad-Dussary_128kbps";
		recite();
	}

	cycleq = cycleq + 1;
}





if ((cycleq >= totalqurra) && (document.getElementById('chk5').checked == 0)) {cycleq = 1;};
}
