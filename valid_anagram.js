// in given two strings s and t, return true if t is an anagram of s, and false otherwise

function isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const firstMap = new Map();
    const secondMap = new Map();

    for(let i = 0; i < s.length; i++){
        firstMap.set(s[i], (firstMap.get(s[i]) || 0) + 1);
        secondMap.set(t[i], (secondMap.get(t[i]) || 0) + 1);
    }

    for(let [key, value] of firstMap){
        if(secondMap.get(key) !== value){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false


// Here we are using two Maps to count the frequency of each character in both strings. 
// We iterate through the first string and populate the first Map with the count of each character. 
// We do the same for the second string and populate the second Map. 
// Finally, we iterate through the first Map and check if the count of each character in the first Map matches the count in the second Map. 
// If any character count does not match, we return false. If all counts match, we return true.