// Here we are going to solve three sum problem
// Given an array of integers nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// The solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = [-2,0,0,2,2]
// Output: [[-2,0,2]]


const threeSum = (nums) => {
    const result = [];
    nums.sort((a,b) => a - b); // sort the array to avoid duplicates and to use two pointer approach

    for(let i = 0; i < nums.length - 1; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue; // skip duplicates
        }
        let left = i + 1;
        let right = nums.length - 1;
        
        while(left<right) {
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while(nums[left] === nums[left - 1] && left < right) {
                    left++; // skip duplicates
                }
                while(nums[right] === nums[right + 1] && left < right) {
                    right--; // skip duplicates
                }
            } else if(sum < 0) {
                left++;
            }
                else {
                right--;
            }
        }

    }
    return result;
}

// Here is the step by step how we approach this problem
// 1. First we sort the array to avoid duplicates and to use two pointer approach
// 2. We iterate through the array and for each element we use two pointer approach to find the triplets that sum up to zero
// 3. We check if the sum of the three elements is zero then we push the triplet to the result array and move the left and right pointers
// 4. We also check for duplicates and skip them to avoid duplicate triplets in the result
// 5. Also if the sum is less than zero we move the left pointer to the right and if the sum is greater than zero we move the right pointer to the left


console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-2,0,0,2,2])); // [[-2,0,2]]