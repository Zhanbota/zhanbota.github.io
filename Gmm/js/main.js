var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;

drawSin();

function drawSin(){
	y = Math.sin(x);
	if (x>=400){
		x=0;
	}
	else {
		x=x+0.3;
	}
	ctx.fillRect(5*x,100+20*y, 2,2);
	timer = setTimeout(drawSin, 50);
}
function sqr5() {
	document.getElementById('dp_1_5_1').style.opacity='1';
	document.getElementById('dp_1_5_2').style.opacity='0';
	document.getElementById('dp_1_4_3').style.opacity='0';
	document.getElementById('gal').style.opacity='0';
	document.getElementById('iks').style.opacity='0';
}
function sqr55() {0
	document.getElementById('dp_1_5_1').style.opacity='0';
	document.getElementById('dp_1_5_2').style.opacity='1';
	document.getElementById('dp_1_4_3').style.opacity='0';
	document.getElementById('gal').style.opacity='0';
	document.getElementById('iks').style.opacity='0';
}
function rs4() {
	document.getElementById('dp_1_5_1').style.opacity='0';
	document.getElementById('dp_1_5_2').style.opacity='0';
	document.getElementById('dp_1_4_3').style.opacity='1';
	document.getElementById('gal').style.opacity='0';
	document.getElementById('iks').style.opacity='0';
}
function gal() {
	document.getElementById('dp_1_5_1').style.opacity='0';
	document.getElementById('dp_1_5_2').style.opacity='0';
	document.getElementById('dp_1_4_3').style.opacity='0';
	document.getElementById('gal').style.opacity='1';
	document.getElementById('iks').style.opacity='1';
}
function sqr52() {
	document.getElementById('dp_2_5_1').style.opacity='1';
	document.getElementById('dp_2_5_2').style.opacity='0';
	document.getElementById('dp_2_4_3').style.opacity='0';
	document.getElementById('gal2').style.opacity='0';
	document.getElementById('iks2').style.opacity='0';
}
function sqr552() {
	document.getElementById('dp_2_5_1').style.opacity='0';
	document.getElementById('dp_2_5_2').style.opacity='1';
	document.getElementById('dp_2_4_3').style.opacity='0';
	document.getElementById('gal2').style.opacity='0';
	document.getElementById('iks2').style.opacity='0';
}
function rs42() {
	document.getElementById('dp_2_5_1').style.opacity='0';
	document.getElementById('dp_2_5_2').style.opacity='0';
	document.getElementById('dp_2_4_3').style.opacity='1';
	document.getElementById('gal2').style.opacity='0';
	document.getElementById('iks').style.opacity='0';
}
function gal2() {
	document.getElementById('dp_2_5_1').style.opacity='0';
	document.getElementById('dp_2_5_2').style.opacity='0';
	document.getElementById('dp_2_4_3').style.opacity='0';
	document.getElementById('gal2').style.opacity='1';
	document.getElementById('iks2').style.opacity='1';
}
function sqr53() {
	document.getElementById('dp_3_5_1').style.opacity='1';
	document.getElementById('dp_3_5_2').style.opacity='0';
	document.getElementById('dp_3_4_3').style.opacity='0';
	document.getElementById('gal3').style.opacity='0';
	document.getElementById('iks3').style.opacity='0';
}
function sqr553() {
	document.getElementById('dp_3_5_1').style.opacity='0';
	document.getElementById('dp_3_5_2').style.opacity='1';
	document.getElementById('dp_3_4_3').style.opacity='0';
	document.getElementById('gal3').style.opacity='0';
	document.getElementById('iks3').style.opacity='0';
}
function rs43() {
	document.getElementById('dp_3_5_1').style.opacity='0';
	document.getElementById('dp_3_5_2').style.opacity='0';
	document.getElementById('dp_3_4_3').style.opacity='1';
	document.getElementById('gal3').style.opacity='0';
	document.getElementById('iks3').style.opacity='0';
}
function gal3() {
	document.getElementById('dp_3_5_1').style.opacity='0';
	document.getElementById('dp_3_5_2').style.opacity='0';
	document.getElementById('dp_3_4_3').style.opacity='0';
	document.getElementById('gal3').style.opacity='1';
	document.getElementById('iks3').style.opacity='1';
} 