function makeLine(length) {
  var line = "";
  for (var j=1; j<= length; j++)
  {
    line = line + "* " ;
  }
 return line + "\n";
}

function buildTriangle(height)
{
  var triangle = ""; 
  for (var k=1; k<=height; k++)
  {
    triangle = triangle + (makeLine(k));
  }
  return triangle;
}
console.log ( buildTriangle(10) ); 
