//Here we are going to implement two sum problem
// Given an array of integers nums and an integer target, return the indexes which add up to target

// here i am going to create a map and i am going to save remining as key and value is index with this we can find the
// solution in one pass

function twoSum(nums, target) {
    const map = new Map();

    for(let i=0;i<nums.length;i++) {
        const remaining = target - nums[i];

        if(map.has(remaining)) {
            return [map.get(remaining), i];
        }

        map.set(nums[i], i);
    }
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]