var x="x";
var matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1 ,1],
  [1, 1, 1, 1, 0, 0, 0, 0, 1 ,1],
  [1, 0, 0, x, 0, 0, 0, 0, 0 ,1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1 ,1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1 ,1],
  [1, 0, 0, 0, 0, 1, 1, 1, 0 ,1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1 ,1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0 ,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
];
for (i=0;i<=9;i++)
	{
	for (j=0;j<=9;j++)
		document.write(" ",matrix[i][j]);
	document.write('<br>');
	if ((i==0||i==20)||(j==0||j==20)) {document.write("v");
		/*if ((matrix[i+1][j]==0)||(matrix[i][j+1]==0)||(matrix[i-1][j]==0)||(matrix[i][j-1]==0)) {document.write("bar");}*/
	}
	}
