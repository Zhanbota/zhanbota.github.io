var mtx3 = new Array(10);
var max=-100;
var z,b;
for (i=0; i<mtx3.length; i++){
	mtx3[i]= new Array(10);
}			 
for (var i=0; i<=9; i++){
	for (var j=0; j<=9; j++){
		mtx3[i][j]=Math.floor(Math.random()*8);
		if (mtx3[i][j]>max){max=mtx3[i][j];}
		}	}
		
	for (i=0; i<=9; i++){
	for (j=0; j<=9; j++){
		if (mtx3[i][j]==max){z=i;b=j;}}}
	for (i=0; i<=9; i++){
	for (j=0; j<=9; j++){
		if (i==z || j==b){document.write(mtx3[i][j])}
		else {document.write("_");}	
		}document.write("<br>");
	}

