function zhanbo(){
	var a = new Array();
    var buf;
    var max=-1000;
   
    for (i=0;i<=10;i++){
		a[i]=Math.floor(Math.random()*1502);
		
		if (max<a[i]) max=a[i];
        }
		document.write(max+'<br>');
		 for (i=0;i<=10;i++){
			 document.write(' '+a[i]+' ');
		 }
    }