const mergeSort = arr => {

  if (arr.length < 2) return arr;

  let middle = parseInt(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right, result = []) => {
  let leftIdx = 0,
    rightIdx = 0;

  while (left.length - 1 >= leftIdx && right.length - 1 >= rightIdx) {
    if (new Number(left[leftIdx]) <= new Number(right[rightIdx])) {
      result.push(left[leftIdx++]);
    } else {
      result.push(right[rightIdx++]);
    }
  }

  while (left.length - 1 >= leftIdx) result.push(left[leftIdx++]);
  while (right.length - 1 >= rightIdx) result.push(right[rightIdx++]);

  return result;
}