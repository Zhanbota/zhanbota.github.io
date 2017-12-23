function zhanbo(){
var m=[[1,2,3],[4,5,6],[7,8,9]];
   
    for (i=0;i<=2;i++){	
		for(j=0;j<=2;j++){
			document.write(m[i]][j]);
			document.write('<br>');
			if (j=i) {document.write(m[i]][j]);
			document.write('<br>');
        }
		 }
    }
}