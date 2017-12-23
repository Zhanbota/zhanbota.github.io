var mtx = [45,78,12,4,8,77,9,2,5,11];
var max = -1000;
var temp;
	document.write('<br>');
	document.write('kklklk: ');
for (i=0; i<=9; i++){
	for (j=0; j<=9; j++){
		if (mtx[j]<mtx[i]){
			temp=mtx[i];
			mtx[i]=mtx[j];
			mtx[j]=temp;
		}
	}
}
for (i=0; i<=9; i++){
    document.write(mtx[i], ' ');
}
	
