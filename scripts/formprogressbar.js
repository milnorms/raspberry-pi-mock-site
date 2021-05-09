// PARTS OF SCRIPT I CHANGED
// -> I added another parameter to the setcolor function that takes in another css attribute (color)
// to change the color of the text of the progress bar. It starts as blue then becomes white.
//
//
//
//


/***********************************************
 * This script downloaded from www.JavaScriptBank.com
Come to view and download over 2000+ free javascript at www.JavaScriptBank.com
* Form Field Progress Bar- By Ron Jonk- http://www.euronet.nl/~jonkr/
* Please keep this notice intact
***********************************************/


function textCounter(field,counter,maxlimit,linecounter) {
	// text width//
	var fieldWidth =  parseInt(field.offsetWidth);
	var charcnt = field.value.length;        

	// trim the extra text
	if (charcnt > maxlimit) { 
		field.value = field.value.substring(0, maxlimit);
	}

	else { 
	// progress bar percentage
	var percentage = parseInt(100 - (( maxlimit - charcnt) * 100)/maxlimit) ;
	document.getElementById(counter).style.width =  parseInt((fieldWidth*percentage)/100)+"px";
	document.getElementById(counter).innerHTML="Limit: "+percentage+"%"
	// color correction on style from CCFFF -> CC0000
	setcolor(document.getElementById(counter),percentage,"background-color", "color");
	}
}

function setcolor(obj,percentage,prop, prop1){
	obj.style[prop] = "rgb(80%,"+(100-percentage)+"%,"+(100-percentage)+"%)";
	obj.style[prop1] = "rgb(" + (percentage+20)+"%,"+(percentage+20)+"%,"+ "100%)";
}
