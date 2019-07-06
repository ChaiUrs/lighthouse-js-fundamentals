
function loopyLighthouse(range, multiples, words)
{
  for (var i = range[0]; i <= range[1]; i++)
  {
    if (i % multiples[0] === 0 && i % multiples[1] === 0)
    {
      console.log (words[0] + words[1]); //prints BattyBeacon
    }
    else if (i % multiples[0] === 0)
    {
      console.log (words[0]);    //prints Batty
    }
    else if (i % multiples[1] === 0)
    {
      console.log (words[1]);    //prints Beacon
    }
    else
    {
      console.log (i);    //prints 15
    }
  }
}
console.log (loopyLighthouse([15, 90], [2, 5], ["Batty","Beacon"]));