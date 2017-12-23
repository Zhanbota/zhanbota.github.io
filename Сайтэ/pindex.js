function Dep_1_5(){
				document.getElementById('Dep_1_5_1').style.opacity="0";
				document.getElementById('Dep_1_5_2').style.opacity="1";
				document.getElementById('Dep_1_4_1').style.opacity="0";
				document.getElementById('Knopt1').style.opacity="0";
				document.getElementById('Knopf1').style.opacity="0";
			}
			function Dep_1_55(){
				document.getElementById('Dep_1_5_1').style.opacity="1";
				document.getElementById('Dep_1_5_2').style.opacity="0";
				document.getElementById('Dep_1_4_1').style.opacity="0";
				document.getElementById('Knopt1').style.opacity="0";
				document.getElementById('Knopf1').style.opacity="0";
			}
			function Dep_1_4(){
				document.getElementById('Dep_1_5_1').style.opacity="0";
				document.getElementById('Dep_1_5_2').style.opacity="0";
				document.getElementById('Dep_1_4_1').style.opacity="1";
				document.getElementById('Knopt1').style.opacity="0";
				document.getElementById('Knopf1').style.opacity="0";
			}
			
			function Dep_2_5(){
				document.getElementById('Dep_2_5_1').style.opacity="0";
				document.getElementById('Dep_2_5_2').style.opacity="1";
				document.getElementById('Dep_2_4_1').style.opacity="0";
				document.getElementById('Knopt2').style.opacity="0";
				document.getElementById('Knopf2').style.opacity="0";
			}
			function Dep_2_55(){
				document.getElementById('Dep_2_5_1').style.opacity="1";
				document.getElementById('Dep_2_5_2').style.opacity="0";
				document.getElementById('Dep_2_4_1').style.opacity="0";
				document.getElementById('Knopt2').style.opacity="0";
				document.getElementById('Knopf2').style.opacity="0";
			}
			function Dep_2_4(){
				document.getElementById('Dep_2_5_1').style.opacity="0";
				document.getElementById('Dep_2_5_2').style.opacity="0";
				document.getElementById('Dep_2_4_1').style.opacity="1";
				document.getElementById('Knopt2').style.opacity="0";
				document.getElementById('Knopf2').style.opacity="0";
			}
			function Dep_3_5(){
				document.getElementById('Dep_3_5_1').style.opacity="0";
				document.getElementById('Dep_3_5_2').style.opacity="1";
				document.getElementById('Dep_3_4_1').style.opacity="0";
				document.getElementById('Knopt1').style.opacity="0";
				document.getElementById('Knopf1').style.opacity="0";
			}
			function Dep_3_55(){
				document.getElementById('Dep_3_5_1').style.opacity="1";
				document.getElementById('Dep_3_5_2').style.opacity="0";
				document.getElementById('Dep_3_4_1').style.opacity="0";
				document.getElementById('Knopt3').style.opacity="0";
				document.getElementById('Knopf3').style.opacity="0";
			}
			function Dep_3_4(){
				document.getElementById('Dep_3_5_1').style.opacity="0";
				document.getElementById('Dep_3_5_2').style.opacity="0";
				document.getElementById('Dep_3_4_1').style.opacity="1";
				document.getElementById('Knopt3').style.opacity="0";
				document.getElementById('Knopf3').style.opacity="0";
			}
			function Dep_1_5_1(){
				document.getElementById('Dep_1_5_1').style.opacity="1";
				document.getElementById('Dep_1_5_2').style.opacity="0";
				document.getElementById('Dep_1_4_1').style.opacity="0";
				document.getElementById('Knopt1').style.opacity="1";
				document.getElementById('Knopf1').style.opacity="1";				
			}
			function Dep_1_5_2(){
				document.getElementById('Dep_1_5_1').style.opacity="0";
				document.getElementById('Dep_1_5_2').style.opacity="1";
				document.getElementById('Dep_1_4_1').style.opacity="0";
				document.getElementById('Knopt1').style.opacity="1";
				document.getElementById('Knopf1').style.opacity="1";
			}
			function Dep_1_4_1(){
				document.getElementById('Dep_1_5_1').style.opacity="0";
				document.getElementById('Dep_1_5_2').style.opacity="0";
				document.getElementById('Dep_1_4_1').style.opacity="1";
				document.getElementById('Knopt1').style.opacity="1";
				document.getElementById('Knopf1').style.opacity="1";
			}
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;

drawSin();

function drawSin(){
	y = Math.sin(x);
	if (x>=500){
		x=0;
	}
	else {
		x=x+0.01;
	}
	ctx.fillRect(5*x,100+80*y, 2,2);
	timer = setTimeout(drawSin, 500);
}
