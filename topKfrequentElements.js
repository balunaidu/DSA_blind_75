// find Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

const findrepetationMap = (nums) => {
    const map = {};
    for(let i =0; i<nums.length;i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    return map;
}

function topKFrequent(nums, k) {
    const map = findrepetationMap(nums);
    const frequvancyArr = Array.from({length: nums.length + 1}, () => []);

   for(let key in map) {
     frequvancyArr[map[key]].push(key)
   }

    const result = [];
    for(let i = frequvancyArr.length - 1; i >= 0; i--) {
        for(let val of frequvancyArr[i]) {
            result.push(val);
            if(result.length === k) {
                return result;
            }
        }
    }
}


// Here we are using bucket sort to solve this problem.
// First we create a map to count the frequency of each element in the array. 
// Then we create an array of buckets where the index of the bucket represents the frequency and the value is an array of elements that have that frequency. 
// Finally, we iterate through the buckets in reverse order and add the elements to the result array until we have k elements in the result.