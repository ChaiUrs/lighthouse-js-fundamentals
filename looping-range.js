
function range (start, end, step)
{
  var some_array = [];
  if (start > end || step < 0 || start === undefined || end === undefined || step === undefined)
  {
    return some_array;
  }
  for (var some_value = start; some_value <= end; some_value = some_value + step)
  {
    some_array.push (some_value);
  }
  return some_array;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));