// Encode and Decode a list of strings
// Each string is encoded as: length + '#' + string
// Example:
// ["leet", "code"] -> "4#leet4#code"


const encode = (strs)=> {
    let result = '';
    for(let x of strs) {
        result += x.length + '#' + x;
    }
    return result;
}

// Now we are going to implement decode .
// for this first we need to find the lenth of the first string that is string before separator . 
// we need to travase untill separator  and get the lenth from first string to this string and then update the indexes and find string using indexs from i - j
// and update j;

const decode = (str)=>{
    let i =0;
    const result = [];
    while(i<str.length) {
        let j = i;
        while(str[j] !== '#') {
            j++;
        }
            const len = Number(str.substring(i, j));
            i = j+1;
            j= i + len;
            result.push(str.substring(i, j));
            i = j;
    }
    return result;
}