
var mtx2 = new Array(5);
for (i=0; i<mtx2.length; i++){
	mtx2[i]= new Array(5);
}
document.write('<table>');
for (i=0; i<=4; i++){
	document.write('<tr>');
	for (j=0; j<=4; j++){
		document.write('<td>');
		mtx2[i,j]=Math.floor(Math.random()*9)+1;
		if (j>=1+i-1){
			document.write(mtx2[i,j]+' ');
		}
		else{
			mtx2[i,j]=0;
			document.write(mtx2[i,j]+' ');
		}
	}
}

