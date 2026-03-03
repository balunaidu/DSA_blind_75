// Here we are going to to write a function that will return true or false if there are duplicates in an array.

function findDups(arr){

 const map = new Map();

    for(let i = 0; i < arr.length; i++){

        if(map.has(arr[i])){
            return true;
        }   
        
        map.set(arr[i], true);
    }
    return false;
}

console.log(findDups([1, 2, 3, 4, 5])); // false
console.log(findDups([1, 2, 3, 4, 5, 1])); // true

// Here logic is simple we are using a Map to keep track of the elements we have seen so far.
// We iterate through the array and check if the current element is already in the Map. 
// If it is, we return true because we have found a duplicate. If it is not, we add it to the Map. 
// If we finish iterating through the array without finding any duplicates, we return false.