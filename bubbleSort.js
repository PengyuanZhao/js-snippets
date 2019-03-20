function bubbleSort(nums) {
  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (nums[j] > nums[j + 1]) swap(j, j + 1);
    }
  }
}
