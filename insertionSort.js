function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i];
    const j = i - 1;
    for (; j >= 0; j--) {
      if (temp >= nums[j]) break;
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = temp;
  }
}
