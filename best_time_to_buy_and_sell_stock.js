// Best Time to Buy and Sell Stock
// Given an array prices where prices[i] is the price of a given stock on the ith day,
// return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5

const calculateMaxProfit = (prices) => {
    let maxProfit = 0;
    let right = 1;
    let left = 0;
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        }else {
            left = right;
        }
        
            right++;
    }
    return maxProfit;
}