function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const leftArr = mergeSort(nums.slice(0, mid));
  const rightArr = mergeSort(nums.slice(mid));

  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length || j < rightArr.length) {
    if (i < leftArr.length && j < rightArr.length) {
      newArr.push(leftArr[i] <= rightArr[j] ? leftArr[i++] : rightArr[j++]);
    } else if (i < leftArr.length) {
      newArr.push(leftArr[i++]);
    } else {
      newArr.push(rightArr[j++]);
    }
  }

  return newArr;
}
