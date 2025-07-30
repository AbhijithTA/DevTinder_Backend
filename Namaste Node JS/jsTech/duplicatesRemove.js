function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1]));
