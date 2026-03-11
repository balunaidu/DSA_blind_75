// Here we are going to solve two sum problem for sorted array
// Given an array of integers nums and an integer target, return the indexes which add up to target

// here we are going to use two pointer approach where we will have one pointer at the start of the array and another pointer at the end of the array
// we will check if the sum of the two pointers is equal to target then we will return the indexes of the two pointers
// if the sum is less than target then we will move the left pointer to the right and if the sum is greater than target then we will move the right pointer to the left

function twoSum2(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right) {
        const sum = nums[left] + nums[right];
        if(sum === target) {
            return [left, right];
        }
        if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null; // if there is no solution we can return null or empty array based on the requirement
}

console.log(twoSum2([2,7,11,15], 9)); // [0,1]
console.log(twoSum2([3,2,4], 6)); // [1,2]
console.log(twoSum2([3,3], 6)); // [0,1]
