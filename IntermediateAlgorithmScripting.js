//-----------------------------------------------------Sum All Numbers in a Range
function sumAll(arr) {
  var maxVal = Math.max(arr[0], arr[1]);
  var minVal = Math.min(arr[0], arr[1]);
  var cnt = 0;

  for (var i = minVal; i <= maxVal; i++) {
    cnt = cnt + i;
  }
  
  return cnt;
}


//-----------------------------------------------------Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = inFirst(arr1, arr2, newArr);
  newArr = inFirst(arr2, arr1, newArr);
  return newArr;
}

function inFirst(f, s, newArr) {
  for (var i = 0; i < f.length; i++) {
    if (s.indexOf(f[i]) === -1) {
      newArr.push(f[i]);
    }
  }
  return newArr;
}


//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------



//-----------------------------------------------------


