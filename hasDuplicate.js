function hasDuplicate(nums) {
  let newNumberArray = nums.sort();
  console.log(newNumberArray);

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

hasDuplicate([1, 4, 5, 6]);
