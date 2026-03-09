// Today we are gona solve the problem of finding the longest consecutive sequence in an unsorted array of integers. 
// The problem can be stated as follows:

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// the algorithem should run in O(n) time complexity.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


const longestConsecutive = (nums) => {
    const mapSet = new Set(nums);
    let max = 0;
    for(let x of mapSet) {
        if(!mapSet.has(x-1)) {
            let count = 1;
            while(mapSet.has(x + count)) {
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
}

// Here we are using a set to store the unique elements of the array.
// We iterate through the set and for each element, we check if it is the start of a sequence by checking if the previous element (x-1) is not in the set.
// If it is the start of a sequence, we count how many consecutive elements are in the sequence by checking if (x + count) is in the set and incrementing count until we find an element that is not in the set.
// We keep track of the maximum count and return it at the end.

console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9