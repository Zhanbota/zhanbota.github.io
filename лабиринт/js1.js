var x='x';
var z=0;
var b=0;
var q=0;
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
  for (j=0;j<=9;j++){
    if (matrix[i][j]==x) {
      z=i;
      b=j;
    }
    if ((matrix[i][j]==0 & (i==0 || i==9)) || (matrix[i][j]==0 & (j==0 || j==9))) {
      document.write("v");}
       else {
      document.write(" ",matrix[i][j]); 
    }
  }
  document.write('<br>');
  }
  function ddd(){
  i=z;
  j=b;
  do{  
        q=q+1;
      if (matrix[i+q][j]==0) {
        matrix[i+q][j]=q;}
      if (matrix[i-q][j]==0) {
        matrix[i-q][j]=q;}
      if (matrix[i][j+q]==0) {
        matrix[i][j+q]=q;}
      if (matrix[i][j-q]==0) {
        matrix[i][j-q]=q;}

  } while ((matrix[i][j]==0 & (i==0 || i==9)) || (matrix[i][j]==0 & (j==0 || j==9)))};