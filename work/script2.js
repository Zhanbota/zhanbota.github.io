var mtx3 = new Array(10);
for (i=0; i<mtx3.length; i++){
	mtx3[i]= new Array(10);
}
for (i=0; i<=9; i++){
	for (j=0; j<=9; j++){
		mtx3[i,j]=Math.floor(Math.random()*9)+1;
		if (j==1+i-1 || j==8-i+1){
			document.write(mtx3[i,j]+' ');
		}
		else{
			mtx3[i,j]='.';
			document.write(mtx3[i,j]+' ');
		}
	}
	document.write('<br>');
}

