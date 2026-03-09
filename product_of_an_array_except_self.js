// Given an array of integer nums, return array of product of all the elements of nums except self.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

//solution without using division operator

// so here first we need to find prefix of an element. prefix is a product of all elements before current element;

// so we have left that will be initially 1 and then we will calculate it based on left * current element
// and will repeat it until we reach end of array and we will save the prefix in result array

// now we will start for suffix here we will calculate from last element of an array and 
// we will have right that initially 1 and then right = right * current element from nums
// also before that we will update result[i] = right * result[ib]


const productExceptSelf = (nums) => {
    const result = [];
    let left = 1;
    for(let i = 0; i<nums.length;i++) {
        result[i] = left;
        left = left * nums[i]
    }

    let right = 1;
    for(let i = nums.length -1; i >= 0; i--) {
        result[i] = right * result[i];
        right = right * nums[i];
    }
    return result;
}

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]