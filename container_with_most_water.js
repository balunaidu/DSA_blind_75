// Here we are going to solve container with most water problem
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.
// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

const maxArea = (heights) => {
    let maxWaterDen = 0;
    let left = 0;
    let right = heights.length - 1;

    while(left < right) {
        const min = Math.min(heights[left], heights[right]);
        maxWaterDen = Math.max(maxWaterDen, min * (right - left));
        if(heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWaterDen;
}

// Here we are using two pointer approach where we will have one pointer at the start of the array and another pointer at the end of the array
// we will calculate the area of water that can be contained between the two pointers and keep track of the maximum area
// we will move the pointer that has the smaller height because the area is limited by the smaller height and we want to try to find a taller height to increase the area
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
