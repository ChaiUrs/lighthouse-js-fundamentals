
function merge(array1, array2)
{
  var j = 0;
  var temp = 0;
  for(var i = 0; i < array2.length; i++)
  {
    array1.push( array2[i] );
    console.log(array1);
  }
  for(i = 0; i < array1.length; i++)
  {
    for(j = i + 1; j < array1.length; j++)
    {
      if(array1[i] > array1[j])
      {
        temp = array1[i];
        array1[i] = array1[j];
        array1[j] = temp;
      }
    }
  }
  return array1;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
