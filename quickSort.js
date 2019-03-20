function quickSort(nums, left, right) {
  if (left >= right) return;

  const pivot = nums[left];
  let l = left + 1;
  let r = right;

  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  while (l <= r) {
    while (nums[l] <= pivot) l++;
    while (nums[r] > pivot) r--;
    if (l < r) swap(l++, r--);
  }

  swap(left, r);

  quickSort(nums, left, r - 1);
  quickSort(nums, r + 1, right);
}

function quickSort2(nums) {
  if (nums.length <= 1) return nums;

  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums[pivotIndex];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) continue;
    if (nums[i] <= pivot) leftArr.push(nums[i]);
    else rightArr.push(nums[i]);
  }

  return [...quickSort2(leftArr), pivot, ...quickSort2(rightArr)];
}
