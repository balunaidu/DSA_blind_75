// We need to find whether a string is a valid palindrome or not.
//  A palindrome is a string that reads the same backward as forward, ignoring spaces, special characters, punctuation, and capitalization.

// Example 1:
// Input:
// s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isAlphaNumaric = (char)=>{
    const charCode = char.charCodeAt(0);
    return (charCode >= 48 && charCode <= 57) || // 0-9
           (charCode >= 65 && charCode <= 90) || // A-Z
           (charCode >= 97 && charCode <= 122);   // a-z
}

const validPalindrom = (s) => {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        while(left<right && isAlphaNumaric(s[left])) {
            left++;
        }
        while (left < right && isAlphaNumaric(s[right])) {
            right--;
        }

        if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


// Here we use two pointer left and right
// and we compare left value with string end means right value if both are same untill we cross left < right then it is palindrom or else it is not palindrom
// note here we will omit comparing space or whichever special character and also we will ignore case sensitivity by converting both left and right to lower case before comparing
