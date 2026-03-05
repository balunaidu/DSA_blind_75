
// 4. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const findMatch = (str) => {
    const alphaArr = new Array(26).fill(0);
    for(let i=0;i<str.length;i++) {
        const charCode = str.charCodeAt(i) - 97; // 'a' has a char code of 97
        alphaArr[charCode]++;
    }
    return alphaArr.join(',');
}

const groupAnagrams = (strs) => {
const map = new Map();

for(let i=0;i<strs.length;i++) {
    const match = findMatch(strs[i]);
    if(map.has(match)) {
        map.get(match).push(strs[i]);
    } else {
        map.set(match, [strs[i]]);
    }
}
return Array.from(map.values());
}


// Here is how we achived it .
//  so when we have array of strings first we took each string to find how many times each alphabet is presented in given string 
// and then because of we know the how many times each alphabe is present if any anagram is there then that will also have same count of each alphabet 
// so we can use that as key in map and value is array of string which are anagram of each other and at the end we return the values of map as array of arrays. 